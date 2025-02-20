import React from 'react'
import logo from "../assets/images/logo.png"

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
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
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">TikTok</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}
