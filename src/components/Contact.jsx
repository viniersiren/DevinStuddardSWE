import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import meImage from '../me.jpeg'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  padding: 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px; /* Adjusted for better centering */
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center horizontally */
  gap: 30px; /* Space between form and project list */
  text-align: center; /* Center text */
`;



const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 130px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 20px; /* Add spacing below the title */
`;

const Button = styled.button`
  background-color: pink;
  color: white;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 15px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  width: 100%; /* Full width */
  max-width: 500px; /* Limit width for better readability */
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px; /* Limit form width */
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center; /* Center form items */
`;

const TextArea = styled.textarea`
  padding: 15px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  width: 100%; /* Full width */
  max-width: 500px; /* Limit width for better readability */
  resize: vertical; /* Allow vertical resizing */
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-top: 20px;
  }
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 100px;
  margin-right: 50px;  /* Reduced margin to prevent pushing form out of sight */
  z-index: 1;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-top: 0;
    margin-right: 0;  /* Remove right margin on smaller screens */
    margin-bottom: 20px;
  }
`;


const ProjectList = styled.ul`
  font-size: 19px;
  color: lightgray;
  text-align: left;
  margin-top: 20px;
  max-width: 600px;
  list-style-type: disc;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
    margin-left: 0;
  }
`;

const ProjectItem = styled.li`
  margin-bottom: 15px;
  list-style-type: circle;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_s74f2nb', 'template_14ai7wu', ref.current, 'IziCPaX40ZfrOGRzG')
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
       
          
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Company" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Message Here :)" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success && <p>Your message has been sent. I'll get back to you shortly!</p>}
          </Form>
       
       
      </Container>
    </Section>
  );
};

export default Contact;



{/*<h2>Project Descriptions</h2>
          <ProjectList>
            <ProjectItem>
              <strong>Findr:</strong>
              <ul>
                <li>Developed a social media app in native iOS with a team of two.</li>
                <li>Heavily involved in the UI design.</li>
                <li>Created the backend with Firebase.</li>
                <li>Directed refactoring, meetings, and code reviews.</li>
                <li>Led the App Store approval process.</li>
              </ul>
            </ProjectItem>
            <ProjectItem>
              <strong>MeowMap:</strong>
              <ul>
                <li>Worked in a team of four on a cat tracking and welfare app.</li>
                <li>Focused on UI and design.</li>
                <li>Great opportunity to learn from more experienced software engineers.</li>
              </ul>
            </ProjectItem>
            <ProjectItem>
              <strong>Graphics Renderer:</strong>
              <ul>
                <li>Built in JavaScript and WebGL.</li>
                <li>Processes 3D vectors, normals, and texture maps.</li>
                <li>Creates textured 3D models with interpolation.</li>
                <li>Includes lighting systems (Phong, Gourand, ray-tracing) and shading.</li>
              </ul>
            </ProjectItem>
            <ProjectItem>
              <strong>ML Program:</strong>
              <ul>
                <li>Developed a companion ML model for the Findr app using PyTorch.</li>
                <li>Used the Places365 dataset to detect if a photo is taken indoors or outdoors.</li>
                <li>Hosted on Google Cloud, with concurrent requests running.</li>
              </ul>
            </ProjectItem>
          </ProjectList> */}