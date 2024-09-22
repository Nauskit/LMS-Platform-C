import React from 'react'
import Image from 'next/image'

function CourseItem({ course }) {
    return (
        <div className='border rounded-xl shadow-lg hover:scale-105 cursor-pointer
        active:opacity-80'>
            <Image className='rounded-t-xl' src={course?.banner?.url}
                width={500}
                height={150} alt='coursesImage' />
            <div className='flex flex-col gap-1 p-1'>
                <h2 className='font-medium'>{course.name}</h2>
                <h2 className='text-[10px] text-gray-400'>{course.description}</h2>
                <h2 className='text-[15px]'>{course?.free ? 'Free' : 'Paid'}</h2>
            </div>
        </div>
    )
}

export default CourseItem