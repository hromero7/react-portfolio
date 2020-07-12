import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
<div className="col-md-12">
    <div id="nav">
        <div id="name">
                Horacio Romero
        </div>
    
        <ul id="links">
            <Link to="/">
            <li>About</li>
            </Link>
            <Link to="/portfolio">
            <li>Portfolio</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
        </ul>
    </div>
</div>
    )
}

export default NavBar;