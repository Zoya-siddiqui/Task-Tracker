import React, { useEffect } from "react";
import img1 from "../../assets/dummyimg/img1.jpeg";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger);
const ShrinkNav = () => {

    useEffect(()=>{

        ScrollTrigger.create({
            animation: gsap.from(".logo", {
              y: "50vh",
              scale: 6,
              yPercent: -50,
            }),
            scrub: true,
            trigger: ".content",
            start: "top bottom",
            endTrigger: ".content",
            end: "top center",
          });
        

    } , [])
  
  return (
    <div>
      <div className="flex w-full bg-white  h-[70px] z-40 fixed justify-between p-4">
        <div className="flex space-x-4">
          <p>Service</p>
          <p>Home</p>
        </div>

        <div className="flex space-x-4">
          <p>Service</p>
          <p>Home</p>
        </div>
      </div>

      <div className="">
        <h1 className="fixed logo top-0 z-40 left-[50%] font-bold  p-[1em] logo ">
          Logo
        </h1>
      </div>

      <div className="w-full  h-screen bg-white"></div>

      <div className="w-full content h-screen bg-white relative  p-[4em]">
        <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default ShrinkNav;
