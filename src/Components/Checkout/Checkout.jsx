import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase/Config"

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")
    const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSumit } = useForm();

    const comprar = (data) => {
    const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal()
    }
    console.log(pedido);
    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido)
    .then((doc) => {
        setPedidoId(doc.id);
        vaciarCarrito
    })


    }
    If (pedidoId) 
        return (
            <div className='container'>
                <h1 className='main-title'>Muchas gracias por su compra</h1>
                <p>Tu numero de pedido es:{pedidoId}</p>
            </div>
        )
    }
return (
    <div className='container'>
        <h1 className='main-title'>Finalizar compra</h1>
        <form className='formulario' onSubmit={handleSumit(comprar)}>

        <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
        <input type="email" placeholder='Ingresa tu e-mail' {...register("email")}/>
        <input type="phone" placeholder='Ingresa tu tel' {...register("tel")}/>

        <button className='enviar' type="submit"> Comprar </button>
        </form>
    </div>
)
}

export default Checkout
