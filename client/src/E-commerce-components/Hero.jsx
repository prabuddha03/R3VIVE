import React from 'react'

const Hero = () => {
  return (
    <div>

<div className="relative h-screen flex items-center justify-center">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../herovideo.mp4" type="video/mp4" />
        
      </video>

      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl mb-4 text-green-200">Shop sustainably, live affordably !!</h1>
        <p className="text-lg mb-6 pl-44 pr-44 text-gray-300 pt-2">"Explore guilt-free living with our eco-friendly store! From biodegradable home essentials to sustainable gardening, shop affordably for a happier planet. Happy shopping!"</p>
        <button className="bg-gray-300 text-gray-800 font-bold rounded-full text-xl px-10 py-2 hover:bg-gray-400">
            Let's Explore
        </button>
        
      </div>
    </div>

    </div>
  )
}

export default Hero