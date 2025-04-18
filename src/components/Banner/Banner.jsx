import React from 'react';

import book from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='bg-[#1313130D] rounded-4xl flex justify-around items-center p-20 w-full mx-auto'>
            <div className='flex-1'>
                <h1 className='text-5xl mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Des</h1>
                <button className='btn btn-success'>view the list</button>
            </div>
            <div className='flex-1'>
                <img className='' src={book} alt="" />
            </div>
        </div>
    );
};

export default Banner;