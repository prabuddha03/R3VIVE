import React from 'react'
import {useState} from 'react';




const Navbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <div>
    <nav className="bg-white ">
      <div className="flex items-center justify-between shadow-lg px-2 md:px-10 py-3">

        <div className="flex items-center md:pl-5">
          <a href="#" className="text-xl font-semibold text-gray-500 hover:text-gray-700 transition duration-300">R3VIVE</a>
        <div className="flex space-x-4 p-3 pl-5">
          <a href="#" className="text-gray-500 text-xl font-bold md:pl-36 hover:text-gray-700 transition duration-300">Home</a>
          <div className="relative group">
                <div
                  onClick={toggleServicesDropdown}
                  className="text-gray-500 text-xl font-semibold flex items-center cursor-pointer pl-5 hover:text-gray-700 transition duration-300 md:pl-36 "
                >
                  Services
                </div>
                
                
              </div>

          
            
            

          <a href="#" className="text-gray-500 text-xl font-semibold pl-5 hover:text-gray-700 transition duration-300 md:pl-36">Our Store</a>
          <a href="#" className="text-gray-500 text-xl font-semibold pl-5 hover:text-gray-700 transition duration-300 md:pl-36">Blogs</a>
          <a href="#" className="text-gray-500 text-xl font-semibold pl-5 hover:text-gray-700 transition duration-300 md:pl-36">Contact Us</a>
        <div className='pl-24'>
          <div className="bg-green-300 h-8 w-8 rounded-full border border-black"></div>
        </div>
        </div>
        </div>
      </div>

     
      
      
    </nav>

    </div>

    
  )
}

export default Navbar;