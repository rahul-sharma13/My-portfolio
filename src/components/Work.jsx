import React,{useState} from 'react';
import styled from 'styled-components';
import { WebDesign, Three3D, Development} from './canvas';
import { motion } from 'framer-motion';

const data = [
  "ReactJS",
  "Development",
  "ThreeJS",
  "Tailwind CSS",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const Title = styled.h1`
  color: #C54B8C;
  font-size: 50px;
  font-family: 'Poppins',sans-serif;
  margin-bottom: 30px;
  padding-bottom: 10px;
  font-weight: 800;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled(motion.li)`
  font-size: 70px;
  font-weight: bold;
  font-family: sans-serif;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &::after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #C54B8C;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  /* while hover it will affect ::after */
  &:hover{
    animation: awake 0.3s linear both;

    @keyframes awake {
      from{
        opacity: 0.5;
        scale: 1;
      }
      to{
        opacity: 1;
        scale: 1.1;
      }
    }

    &::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Work = () => {
  const [work, setWork] = useState("ReactJS");

  return (
    <Section id="work">
      <Container>
        <Left>
          <List>
            <Title>Majourly worked in.</Title>
            {data.map((item) => (
              <ListItem 
                whileHover={{ originX:0  }} 
                key={item} 
                text={item} 
                onClick={()=>setWork(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "ReactJS" ? (
            <WebDesign />) : work === "ThreeJS" ? (
              <Three3D />
            ) : (
              <Development />
            )};
        </Right>
      </Container>
    </Section>
  )
}

export default Work