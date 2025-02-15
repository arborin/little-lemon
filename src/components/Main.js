import React from 'react'
import heroImg from "../assets/images/restauranfood.jpg"
import greekSalad from "../assets/images/greeksalad.jpg"
import lemondesert from "../assets/images/lemondessert.jpg"

export default function Main() {
    return (
        <main>
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
            <section className='offer container flex'>

                <p>Special offer</p>
                <button className="yellowBtn">Online Menu</button>

            </section>
            <section className='container orders flex'>
                <div className='card'>
                    <img className="card-img" src={greekSalad} alt='greek salad' />
                    <div className='card-title'>
                        <p className='title-name'>Greek Salad</p>
                        <p className='title-price'>$12.99</p>
                    </div>
                    <div className='card-desc'>
                        <p>
                            The famous greek salad of crispy lettuce,
                            peppers, olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                    </div>
                    <div className='card-footer flex'>
                        <a href='index.html'>Order now</a>
                    </div>
                </div>
                <div className='card'>
                    <img className="card-img" src={lemondesert} alt='greek salad' />
                    <div className='card-title'>
                        <p className='title-name'>Greek Salad</p>
                        <p className='title-price'>$10.05</p>
                    </div>
                    <div className='card-desc'>
                        <p>
                            The famous greek salad of crispy lettuce,
                            peppers, olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                    </div>
                    <div className='card-footer flex'>
                        <a href='index.html'>Order now</a>
                    </div>
                </div>
                <div className='card'>
                    <img className="card-img" src={greekSalad} alt='greek salad' />
                    <div className='card-title'>
                        <p className='title-name'>Greek Salad</p>
                        <p className='title-price'>$12.99</p>
                    </div>
                    <div className='card-desc'>
                        <p>
                            The famous greek salad of crispy lettuce,
                            peppers, olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                    </div>
                    <div className='card-footer flex'>
                        <a href='index.html'>Order now</a>
                    </div>
                </div>
            </section>
        </main>
    )
}
