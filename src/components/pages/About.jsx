import React from 'react';

function About(props) {
    return (
        <div className='w-full min-h-max bg-[rgba(0,0,0,.4)] brightness-95   border-t border-b border-[rgba(156,152,152,.7)]'>
            <div className='max-w-5xl min-h-[500px]  m-auto px-4 flex items-start justify-center flex-col gap-5'>
                <div className='w-full px-4 h-max'>
                    <h2 className='text-5xl minMobil:text-center tablet:text-left'>About Us</h2>
                </div>
                <div className='flex flex-wrap items-start justify-center w-full gap-3 align-baseline'>
                    <div className='flex flex-col max-w-[300px] ga-2'>
                        <h2>Who We Are</h2>
                        <p>We are a leading programming learning center based in the heart of the city. We've been providing a unique learning experience to our students for over a decade.</p>
                    </div>
                    <div className='flex flex-col max-w-[300px] ga-2'>
                        <h2>Why Choose Us</h2>
                        <p>Our courses are designed to help you develop real-world skills that you can apply to your job or business. With our experienced instructors, you'll get a personalized learning experience that matches your skill level and interests.</p>
                    </div>
                    <div className='flex flex-col max-w-[300px] ga-2'>
                        <h2>Our Mission</h2>
                        <p>Our mission is to provide accessible and innovative programming education that empowers learners to achieve their career goals.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;