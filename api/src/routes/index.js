const { Router } = require('express');
const axios = require("axios")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Videogame , Generos} = require("../db")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getinfoApi = async () => {
    const urlApi = await axios.get("https://api.rawg.io/api/games?key=632dbf1a07fd4a628fdec9062e940f28")
    const apiInfo = await urlApi.data.results.map(e => {
        return {
            id: e.id,
            name : e.name,
            released : e.released,
            rating : e.rating,
            plataform : e.parent_platforms.map(e => e),
            generos: e.genres.map(e => e)
        }
    })
    return apiInfo
}

 const infoDb = async () => {
    return await Videogame.findAll({
        include:{
            model: Generos,
            attributes: ["name"],
            through:{
                attributes: [],
            }

        }
    })
 }

const getallVideogames = async () => {
    const apiInfo = await getinfoApi();
     const dbInfo = await infoDb();
     const todalaInfo = apiInfo.concat(dbInfo)
    return todalaInfo;
}

router.get("/videogames" , async (req,res) => {
    const name = req.query.name
    let allVideogames = await getallVideogames();
    if(name){
        let videogameName = await allVideogames.filter(e => e.name.toLowerCase().include(name.toLowerCase()))
        videogameName.length ? 
        res.status(200).send(videogameName):
        res.status(404).send("Videogame not found");
    } else {
        res.status(200).send(allVideogames)
    }
})

router.post("/videogames", async (req,res) => {
    let { name, descripcion , plataformas , fechaLanzamiento , rating , generos, createInDb} = req.body 
    let crearJuego = await Videogame.create({
         
        name, 
        descripcion , 
        plataformas , 
        fechaLanzamiento , 
        rating , 
        createInDb

    })
    let generosDb = await Generos.findAll({
        where : {name: generos}
    })

    crearJuego.addGeneros(generosDb)
    res.send("The game was created successfully")

})


router.get("/videogames/:id" , async (req,res) => {
    const {id} = req.params
    const allVideogames = await getallVideogames()
    if(id){
        let videogameId = await allVideogames.filter(e => e.id == id)
        videogameId.length ? 
        res.status(200).json(videogameId) :
        res.status(404).send("Videogame id not found")
    }
})





router.get("/genres" , async (req,res) => {
    const apiGenres = await axios.get("https://api.rawg.io/api/genres?key=632dbf1a07fd4a628fdec9062e940f28")
    const generos = apiGenres.data.results.map(e => e.name)
    generos.forEach(e => {
        Generos.findOrCreate({
            where: { name: e}
        })
    })
   const allGeneros = await Generos.findAll();
   res.send(allGeneros)
})



module.exports = router;
