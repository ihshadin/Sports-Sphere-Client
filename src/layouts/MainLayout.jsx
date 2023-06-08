import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className='min-h-[calc(100vh-515px)]'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;