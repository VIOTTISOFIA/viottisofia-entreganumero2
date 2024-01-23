import React, {useState} from "react"

const itemCounter = ( {item}) => {
    const[quantity, setQuantity] = useState (1);

    const handleRestar = () => {
        quantity > 1 && setQuantity (quantity - 1)
    }

    const handleSumar = () => {
    quantity < item.stock && setQuantity (quantity + 1)
    }

return (
    <div>

<div className="item-counter">
<button onClick={handleRestar}> - </button>
<p>{quantity}</p>
<button onClick={handleSumar}>+</button>
</div>
<button className="agregar-al-carrito">Agregar al carrito</button>
    </div>
)
}

export default itemCounter
