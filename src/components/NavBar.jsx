import React from 'react';
import styled from 'styled-components';
import searchImage from '../search.png';

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; /* Ensure it spans full width */
`;

const Container = styled.div`
  width: 100%; /* Full width */
  max-width: 1200px; /* Max width for large screens */
  display: flex;
  justify-content: center; /* Center the content */
  align-items: center;
  padding: 10px 20px; /* Adjust padding for better spacing on smaller screens */
  box-sizing: border-box;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  margin-right: 20px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
`;

const ListItem = styled.li`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px 20px;
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
`;

const NavBar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>
              <a href="#home" style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </a>
            </ListItem>
            <ListItem>
              <a href="#projects" style={{ textDecoration: 'none', color: 'white' }}>
                Projects
              </a>
            </ListItem>
            <ListItem>
              <a href="#contact" style={{ textDecoration: 'none', color: 'white' }}>
                Contact
              </a>
            </ListItem>
          </List>
        </Links>
        
      </Container>
    </Section>
  );
};

export default NavBar;