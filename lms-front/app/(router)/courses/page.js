import React from 'react'
import Banner from './_components/Banner'

function Courese() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
            {/* left container */}
            <div className='col-span-2'>
                <Banner />
            </div>
            {/* right constainer */}
            <div>
                Right section
            </div>
        </div>
    )
}

export default Courese