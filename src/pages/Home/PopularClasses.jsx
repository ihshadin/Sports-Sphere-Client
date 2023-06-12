import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [poClasses, setPoClasses] = useState([]);

    poClasses.sort((a, b) => b.enrolledStudent - a.enrolledStudent)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setPoClasses(data);
            })
    }, [])

    return (
        <section className='py-8 px-3 md:py-12 overflow-hidden'>
            <div className='px-3 xl:px-0 xl:container mx-auto'>
                <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Popular Classes</h2>
                <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">Explore our highly sought-after classes designed to enhance your skills and elevate your performance.</p>
                <div className='grid md:grid-cols-3 gap-6'>
                    {
                        poClasses.slice(0, 6).map(item => (
                            <div key={item._id} className='shadow-xl py-5 md:py-8 px-2 md:px-3 rounded-3xl' data-aos="fade-right">
                                <img className='w-full rounded-2xl object-cover' src={item.classImage} alt="" />
                                <h3 className='font-playfair text-2xl md:text-3xl mt-5 mb-1'>{item.className}</h3>
                                <h3 className='text-xl mb-3'>{item.instructorName}</h3>
                                <p className='text-xl '>Enrolled Students: <span>{item.enrolledStudent}</span></p>
                                <p className='text-xl font-semibold block md:inline md:mr-12'>Available seats: <span>{item.availableSeats}</span></p>
                                <p className='text-xl font-semibold block md:inline'>Price: $<span>{item.price}</span></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularClasses;