'use client'

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'
import assets from '@/utils/utilitis'

export default function Hero() {

  const [videoSrc,setvideoSrc] = useState(window.innerWidth < 768 ? assets.smallHeroVideo:assets.heroVideo );
  
  
  useGSAP(()=>{
    gsap.fromTo('#iPhoneText',
      {
        opacity:0

      },
      {opacity:1,
        duration:1,
        delay:1,
      });
    gsap.fromTo('#cla',
      {
        opacity:0,
        y:30
      },
      {
        opacity:1,
        duration:1,
        delay:2,
        y:10,
        
      })
  })
  return (
    <section>

        <div className='h-5/6 w-full items-center  flex flex-col'>
          <p id='iPhoneText' className='text-second font-blinker'>iPhone 16 pro</p>
          
          <div className='w-5/6'>
            <video 
          className='pointer-events-none' // prevents click or interacting with the video
          autoPlay={true}
          muted={true}
          playsInline={true} // Prevents fullscrenn mode, so the video is embedded on the webpage
          key={videoSrc}
          src={videoSrc}></video>
          </div>
          
          <div id='cla' className=' flex flex-col items-center'>
            <a href="#highlights" className='text-white rounded-full bg-first p-2 font-blinker hover:bg-transparent hover:text-first border-first border-[1px] w-14 text-center'>Buy</a>
            <p className='text-white mt-2 mb-10'>From 199$/mounth or 999$</p>
          </div>
          
        </div>
   
    </section>
  )
}
