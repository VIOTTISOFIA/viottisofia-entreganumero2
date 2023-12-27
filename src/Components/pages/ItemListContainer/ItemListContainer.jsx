import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./ItemListContainer.css"
import CardProduct from "../CardProduct/CardProduct";

import { Link } from "react-router-dom";

const ItemList = () => {
    const [char, setChars]= useState ([]);
    
    useEffect(() => {

fetch('../../data.json')

    .then(res => res.json())

    .then(data => setChars(data))

    .catch(err => console.log(err))

}, [])

console.log("List:",char)

return (
    <div className="Cards-List"> 
    {char.map((char) => {
        return (
            <div style={{margin:10}} key={char.id}>
        <Link to={`/detail/${char.id}`} style={{textDecoration:"none"}}>
                    <CardProduct char={char}/>
                </Link>
            </div>
        )
    })}
    </div>
)
}

export default ListProduct
