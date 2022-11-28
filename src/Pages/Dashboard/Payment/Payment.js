
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CheckOut from './CheckOut';

export default function Payment() {
    const booking = useLoaderData();
    console.log(booking);

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

    
  return (
    <div>
      <h3 className="text-3xl">Payment for {booking.product}</h3>
        <p className="text-xl">Please Pay  <strong>${booking.price}</strong></p>
        <div className="w-96 my-16">
            <Elements stripe={stripePromise}>
                <CheckOut booking={booking}></CheckOut>
            </Elements>
        </div>

    </div>
  )
}
