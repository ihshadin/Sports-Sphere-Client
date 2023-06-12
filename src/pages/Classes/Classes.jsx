import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useUserRole from '../../hooks/useUserRole';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useAuth();
    const [userRole] = useUserRole();
    const location = useLocation();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();

    const handleSelectClass = item => {
        const seClaInfo = {
            stuEmail: user?.email,
            itemId: item._id,
            name: item.className,
            image: item.classImage,
            insName: item.instructorName,
            insEmail: item.instructorEmail,
            price: item.price,
            enStu: item.enrolledStudent,
        }
        if (user) {
            axiosSecure.post('seClasses', seClaInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire(
                            'Good News!',
                            'You Select a Class!',
                            'success'
                        )
                    }
                })
        } else {
            Swal.fire({
                title: 'Not Login User!',
                text: "You need to login first to select class",
                icon: 'info',
                confirmButtonColor: '#14b8a6',
                confirmButtonText: 'Sure'
            }).then((result) => {
                navigate('/login', { state: { from: location } })
            })
        }
    }

    useEffect(() => {
        fetch('https://sports-sphere-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>Sports Sphere | Classes</title>
            </Helmet>
            <section className='py-10 px-3 md:py-20'>
                <div className='px-3 xl:px-0 xl:container mx-auto'>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center mb-8'>Our Classes</h2>
                    <div className='grid md:grid-cols-3 gap-6'>
                        {
                            classes.map(item => (
                                <div key={item._id} className={`shadow-xl py-5 md:py-8 px-2 md:px-3 rounded-3xl ${item.availableSeats === 0 && 'bg-red-500 bg-opacity-20'}`}>
                                    <img className='w-full h-48 md:h-60 rounded-2xl object-cover' src={item.classImage} alt="" />
                                    <h3 className='font-playfair text-2xl md:text-3xl mt-5 mb-1'>{item.className}</h3>
                                    <h3 className='text-xl mb-3'>{item.instructorName}</h3>
                                    <p className='text-gray-500'>Enrolled Students: <span>{item.enrolledStudent}</span></p>
                                    <p className='font-semibold block md:inline md:mr-12 text-gray-500'>Available seats: <span>{item.availableSeats}</span></p>
                                    <p className='font-semibold block md:inline text-gray-500'>Price: $<span>{item.price}</span></p>
                                    <button
                                        onClick={() => handleSelectClass(item)}
                                        disabled={userRole.role === 'instructor' || userRole.role === 'admin' || item.availableSeats === 0}
                                        className='btn sphere-primary-bg text-white font-normal border border-[#445760] rounded-none hover:bg-white hover:text-[#445760] text-lg px-10 py-3 mt-5 h-auto block mx-auto'
                                    >Select the Course</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Classes;