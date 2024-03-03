import React from 'react';

const BinData = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div>
      {data.map((entry, index) => (
        <div key={index} style={{ marginBottom: '20px'}}>
          <div className='grid grid-cols-5 gap-1 border-b px-8 p-2'>
            <p className='text-gray-500 py-2 text-center'>{entry[0]}</p>
            <p className='text-green-500 font-bold mr-20 ml-5 py-2 text-center'>{entry[1]}</p>
            <p className='text-gray-500 pr-10 py-2 text-center'>{entry[2]}</p>
            <p className='text-gray-500 pr-10 py-2 text-center'>{entry[3]}%</p>
            <p className='text-red-600 font-bold py-2 text-center'>{entry[4]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BinData;
