import "./NavBar.css";

import { Link } from "react-router-dom"

const NavBar = () => {
return (
    <nav className='nav-container'>
    <ul className="nav-ul"> 
<li><Link className="menu-link" to="/">Home</Link></li>  
<li><Link className="menu-link" to="/productos">Productos</Link></li> 
<li><Link className="menu-link" to="/productos/aros">Aros</Link></li> 
<li><Link className="menu-link" to="/productos/anillos">Anillos</Link></li> 

<li><Link className="menu-link" to="/contacto/">Contact</Link></li>
<li><Link className="menu-link" to="/about">About Us</Link></li>  

    </ul>
    </nav>
)
}

export default NavBar
