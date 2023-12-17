import React from 'react'
import "./style.css"

function hero() {
  return (
    <div className='banner_wrappwer_img flex flex-col items-center justify-center'>
      <div className='w-[900px] h-[300p]'>
        <h1 className='text-5xl'>Programming Learning Center</h1>
        <br />
        <p>Welcome to our Programming Learning Center - your one-stop destination for unlocking the world of <br /> technology and programming. With engaging classes, experienced instructors, and hands-on learning, we <br /> provide a rigorous yet fun learning environment. Enroll today and start your journey of discovering the world <br /> of programming.</p>
        <br />
        <button className='p-[10px] text-black rounded bg-purple-500 w-[140px] h-[50px]'>Registration</button>
      </div>
    </div>
  )
}

export default hero
