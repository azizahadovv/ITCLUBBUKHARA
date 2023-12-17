import React from 'react';

function Introduction(props) {
    return (
        <div className='w-full h-[340px] bg-[rgba(0,0,0,.4)] brightness-95 flex items-center justify-center border-t border-b border-[rgba(156,152,152,.7)]'>
            <div className='text-center'>
                <span className='text-4xl text-white'>Introduction</span>
                <p className='text-xl text-white mt-7'>Programming is an essential skill in today's digital world. Our Programming Learning Center provides the <br /> perfect platform for learners of all levels to master programming concepts and technologies. With our <br /> courses and experienced instructors, we make learning both fun and effective.</p>
            </div>
        </div>
    );
}

export default Introduction;