import { OrbitControls} from '@react-three/drei';
import React from 'react'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'
import Cube from './Cube';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`;

const Test = () => {
  
  return ( 
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false} />  {/*managing 3D shape without it, it would look like 2D sqaure. */}
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <Cube />
        </Canvas>
    </Container>
  )
}

export default Test