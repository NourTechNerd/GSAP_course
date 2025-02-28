'use client'

import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function gsapTimeline() {
  const tl = gsap.timeline({ 
    defaults: {ease: "elastic" },
    onComplete:()=>{console.log("End of Timeline")},
    onStart:()=>{console.log("Starting of Timeline")},
  });

  useGSAP(() => {
    tl.to('.box', {
      x: 200,
      rotation: 360,
      borderRadius: '100%',
      duration:6,
      backgroundColor: '#ff0000', // Change to red
      borderColor:'#00ff00',
    });

    tl.to('.box', {
      y: 40,
      backgroundColor: '#00ff00', // Change to green
    });

    tl.to('.box', {
      x: 400,
      rotation: 360,
      borderRadius: '0%',
      backgroundColor: '#0000ff', // Change to blue
    });

  }, []);

  return (
    <div>
      <div className='box bg-blue-500 w-20 h-20 m-10'> </div>
      <button
        onClick={() => {
          if (tl.paused()) tl.play();
          else tl.pause();
        }}
        className='m-10 bg-gray-400 rounded-md p-2'
      >
        Play/Pause
      </button>
    </div>
  );
}
