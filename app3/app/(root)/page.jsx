import React from 'react'
import Navbar from '@/components/Navbar';
import Highlights from '@/components/Highlights';
import Hero from '@/components/Hero';

export default function rootPage() {
  return (
    <div>
       <Navbar  />
       <Highlights  />
       <Hero  />
      
    </div>
  )
}
