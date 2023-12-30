import "./Header.css";
import { Link } from "react-router-dom";

import img from "../../assets/NatiLeiva.png"


const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
            <img src={img} alt="joyas" width={500}/> 
            </Link>

        </div>
    )
}
export default Header; 