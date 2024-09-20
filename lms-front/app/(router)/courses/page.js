import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Courese() {
    return (
        <div className='p-6'>
            <Link href='/tutor/create'>
                <Button>
                    New Courses
                </Button>
            </Link>
        </div>
    )
}

export default Courese