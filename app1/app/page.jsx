'use client'

import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'

export default function page() {
  const boxAnimation = {
    x:-20,
    // y: (index, target, targets)=>{ return index * 50},
    yoyo:true,
    duration:2,
    ease:'power2.out',
    onComplete: (param1,param2)=>{console.log('finished',param1 +" "+ param2)},
    onCompleteParams : ['Done','Done2'],
    repeat:1,
    onStart: ()=>{console.log('Animation started')},
    stagger: 0.2
    
  }
  const circleAnimation = {
    keyframes: {
      x: [0, 100, 100, 0, 0],
      y: [0, 0, 100, 100, 0],
    },  
    duration:2,
  }
 
  useGSAP(()=>{
    gsap.to('.box',boxAnimation,),
    gsap.to('.circle',circleAnimation),
    //gsap.from('#circle1',{x : -200,duration:2,}),
    gsap.fromTo('#circle1',
      {
        x:0,
        borderRadius:'0%',
        rotation:0,

      },
      {x:300,
      duration:2,
      rotation:360,
      borderRadius:'100%',
      yoyo:true,
      repeat:1,
    }
    )
    
  })
  
  return (
    <div>
       <div className='box bg-blue-500 w-20 h-20 m-10 rounded-md'></div>
       <div className='box bg-green-500 w-20 h-20 m-10 rounded-md'></div>
       <div className='circle bg-yellow-400 w-20 h-20 m-10 rounded-full'></div>
       <div id= 'circle1' className=' bg-yellow-400 w-20 h-20 m-10  mt-20'></div>
    </div>
  )
}
