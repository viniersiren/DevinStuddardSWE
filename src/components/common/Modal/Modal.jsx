import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fadeIn, scaleIn } from '../../../styles/animations';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: ${props => props.theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.md};
  animation: ${fadeIn} 0.3s ease-out;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: ${props => props.theme.colors.background.dark};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.xl};
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${scaleIn} 0.3s ease-out;
  box-shadow: ${props => props.theme.shadows['2xl']}, ${props => props.theme.shadows.glow};
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.xl};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${props => props.theme.transitions.fast};
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: ${props => props.theme.colors.primary.main};
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.div`
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  background: ${props => props.theme.colors.background.darker};
  aspect-ratio: 16 / 9;
  display: ${props => props.hasImage ? 'block' : 'none'};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  background: ${props => props.theme.colors.background.darker};
  aspect-ratio: 16 / 9;
  display: ${props => props.hasVideo ? 'block' : 'none'};
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SectionTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 ${props => props.theme.spacing.md} 0;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  
  &::before {
    content: '';
    width: 4px;
    height: 1.5rem;
    background: ${props => props.theme.colors.primary.gradient};
    border-radius: ${props => props.theme.borderRadius.sm};
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const ChallengesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const ChallengeItem = styled.li`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid ${props => props.theme.colors.primary.main};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  
  &::before {
    content: '•';
    color: ${props => props.theme.colors.primary.main};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    margin-right: ${props => props.theme.spacing.sm};
  }
`;

const ImpactText = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  padding: ${props => props.theme.spacing.md};
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid ${props => props.theme.colors.primary.main}33;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin: 0;
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const DetailItem = styled.li`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.03);
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  
  &::before {
    content: '✓';
    color: ${props => props.theme.colors.accent.main};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    margin-right: ${props => props.theme.spacing.sm};
  }
`;

const ProjectTitle = styled.h2`
  font-size: clamp(${props => props.theme.typography.fontSize['2xl']}, 4vw, ${props => props.theme.typography.fontSize['4xl']});
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
  background: ${props => props.theme.colors.primary.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  align-items: center;
`;

const ProjectDate = styled.span`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
`;

const ProjectCategory = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.primary.main}33;
  border: 1px solid ${props => props.theme.colors.primary.main};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.primary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`;

const ProjectDescription = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const TechTag = styled.span`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.primary.main}33;
  border: 1px solid ${props => props.theme.colors.primary.main};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.primary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectLink = styled.a`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.fast};
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  
  &:hover {
    background: ${props => props.theme.colors.primary.dark};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const DemoComingSoon = styled.span`
  color: ${props => props.theme.colors.text.muted};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-style: italic;
`;

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose} aria-label="Close modal">
          ×
        </CloseButton>
        <ModalBody>
          <MediaContainer>
            {project.media?.image && (
              <ImageContainer hasImage={!!project.media.image}>
                <ProjectImage 
                  src={project.media.image} 
                  alt={project.title}
                />
              </ImageContainer>
            )}
            {project.media?.video && (
              <VideoContainer hasVideo={!!project.media.video}>
                <Video 
                  src={project.media.video} 
                  controls 
                  autoPlay
                  preload="metadata"
                />
              </VideoContainer>
            )}
          </MediaContainer>
          
          <div>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectMeta>
              {project.date && <ProjectDate>{project.date}</ProjectDate>}
              {project.category && <ProjectCategory>{project.category}</ProjectCategory>}
            </ProjectMeta>
          </div>

          {(project.longDescription || project.description) && (
            <ProjectDescription>
              {project.longDescription || project.description}
            </ProjectDescription>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div>
              <SectionTitle>Tech Stack</SectionTitle>
              <TechStack>
                {project.techStack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <SectionContent>
              <SectionTitle>Challenges</SectionTitle>
              <ChallengesList>
                {project.challenges.map((challenge, index) => (
                  <ChallengeItem key={index}>{challenge}</ChallengeItem>
                ))}
              </ChallengesList>
            </SectionContent>
          )}

          {project.impact && (
            <SectionContent>
              <SectionTitle>Impact</SectionTitle>
              <ImpactText>{project.impact}</ImpactText>
            </SectionContent>
          )}

          {project.additionalDetails && project.additionalDetails.length > 0 && (
            <SectionContent>
              <SectionTitle>Additional Details</SectionTitle>
              <DetailsList>
                {project.additionalDetails.map((detail, index) => (
                  <DetailItem key={index}>{detail}</DetailItem>
                ))}
              </DetailsList>
            </SectionContent>
          )}

          {(project.media?.appStoreUrl ||
            project.media?.githubUrl ||
            project.media?.demoUrl ||
            project.media?.demoComingSoon) && (
            <ProjectLinks>
              {project.media.appStoreUrl && (
                <ProjectLink 
                  href={project.media.appStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  App Store →
                </ProjectLink>
              )}
              {project.media.githubUrl && (
                <ProjectLink 
                  href={project.media.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub →
                </ProjectLink>
              )}
              {project.media.demoUrl && (
                <ProjectLink 
                  href={project.media.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </ProjectLink>
              )}
              {project.media.demoComingSoon && (
                <DemoComingSoon>Demo coming soon</DemoComingSoon>
              )}
            </ProjectLinks>
          )}
        </ModalBody>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;

