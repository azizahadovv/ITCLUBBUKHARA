import React from 'react';
import { LOGO } from '../imgs/expimg';
import { Link } from 'react-router-dom';

function Navbar({ setModalVisible, modalVisible }) {
    return (
        <div className='w-full min-h-[70px] bg-[rgba(0,0,0,.8)] fixed z-50 px-5'>
            <nav className='flex items-center justify-between minMobil:w-full tablet:max-w-[900px] m-auto  h-[70px]'>
                <Link to={'/'} className='flex items-center justify-center h-full overflow-hidden no-underline align-baseline'>
                    <img className='w-20 h-full -rotate-[5deg] flex items-center justify-center' src={LOGO} alt="#" />
                    <span className='flex items-center justify-center text-xl text-white'>IT.CLUB BUKHARA</span>
                </Link>
                <button onClick={() => (setModalVisible(true))} className='tablet:px-3 tablet:py-2 minMobil:px-3 minMobil:py-2 tablet:text-white minMobil:text-white bg-[rgba(0,0,0,.5)] border  hover:bg-[rgba(255,255,255)]   hover:text-black rounded-lg teblet:text-xl minMobil:text-base'>Call Me</button>
            </nav>
        </div>
    );
}

export default Navbar