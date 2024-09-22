"use client"

import React from 'react'
import Banner from './_components/Banner'
import Content from './_components/Content'
import SideBanners from './_components/SideBanners'

function Courese() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 p-5 gap-5'>
            {/* left container */}
            <div className='col-span-3'>
                <Banner />

                <Content />
            </div>
            {/* right constainer */}
            <div className='p-5 bg-white rounded-xl'>
                <SideBanners />
            </div>
        </div>
    )
}

export default Courese