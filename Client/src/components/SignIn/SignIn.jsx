import React, { useEffect, useState } from 'react'
import SignIntro from '../SignIntro/SignIntro'
import "./signIn.css"
import InputBox from '../../UI/InputBox/InputBox';
import { ValidateLoginForm } from '../../tools/Validators';
import { LoginUserAsync } from '../../api/UserApi';

export default function SignIn({loadLogin, setLoadLogin}) {
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");
    const [validate, setValidate] = useState(0);
    let body = {"email": email, "password": passcode};

    // Triggered button state
    const [buttonClicked, setButtonClicked] = useState(false);

    const Login = async (body) => {
        let result = ValidateLoginForm(body);
        setValidate(result);

        if (buttonClicked) return;  // Ensures button is only clickable once

        if (result === true){
            try {
                setLoadLogin(true);
                setButtonClicked(true);
                let res = await LoginUserAsync(body);

                localStorage.setItem('user', JSON.stringify(res));
                window.location = `dashboard/${res.userId}`;
            } catch (error) {
                setLoadLogin(false);
                alert("Invalid email or password");
                console.log("Test")
                setButtonClicked(false);
            }
        }
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter" && !buttonClicked) {
                Login(body);
            }
        };

        document.addEventListener("keydown", handleKeyDown);


        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [body, buttonClicked]);

  return (
    <article className='sign-in-container'>
        <SignIntro 
            title={"Welcome back"}
            content={"Sign in to your Invi-Tory account to continue managing your inventory"}
        />

        <InputBox 
            type={"text"}
            boxValue={1}
            checkValid={validate}
            title={"Email"}
            input={email}
            setInput={setEmail}
            placeHolder={"doe@gmail.com"}
        />
        <InputBox 
            type={"password"}
            boxValue={2}
            checkValid={validate}
            title={"Password"}
            input={passcode}
            setInput={setPasscode}
            placeHolder={"Create a strong password"}
        />

        <section className='sign-in-footer'>
            <button onClick={()=> Login(body)}>Login</button>

            <p>
                Don't have an account? 
                <a href="/register">
                     Sign Up Here
                </a>
            </p>
        </section>
    </article>
  )
}