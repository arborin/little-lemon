import React from 'react'

export default function orderData(props) {
    // fullName: '',
    //     mobile: '',
    //         date: '',
    //             time: '',
    //                 occasion: '',
    return (
        <section className='container form-card'>
            <h1>Your Order Sent!</h1>
            <div className='order-record'>
                <span className='order-title'>Full Name: </span>
                <span className='order-value'>{props.orderData.fullName}</span>
            </div>
            <div className='order-record'>
                <span className='order-title'>Mobile: </span>
                <span className='order-value'>{props.orderData.mobile}</span>
            </div>
            <div className='order-record'>
                <span className='order-title'>Date: </span>
                <span className='order-value'>{props.orderData.date}</span>
            </div>
            <div className='order-record'>
                <span className='order-title'>Time: </span>
                <span className='order-value'>{props.orderData.time}</span>
            </div>
            <div className='order-record'>
                <span className='order-title'>Occasion: </span>
                <span className='order-value'>{props.orderData.occasion}</span>
            </div>
        </section>
    )
}
