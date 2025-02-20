import React from 'react'
import greekSalad from "../assets/images/greeksalad.jpg"
import lemondesert from "../assets/images/lemondessert.jpg"

export default function MenuComponent() {
    return (
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
    )
}
