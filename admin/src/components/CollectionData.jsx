import React from 'react'

const CollectionData = ({data}) => {
  return (
    <div>
      {data.map((entry, index) => (
        <div key={index} style={{ marginBottom: '20px'}}>
        <div className='grid grid-cols-5 gap-1 border-b px-8 p-2'>
            <p className='text-gray-500 py-2 text-center'>{entry.Route}</p>
            <p className='text-green-500 font-bold mr-20 ml-5 py-2 text-center'>{entry.Truck}</p>
            <p className='text-gray-500 pr-10 py-2 text-center'> {entry.Staffs.join(', ')}</p>
            <p className='text-gray-500 pr-10 py-2 text-center'> {entry.garbage} Kg</p>
            <p className='text-red-600 font-bold py-2 text-center'> {entry.completion} %</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CollectionData
