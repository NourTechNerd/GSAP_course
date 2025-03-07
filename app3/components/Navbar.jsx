import React from 'react'
import assets from '@/utils/utilitis'

const Navs = ['Store','Mac','iPhone','Support']

export default function Navbar() {
  return (
    <header>
      <nav className='flex items-center justify-between p-1'>
        <img src={assets.appleImage} alt="Apple Logo" className='w-5 h-5 md:w-7 md:h-7 m-1' />
        <div className='flex flex-row gap-3 md:gap-10'>
          {
            Navs.map((nav,index)=>
              <div key={index} className='text-[11px] md:text-[15px] text-second-100 font-blinker hover:text-white duration-700'>
                 {nav}
              </div>
            )
          }
        </div>
        <div className='flex flex-row gap-3 md:gap-7'>
          <img src={assets.searchImage} alt="searchImage" className='w-4 h-4 md:w-7 md:h-7 '/>
          <img src={assets.bagImage} alt="bagImage" className='w-4 h-4 md:w-7 md:h-7 '/>
        </div>

      </nav>
    </header>
  )
}
