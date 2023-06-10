import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LoginWithSocial from '../../components/LoginWithSocial/LoginWithSocial';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, signIn } = useAuth();

    const handleRegister = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                updatedUserData(createdUser, data.fullName, data.photo)
            })
            .catch(error => {
                console.log(error?.message);
            })
    }
    const updatedUserData = (loggedUser, userName, photo) => {
        updateProfile(loggedUser, {
            displayName: userName,
            photoURL: photo,
        })
            .then(() => { })
            .catch(error => { })
    }
    return (
        <section className='py-10 md:py-16'>
            <Helmet>
                <title>Sports Sphere | Sign Up</title>
            </Helmet>
            <div className='shadow-xl max-w-xl mx-auto py-10 md:py-16 px-5 md:px-10 rounded-3xl bg-white'>
                <h2 className='font-playfair text-3xl font-bold text-center mb-6'>Please Sign Up</h2>
                <form onSubmit={handleSubmit(handleRegister)} className='text-base flex flex-col gap-3'>
                    <div>
                        <input placeholder='Full Name' type='text'
                            className='block sphere-secondary-bg w-full py-3 px-5 rounded-none'
                            {...register("fullName", { required: true })} />
                        {errors.fullName && <small>This field is required</small>}
                    </div>
                    <div>
                        <input placeholder='Email Address' type='email'
                            className='block sphere-secondary-bg w-full py-3 px-5 rounded-none'
                            {...register("email", { required: true })} />
                        {errors.email && <small>This field is required</small>}
                    </div>
                    <div>
                        <input placeholder='Password' type='text'
                            className='block sphere-secondary-bg w-full py-3 px-5 rounded-none'
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[a-z])/
                            })} />
                        {errors.password?.type === 'required' && <small>Password is required</small>}
                        {errors.password?.type === 'minLength' && <small>Password must be at least 6 characters</small>}
                        {errors.password?.type === 'pattern' && <>
                            {!/(?=.*[A-Z])/.test(watch("password")) && (
                                <small>Password must have at least one UPPERCASE letter</small>
                            )}
                            {/(?=.*[A-Z])/.test(watch("password")) && !/(?=.*[a-z])/.test(watch("password")) && (
                                <small>Password must have at least one lowercase letter</small>
                            )}
                        </>}
                    </div>
                    <div>
                        <input placeholder='Confirm Password' type='text'
                            className='block sphere-secondary-bg w-full py-3 px-5 rounded-none'
                            {...register("confirmPassword", {
                                required: true,
                                validate: value => value === watch("password"),
                            })} />
                        {errors.confirmPassword && <small>Passwords do not match</small>}
                    </div>
                    <div>
                        <input placeholder='Photo URL' type='text'
                            className='block sphere-secondary-bg w-full py-3 px-5 rounded-none'
                            {...register("photo", { required: true })} />
                        {errors.photo && <small>This field is required</small>}
                    </div>
                    {/* <div>
                        <input placeholder='Photo' type='file'
                            label='Photo'
                            className='block w-full rounded-none file-input file-input-bordered file-input-primary border-[#445760]'
                            {...register("photo", { required: true })} />
                        {errors.photo && <small>This field is required</small>}
                    </div> */}

                    <div>
                        <select
                            placeholder='Gender'
                            className='block sphere-secondary-bg w-full py-3 px-5 rounded-none'
                            {...register("gender")}>
                            <option value="">Select an option</option>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div>
                        <input placeholder='Phone Number' type='text'
                            className='block sphere-secondary-bg w-full py-3 px-5 rounded-none'
                            {...register("phone")} />
                    </div>
                    <div>
                        <input placeholder='address' type='text'
                            className='block sphere-secondary-bg w-full py-3 px-5 rounded-none'
                            {...register("address")} />
                    </div>
                    <input className='cursor-pointer sphere-primary-bg sphere-secondary font-semibold uppercase py-3' type="submit" />
                </form>
                <div>
                    <small className='text-base block mt-2 text-center font-medium'>Already have an Account? Please <Link to='/login' className='text-amber-500'>Sign In</Link></small>
                </div>
                <div className='divider divide-slate-400 divide-x-2 mt-5 mb-5'></div>
                <LoginWithSocial />
            </div>
        </section>
    );
};

export default Registration;