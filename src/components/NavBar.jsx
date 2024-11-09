import React from 'react';
import styled from 'styled-components';
import searchImage from '../search.png';

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 70%; /* Ensure it spans full width */
`;

const Container = styled.div`
  width: 100%; /* Full width */
  max-width: 1200px; /* Max width for large screens */
  display: flex;
  justify-content: space-between;
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
  margin-left: 70px;
  list-style: none;
  display: flex;
  gap: 20px;
`;

const ListItem = styled.li`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
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
          </List>
        </Links>
        <Icons>
          <Icon src={searchImage} />
          <Button>
            <a href="#contact" style={{ textDecoration: 'none', color: 'white' }}>
              Contact
            </a>
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default NavBar;
