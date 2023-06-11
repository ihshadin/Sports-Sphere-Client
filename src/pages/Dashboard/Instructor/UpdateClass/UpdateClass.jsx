import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdateClass = data => {
        const updatedData = {
            clName: data.className || classData.className,
            clImage: data.photo || classData.classImage,
            seats: data.seats || classData.availableSeats,
            price: data.price || classData.price,
        }

        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${classData.className} Updated Successfully`,
                        icon: 'success',
                        confirmButtonColor: '#14b8a6',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        navigate('/dashboard/my-classes')
                    })
                }
            })
    }

    const { data: classData = {}, refetch } = useQuery({
        queryKey: ['my-single-class', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${id}`)
            return res.data;
        }
    })

    refetch();
    console.log('object');

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Sports Sphere | Update Class</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div className='mb-12'>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Update Class</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleUpdateClass)} className='text-lg font-medium flex flex-col gap-5'>
                        <div>
                            <input placeholder='Class Name' type='text'
                                defaultValue={classData.className}
                                className='block sphere-secondary-bg w-full py-4 px-5 rounded-none'
                                {...register("className")} />
                        </div>
                        <div>
                            <input placeholder='Class Photo URL' type='text'
                                defaultValue={classData.classImage}
                                className='block sphere-secondary-bg w-full py-4 px-5 rounded-none'
                                {...register("photo")} />
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div className='w-full'>
                                <input placeholder='Available seats' type='number'
                                    defaultValue={classData.availableSeats}
                                    className='block sphere-secondary-bg w-full py-4 px-5 rounded-none'
                                    {...register("seats")} />
                            </div>
                            <div className='w-full'>
                                <input placeholder='Price' type='number'
                                    defaultValue={classData.price}
                                    className='block sphere-secondary-bg w-full py-4 px-5 rounded-none'
                                    {...register("price")} />
                            </div>
                        </div>
                        <input
                            // onClick={() => handleUpdateClass(item._id)}
                            className='cursor-pointer sphere-primary-bg sphere-secondary font-semibold uppercase py-4'
                            type="submit"
                            value='Update Class'
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateClass;