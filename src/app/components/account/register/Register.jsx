import Link from "next/link"
import styles from "./register.module.scss"

const RegisterView = () => {
    return (
        <>
            <div className={styles.register}>
                <h1 className={styles.register__title}> Register</h1>
                <div className={styles.register__form}>
                    <form action="">
                        <div className={styles.register__form__item}>
                            <label htmlFor="email" className={styles.register__form__item__label}>
                                Email
                            </label>
                            <input type="email"
                                id="email"
                                name="email"
                                placeholder="email"
                                className={styles.register__form__item__input} />
                        </div>
                        <div className={styles.register__form__item}>
                            <label htmlFor="fullname" className={styles.register__form__item__label}>
                                Fullname
                            </label>
                            <input type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="fullname"
                                className={styles.register__form__item__input} />
                        </div>
                        <div className={styles.register__form__item}>
                            <label htmlFor="password" className={styles.register__form__item__label}>
                                Email
                            </label>
                            <input type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className={styles.register__form__item__input} />
                        </div>
                        <button type="submit" className={styles.register__form__item__button}>Register</button>


                    </form>
                </div>
                <p className={styles.register__link}>
                    Have an Account? Sign In <Link href="/auth/login"> Here </Link>
                </p>
            </div>
        </>
    )
}

export default RegisterView