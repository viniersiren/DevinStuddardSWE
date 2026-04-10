import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../styles/ThemeContext';

const ToggleButton = styled.button`
  position: fixed;
  bottom: ${props => props.theme.spacing.xl};
  right: ${props => props.theme.spacing.xl};
  z-index: ${props => props.theme.zIndex.fixed};
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.background.dark};
  border: 2px solid ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.typography.fontSize.xl};
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.lg};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.theme.shadows.xl}, ${props => props.theme.shadows.glow};
    background: ${props => props.theme.colors.primary.main};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    bottom: ${props => props.theme.spacing.lg};
    right: ${props => props.theme.spacing.lg};
    width: 45px;
    height: 45px;
  }
`;

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (themeMode) {
      case 'professional':
        return '💼';
      case 'monochrome':
        return '⚫';
      default:
        return '💼';
    }
  };

  const getLabel = () => {
    switch (themeMode) {
      case 'professional':
        return 'Switch to monochrome theme';
      case 'monochrome':
        return 'Switch to professional theme';
      default:
        return 'Switch theme';
    }
  };

  return (
    <ToggleButton 
      onClick={toggleTheme}
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </ToggleButton>
  );
};

export default ThemeToggle;

