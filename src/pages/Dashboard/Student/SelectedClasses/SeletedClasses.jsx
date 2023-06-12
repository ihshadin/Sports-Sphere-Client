import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const SeletedClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selClasses = [] } = useQuery({
        queryKey: ['selectClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/seClasses?email=${user?.email}`)
            return res.data;
        }
    })

    const handleDeleteSelClasses = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#445760',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/seClasses/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
            }
        })
    }


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
                    <table className="table w-full">
                        <thead>
                            <tr className='text-lg sphere-primary-bg text-white'>
                                <th className='font-medium'>#</th>
                                <th className='font-medium'>Image</th>
                                <th className='font-medium'>Class Name</th>
                                <th className='font-medium'>Instructor</th>
                                <th className='font-medium text-center'>Price</th>
                                <th className='font-medium text-center'>Action</th>
                                <th className='font-medium text-center'>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selClasses.map((selClass, i) => (
                                    <tr key={selClass._id} className='font-medium'>
                                        <td>{i + 1}</td>
                                        <td><img className='w-24 h-14 object-cover' src={selClass.image} alt="" /></td>
                                        <td>{selClass.name}</td>
                                        <td>{selClass.insName}</td>
                                        <td className='text-right'>$<span>{selClass.price}</span></td>
                                        <td className='text-center'>
                                            <span
                                                onClick={() => handleDeleteSelClasses(selClass._id)}
                                                className='py-2 px-5 bg-red-500 text-white inline-block cursor-pointer'
                                            ><FaTrashAlt /></span>
                                        </td>
                                        <td className='text-center'>
                                            <Link to={`/dashboard/payment/${selClass._id}`}><span className='py-2 px-5 bg-teal-500 text-white inline-block cursor-pointer'>Pay</span></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {/* <div className='flex items-center justify-end gap-5 mt-10 md:mt-16'>
                    <p className='text-2xl font-semibold '>Total: $<span>798</span></p>
                    <Link className='py-3 px-10 sphere-primary-bg text-white text-xl font-semibold font-playfair' to='/dashboard/payment'>Payment</Link>
                </div> */}
            </div>
        </>
    );
};

export default SeletedClasses;