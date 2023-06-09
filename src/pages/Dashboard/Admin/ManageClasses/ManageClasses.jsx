import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrashAlt } from "react-icons/fa";

const ManageClasses = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Sports Sphere | My Enrolled Classes</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Enrolled Classes</h2>
                    <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">
                        Discover the classes you are currently enrolled in, where you'll embark on an exciting journey of learning and growth.
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className='text-lg sphere-primary-bg text-white'>
                                <th className='font-medium'>#</th>
                                <th className='font-medium'>Class Name</th>
                                <th className='font-medium'>Instructor</th>
                                <th className='font-medium text-center'>Price</th>
                                <th className='font-medium text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>Mohammad Ali</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-red-500 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr>
                            <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>Mohammad Ali</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-red-500 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageClasses;