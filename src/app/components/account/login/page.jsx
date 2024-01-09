import Image from "next/image"
import Link from "next/link"
import pernikahan from "../image/syfoto.jpg"
import style from "./style.module.css"


const login = () => {
    return (
        <>
            <div className={style.body}>

                <section className={style.sectionLogin}>
                    <div className="flex items-center justify-center min-h-[60vh]  bg-no-repeat bg-center bg-cover">
                        <form action="" method="post">
                            <h1 className={style.loginLogo}>Login</h1>
                            <div className={style.inputbox}>
                            
                                <input type="email" name="email" id="" />
                                <label htmlFor="email">Email</label>

                            </div>
                            <div className={style.inputbox}>
                                <Image width={10} height={10} />
                                <input type="password" name="password" id="" />
                                <label htmlFor="password">Password</label>

                            </div>
                            <div className={style.forget}>
                                <label htmlFor=""><input type="checkbox" name="" id="" />Remember Me</label>
                                <a>Forget Password</a>

                            </div>
                            <button className={style.loginButton}> Log In</button>
                            <div className={style.register}>
                                <p>Dont Have Account <a>Register</a></p>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default login