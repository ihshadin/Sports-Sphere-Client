import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useUserRole from '../../../../hooks/useUserRole';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const MyClasses = () => {
    const { user } = useAuth();
    const [userRole] = useUserRole();
    const [axiosSecure] = useAxiosSecure();

    const { data: myClasses = [], refetch, isLoading } = useQuery({
        queryKey: ['myClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myClasses/${user?.email}`)
            return res.data
        }
    })
    refetch();

    // AOS Package
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
                                <th className='font-medium'>Image</th>
                                <th className='font-medium'>Class Name</th>
                                <th className='font-medium text-center'>Price</th>
                                <th className='font-medium text-center'>Students</th>
                                <th className='font-medium text-center'>Status</th>
                                <th className='font-medium text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((item, i) => (
                                    <tr key={item._id} className='font-medium'>
                                        <td>{i + 1}</td>
                                        <td><img className='w-24 h-14' src={item.classImage} alt="" /></td>
                                        <td>{item.className}</td>
                                        <td className='text-right'>$<span>{item.price}</span></td>
                                        <td className='text-center'>{item.enrolledStudent}</td>
                                        <td className='font-semibold text-center uppercase'>{item.status}</td>
                                        <td className='text-center'>
                                            {
                                                item.status === 'denied'
                                                    ? <>
                                                        <button className="rounded-none py-2 px-5 h-auto sphere-primary-bg text-white" onClick={() => window.my_modal_1.showModal()}>FeedBack</button>
                                                        <dialog id="my_modal_1" className="modal">
                                                            <form method="dialog" className="modal-box">
                                                                <h3 className="font-semibold font-playfair text-2xl text-center">Your Class Denid!</h3>
                                                                <p className="py-4">
                                                                    {item.feedback}
                                                                </p>
                                                                <div className="modal-action">
                                                                    <button className="rounded-none py-2 px-5 h-auto sphere-primary-bg text-white">Close</button>
                                                                </div>
                                                            </form>
                                                        </dialog>
                                                    </>
                                                    : <Link to={`/dashboard/update-class/${item._id}`}>
                                                        <span className='py-2 px-5 bg-teal-400 text-white inline-block cursor-pointer'><FaEdit /></span>
                                                    </Link>
                                            }
                                        </td>
                                        {/* <td className='text-center'>
                                            <span className='py-2 px-5 bg-red-500 text-white inline-block cursor-pointer'><FaTrashAlt /></span>
                                        </td> */}
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

export default MyClasses;