import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from '/src/Styles/globalstyles.js';
import LoginPage from './Pages/Login/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <LoginPage />
  </StrictMode>,
)
