import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const SeletedClasses = () => {
    const { user } = useAuth();

    const { isLoading, data: selectedClasses = [] } = useQuery({
        queryKey: ['selectClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seClasses?email=${user?.email}`)
            return res.json();
        }
    })



    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Sports Sphere | My Selected Classes</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Selected Classes</h2>
                    <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">
                        Explore our carefully curated classes, handpicked to provide exceptional learning experiences and skill development.
                    </p>
                </div>
                <div className="overflow-x-auto">
                    {selectedClasses.length}
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

                            {/* <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>Mohammad Ali</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-red-600 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr>
                            <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>Mohammad Ali</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-red-600 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr>
                            <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>Mohammad Ali</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-red-600 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr>
                            <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>Mohammad Ali</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-red-600 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr>
                            <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>Mohammad Ali</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-red-600 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr>
                            <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>Mohammad Ali</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-red-600 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr>
                            <tr className='font-medium'>
                                <td>1</td>
                                <td>Boxing learning course by mohammad ali</td>
                                <td>Mohammad Ali</td>
                                <td className='text-right'>$231</td>
                                <td className='text-center'>
                                    <span className='py-2 px-5 bg-red-600 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
                <div className='flex items-center justify-end gap-5 mt-10 md:mt-16'>
                    <p className='text-2xl font-semibold '>Total: $<span>798</span></p>
                    <Link className='py-3 px-10 sphere-primary-bg text-white text-xl font-semibold font-playfair' to='/dashboard/payment'>Payment</Link>
                </div>
            </div>
        </>
    );
};

export default SeletedClasses;