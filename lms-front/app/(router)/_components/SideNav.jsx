import React from 'react'
import { LibraryBig, Sparkles, GraduationCap, Rabbit } from 'lucide-react'
import Link from 'next/link'

function SideNav() {
    const menu = [
        {
            id: 1,
            name: 'All Courses',
            icon: LibraryBig
        },
        {
            id: 2,
            name: 'Subscribe',
            icon: Sparkles
        },
        {
            id: 3,
            name: 'Tutor',
            icon: GraduationCap
        },
    ]
    return (
        <div className='p-5 bg-white shadow-sm border h-screen'>
            <Link href='/courses'>
                <div className='flex gap-3 justify-center text-[1.5rem] items-center cursor-pointer'>
                    <Rabbit />
                    <h2><span className='text-primary'>Sweet</span>Learn</h2>
                </div>
            </Link>
            <hr className='mt-7'></hr>
            <div className='mt-8'>
                {menu.map((item, index) => (
                    <div className='group flex gap-3 mt-1 p-3 text-[1.5rem] items-center 
                    text-gray-500 cursor-pointer 
                    hover:bg-primary 
                    hover:text-white rounded-md transition-all ease-in-out duration-200'>
                        <item.icon className='group-hover:animate-bounce' />
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav