import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {productos}) => {
return (
    <div className='producto'>
        <img src={productos.img} />
        <div>
            <h4>{productos.title}</h4>
            <p>Precio: ${productos.precio}</p>
            <p>Categoría: {productos.category}</p>
            <p>{productos.Desc}</p>
            <Link className='ver-más' href={`/item/${productos.id}`}>Ver más</Link>
        </div>
    </div>
)
}

export default Item
