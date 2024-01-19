'use client'
import Image from "next/image"
import Link from "next/link"
import pernikahan from "../image/flower.jpg"
import style from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { FaEyeSlash } from "react-icons/fa"
import TogglePasswordVisibility from './toggle.jsx'


const login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const toggleVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const inputType = passwordVisible ? 'text' : 'password';


    return (
        <>
        
            <div className={style.body}>

                <section className={style.sectionLogin}>
                    <div className="flex items-center justify-center min-h-[60vh]  bg-no-repeat bg-center bg-cover">
                        <form action="" method="post">
                            <h1 className={style.loginLogo}>Login</h1>
                            <div className={style.inputbox}>
                                <FontAwesomeIcon icon={faEnvelope} className="w-[1.6rem] absolute right-5 bottom-5 text-black" />
                                <input type="email" name="email" id="" />
                                <label htmlFor="email">Email</label>

                            </div>
                            <div className={style.inputbox}>
                                <input type={inputType} name="password" id="" />
                                <button type='button' onClick={toggleVisibility}>
                                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} className="w-[1.6rem] absolute right-5 bottom-5 text-black  cursor-pointer" />
                                </button>

                                <label htmlFor="">Password</label>

                            </div>
                            <div className={style.forget}>

                                <label htmlFor=""><input type="checkbox" name="" id="" />Remember Me</label>
                                <a>Forget Password</a>

                            </div>
                            <button className={style.loginButton} > Log In</button>
                            <div className={style.register}>
                                <p>Dont Have Account <a href="/components/account/register">Register</a></p>
                            </div>
                        </form>
                    </div>

                </section>
            </div>


        </>
    )
}

export default login;