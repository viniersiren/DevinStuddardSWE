import React from 'react';
import styled from 'styled-components';
import { fadeInUp } from '../../../styles/animations';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import { experience } from '../../../data/experience';

const Header = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  animation: ${fadeInUp} 0.8s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: clamp(${props => props.theme.typography.fontSize['3xl']}, 5vw, ${props => props.theme.typography.fontSize['5xl']});
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin: 0;
  background: ${props => props.theme.colors.primary.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
  width: 100%;
`;

const RoleCard = styled(Card)`
  padding: ${props => props.theme.spacing['2xl']};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  animation: ${fadeInUp} 0.6s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.$index * 0.08}s;
`;

const RoleHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.md};
`;

const Company = styled.h3`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  align-items: center;
`;

const RoleTitle = styled.span`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.accent.main};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
`;

const ContextTag = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.primary.main}22;
  border: 1px solid ${props => props.theme.colors.primary.main}66;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.text.secondary};
`;

const Dates = styled.span`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.muted};
  white-space: nowrap;
`;

const Summary = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const Highlights = styled.ul`
  margin: 0;
  padding-left: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.base};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
`;

const HighlightItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const TechTag = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.primary.main}33;
  border: 1px solid ${props => props.theme.colors.primary.main};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.text.primary};
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  padding-top: ${props => props.theme.spacing.sm};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.accent.main};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.accent.light};
    text-decoration: underline;
  }
`;

const Experience = () => {
  return (
    <Section id="experience">
      <Header>
        <SectionTitle>Experience</SectionTitle>
      </Header>
      <Timeline>
        {experience.map((job, index) => (
          <RoleCard key={job.id} hoverable $index={index}>
            <RoleHeader>
              <div>
                <Company>{job.company}</Company>
                <Meta>
                  <RoleTitle>{job.role}</RoleTitle>
                  {job.context && <ContextTag>{job.context}</ContextTag>}
                </Meta>
              </div>
              <Dates>
                {job.startLabel} — {job.endLabel}
              </Dates>
            </RoleHeader>
            <Summary>{job.summary}</Summary>
            <Highlights>
              {job.highlights.map((line) => (
                <HighlightItem key={line}>{line}</HighlightItem>
              ))}
            </Highlights>
            <TechRow>
              {job.tech.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </TechRow>
            {job.links.length > 0 && (
              <Links>
                {job.links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} →
                  </ExternalLink>
                ))}
              </Links>
            )}
          </RoleCard>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;
