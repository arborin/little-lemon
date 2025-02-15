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
                <Nav />
            </div>
        </header>
    )
}
