import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddNewClass = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddNewClass = (data) => {
        console.log(data);
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
                    <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Add New Class</h2>
                    <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">
                        Create and add a new class to our diverse curriculum, offering exciting opportunities for learning and skill development.
                    </p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleAddNewClass)} className='text-base flex flex-col gap-5'>
                        <div className='flex flex-col md:flex-row items-center gap-5 text-lg font-medium'>
                            <div className='w-full'>
                                <label className='text-base'>Your Name</label>
                                <p className='text-lg text-gray-500 -mt-1'>Mohammad Ali</p>
                            </div>
                            <div className='w-full'>
                                <label className='text-base'>Your E-mail</label>
                                <p className='text-lg text-gray-500 -mt-1'>mohammad@ali.com</p>
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
                        <input className='cursor-pointer sphere-primary-bg sphere-secondary font-semibold uppercase py-4' type="submit" value='Add New' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddNewClass;