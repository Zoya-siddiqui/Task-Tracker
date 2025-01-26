import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BottomFooter from "./BottomFooter";

gsap.registerPlugin(ScrollTrigger);

const HomeZoominimage = () => {
  useEffect(() => {
    const myfunction = () => {
      const sectionHeight = window.innerHeight;
      const slides = document.querySelectorAll(".slide");

      slides.forEach((slide, index) => {
        // Z-index Animation
        gsap.to(slide, {
          zIndex: (progress) => (progress < 0.5 ? 1 : 5 - index),
          scrollTrigger: {
            start: sectionHeight * index + " top",
            end: sectionHeight * (index + 1) + " top",
            scrub: 1,
            markers: false,
          },
        });

        // Scale Animation
        gsap.fromTo(
          slide,
          { scale: index === 0 ? 1 : 0 },
          {
            scale: 1,
            scrollTrigger: {
              start: sectionHeight * index + " top",
              end: sectionHeight * (index + 1) + " top",
              scrub: 1,
              markers: true,
            },
          }
        );

        // Slide Image Zoom Animation
        if (index !== 0) {
          gsap.fromTo(
            slide.querySelector(".slide-img"),
            { scale: 2 },
            {
              scale: 1,
              scrollTrigger: {
                start: sectionHeight * index + " top",
                end: sectionHeight * (index + 1) + " top",
                scrub: 1,
                markers: true,
              },
            }
          );
        }
      });


      
    };

    setTimeout(myfunction, 100);
  }, []);
  return (
    <div className="relative">
      <div className="flex fixed z-[1000000000] text-white w-full p-4 uppercase justify-between p-2">
        <div>codegrid</div>
        <div>2023</div>
        <div>work</div>
        <div>Lets talk</div>
      </div>

      <footer className="fixed bottom-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta?
      </footer>

      <div className="slider fixed top-0 left-0 w-[100vw] h-screen bg-white z-1">
        <div
          className="slide absolute top-0 left-0 w-full h-screen overflow-hidden"
          id="slide-1"
        >
          <img
            src="https://images.unsplash.com/photo-1644073978087-b3da7c145e40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="slide-img absolute top-0 w-full h-full object-cover z-0"
          />
        </div>
        <div
          className="slide absolute top-0 left-0 w-full h-screen overflow-hidden"
          id="slide-2"
        >
          <img
            src="https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="slide-img absolute top-0 w-full h-full object-cover z-0"
          />
        </div>
        <div
          className="slide absolute top-0 left-0 w-full h-screen overflow-hidden"
          id="slide-3"
        >
          <img
            src="https://images.unsplash.com/photo-1586104195538-050b9f74f58e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="slide-img absolute top-0 w-full h-full object-cover z-0"
          />
        </div>

        <div
          className="slide absolute top-0 left-0 w-full h-screen overflow-hidden"
          id="slide-4"
        >
          <img
            src="https://images.unsplash.com/photo-1613945407943-59cd755fd69e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="slide-img absolute top-0 w-full h-full object-cover z-0"
          />
        </div>

        <div
          className="slide absolute top-0 left-0 w-full h-screen overflow-hidden"
          id="slide-5"
        >
          <img
            src="https://images.unsplash.com/photo-1599708978061-501091150ec9?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="slide-img absolute top-0 w-full h-full object-cover z-0"
          />
        </div>
      </div>

      <div className="h-[600vh]"></div>
        <BottomFooter/>
       <div className="h-screen bg-white text-black relative">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quae ut alias dolore molestiae? Maiores doloribus cumque fugit alias molestias dolorem maxime pariatur aliquam ab, sequi neque excepturi tempora temporibus.
       </div>
    </div>
  );
};

export default HomeZoominimage;
