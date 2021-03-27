import React from "react";
import "./Pokemon.css";

const POKE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokemon = ({ id, name, type, base_experience }) => {
    const imgSrc = POKE_URL + id + ".png";
    return (
        <div className="Pokemon">
            <h2 className="Pokemon-title">{name}</h2>
            <img className="Pokemon-image" src={imgSrc} alt={name} />
            <h3 className="Pokemon-data">Type: {type}</h3>
            <h3 className="Pokemon-data">EXP: {base_experience}</h3>
        </div>
    );
}

export default Pokemon;