import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


const Search = () => {
  return (
  <div>
    <div className="relative m-10 pl-24 ml-48">
      <div className="flex items-center shadow-lg bg-white rounded-md h-12 w-[900px]">
        <input
          type="text"
          className="px-5 flex-1 focus:outline-none text-xl"
          placeholder="What are you looking for?"
        />
        <div className="flex space-x-8 pr-2">
          <CiSearch className="h-9 w-9 fill-current text-black" />
          <CiHeart className="h-9 w-9 fill-current text-black" />
          <CiShoppingCart className="h-9 w-9 fill-current text-black" />
        </div>
      </div>
    </div>



    </div>
  )
}

export default Search