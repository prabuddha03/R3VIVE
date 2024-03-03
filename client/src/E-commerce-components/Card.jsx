import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

const Card = ({ title, description, imageUrl, carbonFootprint, price, rating, reviews }) => {
  return (
    <div className='p-10 pl-2'>


                <div className='max-w-sm bg-white shadow-lg rounded-md overflow-hidden border border-gray-300 pl-3 pr-3 pt-3 pb-2'>
                    <img src="../assets/cards1.jpg" alt="/" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Low Faucet Shower Head</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus omnis consequuntur quos eos vero aliquam </p>
                    </div>
                    <div className='flex flex-2 '>
                        <h1 className='flex flex-col-2 pb-2 text-sm ml-1 font-bold text-gray-600 pt-1 pl-2'>
                            <div className="bg-orange-500 h-4 w-4 rounded-full mt-1 mr-1"></div>
                            Low carbon footprint</h1>
                        <div className='flex flex-col-2 pb-2 text-sm ml-1 font-bold text-gray-600'>
                            <img src="src\CO2.jpg" alt="" className='pl-10' />
                            <h2 className='pl-3 text-sm pt-1'>Medium</h2>
                        </div>

                    </div>


                    <div >
                        <div className='flex flex-col-2'>
                            <div className='grid grid-rows-2'>
                                <div className='flex pl-3'>
                                    <h1 className='font-bold text-4xl text-gray-800'>₹399</h1>
                                    <h1 className='font-bold text-2xl pt-2 text-gray-800'>.00</h1>
                                </div>
                                <div className='flex flex-row pl-3 pt-2 text-sm'>
                                    <FaStar className='text-yellow-500 hover:text-yellow-300' />
                                    <FaStar className='text-yellow-500 hover:text-yellow-300' />
                                    <FaStar className='text-yellow-500 hover:text-yellow-300' />
                                    <FaStar className='text-gray-300' />
                                    <FaStar className='text-gray-300' />
                                    <h1 className='text-gray-400 pb-4 pl-1 text-xs'>86Reviews</h1>
                                </div>
                            </div>

                            <div className='p-2 pl-16 pt-5'>
                                <button className='flex bg-green-600 rounded-lg p-2  text-white w-36 hover:bg-green-500'>
                                    <FiShoppingCart className='size-5 ml-2' />
                                    <h1 className='pl-1'>Add to Cart</h1>
                                </button>
                            </div>


                </div>
            </div>
        </div>
    </div>



  );
};

export default Card;
