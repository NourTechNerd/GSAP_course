'use client'


import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



export default function Highlights() {
  useGSAP(()=>{
    gsap.fromTo('#title',{
      opacity:0,
      y:30,
    },
    {
    opacity:1,
    y:10,
    duration:1,
    delay:3
  })
  })

  return (
    <section id = 'highlights' className='w-full bg-third h-full'>
      <div className='flex flex-col md:flex-row md:justify-between items-center'>
        <h1 id='title' className='font-blinker text-second-100 font-bold text-xl md:text-3xl m-3 '>Get the hightlights</h1>
        <div className='flex flex-row'>
          <h1 id='title' className='font-blinker text-second-100 font-bold text-lg m-3'>Watch the film</h1>
          <h1 id='title' className='font-blinker text-second-100 font-bold text-lg m-3'>Watch the event</h1>
        </div>
      
      </div>

    </section>
  )
}
