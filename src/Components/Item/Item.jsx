import React from 'react'

const Item = ( {producto}) => {
return (
    <div className='producto'>
        <img src={producto.img} />
        <div>
            <h4>{producto.title}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoría: {producto.category}</p>
            <p>{producto.Desc}</p>
            <a className='ver-más' href={`/item/${producto.id}`}>Ver más</a>
        </div>
    </div>
)
}

export default Item
