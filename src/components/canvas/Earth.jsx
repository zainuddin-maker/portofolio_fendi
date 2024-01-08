import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const EarthComp = ({dark}) => {
  // const earth = useGLTF("./planet/scene.gltf");
  const emailblack = useGLTF("./planet/newblackcomputer/scene.gltf");
  // const email2 = useGLTF("./planet/mail_box/scene.gltf");
  const emailwhite = useGLTF("./planet/ibm_3178/scene.gltf");


  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[-10, 100, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} />
      <primitive
        object={ dark ? emailblack.scene : emailwhite.scene}
        scale={dark ? 0.09 : 0.13}
        position={dark ?[0,-1, 0]:[0.5, -1.5, 0]}
        rotation-y={80.7}
      />
    </mesh>
  );
};

const EarthCanvas = ({dark}) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.5,
        far: 100,
        position: [-5, 3.3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <EarthComp dark={dark} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
