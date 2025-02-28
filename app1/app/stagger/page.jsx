'use client'

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Stagger() {

  useGSAP(()=>{
    gsap.to('.box',{
      y:300,
      duration:2,
      stagger: function (index, target, list) {
        // your custom logic here. Return the delay from the start (not between each)
        return index * 0.5;}
        ,
      yoyo:true,
      repeat:1,
    })
  })

  return (
    <div>
      <div className='mt-10 m-10 flex flex-row gap-2'>
          <div className='box bg-purple-300 w-10 h-20'></div>
          <div className='box bg-purple-400 w-10 h-20'></div>
          <div className='box bg-purple-500 w-10 h-20'></div>
          <div className='box bg-purple-600 w-10 h-20'></div>
          <div className='box bg-purple-700 w-10 h-20'></div>
      </div>
    </div>
  )
}
