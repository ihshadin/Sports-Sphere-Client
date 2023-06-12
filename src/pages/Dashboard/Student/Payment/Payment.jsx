import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY_PK);

const Payment = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const [selClass, setSelClass] = useState({})

    useEffect(() => {
        axiosSecure.get(`/payment/${id}`)
            .then(res => {
                setSelClass(res.data);
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>Sports Sphere | Payment</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center'>Secure Payments</h2>
                    <p className='max-w-xl w-full text-center mx-auto mt-2 mb-12'>
                        Make hassle-free and secure payments for your classes using our trusted payment gateway, ensuring peace of mind.
                    </p>
                </div>
                <div className='w-[450px] mx-auto'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm selClass={selClass} />
                    </Elements>
                </div>
            </div>
        </>
    );
};

export default Payment;