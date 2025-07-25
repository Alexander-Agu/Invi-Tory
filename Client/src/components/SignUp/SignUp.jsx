import React, { useEffect, useState } from 'react'
import "./signUp.css"
import InputBox from '../../UI/InputBox/InputBox';
import SignIntro from '../SignIntro/SignIntro';
import { RegisterUserAsync } from '../../api/UserApi';
import { ValidatePassword, ValidateSigningForm } from '../../tools/Validators';

export default function SignUp({loadLogin, setLoadLogin}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");
    const [confirm, setConfirm] = useState("");
    const [checkValid, setCheckValid] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);

    let body = {
    "firstname": firstname,
    "lastname": lastname,
    "username": username,
    "email": email,
    "password": passcode,
    "confirm": confirm
    }

    

    const RegisterUser = async ()=> {
        let result = ValidateSigningForm(body)
        setCheckValid(result);

        if (buttonClicked) return; // Ensuring request is only made once

        if (result === true){
            setButtonClicked(true);
            try {
                setLoadLogin(true);
                const res = await RegisterUserAsync(body)

                localStorage.setItem('user', JSON.stringify(res));
                window.location = `dashboard/${res.userId}`
            } catch (error) {
                setLoadLogin(false);
                setButtonClicked(false);
                console.log(error)
            }
        } else if(result === 6) alert("Make a stronger password");
        else if (result === 7) alert ("Password does not match");
    }

    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter" && !buttonClicked) {
                RegisterUser();
            }
        };

        document.addEventListener("keydown", handleKeyDown);


        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [body, buttonClicked]);

  return (
    <article className='sign-up-container'>
        <SignIntro 
            title={"Create Your Account"}
            content={"Join thousands of businesses using Invi-Tory to manage their inventory"}
        />
        <section className='sign-up-names'>
            <InputBox 
                type={"text"}
                required={true}
                checkValid={checkValid}
                boxValue={1}
                title={"Firstname"}
                input={firstname}
                setInput={setFirstname}
                placeHolder={"John"}
            />

            <InputBox 
                type={"text"}
                required={false}
                checkValid={checkValid}
                boxValue={-1}
                title={"Lastname"}
                input={lastname}
                setInput={setLastname}
                placeHolder={"Doe"}
            />
        </section>

        <section className='sign-up-crit-info'>
            <InputBox 
                type={"text"}
                required={true}
                checkValid={checkValid}
                boxValue={2}
                title={"Username"}
                input={username}
                setInput={setUsername}
                placeHolder={"ajsdjhb024"}
            />
            <InputBox 
                type={"text"}
                required={true}
                checkValid={checkValid}
                boxValue={3}
                title={"Email"}
                input={email}
                setInput={setEmail}
                placeHolder={"doe@gmail.com"}
            />

            <div className="pass-rules">
                <InputBox
                    type={"password"}
                    required={true}
                    checkValid={checkValid}
                    boxValue={4}
                    title={"Password"}
                    input={passcode}
                    setInput={setPasscode}
                    placeHolder={"Create a strong password"}
                />

                <div className="rules">
                    <p> - Length at lease 8</p>
                    <p> - At least 1 Uppercase</p>
                    <p> - At least 1 Lowercase</p>
                    <p> - At least 1 Special Character</p>
                    <p> - At least 1 Number</p>
                </div>
            </div>
            <InputBox 
                type={"password"}
                required={true}
                checkValid={checkValid}
                boxValue={5}
                title={"Confirm Password"}
                input={confirm}
                setInput={setConfirm}
                placeHolder={"Confirm your passsword"}
            />
        </section>

        <section className='sign-up-footer'>
            <button onClick={()=> RegisterUser()}>Create Account</button>

            <p>
                Already have an account? 
                <a href="/login">
                     Sign in here
                </a>
            </p>
        </section>

    </article>
  )
}