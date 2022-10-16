import axios from "axios"
export const SET_SORT = "SET_SORT"
export const GET_VIDEOGAMES = "GET_VIDEOGAMES"


export  function getVideogames(){
    try {
         return async function(dispatch){
        let result = await axios.get("http://localhost:3001/videogames")
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: result.data
        })
    }
    } catch (error) {
        console.log(error)
    }
   
}

export  function sortBy(payload){
    return {type : SET_SORT,
            payload }
}

