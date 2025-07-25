import "./login.css"
import BackHome from '../../UI/BackHome/BackHome'
import SignIn from '../../components/SignIn/SignIn'
import { useState } from "react";
import LoadScreen from "../LoadScreen/LoadScreen";

export default function Login() {
  // Load state
  const [loadLogin, setLoadLogin] = useState(false);
    
  return (
    <main className='login' style={{"placeContent": loadLogin? "initial" : "center"}}>
      {
      loadLogin? <LoadScreen />:
        <>
          <BackHome />
          <SignIn loadLogin={loadLogin} setLoadLogin={setLoadLogin} />
        </>
      }
    </main>
  )
}