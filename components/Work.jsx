
"use client";
import React, { useEffect, useRef} from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Neuton } from "next/font/google";

const font = Neuton({
  weight: "700",
  subsets: ["latin"],
});
const font1 = Neuton({
  weight: "400",
  subsets: ["latin"],
});


const Work = (props) => {
 
 

  
  // console.log("The mouse position is " + mousePosition.x + " " + mousePosition.y);
  // useEffect(() => {
    
  //   const handleMouseMove = (event) => {
      
  //     setMousePosition({ x: event.clientX, y: event.clientY });
      
       
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  const { isSelected, setIsSelected, isSelected1, setIsSelected1, isSelected2, setIsSelected2 } = props; 
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { amount: 0.6 });
  useEffect(() => {
    if (isInView == false) {
      setIsSelected2(false);
      setIsSelected1(false);
      setIsSelected(false);
    }
  }, [isInView]);

  // const variants = {
  //   default: {
  //     x: mousePosition.x,
  //     y: mousePosition.y,
  //   },
  //   enter: {
  //     height: 140,
  //     width: 140,

  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
   
  //     mixBlendMode: "lighten",
  //   },
  // };
  const enter = () => setMouseVarient("enter"); 
  const leave = ()=> setMouseVarient("default")
  return (
    <section
      //     transition={transition}

      className={`${font.className} bg-[#0D0D0D]  pt-[35vh]  h-auto  flex flex-col w-[100vw]  `}
    >
      <div
        ref={scrollRef}
        className="flex flex-row  pl-4 pr-[5%] justify-between items-center"
      >
        <h2 className="text-[2rem] "> Experience </h2>{" "}
        <div className="w-32 md:w-48">
          <Marquee>
            {" "}
            <h2 className="text-[1rem] mr-2"> Double tap to view more </h2>
          </Marquee>
        </div>
      </div>

      {/* <motion.div
         variants={variants}
         animate={mouseVarient}
         className=" bg-[#9253a1] w-[40px] h-[40px] rounded-full fixed top-0 left-0 pointer-events-none 	"
       >
         {" "}
       </motion.div> */}
      <div
        onDoubleClick={() => {
          setIsSelected(!isSelected);
          setIsSelected1(false);
          setIsSelected2(false);
          // console.log("Div has been clicked");
        }}
        className="relative"
      >
        <div className="flex flex-col md:flex-row  pl-4 pb-4 md:space-x-44 border-y-2 h-[24vh] md:h-[23vh] md:items-center">
          <h3 className="select-none flex-0 justify-center text-[1.2rem]  md:text-[1.5rem] md:pt-5">
            {" "}
            2023-now{" "}
          </h3>
          <div className="flex flex-col items-start flex-1  mt-2 md:mt-0 bg-grey-400 pl-4 justify-evenly">
            <h3 className="select-none "> President</h3>
            <h4 className="text-[1rem] select-none md:text-[1.5rem]">
              {" "}
              Carleton Blueprint{" "}
            </h4>
          </div>
        </div>
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }} // The exit animation to be applied
              transition={{ duration: 0.2 }}
              className="  px-9 py-2 object-fit shrink-0 absolute top-1 left-0 bg-gradient-to-r from-sky-500 via-blue-300 to-cyan-400 overflow-y-auto w-screen  h-[23.2vh] md:h-[22.2vh] "
            >
              <h6
                className={`${font1.className} text-[1.2rem] md:text-[1.5rem] text-black`}
              >
                My responsibilities as a president include: <br /> •Resolving
                any club issues.
                <br /> •Defining vision and strategic direction, managing
                relationships with other Blueprint chapters, and supporting new
                projects and events for students. <br /> •Handling
                administrative tasks, such as managing email lists, coordinating
                with Carleton student assosiation, and ensuring project
                completion, while supporting hiring, fundraising, social media
                outreach, and team culture through socials and one-on-one
                check-ins.
              </h6>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        onDoubleClick={() => {
          setIsSelected1(!isSelected1);
          setIsSelected(false);
          setIsSelected2(false);
          // console.log("Div has been clicked");
        }}
        className="relative "
      >
        <div className="flex flex-col md:flex-row  pl-4 pb-4 md:space-x-44  md:items-center h-[28vh]  md:h-[27vh] ">
          <h3 className="select-none flex-0 text-[1.2rem]  md:text-[1.5rem] md:pt-5">
            2023-2023
          </h3>
          <div className="flex flex-col items-start flex-1  mt-2 md:mt-0 shrink-0 pl-4 md:pl-0 justify-evenly">
            <h3 className="select-none  "> Mobile Application Developer</h3>
            <h4 className="text-[1rem] select-none md:text-[1.5rem]">
              {" "}
              Freelancer: Hajo Trips{" "}
            </h4>
          </div>
        </div>
        <AnimatePresence>
          {isSelected1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }} // The exit animation to be applied
              transition={{ duration: 0.2 }}
              className=" px-9 py-2 object-fit shrink-0 absolute top-0 left-0 bg-gradient-to-r from-sky-500 via-blue-300 to-cyan-400 w-screen h-[28vh]  md:h-[27vh] overflow-y-auto "
            >
              <h6
                className={`${font1.className} text-[1.2rem] md:text-[1.5rem] text-black`}
              >
                As an experienced and skilled application developer, I
                successfully developed a mobile application tailored precisely
                to the client&apos;s requirements. Remarkably, the entire app
                development process was completed within a short period of time,
                and I was solely responsible for its execution, highlighting my
                ability to deliver high-quality results efficiently. My
                responsibilities encompassed a wide range of critical tasks,
                including designing an engaging and user-friendly interface to
                ensure a seamless user experience. <br /> Additionally, I
                seamlessly integrated{" "}
                <strong>
                  {" "}
                  Firebase login authentication , utilizing phone numbers and
                  OTP{" "}
                </strong>{" "}
                as a secure and efficient means of user verification.
                Furthermore, I implemented essential foreground and background
                push notification features to enhance user engagement and
                interaction within the application. By effectively connecting
                the frontend to the backend, which involved storing data in
                <strong> Firestore database and Amazon Keyspaces</strong> , I
                ensured the smooth flow of data and operations between the user
                interface and the underlying infrastructure.
                <br />
                Notably, my expertise extended beyond feature development. I
                demonstrated my proficiency in debugging by identifying and
                resolving several bugs that were left behind by the previous
                developer. My meticulous approach to debugging played a crucial
                role in optimizing the application&apos;s performance and
                reliability. Throughout the development process, I fostered
                effective collaboration with the company&apos;s backend team,
                leveraging their APIs to establish seamless communication
                between the application and the server. Doing so facilitated
                robust data management and synchronization, further enhancing
                the overall functionality of the application. Working on this
                project was a gratifying experience, and I take pride in the
                outcomes achieved in a relatively short timeframe. I remain
                enthusiastic about undertaking new challenges and look forward
                to continuing my contribution to the development of innovative
                mobile applications.{" "}
              </h6>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        onDoubleClick={() => {
          setIsSelected2(!isSelected2);
          setIsSelected1(false);
          setIsSelected(false);
          // console.log("Div has been clicked");
        }}
        className="relative"
      >
        <div className="flex flex-col md:flex-row  pl-4 pb-4 md:space-x-44 border-y-2 h-[26vh]  md:h-[23vh] md:items-center">
          <h3 className="select-none flex-0 text-[1.2rem]  md:text-[1.5rem] md:pt-5">
            {" "}
            2022-2023{" "}
          </h3>
          <div className="flex flex-col items-start flex-1  mt-2 md:mt-0 pl-4 md:pl-0 justify-evenly">
            <h3 className="select-none "> Frontend Developer</h3>
            <h4 className=" select-none text-[1rem] md:text-[1.5rem]">
              {" "}
              Carleton Blueprint{" "}
            </h4>
          </div>
        </div>
        <AnimatePresence>
          {isSelected2 && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }} // The exit animation to be applied
              transition={{ duration: 0.2 }}
              className=" px-9 py-2 object-fit shrink-0 absolute top-1 left-0  bg-gradient-to-r from-sky-500 via-blue-300 to-cyan-400 w-screen overflow-y-auto  h-[25.2vh] md:h-[22.2vh] "
            >
              <h6
                className={`${font1.className} text-[1.2rem] md:text-[1.5rem] text-black`}
              >
                I was an active member of a dynamic 10 member team consisting of
                frontend and design students. Together, we built an impactful
                web application for the Refugee Center&apos;s refugee and
                immigrant portal. Through a seamless integration of{" "}
                <strong>
                  Continuous Integration/Continuous Deployment (CI/CD) processes
                  and Figma,
                </strong>
                we have successfully developed a user-friendly interface to
                provide refugees and immigrants with easy access to essential
                legal documents and guidance through the resettlement process in
                Canada. Using{" "}
                <strong>
                  {" "}
                  Next.JS, React.JS, Material UI, and the organization&apos;s
                  APIs,
                </strong>{" "}
                we ensured a secure, high-performing platform. This experience
                combines my technical skills with a meaningful social impact,
                contributing to a smoother journey for those seeking a fresh
                start in Canada.
              </h6>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );

}

export default Work