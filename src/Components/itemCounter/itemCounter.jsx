import React from "react"

const itemCounter = ( {quantity, handleRestar, handleSumar, handleAgregar} ) => {

return (
    <div>

<div className="item-counter">
<button onClick={handleRestar}> - </button>
<p>{quantity}</p>
<button onClick={handleSumar}> + </button>
</div>
<button className="agregar-al-carrito" onClick={handleAgregar}> Agregar al carrito </button>
</div>
)
}

export default itemCounter
