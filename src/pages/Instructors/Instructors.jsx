import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const [allInstructor, setAllInstructor] = useState([]);

    useEffect(() => {
        fetch('https://sports-sphere-server.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                setAllInstructor(data);
            })
    }, [])
    return (
        <>
            <Helmet>
                <title>Sports Sphere | Instructors</title>
            </Helmet>
            <section className='py-10 px-3 md:py-20'>
                <div className='px-3 xl:px-0 xl:container mx-auto'>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center mb-8'>Our Instructors</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
                        {
                            allInstructor.map(instructor => (
                                <div key={instructor._id} className='shadow-xl p-10 rounded-3xl' data-aos="fade-left">
                                    <img className='w-40 h-40 mx-auto rounded-full object-cover' src={instructor.photo} alt="" />
                                    <h3 className='font-playfair text-3xl mt-5 mb-1 text-center'>{instructor.name}</h3>
                                    <p className='text-base text-gray-400 text-center'>{instructor.email}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Instructors;