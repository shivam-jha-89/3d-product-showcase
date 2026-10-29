import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useRef, useEffect } from "react";
import beep from "/src/assets/single_beep.mp3";
export  function Model() {
  const { scene } = useGLTF("/josta.glb");
  const modelRef = useRef();
  const audioRef = useRef(new Audio(beep));
  
  useGSAP(()=>{
    const model = modelRef.current;

    gsap.fromTo(model.scale,{
      x:0,
      y:0,
      z:0,

    },{
      x:1,
      y:1,
      z:1,
      duration:1,
      ease:"power1.out"
    })

   const floatAni=  gsap.to(model.position,{
     
      y:0.4,
      repeat:-1,
      yoyo:true,
      ease:"power1.inOut",
      duration:1,
      paused:false
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top -10%",
        end: "top -200%",
        scrub: 1,
        onEnter: () => floatAni.pause(),
        onLeaveBack: () => floatAni.resume(),
      }
    });
  
    tl.to(model.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2
    });
  
   
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page3",
        start: "top -2%",
        end: "+=100%",
        scrub: 1,
        pin:true,
        
      }
    });
    
    tl2.to(model.rotation, {
      y: Math.PI * 4,
      onComplete: () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    
    });

    tl2.fromTo(model.scale,{
      x:1,
      y:1,
      z:1,
    },{
      x:0,
      y:0,
      z:0,
      ease:"power1.out"
    }).fromTo(".scan-container",{
      scale:1,
    },{
      scale:0,
      duration:1,
      ease:"power1.out"
    })
  },[])
  return <primitive object={scene} scale={1} ref={modelRef}  castShadow
  receiveShadow />;
}