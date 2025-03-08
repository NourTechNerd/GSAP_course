'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import assets from '@/utils/utilitis'
import { useRef, useState,useEffect } from 'react'


const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: assets.highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: assets.highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: assets.highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: assets.highlightFourthVideo,
    videoDuration: 3.63,
  },
];


export default function VideosScroller() {
  const videoRef = useRef([])
  const videoSpanRef = useRef([])
  const videoDivRef = useRef([])

  const {video,setVideo}= useState({
    isEnd : false,
    startPlay:false,
    videoId :0,
    isLastVideo:false,
    isPlaying:false,
  })
  // Distract the values of video so it is easy to acces them
  const {isEnd,startPlay,videoId,isLastVideo,isPlaying} = video;
  
  const {loadedData,setLoadedData}=useState([])
  
  useEffect(()=>{

  },[startPlay,videoId,isPlaying,loadedData])

  useEffect(()=>{
    const currentProgress = 0;
    let span = videoRef.current
    if(span[videoId])
    {
      // animate the progress of a video.
      let anim = gsap.to(span[videoId],{
        onUpdate :()=>{},
        onComplete:()=>{},
      })
    }


  },[videoId,startPlay])
  return (
    <div>
      <div className='items-center flex flex-col md:flex'>
      {
        hightlightsSlides.map((Video,index)=>
          <div key={index} className= "rounded-xl h-[200px] w-[300px] m-3 overflow-hidden relative">
            <video 
            id='video'
            playsInline={true}
            preload='auto'
            muted = {true}
            src={Video.video} className='w-full h-full object-cover'></video>
            <div className='absolute top-5 left-5 z-10 text-white md:text-lg text-sm font-bold'>
              {
                Video.textLists.map((text,index)=>
                <p
                key={index}>{text}</p>
                )
              }

            </div>
           
          </div>
        )
      }
      </div>
    </div>
  )
}
