import React from 'react'

function Banner() {
    return (
        <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
            <img src='https://placehold.co/100x100' alt='banner' width={100} height={100} />
            <div>
                <h2 className='font-bold text-[1.8rem]'>Welcome to <span className='text-primary'>sweetLearn</span> Platform</h2>
                <h2 className='text-gray-500'>What courses are you looking for?</h2>
            </div>
        </div>
    )
}

export default Banner