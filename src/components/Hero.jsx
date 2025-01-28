import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import lineImage from '../line.png';
import meImage from '../me.jpeg';

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
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: white;
  margin: 50px auto;
  padding: 0 10px;
  text-align: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: clamp(30px, 7vw, 40px);
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: pink;
`;

const Desc = styled.p`
  font-size: 18px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: pink;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Img = styled.img`
  width: clamp(200px, 30vw, 400px); /* Scales between 200px and 400px based on viewport width */
  height: clamp(200px, 30vw, 400px); /* Maintains a square aspect ratio */
  border-radius: 50%;
  object-fit: cover;
  margin-top: 25px;
  z-index: 1;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
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
            <Subtitle>Looking for Work</Subtitle>
          </WhatWeDo>
          <Desc>Full Stack Developer with emphasis on native iOS development</Desc>
          <Img src={meImage} />
        </Left>
      </Container>
    </Section>
  );
};

export default Hero;