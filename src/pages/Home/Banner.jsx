import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    const [sliders, setSliders] = useState([]);
    const [slidesLoaded, setSlidesLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/sliders')
            .then(res => res.json())
            .then(data => {
                setSliders(data);
                setSlidesLoaded(true);
            })
    }, [])
    return (
        <>
            {
                slidesLoaded && (
                    <Swiper
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Navigation, Pagination]}
                        className="mySwiper h-[750px] md:h-[550px]"
                    >
                        {
                            sliders.map(slider => (
                                <SwiperSlide key={slider._id} style={{ backgroundImage: `url(${slider.bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className='bg-gradient-to-r from-[#445760] to-[#44566023] h-full'>
                                        <div className='px-2 md:px-2 xl:container mx-auto flex flex-col-reverse md:flex-row md:items-center justify-center gap-10 sphere-secondary h-full'>
                                            <div className='w-full md:w-7/12'>
                                                <h4 className='text-lg md:text-2xl font-playfair'>{slider.subHeading}</h4>
                                                <h2 className='font-playfair text-2xl md:text-4xl'>{slider.heading}</h2>
                                                <p className='font-normal mt-8'>{slider.description}</p>
                                            </div>
                                            <img className='w-full md:w-5/12' src={slider.image} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper >
                )
            }
        </>
    );
};

export default Banner;