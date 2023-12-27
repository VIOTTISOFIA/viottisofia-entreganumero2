import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {

  const navigate = useNavigate();

  useEffect (() => {
    setTimeout (() => {
      navigate("/");
      
    }, 3000);
  })
  return (
    <div style={{textAlign: "center"}}>
      <h1>Error Page</h1>
      <p>404</p>
      <p>Usted será direccionado en 3 segundos a la home page...</p>
      
    </div>
  )
}

export default ErrorPage
