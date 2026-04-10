import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { monochromeTheme } from './theme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const theme = monochromeTheme;
  const themeMode = 'monochrome';

  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

