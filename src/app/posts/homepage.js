'use client'
import styles from './postPage.module.css'

const Homepage = () => {
return (
    <>
        <h1 className={styles.bgRed}>Testing Halaman awal</h1>
        <button onClick={()=> console.log("Hi")}> Klik Dinsin</button>
    </>
)
}

export default Homepage