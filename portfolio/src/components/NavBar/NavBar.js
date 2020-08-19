import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import { Button } from "../Button/Button";

const NavBar = () => {
    const [iconClass, setIconClass] = useState({clicked: false})

    const handleClick = () => {
        setIconClass({ clicked: !iconClass.clicked });
    }
    return (
        <nav className="navbar-items">
            <Link to="/">
            <h1 className="navbar-logo">Horacio Romero</h1>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={iconClass.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={iconClass.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                    <Link to={item.url}>
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                    </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar;