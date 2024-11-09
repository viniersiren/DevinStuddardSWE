import React, { useState } from 'react';
import styled from 'styled-components';

import graphicsVid from '../graphics.mp4';
import modelVid from '../mlmodel.mp4';
import meowVid from '../meowmap.mp4';
import findrVid from '../findr.mp4';

const data = [
  
  
  
  { label: "Finder", videoUrl: findrVid },
  { label: "MeowMap", videoUrl: meowVid },
  { label: "ML program", videoUrl: modelVid },
  { label: "Renderer", videoUrl: graphicsVid },
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  position: relative;
  transform: translateX(-40px)
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 70%;
  left: 18vw;
  transform: translateY(-90%);
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;

const ListItem = styled.li`
  font-size: clamp(30px, 5vw, 80px); /* Use clamp to define min, max, and responsive range */
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.7s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

  /* Optional: Fine-tune for smaller screens using media queries */
  @media (max-width: 768px) {
    font-size: clamp(25px, 8vw, 60px); /* Adjust font size further for small screens */
  }
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  width: auto;
  max-height: ${({ isWide }) => (isWide ? "10%" : "60%")};
  max-width: 100%;
  border-radius: 10px;

  ${({ isWide }) =>
    isWide &&
    css`
      position: relative;
      top: -10%; /* Move up when the video is wide */
    `}
`;


const Works = () => {
  const [selectedVideo, setSelectedVideo] = useState(findrVid);
  const [selectedLabel, setSelectedLabel] = useState("Finder");

  const handleSelect = (item) => {
    setSelectedVideo(item.videoUrl);
    setSelectedLabel(item.label);
  };

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                key={item.label}
                text={item.label}
                isSelected={selectedLabel === item.label}
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <Video src={selectedVideo} controls autoPlay />
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
