import React from 'react'
import { Link } from 'react-router-dom'

export default function Offer() {
    return (
        <>
            <section className='offer container flex'>
                <p>Special offer</p>
                <Link to='menu' className="yellowBtn">Online Menu</Link>
            </section>
        </>
    )
}
