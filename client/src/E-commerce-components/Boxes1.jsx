import React from 'react'

const Boxes1 = () => {
  


  return (
    <>
    
    <div className='flex flex-row p-6 pb-0 justify-center'>
      <div className='relative'>
      <img src="src\browse1.jpg" alt="/" className='h-140 w-100 p-2 mr-2'
        
      />
      <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl text-center'>
        Zero Waste
      </p>
      </div>

      <div className='relative'>
      <img src="src\browse2.jpg" alt="" className='h-140 w-100 p-2 mr-2' />
      <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl justify-center text-center pb-2 '>
        Low Carbon Footprint 
        <div className='border border-1 border-gray-400 flex-grow w-80'></div>
        <h1 className='text-xl text-gray-300 pt-5'>Eco-friendly products aim to minimize carbon footprint through sustainable materials, energy efficiency, and thoughtful product lifecycle management. </h1>
      </p>
      
      </div>

      <div className='relative'>
      <img src="src\browse3.jpg" alt="" className='h-140 w-100 p-2 mr-2'/>
      <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl justify-center text-center '>
          Recycled Products
      </p>
      </div>
    </div>


    </>
          
          
        
  )
}

export default Boxes1