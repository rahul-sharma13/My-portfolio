import React from 'react';
import Model3 from './Model3';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const Three3D = () => {
  return (
    <Canvas  >
        <Stage environment="city" intensity={0.6}>
            <Model3 />
        </Stage>
        <OrbitControls enableZoom={false}/> 
    </Canvas>
  )
}

export default Three3D