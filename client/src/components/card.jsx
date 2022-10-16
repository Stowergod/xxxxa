import React from "react";

export default function Card (props){
    return (
        <div>
            <h3>{props.name}</h3>
            <h5>{props.genres}</h5>
            <img src={props.image} alt="image not found" width="200px" height="250px"></img>

        </div>
    )
}