import React, { useEffect, useState } from 'react';

const PopularInstructors = () => {
    const [topInstructor, setTopInstructor] = useState([]);

    useEffect(() => {
        fetch('https://sports-sphere-server.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                setTopInstructor(data);
            })
    }, [])
    return (
        <section className='py-10 px-3 md:py-20 overflow-hidden'>
            <div className='px-3 xl:px-0 xl:container mx-auto'>
                <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Our Instructors</h2>
                <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class.</p>
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {
                        topInstructor.slice(0, 6).map(instructor => (
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
    );
};

export default PopularInstructors;