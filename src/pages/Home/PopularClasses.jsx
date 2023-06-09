import React from 'react';

const PopularClasses = () => {

    return (
        <section className='py-8 md:py-12'>
            <div className='px-3 xl:px-0 xl:container mx-auto'>
                <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Popular Classes</h2>
                <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">Explore our highly sought-after classes designed to enhance your skills and elevate your performance.</p>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div className='shadow-xl bg-white py-10 px-4 md:p-10 rounded-3xl' data-aos="fade-right">
                        <img className='w-full md:h-80 rounded-2xl object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ41GumJc1DesyRhtTG0TsEJMYS7DPhYuYj-8ELDI1f0TOYpfbB0dXpUFniwSCOuo634&usqp=CAU" alt="" />
                        <h3 className='font-playfair text-2xl md:text-3xl mt-5 mb-1'>How to learn football?</h3>
                        <h3 className='text-xl mb-3'>Mohammad Ali</h3>
                        <p className='text-xl font-semibold block md:inline md:mr-12 text-gray-500'>Available seats: <span>452</span></p>
                        <p className='text-xl font-semibold block md:inline text-gray-500'>Price: $<span>173</span></p>
                    </div>
                    <div className='shadow-xl bg-white py-10 px-4 md:p-10 rounded-3xl'>
                        <img className='w-full md:h-80 rounded-2xl object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ41GumJc1DesyRhtTG0TsEJMYS7DPhYuYj-8ELDI1f0TOYpfbB0dXpUFniwSCOuo634&usqp=CAU" alt="" />
                        <h3 className='font-playfair text-2xl md:text-3xl mt-5 mb-1'>How to learn football?</h3>
                        <h3 className='text-xl mb-3'>Mohammad Ali</h3>
                        <p className='text-xl font-semibold block md:inline md:mr-12 text-gray-500'>Available seats: <span>452</span></p>
                        <p className='text-xl font-semibold block md:inline text-gray-500'>Price: $<span>173</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularClasses;