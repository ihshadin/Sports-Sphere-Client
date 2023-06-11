import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import './Dashboard.css'
import useAuth from '../../../hooks/useAuth';
import useUserRole from '../../../hooks/useUserRole';

const Dashboard = () => {
    const { user } = useAuth();
    const [userRole] = useUserRole();

    return (
        <>
            <Helmet>
                <title>Sports Sphere | Dashboard</title>
            </Helmet>
            <section className='xl:container mx-auto'>
                <div>
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content w-full">
                            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden cursor-pointer flex items-center gap-3 font-playfair border px-5 py-2 absolute left-2 md:left-5 top-5">
                                <AiOutlineAlignLeft /> <span>Open Menu</span>
                            </label>
                            <Outlet />
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full sphere-primary-bg">
                                <li className='flex items-center flex-row flex-nowrap gap-3 my-5'>
                                    <Link className='p-0' to='/'><img className='w-24' src={logo} alt="" /></Link>
                                    <h3 className='p-0 font-playfair text-white text-2xl'>Sports Sphere</h3>
                                </li>

                                {/* Student Dashboard menu */}
                                {
                                    userRole.role === 'student' && <>
                                        <li><Link className='sphere-secondary-bg mt-3 py-4 px-5 rounded-none text-lg font-medium border border-[#ECF8F9] hover:text-[#ECF8F9] focus:text-[#ECF8F9]' to='/dashboard/selected-classes'>My Selected Classes</Link></li>
                                        <li><Link className='sphere-secondary-bg mt-3 py-4 px-5 rounded-none text-lg font-medium border border-[#ECF8F9] hover:text-[#ECF8F9] focus:text-[#ECF8F9]' to='/dashboard/enrolled-classes'>My Enrolled Classes</Link></li>
                                    </>
                                }
                                {/* Instructor Dashboard menu */}
                                {
                                    userRole.role === 'instructor' && <>
                                        <li><Link className='sphere-secondary-bg mt-3 py-4 px-5 rounded-none text-lg font-medium border border-[#ECF8F9] hover:text-[#ECF8F9] focus:text-[#ECF8F9]' to='/dashboard/my-classes'>My Classes</Link></li>
                                        <li><Link className='sphere-secondary-bg mt-3 py-4 px-5 rounded-none text-lg font-medium border border-[#ECF8F9] hover:text-[#ECF8F9] focus:text-[#ECF8F9]' to='/dashboard/add-new-class'>Add New Class</Link></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;