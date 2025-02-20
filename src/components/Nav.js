import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    const [showMenu, setShowMenu] = useState(true)

    const toggleMenu = () => {
        setShowMenu((prev) => !prev)
    }

    return (
        <nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={showMenu ? "nav-links" : "nav-links hide"}  >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservation</Link></li>
                <li><Link to="/order">Order Line</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul >
        </nav >
    )
}
