// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import Pernikahan from './img/pernikahan.png'
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '600',
    display: 'swap'

});
const Navbar = ({ links }) => {


    const navbarLinks = [
        { url: '/home', text: 'Home' },
        { url: '/about', text: 'PORTOFOLIO' },
        { url: '/services', text: 'tutorial' },
        
    ];

    return (
        <div className={montserrat.className}>
            <nav className="flex justify-center p-1 ">
                <div className=" w-[90%] flex items-center">
                    <div className="flex mx-auto w-[100%] items-center justify-between">
                        <Image src={Pernikahan} sizes='width:100px' width={90} />
                        <div className=" uppercase space-x-1 justify-between text-xl">
                            {navbarLinks.map((link, index) => (
                                <Link key={index} href={link.url} className='transition-all px-4 ease-in duration-100 hover:text-white  hover:bg-black hover:py-2
                                hover:rounded-xl' >
                                    {link.text}
                                </Link>
                            ))}
                            <Link className="text-white border-solid border-black rounded-xl bg-black transition-all p-3 ease-in hover:bg-white hover:text-black" href="components/account/login">Log In</Link>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
// 'use client'
// import { useState } from "react";
// import close from "./assets/close.png";
// import menu from "./assets/menu.png";
// import logo from "./assets/close.png";
// import Image from "next/image";

// export const navLinks = [
//     {
//         id: "home",
//         title: "Home",
//     },
//     {
//         id: "features",
//         title: "Features",
//     },
//     {
//         id: "product",
//         title: "Product",
//     },
//     {
//         id: "clients",
//         title: "Clients",
//     },
// ];

// const Navbar = () => {
//     const [active, setActive] = useState("Home");
//     const [toggle, setToggle] = useState(false);

//     return (
//         <nav className="w-full flex py-6 justify-between items-center navbar">
//             {/* Logo */}
//             <h1 className="text-3xl text-white">Logo</h1>

//             {/* Desktop Navigation */}
//             <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//                 {navLinks.map((nav, index) => (
//                     <li
//                         key={nav.id}
//                         className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
//                             } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//                         onClick={() => setActive(nav.title)}
//                     >
//                         <a href={`#${nav.id}`}>{nav.title}</a>
//                     </li>
//                 ))}
//             </ul>

//             {/* Mobile Navigation */}
//             <div className="sm:hidden flex flex-1 justify-end items-center">
//                 <Image
//                     src={toggle ? close : menu}
//                     alt="menu"
//                     className="w-[28px] h-[28px] object-contain"
//                     onClick={() => setToggle(!toggle)}
//                 />

//                 {/* Sidebar */}
//                 <div
//                     className={`${!toggle ? "hidden" : "flex"
//                         } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//                 >
//                     <ul className="list-none flex justify-end items-start flex-1 flex-col">
//                         {navLinks.map((nav, index) => (
//                             <li
//                                 key={nav.id}
//                                 className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
//                                     } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
//                                 onClick={() => setActive(nav.title)}
//                             >
//                                 <a href={`#${nav.id}`}>{nav.title}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;