import React from 'react'
import heroImg from '/src/assets/heroImg.png'

const Hero = () => {
  return (
    <div className='h-[608px] bg-[#F5FFCE] flex flex-row justify-around  items-center'>
      <div id='content' className='flex flex-col'>
      <div className="w-[716px] text-green-900 text-6xl font-semibold font-[poppins] leading-[82.42px] tracking-widest cursor-pointer">Lorem ipsum dolor <br/>sit amet, consecte<br/>tur adipiscing</div>
      <div className="w-[716px] text-green-900 text-opacity-70 text-[21.02px] font-normal font-[poppins] leading-[29.19px] tracking-wide cursor-pointer">Proin auctor ante sit amet justo bibendum, sit amet pharetra ex laoreet. Nulla euismod odio vel eros luctus, nec fringilla libero laoreet. Vestibulum ante ipsum primis</div>
      </div>
      <div id='image'>
        <img src={heroImg} />
      </div>
    </div>
  )
}

export default Hero
