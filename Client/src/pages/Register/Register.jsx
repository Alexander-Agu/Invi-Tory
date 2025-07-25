import React, { useState } from 'react'
import "./register.css"
import SignUp from '../../components/SignUp/SignUp';
import BackHome from '../../UI/BackHome/BackHome';
import LoadScreen from '../LoadScreen/LoadScreen';

export default function Register() {
  // Load state
  const [loadLogin, setLoadLogin] = useState(false);

  return (
    <main className='register-main' style={{"placeContent": loadLogin? "initial" : "center"}}>
      {
        loadLogin? <LoadScreen />:
        <>
          <BackHome />
          <SignUp loadLogin={loadLogin} setLoadLogin={setLoadLogin} />
        </>
      }
    </main>
  )
}
