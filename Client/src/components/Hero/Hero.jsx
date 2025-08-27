import React, { useState } from 'react'
import "./hero.css"
import { LoginUserAsync } from '../../api/UserApi';
import { ValidateLoginForm } from '../../tools/Validators';

export default function Hero() {
  // Triggered button state
  const [buttonClicked, setButtonClicked] = useState(false);


  const RequestDemo = async () => {
    let body = {"email": "jax@gmail.com", "password": "@Lexander2704#"};
    let result = ValidateLoginForm(body);

    if (buttonClicked) return;  // Ensures button is only clickable once

    if (result === true){
      try {
        // setLoadLogin(true); 
        setButtonClicked(true);
        let res = await LoginUserAsync(body);
        
        localStorage.setItem('user', JSON.stringify(res));
        window.location = `dashboard/${res.userId}`;
      } catch (error) {
        // setLoadLogin(false);
        alert("Trouble accessing demo account");
        console.log("Test")
        setButtonClicked(false);
      }
  }
  };
  return (
    <section className='hero'>
        <h1>Master Your <span className='gradient-text'>Inventory</span></h1>

        <p>
            Invitory is a simple inventory management platform that helps you track stock, calculate costs, and gain insights whether for a shop, warehouse, or personal use.
        </p>

        <nav className='heroNav'>
            <a href="/register" className='heroLink'>Join us today</a>
            <button onClick={()=> RequestDemo()} className='heroLink request'>Request Demo</button>
        </nav>
    </section>
  )
}
