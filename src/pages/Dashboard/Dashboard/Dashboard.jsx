import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Sports Sphere | Dashboard</title>
            </Helmet>
            <section className='xl:container px-2 md:px-0'>
                <div>
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                                <AiOutlineAlignLeft />
                            </label>
                            {/* Page content here */}

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full sphere-primary-bg">
                                <li className='flex items-center flex-row flex-nowrap gap-3 my-5'>
                                    <Link className='p-0' to='/'><img className='w-24' src={logo} alt="" /></Link>
                                    <h3 className='p-0 font-playfair text-white text-2xl'>Sports Sphere</h3>
                                </li>
                                <li><Link className='sphere-secondary-bg mt-3 py-4 px-5 rounded-none text-lg font-medium border border-[#ECF8F9] hover:text-[#ECF8F9]'>My Selected Classes</Link></li>
                                <li><Link className='sphere-secondary-bg mt-3 py-4 px-5 rounded-none text-lg font-medium border border-[#ECF8F9] hover:text-[#ECF8F9]'>My Enrolled Classes</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;