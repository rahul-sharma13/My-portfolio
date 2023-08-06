import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")

  return (
    <primitive 
      object={earth.scene}
      scale={2.5}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer:true}}
      camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-4,3,6]
      }}
    >
      <Suspense fallback={null}> {/* managing if our earth hasnt loaded yet with fallback */}
        <OrbitControls 
          enableZoom={false}
          autoRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>

      <Earth />

      <Preload all /> 
    </Canvas>
  )
}

export default EarthCanvas;