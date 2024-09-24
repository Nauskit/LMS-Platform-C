import React from 'react'
import VideoPlayer from './VideoPlayer'
import Markdown from 'react-markdown'

function CourseVideoDescription({ courseInfo }) {
    console.log(courseInfo.chapter[1])
    return (
        <div>
            <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
            <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.description}</h2>
            <VideoPlayer videoUrl={courseInfo?.chapter[1]?.video?.url} />
            <h2 className='mt-5 text-[17px] font-semibold'>About This Course</h2>
            <Markdown className='text-[14px] font-light-mt-2 leading-6'>{courseInfo.description}
            </Markdown>
        </div>
    )
}

export default CourseVideoDescription