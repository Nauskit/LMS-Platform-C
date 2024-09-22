import React, { useEffect, useState } from 'react'
import getCoursesList from '@/app/_utils/GlobalApi';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import CourseItem from './CourseItem';


function Content() {
    const [courseLists, setCourseList] = useState([]);
    useEffect(() => {
        getAllCourses();
    }, [])

    const getAllCourses = async () => {
        const result = await getCoursesList()
        console.log(result)
        setCourseList(result?.courseLists)
    }
    return (
        <div className='p-5 bg-white rounded-lg mt-3'>
            <div className='flex items-center justify-between'>
                <h2 className='text-[20px] font-bold text-primary'>All Course</h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">All</SelectItem>
                        <SelectItem value="dark">Paid</SelectItem>
                        <SelectItem value="system">Free</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            {/* Display */}
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {courseLists.map((item, index) => (
                    <div key={index}>
                        <CourseItem course={item} />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Content