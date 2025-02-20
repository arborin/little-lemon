import React from 'react'
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (

        <footer>
            <div className='container flex'>
                <div className='footer-logo footer-col'>
                    <img src={logo} alt="footer logo" />
                </div>
                <div className='footer-menu footer-col'>
                    <p className='footer-title'>Navigation</p>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/booking">Reservation</Link></li>
                        <li><Link to="/order">Order Line</Link></li>
                    </ul>
                </div>
                <div className='footer-contact footer-col'>
                    <p className='footer-title'>Contact</p>
                    <div className='address-line'>
                        <p>Address</p>
                        <p>Phone Number</p>
                        <p>Email</p>
                    </div>

                </div>
                <div className='footer-social footer-col'>
                    <p className='footer-title'>Social Media</p>
                    <ul>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">TikTok</Link></li>
                        <li><Link to="/">Twitter</Link></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}
