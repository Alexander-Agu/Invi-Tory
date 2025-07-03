import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Stat from '../../components/Stat/Stat'
import Cta from '../../components/CTA/Cta'
import Footer from '../../components/Footer/Footer'
import "./home.css"

export default function Home() {
  /* 
    If localStorage contains previos user data:
      When user opens is directed to the landing page remove the user data
  */
  localStorage.setItem("user", undefined);
  return <>
    <Header />
    <Hero />
    <Features />
    <Stat />
    <Cta />
    <Footer />
  </>

  
}