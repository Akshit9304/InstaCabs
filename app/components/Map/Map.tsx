import Image from '@/node_modules/next/image'
import React from 'react'

function Map() {
  return (
    <div >
        <div className='flex justify-center items-center mt-5 m-2 p-5
    border-[2px] rounded-md'>
        <Image src='/Untitled.png'
            alt='map'
            width={820}
            height={600}

            />
        </div>
        
    </div>
  )
}

export default Map