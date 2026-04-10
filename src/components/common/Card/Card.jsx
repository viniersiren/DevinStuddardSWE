import React from 'react';
import styled from 'styled-components';
import { scaleIn } from '../../../styles/animations';

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${props => props.theme.transitions.normal};
  animation: ${scaleIn} 0.5s ease-out;
  
  ${props => props.hoverable && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: ${props.theme.shadows['2xl']}, ${props.theme.shadows.glow};
      border-color: ${props.theme.colors.primary.main};
      background: rgba(255, 255, 255, 0.08);
    }
  `}
  
  ${props => props.clickable && `
    cursor: pointer;
    
    &:active {
      transform: translateY(-4px);
    }
  `}
`;

export const Card = ({ children, hoverable = false, clickable = false, ...props }) => {
  return (
    <StyledCard hoverable={hoverable} clickable={clickable} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;

