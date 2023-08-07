import React from "react";
import {Hero, Who, Work, Contact, SeeProjects} from "./components";
import styled from "styled-components";
import StarsCanvas from "./components/canvas/StarCanvas";

const Container = styled.div`
  height: 100vh;
  background-image: url(./img/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

const Cover = styled.div`
  position: relative;
  z-index: 0;
`

function App() {
  return (
    <Container>
      <Cover> 
        <Hero />
        <StarsCanvas />
      </Cover>
      <Cover>
        <Who />
        <StarsCanvas />
      </Cover> 
      <Cover>  
        <Work />
        <StarsCanvas />
      </Cover>
      <Cover>   
        <Contact />
        <StarsCanvas />   
      </Cover>
    </Container>
  )
}

export default App
