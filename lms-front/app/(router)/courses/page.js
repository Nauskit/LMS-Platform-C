"use client"

import React from 'react'
import Banner from './_components/Banner'
import Content from './_components/Content'

function Courese() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
            {/* left container */}
            <div className='col-span-3'>
                <Banner />

                <Content />
            </div>
            {/* right constainer */}
            <div>
                Right section
            </div>
        </div>
    )
}

export default Courese