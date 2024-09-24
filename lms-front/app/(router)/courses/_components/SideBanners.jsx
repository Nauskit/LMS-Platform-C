import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';

function SideBanners() {


    const [sideBanners, setSideBanners] = useState([]);
    useEffect(() => {
        getSideBanners();
    }, [])

    const getSideBanners = async () => {
        GlobalApi.getSideBanner().then(resp => {
            console.log(resp);
            setSideBanners(resp.sideBanners)
        })
    }


    return (
        <div className='flex flex-col gap-5 items-center border rounded-xl p-4 bg-white'>
            {sideBanners.map((item, index) => (
                <div key={index}>
                    <Image className='rounded-xl cursor-pointer hover:shadow-xl' onClick={() => window.open(item?.url)} src={item.banner.url} alt='banner' width={500} height={300} />
                </div>
            ))}
            <h2>
                Youtube
            </h2>
        </div>
    )
}

export default SideBanners
