import React from 'react'
import styled from 'styled-components'
import lineImage from '../line.png';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center; 
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin: 200px auto 0;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

`;

const Title = styled.h1`
font-size: 74px;
  
`;
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap 10px;
  
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
`;
const Button = styled.button`
  background-color: pink;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  
`;
const Who = () => {
    return (
        <Section>
            
            <Container>
                <Left>
                    
                </Left>
                <Right>
                <Title>Think, Make, Solve</Title>
                    <WhatWeDo>
                        <Line src={lineImage}/>
                        <Subtitle>What We Do</Subtitle>
                    </WhatWeDo>
                    <Desc>blah blah blah enoy creating</Desc>
                    <Button>Works</Button>
                </Right>
            </Container>
        </Section>
    );
}

export default Who