import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Features from './components/Features/Features.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Features />
    <App />
  </StrictMode>,
)
