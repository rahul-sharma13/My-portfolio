import React,{useRef} from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

const Cube = () => {
  //useFrame(state=>console.log(state)); use this to check whats under state in this hook. 
  
  const textRef = useRef();
  useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2));   //moving it from left to right and then back again in a cycle like a sin function.

  return (
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture attach="map">
            <PerspectiveCamera  makeDefault 
            position={[0,0,5]}
            />
            <color attach="background" args={["#7CB9E8"]}/>
                <Text ref={textRef} fontSize={3} color="#509de0">
                    hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube