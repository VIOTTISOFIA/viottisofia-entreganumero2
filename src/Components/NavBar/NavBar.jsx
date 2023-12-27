import "./NavBar.css";

import { Link } from "react-router-dom"

const NavBar = () => {
return (
    <nav className='nav-container'>
    <ul className="nav-ul"> 
    <Link className="li" to="/">Home</Link>
    <Link className="li" to="/contact">Contact</Link>
    <Link className="li" to="/about">About Us</Link>
    </ul>
    
    </nav>
)
}

export default NavBar
