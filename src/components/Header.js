import React from 'react'
import Nav from './Nav'
import menu_img from "../assets/images/icon_menu.png";
import basket_img from "../assets/images/basket.png";
import logo from "../assets/images/logo.png"

export default function Header() {
    return (
        <header>
            <div className='container menu'>
                <div className="logo">
                    <a href="index.html">
                        <img src={logo} />
                    </a>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
