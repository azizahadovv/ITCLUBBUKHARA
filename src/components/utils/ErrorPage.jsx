import React from 'react';
import { Error } from '../imgs/expimg';
import { Link } from 'react-router-dom';

function ErrorPage(props) {
    return (
        <div className='relative flex items-center justify-center h-screen max-w-full scale-in-center' >
            <img className='tablet:max-w-lg minMobil:w-full' src={Error} alt="This is Error Page" />
            <Link to={'/'} className='absolute top-0 my-5 btn btn-danger'>Home</Link>
        </div>
    );
}

export default ErrorPage;