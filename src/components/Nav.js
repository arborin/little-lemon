import React from 'react'

export default function Nav() {
    return (
        <nav>
            <div class="menu-toggle" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservation</a></li>
                <li><a href="/">Order Line</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}
