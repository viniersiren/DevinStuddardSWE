import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import lineImage from '../line.png';
import machuImage from '../machu1.png';

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  
  justify-content: flex-end;
  gap: 20px;
  color: white;
  margin: 150px auto 0;
  padding: 0 20px; /* Add padding to avoid side scroll */
  transform: translateX(-40px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    transform: none; /* Remove translate on smaller screens */
    padding: 0 10px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: clamp(30px, 8vw, 52px);

  @media (max-width: 768px) {
    font-size: clamp(30px, 7vw, 40px);
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: pink;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  background-color: pink;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120px;
    padding: 12px;
  }
`;

const Img = styled.img`
  width: 80%;
  max-width: 800px;
  height: auto;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: static;
  }
`;

const Hero = () => {
  return (
    <Section>
      <NavBar />
      <Container>
        <Left>
          <Title>Devin Studdard</Title>
          <WhatWeDo>
            <Line src={lineImage} />
            <Subtitle>From idea to implementation</Subtitle>
          </WhatWeDo>
          <Desc>Full Stack Developer</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src={machuImage} />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
