import React from 'react'
import assets from '@/utils/utilitis'

const Navs = ['Phones','MacBooks','Tablets']

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={assets.appleImage} alt="Apple Logo" className='w-10 h-10 m-1' />
        <div>
          {
            Navs.map((nav,index)=>
              <div key={index} className='text-white'>
                 {nav}
              </div>
            )
          }
        </div>

      </nav>
    </header>
  )
}
