import {productos} from "../data/data.js";

const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            resolve(data); 
        }, 500)
    })
}
export default pedirDatos
