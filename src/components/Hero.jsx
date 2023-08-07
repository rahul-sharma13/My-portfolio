import React,{useEffect , useRef} from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Sphere, OrbitControls, MeshDistortMaterial  } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import Typed from 'typed.js';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

const Container = styled.div`
  height: 100%;
  width: 1400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins',sans-serif;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const Left = styled(motion.div)`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`
const Title = styled(motion.h1)`
  font-size: 74px;
  font-weight: 800;
  margin: 0;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const WhatIDo = styled(motion.h2)`
  margin: 0px;
  line-height: 10px;
  font-size: 48px;
  font-weight: 100;
`

const Span = styled.span`
  white-space: nowrap;
  font-weight: 700;
  color: #7CB9E8;
`

const Desc = styled(motion.p)`
  font-size: 16px;
  color: #a39b9b;
  max-width: 475px;
  margin-top: 20px;
  font-weight: 300;
  font-family: 'Lato',sans-serif;
  line-height: 1.75;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`

const Button = styled(motion.button)`
  padding: 15px;
  background-color: #7CB9E8;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  border: none;
  width: fit-content;
  border-radius: 10px; 
  font-family: 'Lato',sans-serif;
  cursor: pointer;
`

const Right = styled.div`
  position: relative;
  flex: 3;      /* if we take flex:8 here right side will be 4 times left side. */

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`
const Img = styled.img`
  width: 500px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto; /* all these properties to centre the image */
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`

const Hero = () => {
  //creating animation
  const mainTitleCtrl = useAnimation();
  const subHeadCtrl = useAnimation();
  const paragraphCtrl = useAnimation();
  const buttonCtrl = useAnimation();

  //creating a sequence in which animations would proceed with help of async function.
  const animationSequence = async () => {
    await mainTitleCtrl.start({ opacity: 1, scale: 1 });
    await subHeadCtrl.start({ opacity: 1, scale: [1.5 , 1] });
    await paragraphCtrl.start({opacity: 1, scale: 1});
    return await buttonCtrl.start({ opacity: 1, scale: [1.5,1,1.3,1] });
  }

  //triggering based on appearance on screen.
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  useEffect(()=>{
    if(inView){
      animationSequence();
    }
    if(!inView){
      console.log("Hero not in view");
    }
  },[inView]);


  //for typedjs
  const wrap = useRef(null);

  useEffect(()=>{
    const typed = new Typed(wrap.current,{
      strings: ["Student...","Designer...","Web Developer."],

      startDelay:200,
      typeSpeed:100,
      backSpeed:50,
      backDelay:200,
      smartBackspace: true,
      loop:true,
      cursorChar: "!"
    });

    //destroying
    return () => {
      typed.destroy();
    };
  },[]);

  return (
    <Section id="home" ref={ref}>
      <Navbar />
       <Container>
        <Left> 
          <Title 
          initial={{ opacity:0, scale:0.5 }}
          animate={mainTitleCtrl}
          transition={{
            duration: 0.8,
          }} >Hello</Title>
          <WhatIDo 
            initial={{opacity:0, scale:0.5}} 
            animate={subHeadCtrl}
            transition={{
              duration: 0.8,
            }}
          > I am a <Span ref={wrap}></Span> </WhatIDo> 
          <Desc
            initial={{ opacity:0 , scale:0.5 }}
            animate={paragraphCtrl}
            transition={{
              duration:0.8,
            }}
          >
            Passionate web developer skilled in crafting dynamic and user-friendly websites. Bringing creative designs to life with a strong focus on functionality and seamless user experiences.
          </Desc>
          <Button 
                  initial={{opacity:0 , scale:0 }}
                  animate={buttonCtrl}
                  transition={{
                    duration:0.8,
                    damping:3,
                    type:"spring",
                  }}          
           >  Download CV  </Button>
        </Left>
        <Right>
        <Canvas camera={{fov:25 , position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate />  {/*managing 3D shape without it, it would look like 2D sqaure. */}
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <Sphere args={[1,100,200]} scale={1.3} >
              <MeshDistortMaterial
                color="#7CB9E8"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/header-img.svg" />
        </Right>
      </Container> 
     
    </Section>
  )
}

export default Hero