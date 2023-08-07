import styled from 'styled-components';
import EarthCanvas from './canvas/Earth';
import React ,{ useState, useRef, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { motion , useInView, useAnimation } from 'framer-motion';

//creating the animation to be used.
const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  position: absolute;
  z-index: 1;
  top: 60px;
  overflow: hidden;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Cleft = styled(motion.div)`
  /* background-color: #01796f; */
  padding: 50px 25px;
  border-radius: 25px;
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  text-transform: uppercase;
  padding-bottom: 5px;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 50px;
  font-family: 'Lato',sans-serif;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 48px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: lightgrey;
  font-family: 'Poppins',sans-serif;
  border: none;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: lightgrey;
  font-family: 'Poppins',sans-serif;
`;

const Button = styled(motion.button)`
  background-color: #7CB9E8;
  color: whitesmoke;
  border: none;
  padding: 12px 24px;
  width: fit-content;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 12px;
  padding: 20px;
  font-family: 'Poppins',sans-serif;
`;

const Right = styled.div`
  flex: 1;
  /* background-color: rebeccapurple; */
  position: relative;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Cright = styled(motion.div)`   //div to position canvas correctly
  width: 50vw;
  height: 100%;
  overflow-x: hidden;
  /* background-color: black; */
  position: absolute;
  top: 20px;
`

const Contact = () => {
  //creating the contact form 
  const formRef = useRef();
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  });
  const [loading, setLoading] = useState(false);

  //hooks used in term to make animation while the section is in view or on screen.
  const ref = useRef(null);       //to refer the div/section we apply animation on 
  const isInView = useInView(ref);   
  const mainControls = useAnimation();    
  useEffect(()=>{
    if(isInView){
      mainControls.start("show");  //starts the "show" part of the variant we created . Changes from initial to show.
    }
    if(!isInView){
      console.log("Contact not in view");
    }
  },[isInView]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form,[name]:value})  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //service,template and api key used (emailjs).
    emailjs.send("service_hg2dk39",
    "template_k45mowg",
    {
      from_name: form.name,
      to_name: "Rahul",
      from_email: form.email,
      to_email: "rahul.smh1308@gmail.com",
      message: form.message,
    },
    "ACdd-jeEXwqBcve1A"
    )
    .then(()=>{
      setLoading(false);
      alert("Thank You. I will get back to you soon");

      setForm({
        name:'',
        email:"",
        message:"",
      })
    },(error)=>{
      setLoading(false)
      console.log(error);
      alert("Something went wrong.")
    })
  };

  return (
    <Section id="contact" ref={ref}>
      <Container>
        <Left>
          <Cleft 
            variants={slideIn("left","tween",0.2,1)}
            initial="hidden"
            animate={mainControls} 
          >
            <SubTitle>Get in touch.</SubTitle>
            <Title>Contact Me</Title>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" value={form.name} placeholder="Name" onChange={handleChange} autoComplete="off"/>
                <Input name="email" value={form.email} placeholder="Email" onChange={handleChange} autoComplete="off" />
                <TextArea name="message" value={form.message} placeholder="Write your message" rows={10} onChange={handleChange} autoComplete="off"/>
                <Button whileHover={{
                      scale:1.1,
                      transition:{duration:0.2},
                      textShadow:"0px 0px 8px rgb(209, 139, 187)",
                      boxShadow:"0px 0px 8px rgb(209, 139, 187)",
                  }} whileTap={{scale:0.9,
                      color:"#8e0959"
                  }} type="submit">{loading? "Sending...":"Send"}</Button>
              </Form>
        </Cleft>
      </Left>
        <Right>
        <Cright 
          variants={slideIn("right","tween",0.2,1)}
          initial="hidden"
          animate={mainControls} 
        >
            <EarthCanvas />
          </Cright>  
        </Right>
      </Container>
    </Section>
  )
}

export default Contact