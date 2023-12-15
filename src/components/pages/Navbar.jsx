import React from 'react';

function Navbar({ setModalVisible, modalVisible }) {
    return (
        <div className='w-full min-h-[70px] bg-[rgba(0,0,0,.5)]'>
            <nav className='flex items-center justify-between minMobil:w-full tablet:max-w-[900px] m-auto  h-[70px]'>
                <img src={{}} alt="#" />
                <button onClick={() => (setModalVisible(true))} className='tablet:px-3 tablet:py-2 minMobil:px-2 minMobil:py-1  bg-[rgba(0,0,0,.5)] border  hover:bg-[rgba(255,255,255)]  text-white hover:text-black rounded-lg teblet:text-xl minMobil:text-base'>Call Me</button>
            </nav>
        </div>
    );
}

export default Navbar