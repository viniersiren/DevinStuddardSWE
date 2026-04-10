// Shared theme properties
const sharedTheme = {
  typography: {
    fontFamily: {
      primary: "'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      heading: "'Poppins', 'Inter', sans-serif",
      mono: "'Fira Code', 'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

// Colorful theme (default)
export const colorfulTheme = {
  ...sharedTheme,
  colors: {
    primary: {
      main: '#667eea',
      dark: '#5568d3',
      light: '#8b9ef5',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    secondary: {
      main: '#764ba2',
      dark: '#5d3a7f',
      light: '#9568c5',
    },
    accent: {
      main: '#ff6b9d',
      dark: '#ff4a7a',
      light: '#ff8cc0',
    },
    background: {
      dark: '#0a0e27',
      darker: '#050811',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      image: `
        radial-gradient(at 0% 0%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
        radial-gradient(at 100% 100%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)
      `,
    },
    text: {
      primary: '#ffffff',
      secondary: '#b8bcc8',
      muted: '#6b7280',
    },
    selection: {
      background: '#ff6b9d',
      color: '#ffffff',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(102, 126, 234, 0.5)',
  },
};

// Monochrome theme (mostly black and white with teal accents)
export const monochromeTheme = {
  ...sharedTheme,
  colors: {
    primary: {
      main: '#5eead4', // Teal accent
      dark: '#2dd4bf',
      light: '#7dd3fc',
      gradient: 'linear-gradient(135deg, #5eead4 0%, #2dd4bf 100%)', // Teal gradient
    },
    secondary: {
      main: '#14b8a6', // Darker teal
      dark: '#0d9488',
      light: '#5eead4',
    },
    accent: {
      main: '#06b6d4', // Cyan/teal accent
      dark: '#0891b2',
      light: '#22d3ee',
    },
    background: {
      dark: '#0a0a0a', // Very dark, almost black
      darker: '#050505',
      gradient: 'linear-gradient(135deg, #0a0a0a 0%, #0f172a 20%, #1a1a1a 100%)', // Minimal gradient
      image: `
        radial-gradient(at 0% 0%, rgba(94, 234, 212, 0.08) 0%, transparent 50%),
        radial-gradient(at 100% 100%, rgba(20, 184, 166, 0.08) 0%, transparent 50%)
      `,
    },
    text: {
      primary: '#ffffff',
      secondary: '#c0c0c0',
      muted: '#888888',
    },
    selection: {
      background: '#14b8a6', // Teal for selection
      color: '#ffffff',
    },
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(94, 234, 212, 0.1)',
    md: '0 4px 6px -1px rgba(94, 234, 212, 0.1)',
    lg: '0 10px 15px -3px rgba(94, 234, 212, 0.15)',
    xl: '0 20px 25px -5px rgba(94, 234, 212, 0.15)',
    '2xl': '0 25px 50px -12px rgba(94, 234, 212, 0.2)',
    glow: '0 0 20px rgba(94, 234, 212, 0.4)',
  },
};

// Professional theme (clean blue/teal, non-purple)
export const professionalTheme = {
  ...sharedTheme,
  colors: {
    primary: {
      main: '#0891b2', // Professional cyan/teal
      dark: '#0e7490',
      light: '#22d3ee',
      gradient: 'linear-gradient(135deg, #0891b2 0%, #0d9488 100%)',
    },
    secondary: {
      main: '#0d9488', // Teal
      dark: '#0f766e',
      light: '#14b8a6',
    },
    accent: {
      main: '#06b6d4', // Bright cyan accent
      dark: '#0891b2',
      light: '#22d3ee',
    },
    background: {
      dark: '#0f172a', // Dark slate blue
      darker: '#020617',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      image: `
        radial-gradient(at 0% 0%, rgba(8, 145, 178, 0.1) 0%, transparent 50%),
        radial-gradient(at 100% 100%, rgba(13, 148, 136, 0.1) 0%, transparent 50%)
      `,
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      muted: '#94a3b8',
    },
    selection: {
      background: '#06b6d4',
      color: '#ffffff',
    },
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(8, 145, 178, 0.4)',
  },
};

// Default export for backward compatibility (now professional/teal)
export const theme = professionalTheme;

