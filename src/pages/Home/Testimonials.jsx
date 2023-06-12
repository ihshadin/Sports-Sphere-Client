import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://sports-sphere-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <section className='py-10 px-3 md:py-20'>
            <div className='px-3 xl:px-0 xl:container mx-auto'>
                <h2 className='text-3xl md:text-5xl font-playfair text-center' data-aos="zoom-in">Inspiring Testimonials</h2>
                <p className='max-w-xl w-full text-center mx-auto mt-2 mb-10' data-aos="fade-up">Learn from the best with our highly acclaimed instructors who bring expertise and passion to every class.</p>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => (
                            <SwiperSlide key={review._id}>
                                <div>
                                    <p className='testimonial-text-arrow relative bg-slate-200 sphere-primary px-3 py-5 rounded-lg'>
                                        {review.review}
                                    </p>
                                    <div className='flex items-center justify-center gap-5 mt-6'>
                                        <img className='w-16 h-16 object-cover rounded-full' src={review.profilePic} alt="" />
                                        <h4 className='font-playfair text-xl md:text-2xl'>{review.name}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper >
            </div>
        </section>
    );
};

export default Testimonials;