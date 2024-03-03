import React from 'react';
import { FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiBarChart } from "react-icons/fi";
import { FaTruckMoving } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
    <div className="bg-white w-64 h-screen p-4 flex-shrink-0 border-r-2 border-black/15">
      
      <div className="flex items-center mb-4 border-2 border-spacing-1 p-3 rounded-md border-gray-200 mx-0">
        <div className="bg-green-500 rounded-full p-2 mr-3">
          <FaUser className="text-white" />
        </div>
        <div>
          <p className="font-bold text-gray-800 text-xl">Admin</p>
          <p className="text-sm text-black-600">Operation Head</p>
        </div>
        <div className="ml-auto cursor-pointer">

            <FaChevronUp className='text-gray-600 pl-1'/>
          
          <FaChevronDown className="text-gray-600 pl-1" />
        </div>
      </div>

      
      <p className="text-md text-gray-400 mb-2 ml-3">MANAGEMENT</p>

      
      <ul>
        <li className="mb-2">
          <div className="flex items-center">
            <div className=" bg-gray-500"></div>
                <Link to="/dashboard" className=" text-gray-500 flex hover:bg-gray-200 p-4 w-full rounded-md text-lg hover:text-blue-400"><FiBarChart  className='mt-1 mr-2 text-xl'/>Dashboard</Link>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center">
            <div className=" bg-gray-500 "></div>
            <a href="#" className="text-gray-500 flex hover:bg-gray-200 p-4 w-full rounded-md text-lg hover:text-blue-400"><FaTruckMoving className='mt-1 mr-2 text-xl'/>Garbage trucks</a>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center">
            <div className=" bg-gray-300 "></div>
            <Link to="/bins" className="text-gray-500 flex hover:bg-gray-200 p-4 w-full rounded-md text-lg hover:text-blue-400"><RiDeleteBinLine className='mt-1 mr-2 text-xl'/>Garbage Bins</Link>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center">
            <div className=" bg-gray-300"></div>
            <Link href="#" className="text-gray-500 flex hover:bg-gray-200 p-4 w-full rounded-md text-lg hover:text-blue-400"><GrUserWorker className='mt-1 mr-3 text-xl'/>Workers</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="bg-gray-300"></div>
            <Link to="/complain" className="text-gray-500 flex hover:bg-gray-200 p-4 w-full rounded-md text-lg hover:text-blue-400"><FaRegFileAlt className='mt-1 mr-3 text-xl'/>Complains</Link>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <div className="bg-gray-300"></div>
            <Link to="/car-request" className="text-gray-500 flex hover:bg-gray-200 p-4 w-full rounded-md text-lg hover:text-blue-400"><FaCalendarAlt className='mt-1 mr-3 text-xl'/>Car  Requests</Link>
          </div>
        </li>
      </ul>
    </div>

</div>
  );
};

export default Sidebar;