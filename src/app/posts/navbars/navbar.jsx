'use client'

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Pernikahan from './img/Pernikahan.jpg';



const Navbar = () => {
    const [nav, setNav] = useState(false);

  

    const links = [
        {
            id: 1,
            link: "home",
            page: "halaman1"
        },
        {
            id: 2,
            link: "about",
            page:"halaman2"
        },
        {
            id: 3,
            link: "portfolio",
            page :"halaman3"
        },
        {
            id: 5,
            link: "contact",
            page : "halaman3"
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-gray-500 bg-white ">
            <div>
                {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
                <h1 className="text-5xl font-signature ml-5">
                    <a
                        className="link-underline link-underline-black"
                        href=""
                        target="_blank"
                        rel="noreferrer">
                        <Image src={Pernikahan} width={70}/>
                    </a>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link, page}) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer uppercase  text-slate-950 font-medium hover:scale-105 hover:text-white duration-200 link-underline">
                        <Link href={page}>{link}</Link>
                    </li>
                ))}
                <li className="nav-links px-4 cursor-pointer capitalize text-gray-500 font-medium hover:scale-105 hover:text-black duration-200 link-underline"><Link className="border-2  border-black p-2 rounded-2xl bg-black text-white  hover:text-black hover:bg-transparent duration-200 hover:border-white" href="/components/account/login">Log In</Link></li>
            </ul>

            <div onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize text-gray-500 py-6 text-4xl">
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
