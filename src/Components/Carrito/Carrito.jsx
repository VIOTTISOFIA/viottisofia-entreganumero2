import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    
    const handleVaciar = () => {
        vaciarCarrito();

    }
return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>
        {
            carrito.map((prod) => (
                <div key= {prod.id}>
                    <br />
                    <h3>{prod.title}</h3>
                    <p>Precio unit: $ {prod.precio}</p>
                    <p>Precio Total: $ {prod.precio * prod.quantity}</p>
                    <p>Cant: {prod.quantity}</p>
                    <br/>

                </div>

            ))
        }
        {
        carrito.length > 0 ?

        <>

        
            <h2>Precio Total: $ {precioTotal()} </h2>
            <button onClick= {handleVaciar}>Vaciar</button>
            <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrio esta vacio </h2>
        }
    </div>
)
}

export default Carrito
