import { OrbitControls, Stage } from '@react-three/drei';
import React from './React';  //importing the model
import { Canvas } from 'react-three-fiber';

const WebDesign = () => {
  return (
    <>
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <React />
            </Stage>
            <OrbitControls autoRotate={true} enableZoom={false}/>
        </Canvas>
    </>
  )
}

export default WebDesign