import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './styles/ThemeContext'
import { GlobalStyles } from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
