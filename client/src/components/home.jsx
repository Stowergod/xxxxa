import React from "react";
import { useEffect, } from "react";
import {useDispatch, useSelector} from "react-redux"
import {sortBy} from "../actions"
import { getVideogames } from "../actions";
import {Link} from "react-router-dom"



export default function Home(){
    const dispatch = useDispatch()
    const videogames = useSelector((state) => state.videogames)

    useEffect(() => {
        dispatch(getVideogames())
        console.log(videogames)
    }, [dispatch])
    

    return (
        <div>
        <Link to = "/videogames">Create VideoGame</Link>
           <h1>Videogames</h1>
         <button>
                Reload Videogames
        </button>
            <select onClick={(e) => {dispatch(sortBy(e.target.value))}}>
                <option value ="asc">Ascendente</option>
                <option value ="des">Descendiente</option>
                <option value = "rating">Rating</option>
            </select>
            <select>
                <option value="all">Todos</option>
                <option value="created">Creados</option>
                <option value="api">Existente</option>
            </select>
           <div>
            
           </div>
           
        </div>
        
    )
}

