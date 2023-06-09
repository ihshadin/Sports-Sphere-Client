import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <section className='py-10 md:py-20'>
            <div className='px-3 xl:px-0 xl:container mx-auto'>
                <h2 className='text-3xl md:text-5xl font-playfair text-center'>Glowing Reviews</h2>
                <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10'>Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class.</p>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <p className='bg-slate-200 px-3 py-5 rounded-lg'>
                                Discover the heartfelt feedback from our delighted clients,
                                sharing their remarkable experiences and incredible progress.
                            </p>
                            <div className='flex items-center justify-center gap-5 mt-4'>
                                <img className='w-16 h-16 object-cover rounded-full' src="https://www.pexels.com/photo/771742/download/" alt="" />
                                <h4 className='font-playfair text-2xl'>Mohammad Ali</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper >
            </div>
        </section>
    );
};

export default Testimonials;