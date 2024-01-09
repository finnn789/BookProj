import Image from "next/image"
import gambarPasangan from "./img/gambarPasangan.jpg"
import Circle from "../background/Circle"
import style from "./style.module.css"
const HomePage = () => {
    return (

        <>
            <div className="flex justify-center">
                <div className={style.content}>
                    <div className={style.title}>
                        <h1 className=" text-center ">Bagikan Undangan Pernikahan Mu Dengan Cepat </h1>
                        <h2 className=" text-center">Bagikan Undangan Bahagia Kamu Dengan Semua Orang</h2>
                    </div>
                    <div className={style.button}>
                        <button>Get Started</button>
                    </div>
                </div>



            </div>
        </>
    )
}

export default HomePage