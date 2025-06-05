import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Features from './components/Features/Features.jsx'
import Stat from './components/Stat/Stat.jsx'
import Cta from './components/CTA/Cta.jsx'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Features />
    <Stat />
{/*     <Cta />
    <Footer /> */}
    <App />
  </StrictMode>,
)
