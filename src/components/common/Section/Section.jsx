import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  position: relative;
  scroll-snap-align: start;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const Section = ({ children, id, ...props }) => {
  return (
    <StyledSection id={id} {...props}>
      <Container>
        {children}
      </Container>
    </StyledSection>
  );
};

export default Section;

