import React from 'react'
import HeroSection from '../../Component/Homepage/HeroSection'
import Nav from '../../Component/Navbar/Nav'

export default function Homepage() {
  return (
    <div className='h-[100dvh]'>
    <Nav/>
    <div className='flex items-center justify-center w-full my-40'>
        <HeroSection/>
    </div>
    <div className="flex items-center justify-center">
      <div className="rounded-xl border-2 border-black hover:bg-black text-black hover:text-white px-6 py-2 w-fit transition-all duration-300">
          Scrolldown
      </div>
     
    </div>
    </div>
  )
}
