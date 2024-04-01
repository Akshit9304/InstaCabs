"use client";

import CArlist from '@/app/data/CArlist'
import Image from '@/node_modules/next/image'
import React, { useState } from 'react'

function Cars({HandlerFunction}) {
    const [selectedcar, setSelectedCar]=useState<any>()
  return (
    <div className='mt-3'>
        <h2 className='font-semibold'>Select Car</h2>
        <div className='grid grid-cols-3 
        md:grid-cols-2
        lg:grid-cols-3'>
            {CArlist.map((item,index)=>(
                <div key={index} className={`m-2 p-3
                border-[2px] rounded-md
                hover:border-yellow-400
                cursor-pointer 
                ${index==selectedcar
                    ?'border-yellow-400 border-[2px]'
                    :null}`}
                onClick={()=>{
                    setSelectedCar(index)
                    HandlerFunction(index)}
                }>
                    <Image src={item.image}
                    alt={item.name }
                    width={75}
                    height={90}
                    className='w-full'
                    />
                    <h2 className='text-[12px] text-gray-500 mt-3'>{item.name }
                    <span className='float-right font-medium text-black'> ₹{item.charges}/min</span></h2>

                </div>
            ))}
        </div>

    </div>
  )
}

export default Cars