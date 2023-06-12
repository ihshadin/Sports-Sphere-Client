import React from 'react';
import { TfiFacebook, TfiLinkedin, TfiTwitterAlt } from 'react-icons/tfi';
import { HiPhone } from "react-icons/hi";
import { BsEnvelopeCheck, BsInstagram } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import useAuth from '../../hooks/useAuth';

const Footer = () => {
    const { isDarkTheme, setIsDarkTheme } = useAuth();
    const location = useLocation();
    return (
        <footer className={`pt-10 ${isDarkTheme ? ' dark-theme' : location.pathname === '/' ? 'light-theme' : 'dark-theme'}`}>
            <div className='px-3 xl:px-0 xl:container mx-auto grid md:grid-cols-2 gap-10'>
                <div className='mt-8 md:mt-0'>
                    <Link to='/'>
                        <img className='w-20 md:w-36' src={logo} alt="" />
                    </Link>
                    <h1 className='text-3xl mb-3 font-playfair'>Sports<span>Sphere</span></h1>
                    <p className='font-normal text-gray-400'>
                        Welcome to SportsSphere, where champions are made. Join us for elite sports classes in soccer, basketball, tennis, swimming, athletics, cricket, volleyball, and badminton. Unleash your potential now!
                    </p>
                    <div className='flex gap-3 mt-2'>
                        <TfiTwitterAlt className='w-10 h-10 p-2 cursor-pointer' />
                        <TfiFacebook className='w-10 h-10 p-2 cursor-pointer' />
                        <BsInstagram className='w-10 h-10 p-2 cursor-pointer' />
                        <TfiLinkedin className='w-10 h-10 p-2 cursor-pointer' />
                    </div>
                </div>
                <div className='mt-10 md:mt-0 md:ml-auto'>
                    <h3 className='text-3xl font-playfair text-left mb-3 md:mb-10'>Contact Info</h3>
                    <div className='flex gap-2 items-center leading-5 font-light'>
                        <span className='p-2 rounded-full inline-block'><TiLocationOutline className='w-5 h-5' /></span>
                        <p>
                            13th Street<br /> New York, United States.
                        </p>
                    </div>
                    <div className='flex gap-2 items-center mt-2'>
                        <span className='p-2 rounded-full inline-block'><HiPhone className='w-5 h-5' /></span>
                        <span>
                            +880 1858-733453
                        </span>
                    </div>
                    <div className='flex gap-2 items-center mt-2'>
                        <span className='p-2 rounded-full inline-block'><BsEnvelopeCheck className='w-5 h-5' /></span>
                        <span>
                            shadinfr@yahoo.com
                        </span>
                    </div>
                </div>
            </div>
            <div className='xl:container bg-gray-500 late-500 h-[1px] mx-auto mt-8'></div>
            <div className='pb-8 pt-4 px-3 xl:px-0 xl:container mx-auto'>
                <p className='text-sm text-gray-400 text-center' >Copyright © 2023 <Link to='/' className='hover:text-[#ECF8F9]'>SportsSphere</Link></p>
            </div>
        </footer>
    );
};

export default Footer;