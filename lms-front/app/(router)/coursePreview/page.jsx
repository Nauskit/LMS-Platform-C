"use client"

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function CoursePreview({ params }) {
    useEffect(() => {
        console.log(params);
    }, [])
    return (
        <div>CoursePreview</div>
    )
}

export default CoursePreview