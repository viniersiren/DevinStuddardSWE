import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from '../../../styles/animations';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Modal from '../../common/Modal/Modal';
import { projects, getAllCategories } from '../../../data/projects';

const ProjectsContainer = styled.div`
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

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const FilterButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background: ${props => props.active 
    ? props.theme.colors.primary.main 
    : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.active 
    ? props.theme.colors.text.primary 
    : props.theme.colors.text.secondary};
  border: 1px solid ${props => props.active 
    ? props.theme.colors.primary.main 
    : 'rgba(255, 255, 255, 0.1)'};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    background: ${props => props.active 
      ? props.theme.colors.primary.dark 
      : 'rgba(255, 255, 255, 0.1)'};
    border-color: ${props => props.theme.colors.primary.main};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.xl};
  height: 100%;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.index * 0.1}s;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  background: ${props => props.thumbnailColor || props.theme.colors.background.darker};
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.lg};
  }
  
  ${props =>
    props.$showPlayOverlay &&
    `
  &::after {
    content: '▶';
    position: absolute;
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    transition: all ${props.theme.transitions.fast};
  }
  
  &:hover::after {
    transform: scale(1.1);
    color: rgba(255, 255, 255, 1);
  }
  `}
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${props => props.hasImage ? 'block' : 'none'};
`;

const ThumbnailVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
`;

const linkPreviewPulse = keyframes`
  50% {
    opacity: 0.45;
  }
`;

const LinkPreviewOuter = styled.div`
  position: absolute;
  inset: ${props => props.theme.spacing.sm};
  display: flex;
  flex-direction: column;
  pointer-events: none;
`;

const LinkPreviewSkeleton = styled.div`
  flex: 1;
  border-radius: ${props => props.theme.borderRadius.md};
  background: rgba(255, 255, 255, 0.08);
  animation: ${linkPreviewPulse} 1.1s ease-in-out infinite;
`;

const LinkPreviewBubble = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius.md};
  overflow: hidden;
  background: rgba(22, 22, 22, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: ${props => props.theme.shadows.md};
`;

const LinkPreviewHero = styled.div`
  flex: 1.1;
  min-height: 0;
  background-color: ${props => props.theme.colors.background.darker};
  background-image: ${props => (props.$src ? `url(${props.$src})` : 'none')};
  background-size: cover;
  background-position: center;
`;

const LinkPreviewHeroFallback = styled.div`
  flex: 1.1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    145deg,
    ${props => props.theme.colors.background.darker},
    ${props => props.$tint}55
  );
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: rgba(255, 255, 255, 0.35);
`;

const LinkPreviewMeta = styled.div`
  flex-shrink: 0;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const LinkPreviewDomain = styled.span`
  font-size: 0.7rem;
  color: ${props => props.theme.colors.text.muted};
  text-transform: lowercase;
  letter-spacing: 0.02em;
`;

const LinkPreviewTitle = styled.span`
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const LinkPreviewDesc = styled.span`
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ConstructionPlaceholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  background: linear-gradient(
    160deg,
    ${props => props.theme.colors.background.darker} 0%,
    ${props => props.$tint}33 45%,
    ${props => props.theme.colors.background.darker} 100%
  );
  border: 1px dashed rgba(255, 255, 255, 0.12);
`;

const ConstructionLinePrimary = styled.span`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary.main};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const ConstructionLineSecondary = styled.span`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.muted};
  font-style: italic;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  flex: 1;
`;

const TechStack = styled.div`
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

const ProjectLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.accent.main};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    color: ${props => props.theme.colors.accent.light};
    text-decoration: underline;
  }
`;

const DemoComingSoon = styled.span`
  color: ${props => props.theme.colors.text.muted};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-style: italic;
