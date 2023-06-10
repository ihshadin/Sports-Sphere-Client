import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LoginWithSocial from '../../components/LoginWithSocial/LoginWithSocial';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { createUser, signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleRegister = (data) => {
        const saveUser = {
            name: data.fullName,
            email: data.email,
            photo: data.photo,
            gender: data.gender,
            phoneNumber: data.phone,
            address: data.address,
            role: 'student',
        }
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                updatedUserData(createdUser, data.fullName, data.photo)
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: "You are successfully create an Account!",
                                icon: 'success',
                                confirmButtonColor: '#14b8a6',
                                confirmButtonText: 'OK'
                            }).then((result) => {
                                navigate(from, { replace: true })
                            })
                        }
                    })
                reset();
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
                    <div className='relative'>
                        <input placeholder='Password' type={showPassword ? 'text' : 'password'}
                            className='block sphere-secondary-bg w-full py-3 px-5 rounded-none'
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} />
                        {errors.password?.type === 'required' && <small>Password is required</small>}
                        {errors.password?.type === 'minLength' && <small>Password must be at least 6 characters</small>}
                        {errors.password?.type === 'pattern' && <>
                            {!/(?=.*[A-Z])/.test(watch("password")) && (
                                <small>Password must have at least one UPPERCASE letter</small>
                            )}
                            {/(?=.*[A-Z])/.test(watch("password")) && !/(?=.*[!@#$&*])/.test(watch("password")) && (
                                <small>Password must have at least one Special Charecter</small>
                            )}
                        </>}
                        <span className='text-2xl sphere-primary opacity-50 cursor-pointer absolute top-1/2 -translate-y-1/2 right-5' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div>
                        <input placeholder='Confirm Password' type={showPassword ? 'text' : 'password'}
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
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
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