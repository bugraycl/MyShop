import React from 'react'
import HeroImg from '../../assets/img/hero-img.png'

const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover flex-start bg-center h-screen w-full' style={{backgroundImage : `url(${HeroImg})`}}>
      <main className='px-10 lg:px-24 z-10'>
        <div className="text-left">
            <h2 className="text-xl text-white">T-Shirt / Tops</h2>
        </div>
        <p className="mt-3 text-white sm:mt-5 sm:max-w-xl text-6xl">
            Summer
            Value Pack
        </p>
        <p className="mt-3 text-white sm:mt-5 sm:max-w-xl text-2xl">
            cool / colorful / comfy
        </p>
        <button className='border rounded mt-6 border-black hover:bg-white hover:text-black hover:border-black w-44 h-12'>
            Shop Now
        </button>
      </main>
    </div>
  )
}

export default HeroSection
