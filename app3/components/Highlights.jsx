'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import assets from '@/utils/utilitis'
import VideosScroller from './VideosScroller'


export default function Highlights() {
  useGSAP(()=>{
    gsap.fromTo('#title',{
      opacity:0,
      y:30,
    },
    {
    opacity:1,
    y:-10,
    duration:1,
  });

  gsap.fromTo('.link',{
    opacity:0,
    y:30,
    },
    {
    opacity:1,
    y:-10,
    duration:1,
    stagger:0.25,

    });
  })

  return (
    <section id = 'highlights' className='w-full bg-third h-full flex flex-col items-center'>
      <div className='flex flex-col md:flex-row md:justify-between items-center'>
        <h1 id='title' className='font-blinker text-second-100 font-bold text-xl md:text-3xl m-3 mt-10'>Get the hightlights</h1>
        
        <div className='flex flex-row gap-5 m-3 md:mt-10'>

          <div className='link flex flex-row gap-2 items-center'>
              <p  className=' text-blue-500 hover:underline'>Watch the film</p>
              <img src={assets.watchImage} alt="watch" className='w-4 h-4' />
          </div>
          <div className='link flex flex-row gap-2 items-center'>
              <p id='title2' className='text-blue-500 hover:underline'>Watch the event</p>
              <img src={assets.rightImage} alt="watch" className='w-3 h-3' />
          </div>
         
        </div>
      
      </div>

      <VideosScroller />

    </section>
  )
}
