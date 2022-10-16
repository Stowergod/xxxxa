import React from "react"
import {Link} from "react-router-dom"

export default function landingPage(){
    return (
        <div>
            <h1>Videogames</h1>
            <Link to ="/home"></Link>
            <button>Ingresar</button>
        </div>
    )
}