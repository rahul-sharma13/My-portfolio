import React from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Poppins',sans-serif; 

    @media only screen and (max-width: 768px) {
        width: 100%; 
    }
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px) {
        width: 100%; 
        padding: 10px;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 70px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const List = styled(motion.ul)`
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const ListItem = styled.li`
    list-style: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    padding: 6px 10px;
    border-radius: 12px;

    &:hover {
        background-color: #7CB9E8;
        transition: ease-in 0.3s;
    }
`;

const A = styled.a`
    text-decoration: none;
    color: white;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Button = styled(motion.button)`
    width: fit-content;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Poppins',sans-serif;
    padding: 10px;
    background-color: #7CB9E8;
    color: white; 
    border: 10px;
    border-radius: 12px;
    cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/2.png"/> 
            </Links>
            <Content>
                <List>
                    <ListItem> <A href="#home"> Home </A>  </ListItem>
                    <ListItem> <A href="#work"> Work </A>  </ListItem>
                    <ListItem> <A href="#contact"> Contact </A> </ListItem>
                </List>
            </Content>
            <Icons>
                <Button whileHover={{
                    scale:1.1,
                    transition:{duration:0.2},
                    textShadow:"0px 0px 8px rgb(209, 139, 187)",
                    boxShadow:"0px 0px 8px rgb(209, 139, 187)",
                }} whileTap={{scale:0.9,
                    color:"#8e0959"
                }} > Source Code </Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar