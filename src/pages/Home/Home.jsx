import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Testimonials from './Testimonials';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { isDarkTheme, setIsDarkTheme } = useAuth();


    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div id='sportsHome' className={`${isDarkTheme ? ' dark-theme' : 'light-theme'}`}>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <Testimonials />
        </div>
    );
};

export default Home;