import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fadeInUp } from '../../../styles/animations';
import { theme } from '../../../styles/theme';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';

const statsMediaQuery = `(min-width: ${theme.breakpoints.lg})`;

function useShowAboutStats() {
  const [show, setShow] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(statsMediaQuery).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(statsMediaQuery);
    const onChange = () => setShow(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return show;
}

/* Matches horizontal inset of body text inside Card sections (e.g. Experience RoleCard, ContactCard padding). */
const AboutInner = styled.div`
  width: 100%;
  padding-left: ${props => props.theme.spacing['2xl']};
  padding-right: ${props => props.theme.spacing['2xl']};
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-left: ${props => props.theme.spacing.lg};
    padding-right: ${props => props.theme.spacing.lg};
  }
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.$hasStats ? '1fr 1fr' : '1fr')};
  gap: ${props => props.theme.spacing['2xl']};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    gap: ${props => props.theme.spacing.xl};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  animation: ${fadeInUp} 0.8s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: clamp(${props => props.theme.typography.fontSize['3xl']}, 5vw, ${props => props.theme.typography.fontSize['5xl']});
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.primary.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Text = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Highlight = styled.span`
  color: ${props => props.theme.colors.accent.main};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
`;

const TechTag = styled.span`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.primary.main}33;
  border: 1px solid ${props => props.theme.colors.primary.main};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.primary};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(Card)`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
`;

const StatNumber = styled.div`
  font-size: ${props => props.theme.typography.fontSize['4xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  background: ${props => props.theme.colors.primary.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
`;

const About = () => {
  const showStats = useShowAboutStats();

  const technologies = [
    'Swift',
    'React',
    'React Native',
    'TypeScript',
    'JavaScript',
    'Firebase',
    'Python',
    'iOS',
    'WebGL',
  ];

  return (
    <Section id="about">
      <AboutInner>
        <SectionTitle>About Me</SectionTitle>
        <AboutContainer $hasStats={showStats}>
          <Content>
            <Text>
              I'm a <Highlight>Full Stack Developer</Highlight> with a passion for creating 
              exceptional mobile and web experiences. I'm experienced in Mobile/Web development with React, 
              where I build intuitive and performant applications.
            </Text>
            <Text>
              I enjoy the entire process of bringing ideas to life, from initial concept and design 
              to implementation and deployment. I'm always eager to learn new technologies and 
              tackle challenging problems.
            </Text>

            <TechList>
              {technologies.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechList>
          </Content>
          {showStats && (
            <StatsGrid>
              <StatCard>
                <StatNumber>2+</StatNumber>
                <StatLabel>Yrs Experience</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>Mobile</StatNumber>
                <StatLabel>Specialization</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>Full</StatNumber>
                <StatLabel>Stack Developer</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>AWS</StatNumber>
                <StatLabel>Learning</StatLabel>
              </StatCard>
            </StatsGrid>
          )}
        </AboutContainer>
      </AboutInner>
    </Section>
  );
};

export default About;

