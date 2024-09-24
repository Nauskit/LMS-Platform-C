import React from 'react'
import { Button } from '@/components/ui/button'

function CourseEnroll() {
    const subscribe = false;
    return (
        <div className='p-3 text-center rounded-sm bg-primary '>
            <h2 className='text-[20px] text-white font-bold'>Enroll Course</h2>

            {/* User has Subscriber */}
            {subscribe ? <div className='flex flex-col gap-3 mt-3'>
                <h2 className='text-white font-light'>Enroll Now to Start Learning</h2>
                <Button className='bg-white text-primary hover:bg-white
            hover:text-primary'>Enroll Now</Button>
            </div>

                : <div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-white font-light'>
                        Monthly Subcriber and Get Access to All Courses
                    </h2>
                    <Button className='bg-white text-primary hover:bg-white
            hover:text-primary'>Subscribe just 500 Bath/year</Button>
                </div>}
            {/* User Does not have subscriber */}

        </div>
    )
}

export default CourseEnroll