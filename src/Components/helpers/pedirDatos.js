import {data} from "../data/data.js";

const pedirDatos = () => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(data); 
        }, 500)
    })
}
export default pedirDatos
