import React from 'react'
import { UilMapPinAlt } from '@iconscout/react-unicons'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import ResumeButton from './ResumeBtn';
import Image from 'next/image';
import me from '.././public/website-intro.jpg'
import { Rubik } from 'next/font/google';
import { SlLocationPin } from "react-icons/sl"; 
import { FaBeer } from "react-icons/fa";
const font = Rubik({
  weight: "800",
  subsets: ["latin"],
});
const font1 = Rubik({
  weight: "400",
  subsets: ["latin"],
});
const Intro = () => {
 
  const [text, count] = useTypewriter({
    words: [
      "A Computer science honors student",
      "Nice to meet you",
      "Thanks for checking out my website 😀 ",
    ],
    loop: 5,
    cursorStyle: "_",
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
    return (
      <section className=" snap-start   flex items-center justify-center h-screen w-auto">
        <div className="relative object-contain h-screen w-[90vw] ">
          <div className=" absolute top-5 pl-10 flex ">
            <div className="flex  justify-evenly space-x-5 w-[80vw]  items-center ">
              {/* <UilMapPinAlt size="40" /> */}
              <div className="flex items-center justify-center gap-x-2">
                <SlLocationPin />
                <h1 className="text-[1rem]"> Ottawa, ON</h1>
              </div>

              <ResumeButton />
            </div>
          </div>
          {/* <div className="bg-white w-[250px] h-[250px] rounded-full"></div> */}
          <div className="relative flex flex-col h-screen ">
            {" "}
            <h1
              className={` ${font.className} text-[#d3caba] pt-20 pl-5  md:pl-10`}
            >
              Teja Chilukuri
            </h1>
            <div className="shadow-[0_10px_35px_0.5em_rgba(68,214,44,0.5)] relative w-[80vw] h-[20%] md:w-[80%] md:ml-[20%] md:h-[25%] lg:h-[40%] md:mt-[3%] mt-[10%] lg:w-[50%]  ">
              <Image
                src={me}
                alt="intro picture"
             
              fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              />
            </div>{" "}
            <div className="absolute bottom-12 md:bottom-0 right-0 w-[60%] h-[20%] lg:p-12">
              <h3
                className={` ${font1.className} text-[1rem] md:text-[2rem]  text-[#d3caba] `}
              >
                {text}

                <Cursor cursorColor="#F7AB0A" />
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Intro