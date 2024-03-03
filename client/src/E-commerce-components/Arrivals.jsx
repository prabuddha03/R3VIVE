import React from 'react'
import { TbRectangleVerticalFilled } from "react-icons/tb";

const Arrivals = () => {
  return (
    <div className='pl-36'>
        <TbRectangleVerticalFilled className='text-green-700 h-14 w-8'/>
        <h1 className='text-xs text-green-600 font-bold pl-1'>Featured</h1>
        <p className='text-3xl font-bold pt-5 pb-5'>New Arrivals</p>

        <div className='flex flex-cols-2 relative'>
            <img src="src\arrival1.jpg" alt="" className='pr-6 w-120 h-92'/>
                <div className='absolute  transform -translate-x-1 -translate-y-1 text-white text-xl pt-64 mt-64 pl-10' >
                    <h1 className='font-bold text-2xl'>Jute Bag</h1>

                    <p className='text-sm text-gray-200'>lack and White version of the PS5 coming out on sale. </p>
                    <p className='text-sm pt-3 hover:text-gray-300'>Shop Now</p>
                <div className='border-b w-16'></div>
            </div>
            <div>
            <img src="src/chair.jpg" alt="" className='h-100 w-120 pl-10 relative'/>
                <div className='absolute left-1/3 transform -translate-x-5/2 -translate-y-1/2 text-white text-xl pb-32 mr-44 pl-24'>
                    <p className='font-bold text-2xl'>Furniture's Collections</p>
                    <h1 className='text-sm text-gray-200'>Featured woman collections that give you another vibe.</h1>
                    <p className='text-sm pt-3 hover:text-gray-300'>Shop Now</p>
                    <div className='border-b w-16'></div>
                </div>
                <div className='flex flex-cols-2 relative'>
                    <img src="src\clothingbag.jpg" alt="" className='pt-10 pl-10'/>
                        <div className='absolute left-1 bottom-3 transform -translate-x-1 -translate-y-1 text-white text-xl pl-20 pt-84'>
                            <p className='font-bold text-2xl'>Clothing</p>
                            <h1 className='text-sm text-gray-200'>Amazon wireless speakers</h1>
                            <p className='text-sm pt-3 hover:text-gray-300'>Shop Now</p>
                            <div className='border-b w-16'></div>
                        </div>
                    <img src="src\mask.jpg" alt="" className='pt-10 pl-8' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Arrivals