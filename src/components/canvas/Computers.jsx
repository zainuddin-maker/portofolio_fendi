import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile ,dark , multiply }) => {
  const computer = useGLTF("./holo/blackkeyboard/scene.gltf");
  const computerwhite = useGLTF("./holo/whitekeyboard/scene.gltf");

 

  return (
    <mesh>
      {/* <hemisphereLight intensity={0.5} groundColor='black' /> */}
      <spotLight
      color = {"#ffffff"}
        position={[-10, 100, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} />
      <primitive
        //  color = {"#ffffff"}
        object={ dark ? computer.scene : computerwhite.scene}
        scale={isMobile ? 0.04*multiply : 0.085*multiply}
        position={isMobile ? [0, -0.5, 0.2] : dark?   [0, -0.25, 0.4] : [0.5, -1.2, 0.1] }
        rotation={[1.45, 0.2, 5.2]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({dark}) => {
  const [isMobile, setIsMobile] = useState(false);
  const controlsRef = useRef();

  const stopAutoRotate = () => {
    controlsRef.current.autoRotate = false;
  };

  // Stop auto-rotate after 20 seconds
  setTimeout(stopAutoRotate, 10000);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery1 = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery1.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery1.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery1.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 6, -5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={controlsRef}
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} dark={dark} multiply = {dark ?1: 0.6}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
