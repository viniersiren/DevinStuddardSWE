import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.background.darker};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing.xl};
  text-align: center;
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.typography.fontSize.xl};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    color: ${props => props.theme.colors.accent.main};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.text.muted};
  font-size: ${props => props.theme.typography.fontSize.sm};
  margin: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/viniersiren';

  return (
    <FooterContainer>
      <Content>
        <SocialLinks>
          <SocialLink 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {currentYear} Devin Studdard. All rights reserved.
        </Copyright>
      </Content>
    </FooterContainer>
  );
};

export default Footer;

