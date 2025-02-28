'use client'

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger) 

export default function ScrollTriggerComponent() {
    useGSAP(() => {
        gsap.to('#box1', {
            x: 300,
            duration: 2,
            scrollTrigger: {
                trigger: '#box1',
                start: 'bottom bottom', // Adjusted start position
                scrub:6,
            }
        });
    },);

  return (
    <div>
        <div className='mt-[1000px] mb-[1000px]'>
            <div id='box1' className='w-20 h-20 bg-blue-500'></div>
        </div>
    </div>
  )
}
