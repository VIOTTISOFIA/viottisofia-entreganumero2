import React, { useState, useEffect } from "react";
import {pedirDatos} from "../helpers/pedirDatos";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";




const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);

    useEffect (() => {
        pedirDatos ()
        .then((res) => {
            setProductos (res);
        })
    }, [])

  return (
    <div>
       <ItemList productos={productos}/>
        {/* {
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
        } */}
    
    </div>
  )
}

export default ItemListContainer

