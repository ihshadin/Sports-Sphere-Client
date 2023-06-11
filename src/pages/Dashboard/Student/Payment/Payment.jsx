import React from 'react';
import { Helmet } from 'react-helmet-async';

const Payment = () => {
    return (
        <>
            <Helmet>
                <title>Sports Sphere | Payment</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Secure Payments</h2>
                    <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">
                        Make hassle-free and secure payments for your classes using our trusted payment gateway, ensuring peace of mind.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Payment;