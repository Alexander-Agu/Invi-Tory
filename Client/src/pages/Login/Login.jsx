import "./login.css"
import BackHome from '../../UI/BackHome/BackHome'
import SignIn from '../../components/SignIn/SignIn'

export default function Login() {

  return (
    <main className='login'>
        <BackHome />
        <SignIn />
    </main>
  )
}