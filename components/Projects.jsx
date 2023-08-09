"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { Neuton } from "next/font/google";

const font = Neuton({ 
  weight: "300",
  subsets:['latin']
})
const font1 = Neuton({
  weight: "400",
  subsets: ["latin"],
});

const transition = { duration: 0.6, ease: [0.45, 0.15, 0.25, 0.98] };

const Projects = (props) => {
  const {
    setIsSelected,

    setIsSelected1,

    setIsSelected2,
  } = props;

  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { amount: 1 });
  useEffect(() => {
    if (isInView == true) {
      setIsSelected2(false);
      setIsSelected1(false);
      setIsSelected(false);
     
    }
  }, [isInView]);

  const projectList = [
    {
      name: "Liber-A handsfree social media",
      description:
        "An audiobook for social-media. Liber is a hands free twitter app that was built with user productivity and accessibility in mind.  Liber is integrated with 7 different voice commands which successfully navigate through the app. We also implemented a convenient switch to Hands-On mode to fit everyone’s preferences. The app supports a vast language translation options consisting of 67 languages! ",
      app: true,

      skills: [
        "Flutter",
        "Firebase",
        "Firestore",
        "Twitter API",
        "Translate API",
        "Text-to-Speech",
        "SqLite",
        "Alan AI",
      ],
      url: "https://github.com/AdityaSriramTeja/Liber-Hands-Free-Social-Media",
    },
    {
      name: "UMeConnect-Native",
      description:
        "A full stack social media app that enables users to effortlessly share reels, images, and establish connections through following, messaging, and calling functionalities.",
      app: true,
      skills: [
        "Flutter",
        "Firebase",
        "Firestore",
        "Cloudinary Storage",
        "Jitsi SDK",
        "Stream Chat",
        "video player",
      ],
      url: "https://github.com/AdityaSriramTeja/UMeConnect-Native-",
    },

    // {
    //   name: "UMeConnect-Web",
    //   description: "A video calling service",
    //   app: false,
    //   skills: [
    //     "React.JS",
    //     "Node.JS",
    //     "Firebase",
    //     "Firestore",
    //     "Firebase Storage",

    //   ],
    // },
  ];

  return (
    <section className={`bg-[#0D0D0D]  flex-shrink-0 object-fit pt-[25vh] ${font.className} `}>
      <div className=" flex flex-col h-auto  w-screen  pt-[4.4rem] items-center space-y-10  ">
        <section className=" flex  justify-center">
         
          <div className="flex flex-col  z-0 h-[28rem] w-[19rem] items-center justify-center">
             <h1 className=" font-bold text-[60px] text-orange-500">
            Projects
          </h1>
            <div
              ref={scrollRef}
              className="z-10 w-[20rem] h-[25.5rem] bg-gradient-to-t from-slate-200 via-sky-300 to-amber-100 rounded-lg flex flex-row justify-center items-center px-5"
            >

              <h2 className=" text-center text-[1.4rem] text-black">
                {" "}
                This website is built using React.JS, Next.JS, Tailwind CSS and
                FramerMotion{" "}
              </h2>{" "}
            </div>
          </div>
        </section>

        <div className=" w-screen ">
          <div className="grid grid-cols-1    md:grid-cols-2 md:grid-flow-row gap-4 place-items-center">
            {projectList.map((project, index) => {
              return (
                <div
                  key={index}
                  className="  w-[95%] h-auto rounded-xl p-[25px] object-contain
                  flex flex-col border-white border-[1px]"
                >
                  <div className="h-[40px] w-[40px] bg-sky-200 rounded-full" />
                  <h4 className={` ${font1.className}  mt-[45px]  `}> {project.name} </h4>
                  <hr className="mt-[20px]" />
                  <h2 className="mt-[20px] font-medium ">
                    {" "}
                    {project.description}{" "}
                  </h2>
                  <hr className="mt-[30px]" />

                  <div className="mt-[20px] grid grid-cols-3 gap-1 divide-x ">
                    {project.skills.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="w-auto  relative inline-block select-none whitespace-wrap rounded-lg bg-[#C5C6C7] py-2  align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
                        >
                          <h6 className=" text-[#0B0C10] ml-2 mt-px">
                            {skill}
                          </h6>
                        </div>
                      );
                    })}
                  </div>

                  <div className=" pt-[10%] w-[100%]  flex  justify-evenly  ">
                    {/* <button className="w-[40%] p-2 h-[40px] bg-['#323232']  border-[2px] border-['#2d8cf0'] rounded-[10px] overflow-hidden shadow-2xl ">
                      {project.app ? "Download App" : "View Website"}
                    </button> */}
                    <button
                      onClick={() => window.open(project.url, "_blank")}
                      className="border-none rounded-xl w-[40%] h-[40px] flex items-center p-2  bg-[#1f2833] overflow-hidden "
                    >
                      <svg
                        className="fill-white "
                        viewBox="0 0 496 512"
                        height="1.4em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                      <h5 className="text-white opacity-100 ml-[15%] md:ml-[20%] lg:ml-[40%]">
                        Github
                      </h5>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
