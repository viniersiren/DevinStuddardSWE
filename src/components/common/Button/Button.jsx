import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => {
    if (props.size === 'sm') return `${props.theme.spacing.sm} ${props.theme.spacing.md}`;
    if (props.size === 'lg') return `${props.theme.spacing.md} ${props.theme.spacing.xl}`;
    return `${props.theme.spacing.md} ${props.theme.spacing.lg}`;
  }};
  font-size: ${props => {
    if (props.size === 'sm') return props.theme.typography.fontSize.sm;
    if (props.size === 'lg') return props.theme.typography.fontSize.lg;
    return props.theme.typography.fontSize.base;
  }};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  border: none;
  outline: none;
  
  ${props => {
    if (props.variant === 'primary') {
      return `
        background: ${props.theme.colors.primary.gradient || `linear-gradient(135deg, ${props.theme.colors.primary.main} 0%, ${props.theme.colors.secondary.main} 100%)`};
        color: ${props.theme.colors.text.primary};
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: ${props.theme.shadows.lg}, ${props.theme.shadows.glow};
        }
        
        &:active {
          transform: translateY(0);
        }
      `;
    }
    if (props.variant === 'accent') {
      return `
        background: ${props.theme.colors.accent.main};
        color: ${props.theme.colors.text.primary};
        
        &:hover {
          background: ${props.theme.colors.accent.dark};
          transform: translateY(-2px);
          box-shadow: ${props.theme.shadows.lg};
        }
      `;
    }
    if (props.variant === 'outline') {
      return `
        background: transparent;
        color: ${props.theme.colors.text.primary};
        border: 2px solid ${props.theme.colors.primary.main};
        
        &:hover {
          background: ${props.theme.colors.primary.main};
          transform: translateY(-2px);
        }
      `;
    }
    return `
      background: ${props.theme.colors.gray[700]};
      color: ${props.theme.colors.text.primary};
      
      &:hover {
        background: ${props.theme.colors.gray[600]};
      }
    `;
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

