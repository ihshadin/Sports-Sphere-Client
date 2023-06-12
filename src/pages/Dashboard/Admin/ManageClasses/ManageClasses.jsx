import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ManageClasses.css'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [feedback, setFeedback] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    const { data: allClasses = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manageClasses');
            return res.data;
        }
    })

    const handleClassStatusChange = (id, status) => {
        axiosSecure.put(`/classes/${status}/${id}`)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Great News!',
                        'Class Status Change successfully.',
                        'success'
                    )
                }
            })
    }

    const handleSubmitFeedback = () => {
        axiosSecure.put(`/classes/${feedback}/${selectedItem._id}`, { feedback })
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Success!',
                        'Feedback added successfully.',
                        'success'
                    );
                }
            });
    };


    // AOS Package
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Sports Sphere | Manage Classes</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div className='mb-12'>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Manage Classes</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full" id='manageClassPage'>
                        <thead>
                            <tr className='text-sm sphere-primary-bg text-white'>
                                <th className='font-medium'>#</th>
                                <th className='font-medium'>Class Image</th>
                                <th className='font-medium'>Class Name</th>
                                <th className='font-medium'>Ins. Name</th>
                                <th className='font-medium'>Ins. Email</th>
                                <th className='font-medium'>Searts</th>
                                <th className='font-medium text-center'>Price</th>
                                <th className='font-medium text-center'>Status</th>
                                <th className='font-medium text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allClasses.map((item, i) => (
                                    <tr key={item._id} className='font-medium'>
                                        <td>{i + 1}</td>
                                        <td><img className='w-24 h-20 object-cover' src={item.classImage} alt="" /></td>
                                        <td>{item.className}</td>
                                        <td>{item.instructorName}</td>
                                        <td>{item.instructorEmail}</td>
                                        <td>{item.availableSeats}</td>
                                        <td className='text-right'>$<span>{item.price}</span></td>
                                        <td className='capitalize'>{item.status}</td>
                                        <td className='flex gap-1 flex-col justify-center items-center'>
                                            <button
                                                onClick={() => handleClassStatusChange(item._id, 'approved')}
                                                disabled={item.status === 'approved' || item.status === 'deny' ? true : false}
                                                className='btn btn-sm border-0 px-3 sphere-primary-bg text-white hover:text-[#445760] w-full'
                                            >
                                                Approved
                                            </button>
                                            <button
                                                onClick={() => handleClassStatusChange(item._id, 'deny')}
                                                disabled={item.status === 'approved' || item.status === 'deny' ? true : false}
                                                className='btn btn-sm border-0 px-3 sphere-primary-bg text-white hover:text-[#445760] w-full'
                                            >
                                                Deny
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedItem(item)
                                                    window.my_modal_5.showModal()
                                                }}
                                                className='btn btn-sm border-0 px-3 sphere-primary-bg text-white hover:text-[#445760] w-full'
                                            >
                                                FeedBack
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal for feedback */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">FeedBack Form!</h3>

                    <textarea
                        className="py-2 px-3 border rounded-md w-full resize-none"
                        placeholder="Enter your feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>

                    <div className="modal-action">
                        <button className="btn" onClick={() => handleSubmitFeedback()}>Submit</button>
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default ManageClasses;