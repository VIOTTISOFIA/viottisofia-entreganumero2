import React, { useState, useEffect } from "react";
import pedirDatos from "../helpers/pedirDatos"
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

    </div>
  )
}

export default ItemListContainer

