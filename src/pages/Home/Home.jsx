import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Testimonials from './Testimonials';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <Testimonials />
        </>
    );
};

export default Home;