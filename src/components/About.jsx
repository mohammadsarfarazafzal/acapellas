import React from 'react'
import { useRef, useContext } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Sparkles} from '@react-three/drei'
import { PlayerContext } from "../context/PlayerContext";

const MovingSparkles = () =>{
  const { darkStatus } =
          useContext(PlayerContext);
  const ref = useRef()
  useFrame((state,delta) => {
    ref.current.rotation.x -= delta/10
    ref.current.rotation.x -= delta/15
  })
    return(
      <Sparkles ref={ref} size={3} color={darkStatus ? "#ffffff" : "#000000"} speed={0.5} noise={10} scale={7} />
    )
}

const Card = ({title, description}) => {
  return (
    <div className="dark:bg-black/25 bg-[#708090]/25 backdrop-blur-sm w-full lg:w-full p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className='text-start text-sm font-semibold'>{description}</p>
    </div>
  )
}

function About() {
  return (
    <div className="relative lg:h-[76vh] h-[79vh]  w-full">
      
      <div className="absolute inset-0">
        <Canvas rotation={[0,0,Math.PI/4]}>
          <MovingSparkles />
        </Canvas>
      </div>
      
      <div className="relative z-10 h-full w-full p-5 ">
        <div className="flex flex-col items-center h-full dark:text-white text-[#121212] overflow-auto">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="w-full flex lg:flex-row flex-col gap-8">
            <div className='w-full flex lg:flex-row flex-col gap-5'>
            <Card title="What is Acapellas?" description  ="Acapellas is a revolutionary audio player application that allows users to experience music in a unique way—focusing entirely on the vocals. Whether you're a fan of raw vocal performances, a karaoke enthusiast, or just curious about how your favorite songs sound without the background music, Acapellas provides a seamless and immersive platform for vocal-only playback." />
            <Card title="Why We Built It" description="Our mission is to give users a fresh perspective on music. With Acapellas, we aim to redefine how people engage with songs by isolating vocals, helping you discover the depth and artistry in lyrics, voices, and vocal arrangements." />
            </div>
            {/* <div>
            <Card title="Who We Are" description="Hi! I’m Mohammad Sarfaraz Afzal, the creator of Acapellas. This project stems from my passion for music and technology, blending them to deliver an app that’s both innovative and enjoyable. Whether you're exploring music professionally or just for fun, I hope Acapellas makes your experience worthwhile." />
            <Card title="Why Use Acapellas?" description  ="Unlike traditional audio players, Acapellas strips songs down to their vocal core, letting you experience every emotion and nuance in its rawest form. It's perfect for those who love singing along or want to understand songs on a deeper level." />
              </div>   */}
              
          </div>
          <div className="w-full flex lg:flex-row flex-col gap-8 mt-5">
            <div className='w-full flex lg:flex-row flex-col gap-5'>
            <Card title="Who We Are" description="Hi! I’m Mohammad Sarfaraz Afzal, the creator of Acapellas. This project stems from my passion for music and technology, blending them to deliver an app that’s both innovative and enjoyable. Whether you're exploring music professionally or just for fun, I hope Acapellas makes your experience worthwhile." />
            <Card title="Why Use Acapellas?" description  ="Unlike traditional audio players, Acapellas strips songs down to their vocal core, letting you experience every emotion and nuance in its rawest form. It's perfect for those who love singing along or want to understand songs on a deeper level." />
              </div>  
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default About