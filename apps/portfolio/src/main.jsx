import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@portfolio/themes/styles'
import { ThemeProvider } from '@portfolio/themes'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
