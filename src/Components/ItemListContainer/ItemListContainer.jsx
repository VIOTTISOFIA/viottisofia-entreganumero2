import { useState, useEffect } from "react";
import pedirDatos from "../helpers/pedirDatos"
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";




const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const [title, setTitle] = useState("Productos")
    const category = useParams().category;

    useEffect (() => {
        pedirDatos ()
        .then((res) => {
          if (category) {
            setProductos( res.filter((prod) => prod.category === category));
            setTitle (category);
        } else {
          setProductos (res)
          setTitle("Productos")
        }
          
    })
}, [category] )


  return (
    <div>
    <ItemList productos={productos} title={title}/>

    </div>
  )
  }

export default ItemListContainer

