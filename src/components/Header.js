import React from 'react'
import Nav from './Nav'
import menu_img from "../assets/images/icon_menu.png";
import basket_img from "../assets/images/basket.png";

export default function Header() {
    return (
        <header>
            <div className='container'>
                <div className='mobile-menu'>
                    <img src={menu_img} alt='menu' />
                    <img src={basket_img} alt='basket' />
                </div>
                <div className='nav'>
                    <Nav />
                </div>
            </div>

        </header>
    )
}
