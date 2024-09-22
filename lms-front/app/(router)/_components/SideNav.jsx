"use client"
import React, { useEffect } from 'react'
import { LibraryBig, Sparkles, GraduationCap, Rabbit } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SideNav() {
    const menu = [
        {
            id: 1,
            name: 'All Courses',
            icon: LibraryBig,
            path: '/courses'
        },
        {
            id: 2,
            name: 'Subscribe',
            icon: Sparkles,
            path: '/subscribe'
        },
        {
            id: 3,
            name: 'Tutor',
            icon: GraduationCap,
            path: '/tutor'

        },
    ]

    const path = usePathname();
    useEffect(() => {
        console.log("path", path);
    }, [])
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
                    <Link href={item.path}>
                        <div className={`group flex gap-3 mt-1 p-3 text-[1.5rem] items-center 
                    text-gray-500 cursor-pointer 
                    hover:bg-primary 
                    hover:text-white rounded-md transition-all ease-in-out duration-200
                    ${path.includes(item.path) && 'bg-primary text-white'}`}>
                            <item.icon className='group-hover:animate-bounce' />
                            <h2>{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav