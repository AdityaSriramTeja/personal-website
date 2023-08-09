'use client';
import { About, Contact, Intro, Projects, Work } from '@/components'

import { createRef, useRef, useState } from 'react';
import { SiLeetcode, SiLinkedin, SiGithub } from "react-icons/si";
import { GoUnmute, GoMute } from "react-icons/go";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  


  const [isSelected, setIsSelected] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
   const [isPlaying, setIsPlaying] = useState(false);
  let audioRef = useRef<HTMLAudioElement>(null);
  
 const togglePlay = () => {
   const audioElement = audioRef.current;

   if (audioElement) {
     if (isPlaying) {
       audioElement.pause();
     } else {
       audioElement.play();
     }
     setIsPlaying(!isPlaying);
   }
 };
  const router = useRouter(); 



  return (
   <div className="relative">
      <div className=" h-screen w-[auto] bg-[#0D0D0D] ">
        <audio
          src="portfolio-audio.mp3"
          ref={audioRef}
          
          loop={true}
          muted={false}
          controls={false}
          style={{ display: "none" }}
          preload="auto"
        />

        {/* <audio
          id="audio"
          muted
          onPlay={(e) => console.log("onPlay")}
          controls={true}
          loop
          style = {{display: "none"}}
          autoPlay={true}
        >
          <source src="portfolio-audio.mp3" type="audio/mp3" />
        </audio> */}
        <Intro />
        <About />
        <Work
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          isSelected1={isSelected1}
          setIsSelected1={setIsSelected1}
          isSelected2={isSelected2}
          setIsSelected2={setIsSelected2}
        />
        <Projects
          setIsSelected={setIsSelected}
          setIsSelected1={setIsSelected1}
          setIsSelected2={setIsSelected2}
        />
        <Contact />
      </div>
      <div className="fixed bottom-10 right-0 md:right-2 auto w-[30px]  flex flex-col space-y-20 md:bg-gray-700 items-center py-5 rounded-lg">
        <a
          href="https://www.linkedin.com/in/aditya-sriramteja-chilukuri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin size="20px" color="orange" />
        </a>
        <a
          href="https://github.com/AdityaSriramTeja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size="20px" color="orange" />
        </a>
        <a
          href="https://leetcode.com/adityasriramteja/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode size="20px" color="orange " />
        </a>

        {isPlaying ? (
          <GoUnmute size="20px" color="orange " onClick={togglePlay} />
        ) : (
          <GoMute size="20px" color="orange " onClick={togglePlay} />
        )}
      </div>
     
      </div>
 
    
  );
}
