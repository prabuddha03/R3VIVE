import React from 'react'

const ProgressBar = ({value}) => {
    const getColor = (value) => {
        if (value <= 25) {
          return 'red'; 
        } else if (value <= 75) {
          return 'orange'; 
        } else {
          return 'green'; 
        }
      };

      return (
        <div>
          <div
            style={{
              width: `${value}%`,
              backgroundColor: getColor(value),
              height: '10px',
              transition: 'width 0.5s ease-in-out',
            }}
            className='rounded-lg'
          />
        </div>
      );
}

const CurrentProgress = () => {

  return (
    <div className='border-2 w-[300px] rounded-lg p-5'>
      <p className='text-2xl font-semibold text-green-700'>Truck No: #52</p>
      <p className='text-lg font-semibold'>Route No: #E25</p>
      <p className='font-light'>Started At: 11:00 Am</p>
      <p className='text-2xl font-semibold'>Aloke & Ravi</p>
      <div className='mt-2'><ProgressBar value={60} /></div>
    </div>
  )
}

export default CurrentProgress
