import React from 'react'
import "./style.css"

function Hero({ setModalVisible, modalVisible }) {
  return (
    <div className='flex flex-col items-center justify-center w-full p-4 text-white banner_wrappwer_img'>
      <div className='tablet:max-w-[900px] minMobil:w-full min-h-[400px] flex tablet:items-start minMobil:items-center justify-center flex-col gap-3'>
        <h1 className='tablet:text-5xl minMobil:text-4xl minMobil:text-center tablet:text-left'>Programming Learning Center</h1>
        <p className='minMobil:text-center tablet:text-left tablet:text-[16px] minMobil:text-[14px]'>Welcome to our Programming Learning Center - your one-stop destination for unlocking the world of technology and programming. With engaging classes, experienced instructors, and hands-on learning, we  provide a rigorous yet fun learning environment. Enroll today and start your journey of discovering the world  of programming.</p>
        <button onClick={() => (setModalVisible(true))} className='bg-purple-500 rounded minMobil:p-2 tablet:p-3'>Registration</button>
      </div>
    </div>
  )
}
export default Hero
