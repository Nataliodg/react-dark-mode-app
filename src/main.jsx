import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './context/ThemeContext'
import './index.css'
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeContextProvider>
)
