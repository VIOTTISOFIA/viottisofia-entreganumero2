import { useState } from "react";
import  itemCounter  from "../itemCounter/itemCounter";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ item }) => {
const {carrito, agregarAlCarrito} = useContext(CartContext);
console.log(carrito)

    const [quantity, setQuantity] = useState(1);

    const handleRestar = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    const handleSumar = () => {
        quantity < item.stock && setQuantity(quantity + 1)

    }
    
    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.img} alt={item.title} />
                <div>
                    <h3 className="title">{item.title}</h3>
                    <p className="description">{item.Desc}</p>
                    <p className="category">Categoría: {item.category}</p>
                    <p className="precio"> $ {item.precio}</p>
                    <itemCounter
                    quantity={quantity}
                    handleSumar={handleSumar}
                    handleRestar={handleRestar}
                    handleAgregar= {() => {agregarAlCarrito (item, quantity)}}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
