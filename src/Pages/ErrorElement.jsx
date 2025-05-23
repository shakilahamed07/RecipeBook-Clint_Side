import React from 'react';
import ErrorPage from '../assets/404-page.png'
import { Link } from 'react-router';

const ErrorElement = () => {
    return (
        <div className='max-w-[1350px] mx-auto bg-base-300 rounded-b-full pb-20'>
        <div className='flex justify-center'>
            <img src={ErrorPage} alt="" />
        </div>
        <div className="text-center">
        <Link
          to={`/`}
          className="border border-primary text-white bg-primary font-bold rounded-full hover:bg-secondary py-3 px-12"
        >
          Back Home
        </Link>
      </div>
        </div>
        
    );
};

export default ErrorElement;