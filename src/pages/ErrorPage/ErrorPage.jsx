import React from 'react';
import image404 from '../../assets/images/404.gif';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='h-screen flex flex-col items-center justify-center'>
            <h2 className='text-3xl md:text-5xl font-playfair font-semibold leading-tight'>Page Not Found</h2>
            <img className='mx-auto w-full max-w-4xl' src={image404} alt="404 Image" />
            <Link to='/' className='text-center text-xl font-semibold uppercase inline-block py-3 px-8 sphere-primary-bg sphere-secondary'>Back to Home</Link>
        </section>
    );
};

export default ErrorPage;