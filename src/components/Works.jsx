import React, { useState } from 'react';
import styled, { css } from 'styled-components';

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
  align-items: center;
  overflow: hidden; /* Hide scroll bar */
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  position: relative;
  transform: translateX(-40px);

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    transform: none;
    padding: 0 20px;
  }
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

  @media (max-width: 768px) {
    position: static;
    transform: none;
    align-items: center;
    text-align: center;
  }
`;

const ListItem = styled.li`
  font-size: clamp(30px, 5vw, 80px);
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

  @media (max-width: 768px) {
    font-size: clamp(25px, 8vw, 60px);
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Video = styled.video`
  width: auto;
  max-height: ${({ isWide }) => (isWide ? "400px" : "600px")};
  max-width: ${({ isWide }) => (isWide ? "80%" : "100%")}; /* Adjust width for wider videos */
  border-radius: 10px;

  ${({ isWide }) =>
    isWide &&
    css`
      position: relative;
      top: 0;
      margin-left: -20%; /* Shift the video left to prevent overlap */
    `}

  @media (max-width: 768px) {
    max-height: 300px;
    max-width: 100%;
    margin-left: 0; /* Reset margin for mobile */
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
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
          <Video
            src={selectedVideo}
            controls
            autoPlay
            isWide={selectedLabel === "Renderer"} // Apply wider styling for the graphics renderer video
          />
        </Right>
      </Container>
    </Section>
  );
};

export default Works;