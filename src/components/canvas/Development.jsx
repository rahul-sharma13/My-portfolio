import React from 'react';
import Mac from './Mac';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const Development = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Mac />
        </Stage>
        <OrbitControls autoRotate={true} enableZoom={false}/> 
    </Canvas>
  )
}

export default Development