import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fadeInDown } from '../../../styles/animations';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${props => props.theme.zIndex.sticky};
  background: ${props => props.scrolled 
    ? `${props.theme.colors.background.dark}dd` 
    : 'transparent'};
  backdrop-filter: blur(10px);
  padding: ${props => props.theme.spacing.md} 0;
  transition: all ${props => props.theme.transitions.normal};
  animation: ${fadeInDown} 0.5s ease-out;
  border-bottom: ${props => props.scrolled 
    ? `1px solid rgba(255, 255, 255, 0.1)` 
    : 'none'};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-family: ${props => props.theme.typography.fontFamily.heading};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  background: ${props => props.theme.colors.primary.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: ${props => props.mobileMenuOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${props => props.theme.colors.background.dark};
    padding: ${props => props.theme.spacing.xl};
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    gap: ${props => props.theme.spacing.lg};
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: color ${props => props.theme.transitions.fast};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: ${props => props.theme.colors.accent.main};
    transition: width ${props => props.theme.transitions.normal};
  }
  
  &:hover {
    color: ${props => props.theme.colors.accent.main};
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 2px;
    background: ${props => props.theme.colors.text.primary};
    transition: all ${props => props.theme.transitions.normal};
    transform-origin: center;
    
    &:nth-child(1) {
      transform: ${props => props.open ? 'rotate(45deg) translateY(8px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg) translateY(-8px)' : 'none'};
    }
  }
`;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <Nav scrolled={scrolled}>
      <Container>
        <Logo href="#home" onClick={(e) => handleNavClick(e, 'home')}>
          DS
        </Logo>
        <NavLinks mobileMenuOpen={mobileMenuOpen}>
          <NavItem>
            <NavLink 
              href="#home" 
              active={activeSection === 'home'}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#about" 
              active={activeSection === 'about'}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#experience" 
              active={activeSection === 'experience'}
              onClick={(e) => handleNavClick(e, 'experience')}
            >
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#projects" 
              active={activeSection === 'projects'}
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#skills" 
              active={activeSection === 'skills'}
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              href="#contact" 
              active={activeSection === 'contact'}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavLinks>
        <MobileMenuButton 
          open={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </Container>
    </Nav>
  );
};

export default NavBar;