`;

function VideoThumbnail({ src, title }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const seekToFirstFrame = () => {
      try {
        video.currentTime = 0.001;
      } catch {
        video.currentTime = 0;
      }
    };

    const onLoaded = () => seekToFirstFrame();
    video.addEventListener('loadeddata', onLoaded);
    if (video.readyState >= 2) seekToFirstFrame();

    return () => video.removeEventListener('loadeddata', onLoaded);
  }, [src]);

  return (
    <ThumbnailVideo
      ref={ref}
      src={src}
      muted
      playsInline
      preload="auto"
      aria-label={`${title} preview`}
    />
  );
}

function hostnameOnly(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function LinkPreviewCard({ url, fallbackTitle, fallbackDescription, tint }) {
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      setLoading(true);
      setPreview(null);
      try {
        const res = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(url)}`
        );
        const json = await res.json();
        if (cancelled) return;
        if (json.status === 'success' && json.data) {
          const d = json.data;
          const imageUrl =
            d.image?.url || d.screenshot?.url || d.logo?.url || null;
          setPreview({
            title: (d.title && String(d.title).trim()) || fallbackTitle,
            description:
              (d.description && String(d.description).trim()) ||
              fallbackDescription,
            imageUrl,
          });
        } else {
          setPreview(null);
        }
      } catch {
        if (!cancelled) setPreview(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [url, fallbackTitle, fallbackDescription]);

  const domain = hostnameOnly(url);
  const title = preview?.title ?? fallbackTitle;
  const description = preview?.description ?? fallbackDescription;
  const imageUrl = preview?.imageUrl;

  if (loading) {
    return (
      <LinkPreviewOuter>
        <LinkPreviewSkeleton />
      </LinkPreviewOuter>
    );
  }

  const initial = (domain || ' ').charAt(0).toUpperCase();

  return (
    <LinkPreviewOuter>
      <LinkPreviewBubble>
        {imageUrl ? (
          <LinkPreviewHero $src={imageUrl} />
        ) : (
          <LinkPreviewHeroFallback $tint={tint}>{initial}</LinkPreviewHeroFallback>
        )}
        <LinkPreviewMeta>
          <LinkPreviewDomain>{domain}</LinkPreviewDomain>
          <LinkPreviewTitle>{title}</LinkPreviewTitle>
          {description ? (
            <LinkPreviewDesc>{description}</LinkPreviewDesc>
          ) : null}
        </LinkPreviewMeta>
      </LinkPreviewBubble>
    </LinkPreviewOuter>
  );
}

function ConstructionCardPreview({ lines, thumbnailColor }) {
  return (
    <ConstructionPlaceholder $tint={thumbnailColor}>
      {lines.map((line, i) =>
        i === 0 ? (
          <ConstructionLinePrimary key={line}>{line}</ConstructionLinePrimary>
        ) : (
          <ConstructionLineSecondary key={line}>{line}</ConstructionLineSecondary>
        )
      )}
    </ConstructionPlaceholder>
  );
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', ...getAllCategories()];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Section id="projects">
      <ProjectsContainer>
        <Header>
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionDescription>
            A collection of projects I have learned the most from.
          </SectionDescription>
        </Header>
        
        <FilterButtons>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              hoverable 
              clickable
              index={index}
              onClick={() => handleProjectClick(project)}
            >
              <ThumbnailContainer 
                thumbnailColor={project.media.thumbnail}
                $showPlayOverlay={
                  !!project.media.video && !project.media.linkPreviewUrl
                }
                onClick={(e) => {
                  e.stopPropagation();
                  handleProjectClick(project);
                }}
              >
                {project.media.linkPreviewUrl && (
                  <LinkPreviewCard
                    url={project.media.linkPreviewUrl}
                    fallbackTitle={project.title}
                    fallbackDescription={project.description}
                    tint={project.media.thumbnail}
                  />
                )}
                {project.media.cardPlaceholderLines?.length > 0 && (
                  <ConstructionCardPreview
                    lines={project.media.cardPlaceholderLines}
                    thumbnailColor={project.media.thumbnail}
                  />
                )}
                {project.media.image && (
                  <ThumbnailImage 
                    src={project.media.image} 
                    alt={project.title}
                    hasImage={!!project.media.image}
                  />
                )}
                {!project.media.image && project.media.video && (
                  <VideoThumbnail src={project.media.video} title={project.title} />
                )}
              </ThumbnailContainer>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  {project.media.appStoreUrl && (
                    <ProjectLink 
                      href={project.media.appStoreUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      App Store →
                    </ProjectLink>
                  )}
                  {project.media.githubUrl && (
                    <ProjectLink 
                      href={project.media.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub →
                    </ProjectLink>
                  )}
                  {project.media.demoUrl && (
                    <ProjectLink 
                      href={project.media.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.id === 'insidr' ? 'insidr.app →' : 'Demo →'}
                    </ProjectLink>
                  )}
                  {project.media.demoComingSoon && (
                    <DemoComingSoon onClick={(e) => e.stopPropagation()}>
                      Demo coming soon
                    </DemoComingSoon>
                  )}
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
      
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </Section>
  );
};

export default Projects;

