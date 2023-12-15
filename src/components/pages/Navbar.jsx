import React from 'react';

function Navbar(props) {
    return (
        <div className='w-full min-h-[70px] bg-[rgba(0,0,0,.5)]  fixed '>
            <nav className='flex items-center justify-between minMobil:w-full tablet:w-[70%] m-auto  h-[70px]'>
                <img src={{}} alt="#" />
                <button className='px-3 py-2 bg-[rgba(0,0,0,.5)] border  hover:bg-[rgba(255,255,255)]  text-white hover:text-black rounded-lg text-xl'>Call Me</button>
            </nav>
        </div>
    );
}

export default Navbar