import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className='min-h-[80vh]'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;