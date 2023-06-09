import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Testimonials from './Testimonials';

const Home = () => {
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