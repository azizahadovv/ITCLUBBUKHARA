import React, { useState } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { LOGO } from '../imgs/expimg';


function Approach(props) {

    const [controlledSwiper, setControlledSwiper] = useState(null);


    return (
        <div className='w-full min-h-[400px] bg-[rgba(0,0,0,.4)] border-y flex items-center justify-center '>
            <Swiper
                className='bg-red-400 tablet:w-[950px] minMobil:w-full'
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='flex items-center justify-center max-w-sm bg-yellow-500'>
                        <img src={LOGO} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-center max-w-sm bg-yellow-500'>
                        <img src={LOGO} alt="" />
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
}

export default Approach;