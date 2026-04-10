import React from 'react';
import styled from 'styled-components';
import { fadeInUp, float } from '../../../styles/animations';
import Button from '../../common/Button/Button';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${props => props.theme.spacing.xl};
  min-height: calc(100vh - 80px);
  padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.xl}
    ${props => props.theme.spacing.xl};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  max-width: 800px;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Greeting = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.accent.main};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Title = styled.h1`
  font-size: clamp(${props => props.theme.typography.fontSize['5xl']}, 8vw, ${props => props.theme.typography.fontSize['7xl']});
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  background: ${props => props.theme.colors.primary.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: ${props => props.theme.typography.lineHeight.tight};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Subtitle = styled.h2`
  font-size: clamp(${props => props.theme.typography.fontSize['2xl']}, 4vw, ${props => props.theme.typography.fontSize['4xl']});
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Description = styled.p`
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  max-width: 600px;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    
    button {
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
  animation: ${fadeInUp} 1s ease-out 0.3s both;
`;

const ProfileImage = styled.img`
  width: clamp(200px, 25vw, 300px);
  height: clamp(200px, 25vw, 300px);
  border-radius: ${props => props.theme.borderRadius.full};
  object-fit: cover;
  border: 4px solid ${props => props.theme.colors.primary.main};
  box-shadow: ${props => props.theme.shadows['2xl']}, ${props => props.theme.shadows.glow};
  animation: ${float} 3s ease-in-out infinite;
`;

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <Content>
        <Greeting>Hi, my name is</Greeting>
        <Title>Devin Studdard</Title>
        <Subtitle>Full Stack Developer</Subtitle>
        <Description>
          I specialize in native iOS development and full-stack solutions. 
          I create beautiful, functional mobile applications and web experiences 
          that users love.
        </Description>
        <ButtonGroup>
          <Button variant="primary" size="lg" onClick={scrollToProjects}>
            View Projects
          </Button>
          <Button variant="outline" size="lg" onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }}>
            Get in Touch
          </Button>
        </ButtonGroup>
      </Content>
      <ImageContainer>
        <ProfileImage src="/me.jpeg" alt="Devin Studdard" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;

