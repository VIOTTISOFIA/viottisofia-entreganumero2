import Item from "../Item/Item"

const ItemList = ({productos}) => {
    console.log(productos)
return (
    <div className="container">
        <h2 class="main-title">Productos</h2>
    <div className='productos'>
        { productos.map((prod) => <Item producto=(productos) key=(productos.id) />)} 
    </div>
    </div>
)
}

export default ItemList
