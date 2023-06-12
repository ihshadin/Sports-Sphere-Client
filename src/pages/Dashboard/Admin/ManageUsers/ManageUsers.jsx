import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Slide } from 'react-awesome-reveal';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleUserRoleChange = (id, role) => {
        axiosSecure.put(`/users/${role}/${id}`)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: 'Success!',
                        text: 'User role updated successfully.',
                        icon: 'success',
                        confirmButtonColor: '#14b8a6',
                        confirmButtonText: 'OK'
                    }).then(() => {
                    });
                }
            })
    }
    return (
        <>
            <Helmet>
                <title>Sports Sphere | Manage Users</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div>
                    <Slide><h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Update Users</h2></Slide>
                    <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">
                        View the latest user updates and stay informed about the activities and achievements of our vibrant community.
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className='text-lg sphere-primary-bg text-white'>
                                <th className='font-medium'>#</th>
                                <th className='font-medium'>Picture</th>
                                <th className='font-medium'>User Name</th>
                                <th className='font-medium'>User Email</th>
                                <th className='font-medium text-center'>User Role</th>
                                <th className='font-medium text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item, i) => (
                                    <tr key={item._id} className='font-medium'>
                                        <td>{i + 1}</td>
                                        <td><img src={item.photo} className='w-16 h-16 object-cover rounded-full' alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td className='capitalize'>{item.role}</td>
                                        <td className='flex justify-center gap-2'>
                                            <span
                                                onClick={() => handleUserRoleChange(item._id, 'instructor')}
                                                disabled={item.role === 'instructor' ? true : false}
                                                className='btn sphere-primary-bg text-white rounded-none hover:bg-[#445760aa]'
                                            >Make Instructor</span>
                                            <span
                                                onClick={() => handleUserRoleChange(item._id, 'admin')}
                                                disabled={item.role === 'admin' ? true : false}
                                                className='btn sphere-primary-bg text-white rounded-none hover:bg-[#445760aa]'
                                            >Make Admin</span>
                                        </td>
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

export default ManageUsers;