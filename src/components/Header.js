import React from 'react'
import Nav from './Nav'
import menu_img from "../assets/images/icon_menu.png";
import basket_img from "../assets/images/basket.png";
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='container menu'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
                <Nav />
            </div>
        </header>
    )
}
