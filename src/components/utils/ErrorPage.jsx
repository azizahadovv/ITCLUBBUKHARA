import React from 'react';
import { Error } from '../imgs/expimg';

function ErrorPage(props) {
    return (
        <div className='flex items-center justify-center h-screen max-w-full scale-in-center' >
            <img className='tablet:max-w-lg minMobil:w-full' src={Error} alt="This is Error Page" />
        </div>
    );
}

export default ErrorPage;