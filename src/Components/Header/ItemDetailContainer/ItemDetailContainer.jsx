import { useEffect, useState } from "react"
import { pedirItemPorId } from "../../helpers/pedirDatos"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = ( {itemId} ) => {
    const [item, setItem] = useState(null)
    useEffect (() => {
        pedirItemPorId (itemId)
        .then((res) => {
            setItem (res);
        })
    }, [])

return (
    <div>
        <ItemDetail item={item} />
    </div>
)
}

export default ItemDetailContainer
