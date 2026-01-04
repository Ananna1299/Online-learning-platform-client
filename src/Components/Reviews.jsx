import React, { use } from 'react';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewPromise}) => {
     const reviewData=use(reviewPromise)
    return (
        <div className='mt-16'>
            <div className='flex flex-col '>
               
                <h2 className='font-semibold text-blue-900 mb-10  text-xl dark:text-blue-400'>
                    Reviews</h2>
                
            </div>

            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          scale: 0.75,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >

        { reviewData.map((review,index)=>(
            <SwiperSlide key={index}>
          <ReviewCard review={review} ></ReviewCard>
        </SwiperSlide>
        ))}

        
        
      </Swiper>

            
        </div>
    );
};

export default Reviews;