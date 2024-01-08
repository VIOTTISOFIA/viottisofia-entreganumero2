import productos from "../../data/data";

const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            resolve(data); 
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    const item = productos.find((el) => el.id === id);

    if (item) {
        resolve (item)
    } else {
        reject ({
            error: "No se encontro el producto "
        })
    }
    }
    export default pedirDatos

