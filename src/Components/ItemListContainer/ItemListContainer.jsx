import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import CardProduct from "../CardProduct/CardProduct";
import data from "../data/data.json";


// import { Link } from "react-router-dom";


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);

    useEffect (() => {
        pedirProductos ()
        .then((res) => {
            setProductos (res);
        })
    }, [])

  return (
    <div>
        <h1>Productos</h1>
        {
            productos.length > 0 &&
            productos.map((producto)=> {
                return (
                    <div> 
                        <img src= {producto.img} alt= {producto.title} />
                        <h2>{producto.title}</h2>
                        <p>{producto.price}</p>
                        <p>{producto.Descr}</p>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default ItemListContainer

