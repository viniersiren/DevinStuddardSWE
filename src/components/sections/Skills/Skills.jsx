import React from 'react';
import styled from 'styled-components';
import { fadeInUp } from '../../../styles/animations';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import { skills } from '../../../data/skills';

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing['2xl']};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
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

const SectionDescription = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(Card)`
  padding: ${props => props.theme.spacing.xl};
  animation: ${fadeInUp} 0.6s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.index * 0.1}s;
`;

const CategoryTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.03);
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${props => props.theme.colors.primary.main};
    transform: translateX(4px);
  }
`;

const SkillName = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.primary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`;

const SkillLevel = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => {
    if (props.level === 'advanced') return props.theme.colors.accent.main;
    if (props.level === 'intermediate') return props.theme.colors.primary.main;
    return props.theme.colors.text.muted;
  }};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  text-transform: capitalize;
`;

const categoryTitles = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  tools: 'Tools',
  ml: 'ML',
};

const Skills = () => {
  const skillCategories = Object.entries(skills);

  return (
    <Section id="skills">
      <SkillsContainer>
        <Header>
          <SectionTitle>Skills & Technologies</SectionTitle>
          <SectionDescription>
            Technologies and tools I work with to bring ideas to life.
          </SectionDescription>
        </Header>

        <SkillsGrid>
          {skillCategories.map(([category, skillList], index) => (
            <SkillCategory key={category} index={index}>
              <CategoryTitle>
                {categoryTitles[category] ?? category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryTitle>
              <SkillsList>
                {skillList.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillName>
                      {skill.name}
                    </SkillName>
                    <SkillLevel level={skill.level}>
                      {skill.level}
                    </SkillLevel>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </Section>
  );
};

export default Skills;

