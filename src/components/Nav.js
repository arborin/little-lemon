import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <div class="menu-toggle" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/booking">Reservation</Link></li>
                <li><Link to="/">Order Line</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    )
}
