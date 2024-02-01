import { createContext, useState } from "react";


export const CartContext = createContext ();

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([]);

const agregarAlCarrito = (item, quantity) => {
    const itemAgregado = {...item, quantity};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((product) => product.id === itemAgregado.id);
            
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
return(
    <CartContext.Provider value= { {
        carrito,
        agregarAlCarrito, 
        cantidadEnCarrito, 
        precioTotal, 
        vaciarCarrito 
        }}>
{children}
</CartContext.Provider>
)
}