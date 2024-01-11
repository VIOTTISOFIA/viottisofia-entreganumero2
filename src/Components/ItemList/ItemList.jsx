import Item from "../Item/Item"

const ItemList = ({productos, title}) => {
    // console.log(productos)
return (
    <div className="container">
        <h2 class="main-title">{title}</h2>
    <div className='productos'>
        {productos.map((prod) => <Item productos={prod} key={prod.id}/>)}  
    </div>
    </div>
)
}

export default ItemList
