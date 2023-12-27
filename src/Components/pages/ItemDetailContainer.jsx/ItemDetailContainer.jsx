import { useState, useEffect } from "react"
// import axios from "axios";
import { useParams } from "react-router-dom";

// import CardProduct from "../../CardProduct/CardProduct"

const ItemDetailContainer = () => {
  const [char, setChar] = useState({});
  let {id} = useParams ();

  useEffect(() => {

fetch("../../data.json")

.then(res => res.json())

.then(data => setChar(data.find(e=>e.id == id)))

.catch(err => console.log(err))

}, [])
        
  


  return (
    <div style = {{display:"flex", justifyContent:"center", margin:20}}>
      {char.id ? <CardProduct char={char}/> : null}

    </div>
    
  )
} 

export default ItemDetailContainer
