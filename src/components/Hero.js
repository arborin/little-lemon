import React from 'react'
import heroImg from "../assets/images/restauranfood.jpg"

export default function Hero() {
    return (
        <>
            <section className='hero'>
                <div className='container flex'>
                    <div className='hero-desc'>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className="yellowBtn">Reserve a table</button>
                    </div>
                    <div className='hero-img'>
                        <img src={heroImg} alt='hero img' />
                    </div>
                </div>
            </section>
        </>
    )
}
