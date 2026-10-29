import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Model } from "./components/Model";
import { Environment} from "@react-three/drei";
import * as THREE from "three";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Canvas  shadows gl={{antialias:true,toneMapping:THREE.ACESFilmicToneMapping,outputColorSpace:THREE.SRGBColorSpace}} camera={{ position: [0, 0, 5], fov: 75 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <ambientLight intensity={10} />
        {/* <ambientLight intensity={0.6} /> */}

       
        <directionalLight position={[5, 5, 5]} intensity={10} />

      
        <directionalLight position={[-5, 2, 5]} intensity={5} />

       
        <pointLight position={[0, 5, -5]} intensity={1} />
      
        <Environment preset="city" />
        <Model />
      </Canvas>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <SpeedInsights />
    </>
  );
}

export default App;
