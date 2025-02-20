import React, { useEffect, useState } from 'react'
import BookingForm from '../components/BookingForm'
import OrderList from '../components/OrderList'
import { fetchAPI } from '../utils/Api'


export default function Booking() {

    const [availableTimes] = useState(['', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
    const [orderData, setOrderData] = useState(false)

    const [submited, setSubmeted] = useState(false)

    useEffect(() => {
        // if (orderData) {
        //     const data = fetchAPI(orderData.date)
        //     console.log('here')
        // }
    }, [orderData])




    return (
        <>
            {!submited && <BookingForm availableTimes={availableTimes} setOrderData={setOrderData} setSubmeted={setSubmeted} />}
            {submited && <OrderList orderData={orderData} />}
        </>
    )
}
