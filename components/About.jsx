'use client';
import React, { useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import FlutterLogo from '../public/flutter.svg'
import cssLogo from '../public/css-3.svg'; 
import firebaseLogo from "../public/firebase-svgrepo-com.svg"; 
import htmlLogo from '../public/html-1.svg'; 
import javaLogo from '../public/jee-3.svg'; 
import nextLogo from '../public/next-js-svgrepo-com.svg'; 
import nodeLogo from '../public/nodejs-icon.svg'; 
import pythonLogo from '../public/python-5.svg'; 
import reactLogo from '../public/react-2.svg'; 
import sqliteLogo from '../public/sqlite-svgrepo-com.svg'; 
import tailwindLogo from '../public/tailwind-css-2.svg'; 
import githubLogo from '../public/github-svgrepo-com (1).svg'; 
import javascriptLogo from '../public/javascript-svgrepo-com.svg'; 
import vscodeLogo from '../public/vscode-svgrepo-com.svg'; 
import postmanLogo from '../public/postman-icon-svgrepo-com.svg'; 
import { Neuton } from "next/font/google";

import Image from 'next/image';
// const transition = {delay: 0.2, duration: 0.5, ease: [0.45, 0.15, 0.25, 0.98] };
const frontendTechnologies = [
  [pythonLogo, "Python"],
  [javaLogo, "Java"],
  [FlutterLogo, "Flutter"],
  [reactLogo, "React.JS"],
  [javascriptLogo, "JS"],
  [htmlLogo, "HTML"],
  [nodeLogo, "Node.JS"],
  [nextLogo, "Next.JS"],

  [cssLogo, "CSS"],
  [tailwindLogo,"Tailwind"]
];

const backendTechnologies = [
  [nodeLogo, "Node.JS"],
  [nextLogo, "Next.JS"],
  [firebaseLogo,"Firebase"],
  [firebaseLogo,"Firestore"],
  [sqliteLogo,"SqLite"],
];

const toolsAndSkills = [[postmanLogo, "Postman"], [githubLogo, "GitHub"], [vscodeLogo, "Vscode"]];


const font = Neuton({
  weight: "300",
  subsets: ["latin"],
});
const font1 = Neuton({
  weight: "700",
  subsets: ["latin"],
});

const About = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { amount: 0.3});
  // const animation = useAnimation(); 
  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
  
    let paragraphs = [...document.querySelectorAll("p")];
    let spans = [];
    paragraphs.forEach((paragraph) => {
      let htmlString = "";
      let pArray = paragraph.textContent?.split("");
      if (pArray != null) {
        for (let i = 0; i < pArray.length; i++) {
          htmlString += `<span>${pArray[i]}</span>`;
        }
      } 
      paragraph.innerHTML = htmlString;
      spans = [...document.querySelectorAll("span")];
    });

    function revealSpans() {
      if (spans.length > 0) {
        for (let i = 0; i < spans.length; i++) {
          if (
            spans[i] != null && spans[i].parentElement != null && spans[i].parentElement.getBoundingClientRect().top <
            window.innerHeight / 1.7
          ) {
            let { left, top } = spans[i].getBoundingClientRect();
            top = top - window.innerHeight * 0.4;
            let opacityVal =
              1 - (top * 0.01 + left * 0.001) < 0.1
                ? 0.1 
                : 1 - (top * 0.01 + left * 0.001).toFixed(4);
            opacityVal = opacityVal > 1 ? 1 : 0.3;
            spans[i].style.opacity = opacityVal;
          }
        }
      }
    }
    window.addEventListener("scroll", () => {
      revealSpans();
    });
    revealSpans();
  }, [])

  // useEffect(() => {
  //   console.log("The element is in view: " + isInView);
  //   if (isInView == true) {
    
  //     animation.start({ opacity:1,  scale: 1, transition: {transition} });
  //   } else {
  //     animation.start({  scale: 0, opacity: 0 });
  //   }
  // }, [isInView]);
  return (
    <section className="bg-[#0D0D0D]   w-screen  h-auto flex flex-col pt-[20vh]    ">
      <section
        className={` ${font.className} flex-col space-y-1 h-[60vh] flex  mt-[1rem] mb-[30vh] flex-1 `}
      >
        <p className="text-left tracking-wide md:tracking-normal">
          A passionate tech enthusiast pursuing my second year of
          Bachelor&apos;s in Computer Science (BCS) at Carleton University. With
          a keen interest in programming, I gained experience working with a
          diverse range of technologies. Whether it&apos;s tackling complex
          algorithms, developing innovative solutions, or collaborating on
          exciting projects, I thrive in dynamic environments that challenge me
          to push my boundaries.
        </p>
      </section>
      <div className="flex-col">
        <div className="flex items-center w-screen justify-between h-[20%] shrink-0">
          <h2 className={`${font1.className} text-[1.5rem] pl-4`}>
            Passion and interests
          </h2>
        </div>
        <div className="border-y-[1px] h-auto border-grey-600 object-fit shrink-0">
          <p
            className={`${font1.className} text-[2.5rem] md:text-[6rem] text-start my-10`}
          >
            Building Apps
          </p>
        </div>
        <div className="border-y-[1px] h-auto border-grey-600 object-fit shrink-0">
          <p
            className={`${font1.className} text-[2.5rem] md:text-[6rem] text-start my-10`}
          >
            Building Websites
          </p>
        </div>
        <div className="border-y-[1px] h-auto border-grey-600 object-fit shrink-0">
          <p
            className={`${font1.className} text-[2.5rem] md:text-[6rem] text-start my-10`}
          >
            AI, ML, and Deep learning
          </p>
        </div>
        <div className="border-y-[1px] h-auto border-grey-600 object-fit shrink-0">
          <p
            className={`${font1.className} text-[2.5rem] md:text-[6rem] text-start my-10`}
          >
            Mastering new programming concepts
          </p>
        </div>
      </div>

      <motion.div
        ref={scrollRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.4 }}
        className={`${font.className} h-auto pt-[40vh] w-screen`}
      >
        <div className="flex flex-col  justify-center space-y-2  items-center  max-md:flex-1  lg:flex-row lg:justify-evenly   ">
          <div className="w-[95%] border-[2px] rounded-lg flex flex-col p-4 md:w-[90%] lg:w-[30vw]">
            <h4> Frontend Technologies</h4>
            <hr></hr>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-3 ">
              {frontendTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-5"
                >
                  <Image
                    alt={tech[1]}
                    key={tech[1]}
                    src={tech[0]}
                    style={{ width: "55%", height: "55%" }}
                  />{" "}
                  <h5 key={index + 10}>{tech[1]}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[95%] border-[2px] rounded-lg flex flex-col p-4 md:w-[90%] lg:w-[30vw]">
            <h4> Backend Technologies</h4>
            <hr></hr>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-3 ">
              {backendTechnologies.map((tech, index) => (
                <div
                  key={index + 200}
                  className="flex flex-col items-center justify-center p-5"
                >
                  <Image
                    alt={tech[1]}
                    key={tech[1]}
                    src={tech[0]}
                    style={{ width: "55%", height: "55%" }}
                  />{" "}
                  <h5 key={index + 30}>{tech[1]}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[95%] border-[2px] rounded-lg flex flex-col p-4 md:w-[90%] lg:w-[30vw]">
            <h4> Tools and Skills</h4>
            <hr></hr>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-3  ">
              {toolsAndSkills.map((tech, index) => (
                <div
                  key={index + 400}
                  className="flex flex-col items-center justify-center p-5"
                >
                  <Image
                    alt={tech[1]}
                    key={tech[1]}
                    src={tech[0]}
                    style={{ width: "55%", height: "55%" }}
                  />{" "}
                  <h5 key={index + 50}>{tech[1]}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
   
}

export default About;
