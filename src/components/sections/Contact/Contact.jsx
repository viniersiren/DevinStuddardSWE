import React from 'react';
import styled from 'styled-components';
import { fadeInUp } from '../../../styles/animations';
import Section from '../../common/Section/Section';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';

const ContactContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing['2xl']};
  text-align: center;
`;

const Header = styled.div`
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
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const ContactCard = styled(Card)`
  padding: ${props => props.theme.spacing['2xl']};
  animation: ${fadeInUp} 1s ease-out;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;
`;

const EmailLabel = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  margin: 0;
`;

const EmailAddress = styled.a`
  font-size: clamp(${props => props.theme.typography.fontSize['2xl']}, 4vw, ${props => props.theme.typography.fontSize['4xl']});
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.accent.main};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.normal};
  word-break: break-all;
  
  &:hover {
    color: ${props => props.theme.colors.accent.light};
    transform: scale(1.05);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xl};
  justify-content: center;
  margin-top: ${props => props.theme.spacing.xl};
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.text.primary};
  text-decoration: none;
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    background: ${props => props.theme.colors.primary.main}33;
    border-color: ${props => props.theme.colors.primary.main};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const Contact = () => {
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'devinstuddard@gmail.com';
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/viniersiren';

  return (
    <Section id="contact">
      <ContactContainer>
        <Header>
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionDescription>
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </SectionDescription>
        </Header>

        <ContactCard>
          <EmailContainer>
            <EmailLabel>Send me an email at:</EmailLabel>
            <EmailAddress href={`mailto:${email}?subject=Hello from Portfolio`}>
              {email}
            </EmailAddress>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = `mailto:${email}?subject=Hello from Portfolio`}
            >
              Open Email Client
            </Button>
          </EmailContainer>

          <SocialLinks>
            <SocialLink 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </SocialLink>
          </SocialLinks>
        </ContactCard>
      </ContactContainer>
    </Section>
  );
};

export default Contact;

