import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Slide, Zoom } from 'react-awesome-reveal';

const AddNewClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleAddNewClass = (data) => {
        const sendData = {
            instructorName: user.displayName,
            instructorEmail: user.email,
            className: data.className,
            classImage: data.photo,
            availableSeats: parseInt(data.seats),
            price: parseInt(data.price),
            enrolledStudent: 0,
            status: 'pending',
            feedback: null
        }

        axiosSecure.post('/classes', sendData)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Submit a class successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    reset();
                }
            })
    }

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>Sports Sphere | Add New Class</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div>
                    <Zoom><h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Add New Class</h2></Zoom>
                    <Slide direction='up'>
                        <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">
                            Create and add a new class to our diverse curriculum, offering exciting opportunities for learning and skill development.
                        </p>
                    </Slide>
                </div>
                <Slide direction='up'>
                    <div>
                        <form onSubmit={handleSubmit(handleAddNewClass)} className='text-base flex flex-col gap-5'>
                            <div className='flex flex-col md:flex-row items-center gap-5 text-lg font-medium'>
                                <div className='w-full'>
                                    <label className='text-base'>Your Name</label>
                                    <p className='text-lg text-gray-500 -mt-1'>{user.displayName}</p>
                                </div>
                                <div className='w-full'>
                                    <label className='text-base'>Your E-mail</label>
                                    <p className='text-lg text-gray-500 -mt-1'>{user.email}</p>
                                </div>
                            </div>
                            <div>
                                <input placeholder='Class Name' type='text'
                                    className='block sphere-secondary-bg w-full py-4 px-5 rounded-none'
                                    {...register("className", { required: true })} />
                                {errors.className && <small>This field is required</small>}
                            </div>
                            <div>
                                <input placeholder='Class Photo URL' type='text'
                                    className='block sphere-secondary-bg w-full py-4 px-5 rounded-none'
                                    {...register("photo", { required: true })} />
                                {errors.photo && <small>This field is required</small>}
                            </div>
                            <div className='flex justify-between gap-5'>
                                <div className='w-full'>
                                    <input placeholder='Available seats' type='number'
                                        className='block sphere-secondary-bg w-full py-4 px-5 rounded-none'
                                        {...register("seats", { required: true })} />
                                    {errors.seats && <small>This field is required</small>}
                                </div>
                                <div className='w-full'>
                                    <input placeholder='Price' type='number'
                                        className='block sphere-secondary-bg w-full py-4 px-5 rounded-none'
                                        {...register("price", { required: true })} />
                                    {errors.price && <small>This field is required</small>}
                                </div>
                            </div>
                            <input className='cursor-pointer sphere-primary-bg sphere-secondary font-semibold uppercase py-4' type="submit" value='Add New Class' />
                        </form>
                    </div>
                </Slide>
            </div>
        </>
    );
};

export default AddNewClass;