import React from 'react';
import { BESIC, MOBILE, WEB } from '../imgs/expimg';

function Courses(props) {
    return (
        <div className='min-h-[605px] flex flex-col items-center justify-around bg-[rgba(0,0,0,.4)] brightness-95 border-t border-b border-[rgba(156,152,152,.7)] text-white'>
            <h2 className='mb-[10px]'>Courses Offered</h2>
            <div className="flex flex-wrap justify-around gap-5">
                <div className='w-[290px] h-[350px] flex flex-col rounded items-center justify-between transitionHover hover:bg-[rgba(0,0,0,.3)]'>
                    <img className='w-full h-[170px] rounded-lg' src={BESIC} alt="" />
                    <div className='min-h-[45%] w-full px-2 flex flex-col items-start justify-evenly align-baseline'>
                        <span className='text-2xl minMobil:text-lg'>Programming Basics</span>
                        <p className=' minMobil:text-s'>Learn the basics of programming, including variables, data types, and algorithms. Perfect for beginners!</p>

                    </div>
                </div>
                <div className='w-[290px] h-[350px] flex flex-col rounded items-center justify-between transitionHover hover:bg-[rgba(0,0,0,.3)]'>
                    <img className='w-full h-[170px] rounded-lg' src={WEB} alt="" />
                    <div className='min-h-[45%] w-full px-2 flex flex-col items-start justify-evenly align-baseline'>
                        <span className='text-2xl minMobil:text-lg'>Web Development</span>
                        <p className='minMobil:text-sm'>Build beautiful and responsive websites using the latest web technologies such as HTML5, CSS3, and JavaScript.</p>

                    </div>
                </div>
                <div className='w-[290px] h-[350px] flex flex-col rounded items-center justify-between transitionHover hover:bg-[rgba(0,0,0,.3)]'>
                    <img className='w-full h-[170px] rounded-lg' src={MOBILE} alt="" />
                    <div className='min-h-[45%] w-full px-2 flex flex-col items-start justify-evenly align-baseline'>
                        <span className='text-2xl minMobil:text-lg'>Mobile App Development</span>
                        <p className=' minMobil:text-sm'>Become a mobile app developer by learning to build iOS and Android apps from</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;