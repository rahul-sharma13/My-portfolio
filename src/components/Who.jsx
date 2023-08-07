import React,{ useEffect, useRef } from 'react';
import styled from 'styled-components';
import { OrbitControls} from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import Cube from './Cube';
import { motion } from 'framer-motion';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  font-family: 'Poppins',sans-serif;
`;

const Container = styled.div`
  height: 100%;
  width: 1400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SubHeading = styled.p`
  font-size: 25px;
  margin: 0;
  font-weight: 100;
  text-transform: uppercase;
  color: lightgray;
`

const Title = styled.h2`
  font-size: 74px;
  font-weight: 800;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  color: #a39b9b;
  max-width: 770px;
  line-height: 1.5;
  margin: 10px 0px;
  font-family: 'Lato', sans-serif;
`;

const Button = styled(motion.button)`
  margin-top: 15px;
  width: fit-content;
  padding: 10px;
  background-color: #7CB9E8;
  color: #fff; 
  font-size: 16px;
  border: none;
  border-radius: 10px; 
  font-family: 'Poppins',sans-serif;
  cursor: pointer;
`;

const Right = styled(motion.div)`
  flex: 1;      
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width:768px) {
    align-items: center;
    text-align: center;
  }
`;

const Span = styled.span`
  color: #7CB9E8;
  font-size: 20px;
`

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25 , position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate />  {/*managing 3D shape without it, it would look like 2D sqaure. */}
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
        >
            <SubHeading>My Work</SubHeading>
            <Title> Projects </Title>  
          <Desc>
           Welcome to the Project Showcase! Here, I am thrilled to present a collection of dynamic and immersive web development projects crafted with ReactJS, Framer Motion, and Three.js. As a passionate web developer, I have harnessed the power of these cutting-edge technologies to create captivating user experiences that push the boundaries of digital innovation. Each project displayed here is a testament to my dedication to delivering visually stunning and highly interactive web applications. Whether it's seamless animations brought to life with Framer Motion, intricate 3D worlds realized through Three.js, or feature-rich ReactJS applications.
          </Desc>
          <Button whileHover={{
                    scale:1.1,
                    transition:{duration:0.2},
                    textShadow:"0px 0px 8px rgb(209, 139, 187)",
                    boxShadow:"0px 0px 8px rgb(209, 139, 187)",
                }} whileTap={{scale:0.9,
                    color:"#8e0959"
                }} > Libraries I used </Button>
                
          <br /> <Span> Scroll down for my projects. </Span> 
        </Right>
      </Container>
    </Section>
  );
}

export default Who