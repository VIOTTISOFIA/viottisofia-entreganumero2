

const ItemDetail = ({item}) => {
return (

    <div className="container">
        <div className="producto-detalle">
            <img src={item.img} alt= {item.title} />
        </div>
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.Desc}</p>
        <p className="category">Categoría: {item.category}</p>
        <p className="precio"> $ {item.precio}</p>
    
    </div>
)
}

export default ItemDetail
