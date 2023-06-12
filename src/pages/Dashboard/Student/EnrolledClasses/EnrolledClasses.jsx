import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';

const EnrolledClasses = () => {
    const { user } = useAuth();
    const [enClass, setEnClass] = useState([])
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/payments/${user.email}`)
            .then(res => {
                setEnClass(res.data);
            })
    }, [])


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
                                <th className='font-medium'>Image</th>
                                <th className='font-medium'>Class Name</th>
                                <th className='font-medium'>Instructor</th>
                                <th className='font-medium text-center'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enClass.map((enItem, i) => (
                                    <tr key={enItem._id} className='font-medium'>
                                        <td>{i + 1}</td>
                                        <td><img className='w-24 h-14 object-cover' src={enItem.image} alt="" /></td>
                                        <td>{enItem.name}</td>
                                        <td>{enItem.insName}</td>
                                        <td className='text-right'>$<span>{enItem.price}</span></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default EnrolledClasses;