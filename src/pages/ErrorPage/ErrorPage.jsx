import React from 'react';
import image404 from '../../assets/images/404.gif';

const ErrorPage = () => {
    return (
        <section className=''>
            <img className='mx-auto w-full max-w-4xl' src={image404} alt="" />
        </section>
    );
};

export default ErrorPage;