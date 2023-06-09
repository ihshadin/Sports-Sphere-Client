import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyClasses = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Sports Sphere | My Classes</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">My Classes</h2>
                    <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">
                        Access and manage your personal dashboard for an overview of the classes you are currently enrolled in.
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className='text-lg sphere-primary-bg text-white'>
                                <th className='font-medium'>#</th>
                                <th className='font-medium'>Class Name</th>
                                <th className='font-medium'>Students</th>
                                <th className='font-medium text-center'>Price</th>
                                <th className='font-medium text-center'>Update</th>
                                <th className='font-medium text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>45</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-teal-400 text-white inline-block cursor-pointer'><FaEdit /></span>
                                </td>
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

export default MyClasses;