import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Config";




const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const [title, setTitle] = useState("Productos")
    
    const category = useParams().category;

    useEffect (() => {

      const productosRef = collection(db, "Productos");
      const q = category ? query(productosRef, where("category", "==", category)) : productosRef;


      getDocs(q)
      .then((resp) => {
      
        setProductos (
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
          
        )
      } ) 
}, [category] )


  return (
    <div className="Cards-List">
    <ItemList productos={productos} title={title} />


    </div>
  )
  }

export default ItemListContainer

