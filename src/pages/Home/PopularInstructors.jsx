import React from 'react';

const PopularInstructors = () => {
    return (
        <section className='py-10 md:py-20 overflow-hidden'>
            <div className='px-3 xl:px-0 xl:container mx-auto'>
                <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Our Instructors</h2>
                <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class.</p>
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
                    <div className='shadow-xl p-10 rounded-3xl' data-aos="fade-left">
                        <img className='w-3/4 mx-auto rounded-full object-cover' src="https://media.licdn.com/dms/image/C4E03AQHKNNHjH4wyww/profile-displayphoto-shrink_800_800/0/1517453895417?e=2147483647&v=beta&t=gmW485qaGrjoN5A_00zFX63dkrww-wXZVhK4Cvs8ZNs" alt="" />
                        <h3 className='font-playfair text-4xl mt-5 mb-1 text-center'>Mohammad Ali</h3>
                        <p className='text-base text-gray-400 text-center'>mohammadali@gmail.com</p>
                    </div>
                    <div className='shadow-xl p-10 rounded-3xl'>
                        <img className='w-3/4 mx-auto rounded-full object-cover' src="https://media.licdn.com/dms/image/C4E03AQHKNNHjH4wyww/profile-displayphoto-shrink_800_800/0/1517453895417?e=2147483647&v=beta&t=gmW485qaGrjoN5A_00zFX63dkrww-wXZVhK4Cvs8ZNs" alt="" />
                        <h3 className='font-playfair text-4xl mt-5 mb-1 text-center'>Mohammad Ali</h3>
                        <p className='text-base text-gray-400 text-center'>mohammadali@gmail.com</p>
                    </div>
                    <div className='shadow-xl p-10 rounded-3xl'>
                        <img className='w-3/4 mx-auto rounded-full object-cover' src="https://media.licdn.com/dms/image/C4E03AQHKNNHjH4wyww/profile-displayphoto-shrink_800_800/0/1517453895417?e=2147483647&v=beta&t=gmW485qaGrjoN5A_00zFX63dkrww-wXZVhK4Cvs8ZNs" alt="" />
                        <h3 className='font-playfair text-4xl mt-5 mb-1 text-center'>Mohammad Ali</h3>
                        <p className='text-base text-gray-400 text-center'>mohammadali@gmail.com</p>
                    </div>
                    <div className='shadow-xl p-10 rounded-3xl'>
                        <img className='w-3/4 mx-auto rounded-full object-cover' src="https://media.licdn.com/dms/image/C4E03AQHKNNHjH4wyww/profile-displayphoto-shrink_800_800/0/1517453895417?e=2147483647&v=beta&t=gmW485qaGrjoN5A_00zFX63dkrww-wXZVhK4Cvs8ZNs" alt="" />
                        <h3 className='font-playfair text-4xl mt-5 mb-1 text-center'>Mohammad Ali</h3>
                        <p className='text-base text-gray-400 text-center'>mohammadali@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularInstructors;