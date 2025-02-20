import React, { useState } from 'react'

export default function BookingForm(props) {



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
        props.setSubmeted(true)
        console.log(formData)
        props.setOrderData(formData)
    }



    return (
        <section className='container form-card'>
            <h1>Please fill in the form below accurately to enable us serve you nicely.</h1>
            <div className='booking-form'>
                <form onSubmit={handleSubmit} style={{ "display": "grid", "maxWidth": "400px", "gap": "20px" }}>
                    <div className='input-group'>
                        <label htmlFor="res-date">Full Name:</label>
                        <input type="text" required onChange={formChange} name="fullName" id="full_name" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="res-date">Mobile:</label>
                        <input type="text" required onChange={formChange} name="mobile" id="full_name" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" required onChange={formChange} name="date" id="res-date" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" required onChange={formChange} name='time'>
                            {props.availableTimes.map((time) => {
                                return <option key={time}>{time}</option>
                            })}
                        </select>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" required onChange={formChange} name="guests" placeholder="1" min="1" max="10" id="guests" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" required onChange={formChange} name="occasion">
                            <option value=''></option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <input type="submit" className='order-btn' value="Make Your reservation" />
                </form>
            </div>
        </section>)
}
