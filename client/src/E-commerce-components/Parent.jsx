

import React from 'react';
import Card from './Card'; 

const data = [
  {
    title: 'Low Faucet Shower Head',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus omnis consequuntur quos eos vero aliquam',
    imageUrl: 'src/cards1.jpg',
    carbonFootprint: 'Low carbon footprint',
    price: '₹399.00',
    rating: 3, 
    reviews: 86, 
  }
];

const ParentComponent = () => {
  return (
    <div className='flex flex-row justify-center p-10 pl-32'>
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default ParentComponent;
