"use client"
import React, { useState } from 'react'
import SocialMedias from '../SocialMedias/SocialMedias';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { TbCircleLetterSFilled, TbCircleDottedLetterS } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

    const currentPath = usePathname();
    
    const [showPages, setShowPages] = useState(false);


    const navbarPages = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Portfolio",
            path: "/portfolio",
        },
    ]

    return (
        <header className='flex items-center justify-center w-full sticky top-0 z-[1001] bg-[var(--bg-color)]'>
            <nav className='flex items-center justify-between w-full max-w-[1250px] py-5 mx-[30px]'>
                <ul className='hidden md:flex items-center gap-10'>
                    {navbarPages.map((navPage, index) => {
                        return (
                            <li key={index} className={`text-[1.1rem] hover:text-[var(--action-color)] transition-colors duration-200 ease-linear`}>
                                <Link href={navPage.path} className={`${currentPath == navPage.path ? "text-[var(--action-color)]" : ""}`}>
                                    {navPage.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => setShowPages(!showPages)} className='flex md:hidden items-center justify-center p-2 text-3xl'>
                    < IoMenu />
                </button>

                <div className='flex items-center justify-center text-6xl text-[var(--action-color)]'>
                    <TbCircleDottedLetterS />
                </div>

                <SocialMedias />
            </nav>
        </header>

    )
}

export default Navbar
