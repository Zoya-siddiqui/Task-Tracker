import { Scale } from "lucide-react";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const AnimationZoomScroll = () => {

    // useEffect(()=>{
    //     const myfunction =()=>{
    //         const slides = gsap.utils.toArray(".active-slide img")

    //         const gentinitialtranslateZ =(slide)=>{
    //             const style = window.getComputedStyle(slide);
    //             const matrix = style.transform.match(/matrix3d\((.*)\)/);
    //             if(matrix){
    //                 const values = matrix[1].split(", ");
    //                 return parseFloat(values[14] || 0)
    //             }
    //             return 0,
    //         }
            

    //         const mapRange = (values , inMin , inMax , outMax  , outMin)=>{
    //             return ((value-inMin) * (outMax - outMin))/ (inMax - inMin)+outMin;

    //         }

    //         slides.forEach((slide , index)=>{
    //             const initialz =  gentinitialtranslateZ(slide);

    //             ScrollTrigger.create({
    //                 trigger : ".container",
    //                 start:"top top",
    //                 end : "bottom bottom",
    //                 scrub : TreeWalker,
    //                 onUpdate:(self)=>{
    //                     const progress = self.progress;
    //                     const zincrement = progress*22500;
    //                     const currentZ = initialz+zincrement

    //                     let opacity;

    //                     if(currentZ > -2500){
    //                         opacity = mapRange(currentZ, -2500 , 0,0.5,1);
    //                     }
    //                     else{
    //                         opacity = mapRange(currentZ, -5000 , 0,0.5);
    //                     }

    //                     slide.style.opacity = opacity;
    //                     slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;

    //                     // if(currentZ < 100){
    //                     //     gsap.to(activeSlideImage[index], 1.5,{
    //                     //         opacity:1,
    //                     //         ease:"power3.out"
    //                     //     })
    //                     // }
    //                     // else{
    //                     //     gsap.to(activeSlideImage[index] , 1.5,{
    //                     //         opacity :0,
    //                     //         ease:"power3."
    //                     //     })
    //                     // }
    //                 }
    //             })
    //         })
    //     }
    // })


  return (
    <div>
      <div className="fixed flex items-center  justify-between top-0 w-full p-4">
        <div className="link-1 text-orange-400">
          <a>Home</a>
          <a>Work</a>
        </div>
        <div className="logo text-orange-400">
          <h1>Logo</h1>
        </div>
        <div className="link-2 text-orange-400">
          <a>Home</a>
          <a>Work</a>
        </div>
      </div>

      <footer className="fixed bottom-0 space-between ">
        <p>coming soon</p>
        <p>coming soon</p>
      </footer>

      <div className="container w-full h-[2000vh]  ">
        <div className="active-slide fixed top-0 left-0 w-full h-full overflow-hidden bg-black opacity-[0.35] z-0">
          <img
            src="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover  absolute "
            style={{filter:"blur(50px)" , transform : "scale(1.125"}}
          />
          <img
            src="https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover  absolute "
            style={{filter:"blur(50px)" , transform : "scale(1.125"}}
          />
          <img
            src="https://images.unsplash.com/photo-1616163527093-41acfce459ce?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover  absolute "
            style={{filter:"blur(50px)" , transform : "scale(1.125"}}
          />
          <img
            src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover  absolute "
            style={{filter:"blur(50px)" , transform : "scale(1.125"}}
          />
          <img
            src="https://images.unsplash.com/photo-1669692232745-63cb56e623b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover  absolute "
            style={{filter:"blur(50px)" , transform : "scale(1.125"}}
          />
          {/* <img src="https://plus.unsplash.com/premium_photo-1728442648049-e39e8dc3d1ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='w-full h-full object-cover'   alt="" /> */}
          {/* <img src="https://plus.unsplash.com/premium_photo-1729029402571-461f986b73ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='w-full h-full object-cover'   alt="" /> */}
        </div>

        <div className="slider  fixed top-0 w-full h-screen "
         style={{transformStyle : "preserve-3d" , perspective : "750px" , overflow:"hidden"}}
        >
          <div className="slide absolute w-[400px] opacity-0 h-[400px]  overflow-hidden top-[30%] left-[6%] " id="slide-1"
          style={{transform :"translateX(-50%) translateY(-50%) "}}>
            <div className="slide-copy">
              <p>Neo Elegance</p>
              <p id="index">123456</p>
            </div>
            <div className="slide-img">
              <img
                src="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          <div className="slide absolute w-[400px] h-[400px] opacity-0  overflow-hidden top-[50%] left-[70%] " id="slide-2"
          style={{transform :"translateX(-50%) translateY(-50%) "}}>
            <div className="slide-copy">
              <p>Neo Elegance</p>
              <p id="index">123456</p>
            </div>
            <div className="slide-img">
              <img
                src="https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          <div className="slide absolute opacity-0 w-[400px] h-[400px]  overflow-hidden top-[50%] left-[80%] " id="slide-3"
          style={{transform :"translateX(-50%) translateY(-50%) "}}>
            <div className="slide-copy">
              <p>Neo Elegance</p>
              <p id="index">123456</p>
            </div>
            <div className="slide-img">
              <img
                src="https://images.unsplash.com/photo-1616163527093-41acfce459ce?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          <div className="slide absolute opacity-[0.5] w-[400px] h-[400px]  overflow-hidden top-[80%] left-[20%] " id="slide-4"
          style={{transform :"translateX(-50%) translateY(-50%) "}}>
            <div className="slide-copy">
              <p>Neo Elegance</p>
              <p id="index">123456</p>
            </div>
            <div className="slide-img">
              <img
                src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          <div className="slide absolute w-[400px] opacity-1 h-[400px]  overflow-hidden top-[60%] left-[60%] " id="slide-5"
          style={{transform :"translateX(-50%) translateY(-50%) "}}>
            <div className="slide-copy">
              <p>Neo Elegance</p>
              <p id="index">123456</p>
            </div>
            <div className="slide-img">
              <img
                src="https://images.unsplash.com/photo-1669692232745-63cb56e623b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          {/* 
            <div className="slide" id='slide-6'>
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">123456</p>
                </div>
                <div className="slide-img">
                    <img src="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='w-full h-full object-cover'   alt="" />
                </div>
            </div>


            <div className="slide" id='slide-7'>
                <div className="slide-copy">
                    <p>Neo Elegance</p>
                    <p id="index">123456</p>
                </div>
                <div className="slide-img">
                    <img src="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='w-full h-full object-cover'   alt="" />
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default AnimationZoomScroll;
