import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <>
            <Swiper
                dir="ltr"
                navigation={true}
                autoplay={{
                    delay: 250,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{ backgroundImage: "url('https://www.shape.com/thmb/juZ1SfooOdjIq6zvXgmsoYRp8Rc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boxing-8fa6221ec7ad4a80ba1e730eb9d1c507.jpg')", backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='bg-gradient-to-r from-[#445760] to-[#44566023] h-full'>
                        <div className='px-2 md:px-0 xl:container mx-auto flex flex-col-reverse md:flex-row md:items-center gap-10 sphere-secondary h-full'>
                            <div className='w-full md:w-7/12'>
                                <h4 className='text-xl md:text-2xl font-playfair'>Uncover the Rich Legacy</h4>
                                <h2 className='font-playfair text-3xl md:text-4xl'>Step into the Ring: Unleash Your Boxing Potential</h2>
                                <p className='font-normal mt-5'>Embark on a captivating exploration of the storied history of boxing. Join us as we delve into the noble art of pugilism, tracing its origins, iconic moments, and legendary fighters. Discover the triumphs, rivalries, and timeless techniques that have defined the sport. Our boxing classes offer an opportunity to immerse yourself in this rich legacy, learn from seasoned trainers, and become part of the next chapter in boxing history. Lace up your gloves, honor the past, and forge your own boxing legacy.</p>
                            </div>
                            <img className='w-full md:w-5/12' src="https://media.istockphoto.com/id/187447577/vector/boxing-match.jpg?s=612x612&w=0&k=20&c=5Q15li_Hw2fmPrj9WgI59gPra-3QyKD3IzHmAKCWcks=" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: "url('https://i.pinimg.com/originals/ba/da/9c/bada9c4934e693809fdc887279988f7c.jpg')", backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='bg-gradient-to-r from-[#445760] to-[#44566023] h-full'>
                        <div className='px-2 md:px-0 xl:container mx-auto flex flex-col-reverse md:flex-row md:items-center gap-10 sphere-secondary h-full'>
                            <div className='w-full md:w-7/12'>
                                <h4 className='text-2xl font-playfair'>Reviving the Golden Era</h4>
                                <h2 className='font-playfair text-4xl'>Cricket Chronicles: Unveiling the Gentleman's Game</h2>
                                <p className='font-normal mt-5'>Step back in time with rare, iconic cricket photos. Immerse yourself in the rich history, legends, and timeless rivalries of the gentleman's game. Celebrate cricket's heritage, embrace nostalgia, and become part of its enduring legacy.</p>
                            </div>
                            <img className='w-full md:w-5/12' src="https://resources.pulse.icc-cricket.com/ICC/photo/2017/01/31/abd1fb54-a565-40eb-9d79-0acb2b16be92/GettyImages-486317210.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: "url('https://i.pinimg.com/originals/ba/da/9c/bada9c4934e693809fdc887279988f7c.jpg')", backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                    <div className='bg-gradient-to-r from-[#445760] to-[#44566023] h-full'>
                        <div className='px-2 md:px-0 xl:container mx-auto flex flex-col-reverse md:flex-row md:items-center gap-10 sphere-secondary'>
                            <div className='w-full md:w-7/12'>
                                <h4 className='text-2xl font-playfair'>Reviving the Golden Era</h4>
                                <h2 className='font-playfair text-4xl'>Cricket Chronicles: Unveiling the Gentleman's Game</h2>
                                <p className='font-normal mt-5'>Step back in time with rare, iconic cricket photos. Immerse yourself in the rich history, legends, and timeless rivalries of the gentleman's game. Celebrate cricket's heritage, embrace nostalgia, and become part of its enduring legacy.</p>
                            </div>
                            <img className='w-full md:w-5/12' src="https://resources.pulse.icc-cricket.com/ICC/photo/2017/01/31/abd1fb54-a565-40eb-9d79-0acb2b16be92/GettyImages-486317210.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </>
    );
};

export default Banner;