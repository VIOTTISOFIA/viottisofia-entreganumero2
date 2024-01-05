import "./NavBar.css";

import { Link } from "react-router-dom"

const NavBar = () => {
return (
    <nav className='nav-container'>
    <ul className="nav-ul"> 
<li><Link className="menu-link" to="/">Home</Link></li>  
<li><Link className="menu-link" to="/contacto">Contact</Link></li>
<li><Link className="menu-link" to="/about">About Us</Link></li>  

    </ul>
    </nav>
)
}

export default NavBar
