import React from 'react'
import { FaPaintBrush, FaVenus } from 'react-icons/fa';
import { FaRegBuilding } from "react-icons/fa";
import { IoWoman } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { ImLeaf } from "react-icons/im";
import { GiBowTieRibbon } from "react-icons/gi";


const CategoryBox = ({ icon, text }) => {
    return (
      <div className="flex flex-col items-center p-7 border-2 border-gray-300 rounded-md m-2 mr-7 ">
        {icon}
        <span className="mt-5">{text}</span>
      </div>
    );
  };
  

const Boxes = () => {
  return (
    <div>

    <div className="flex ml-40 pl-20 mt-7">
      <CategoryBox icon={<FaRegBuilding className="text-gray-800 h-14 w-14" />} text="Household" />
      <CategoryBox icon={<FaPaintBrush className="text-gray-800 h-14 w-14 ml-2 mr-2" />} text="Art & Craft" />
      <CategoryBox icon={<IoWoman className="text-gray-800 h-14 w-14 ml-2 mr-2" />} text="Women"/>
      <CategoryBox icon={<IoIosMan className="text-gray-800 h-14 w-14 ml-2 mr-2" />} text="Men"/>
      <CategoryBox icon={<ImLeaf className="text-gray-800 h-14 w-14" />} text="Gardening"/>
      <CategoryBox icon={<GiBowTieRibbon className="text-gray-800 h-14 w-14" />} text="Accessories"/>
      
      
    </div>

    </div>
  )
}

export default Boxes