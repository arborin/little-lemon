import React from 'react'
import heroImg from "../assets/images/restauranfood.jpg"
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <>
            <section className='hero'>
                <div className='container flex'>
                    <div className='hero-desc'>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to='booking' className="yellowBtn">Reserve a table</Link>
                    </div>
                    <div className='hero-img'>
                        <img src={heroImg} alt='hero img' />
                    </div>
                </div>
            </section>
        </>
    )
}
