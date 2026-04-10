import React from 'react';
import styled from 'styled-components';
import NavBar from './components/layout/NavBar/NavBar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';
import Contact from './components/sections/Contact/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background.dark};
  background-image: ${props => props.theme.colors.background.image};
  color: ${props => props.theme.colors.text.primary};
  scroll-behavior: smooth;
  transition: background-color ${props => props.theme.transitions.normal}, 
              background-image ${props => props.theme.transitions.normal};
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
