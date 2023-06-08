import React from 'react';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    return (
        <>
            <Helmet>
                <title>Sports Sphere | Classes</title>
            </Helmet>
            <section className='py-10 md:py-20'>
                <div className='px-3 xl:px-0 xl:container mx-auto'>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center mb-8'>Our Classes</h2>
                    <div className='grid md:grid-cols-2 gap-8'>
                        <div className='shadow-xl bg-white py-10 px-4 md:p-10 rounded-3xl'>
                            <img className='w-full md:h-80 rounded-2xl object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ41GumJc1DesyRhtTG0TsEJMYS7DPhYuYj-8ELDI1f0TOYpfbB0dXpUFniwSCOuo634&usqp=CAU" alt="" />
                            <h3 className='font-playfair text-2xl md:text-3xl mt-5 mb-1'>How to learn football?</h3>
                            <h3 className='text-xl mb-3'>Mohammad Ali</h3>
                            <p className='text-xl font-semibold block md:inline md:mr-12 text-gray-500'>Available seats: <span>452</span></p>
                            <p className='text-xl font-semibold block md:inline text-gray-500'>Price: $<span>173</span></p>
                            <button className='sphere-primary-bg text-white border border-[#445760] hover:bg-white hover:text-[#445760] text-lg px-10 py-3 mt-5 h-auto block mx-auto'>Select the Course</button>
                        </div>
                        <div className='shadow-xl bg-white py-10 px-4 md:p-10 rounded-3xl'>
                            <img className='w-full md:h-80 rounded-2xl object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ41GumJc1DesyRhtTG0TsEJMYS7DPhYuYj-8ELDI1f0TOYpfbB0dXpUFniwSCOuo634&usqp=CAU" alt="" />
                            <h3 className='font-playfair text-2xl md:text-3xl mt-5 mb-1'>How to learn football?</h3>
                            <h3 className='text-xl mb-3'>Mohammad Ali</h3>
                            <p className='text-xl font-semibold block md:inline md:mr-12 text-gray-500'>Available seats: <span>452</span></p>
                            <p className='text-xl font-semibold block md:inline text-gray-500'>Price: $<span>173</span></p>
                            <button className='sphere-primary-bg text-white border border-[#445760] hover:bg-white hover:text-[#445760] text-lg px-10 py-3 mt-5 h-auto block mx-auto'>Select the Course</button>
                        </div>
                        <div className='shadow-xl bg-white py-10 px-4 md:p-10 rounded-3xl'>
                            <img className='w-full md:h-80 rounded-2xl object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ41GumJc1DesyRhtTG0TsEJMYS7DPhYuYj-8ELDI1f0TOYpfbB0dXpUFniwSCOuo634&usqp=CAU" alt="" />
                            <h3 className='font-playfair text-2xl md:text-3xl mt-5 mb-1'>How to learn football?</h3>
                            <h3 className='text-xl mb-3'>Mohammad Ali</h3>
                            <p className='text-xl font-semibold block md:inline md:mr-12 text-gray-500'>Available seats: <span>452</span></p>
                            <p className='text-xl font-semibold block md:inline text-gray-500'>Price: $<span>173</span></p>
                            <button className='sphere-primary-bg text-white border border-[#445760] hover:bg-white hover:text-[#445760] text-lg px-10 py-3 mt-5 h-auto block mx-auto'>Select the Course</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Classes;