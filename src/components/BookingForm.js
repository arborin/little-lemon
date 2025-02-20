import React, { useState } from 'react'

export default function BookingForm() {

    const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        date: '',
        time: '',
        occasion: '',
    })

    const formChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }



    return (
        <section onSubmit={handleSubmit} className='container form-card'>
            <h1>Please fill in the form below accurately to enable us serve you nicely.</h1>
            <div className='booking-form'>
                <form style={{ "display": "grid", "max-width": "400px", "gap": "20px" }}>
                    <div className='input-group'>
                        <label htmlFor="res-date">Full Name:</label>
                        <input type="text" onChange={formChange} name="fullName" id="full_name" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="res-date">Mobile:</label>
                        <input type="text" onChange={formChange} name="mobile" id="full_name" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" onChange={formChange} name="date" id="res-date" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" onChange={formChange} name='time'>
                            {availableTimes.map((time) => {
                                return <option>{time}</option>
                            })}
                        </select>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" onChange={formChange} name="guests" placeholder="1" min="1" max="10" id="guests" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" onChange={formChange} name="occasion">
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <input type="submit" className='order-btn' value="Make Your reservation" />
                </form>
            </div>
        </section>)
}
