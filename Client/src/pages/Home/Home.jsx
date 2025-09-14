import React, { use, useState } from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Stat from '../../components/Stat/Stat'
import Cta from '../../components/CTA/Cta'
import Footer from '../../components/Footer/Footer'
import "./home.css"
import LoadScreen from '../LoadScreen/LoadScreen'

export default function Home() {
  const [isLoading, setLoading] = useState(false);

  /* 
    If localStorage contains previos user data:
      When user opens is directed to the landing page remove the user data
  */

  if (isLoading) return <LoadScreen />
  
  else{
    localStorage.setItem("user", undefined);
    return <>
      <Header />
      <Hero isLoading={setLoading} />
      <Features />
      <Stat />
      <Cta />
      <Footer />
    </>
  }

  
}