'use client'


import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export default function textPlugin() {

    useGSAP(()=>
    {
        gsap.fromTo('#text1',{
            opacity:0,
        },{
            opacity:1,
            duration:2,
            ease:'bounce.inOut',
        })
        
    })
  return (
    <div>
        <h1 id ='text1' className='m-10 text-3xl font-bold'>textPlugin</h1>
    </div>
  )
}
