import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import bgImage from './bg.jpeg';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url(${bgImage}) no-repeat center center fixed;
  background-size: cover;

  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
    <Container>
      <div id="home"><Hero /></div>
      
      <div id="contact"><Contact /></div>
    </Container>
  )
}

export default App
