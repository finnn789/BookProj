import Image from "next/image"
import Pernikahan from "../img/pernikahan.jpg"

const ImageGallery = () => {
    return (
        <div className="max-h-[100vh] flex justify-center items-center">
            <div className="image-gallery w-[80%] m-[5em] grid grid-cols-[auto-fit_minmax(250px,_1fr)_100px] gap-[30px] auto-rows-[minmax(300px,_2fr)]">
                <Image className=" block max-w-[100%] object-cover rounded-[8px]" src={Pernikahan} width={100} height={100} />
                <Image className=" block max-w-[100%] object-cover rounded-[8px]" src={Pernikahan} width={100} height={100} />
                <Image className=" block max-w-[100%] object-cover rounded-[8px]" src={Pernikahan} width={100} height={100} />

            </div>
        </div>
    )


}
export default ImageGallery