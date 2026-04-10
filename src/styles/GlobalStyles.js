import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily.primary};
    background: ${props => props.theme.colors.background.dark};
    color: ${props => props.theme.colors.text.primary};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color ${props => props.theme.transitions.normal}, color ${props => props.theme.transitions.normal};
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background.darker};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary.main};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary.dark};
  }

  /* Selection */
  ::selection {
    background: ${props => props.theme.colors.selection.background};
    color: ${props => props.theme.colors.selection.color};
  }
  
  ::-moz-selection {
    background: ${props => props.theme.colors.selection.background};
    color: ${props => props.theme.colors.selection.color};
  }

  /* Links */
  a {
    color: ${props => props.theme.colors.text.primary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.fast};
  }

  a:hover {
    color: ${props => props.theme.colors.accent.main};
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.fontFamily.heading};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    line-height: ${props => props.theme.typography.lineHeight.tight};
    color: ${props => props.theme.colors.text.primary};
  }

  /* Buttons */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${props => props.theme.transitions.normal};
  }

  button:focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent.main};
    outline-offset: 2px;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent.main};
    outline-offset: 2px;
  }

  /* Smooth animations */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

