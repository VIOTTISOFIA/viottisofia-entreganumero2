import { createContext, useEffect, useState } from "react";


export const CartContext = createContext ();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState (carritoInicial);

const agregarAlCarrito = (item, quantity) => {
    const itemAgregado = {...item, quantity};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
            
        if (estaEnElCarrito) {
            estaEnElCarrito.quantity += quantity;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito)
}
const cantidadEnCarrito = () => {
    return carrito.reduce ((acc, prod) => acc + prod.quantity, 0);
}
const precioTotal = () => {
  return carrito.reduce((acc, prod ) => acc + prod.precio * prod.quantity, 0);
}
const vaciarCarrito = () => {
setCarrito([]);
}

useEffect (() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}, [carrito])

return (
    <CartContext.Provider value= { {
        carrito,
        agregarAlCarrito, 
        cantidadEnCarrito, 
        precioTotal, 
        vaciarCarrito 
        } }>
{children}
</CartContext.Provider>
)
}