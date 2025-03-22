"use client"
import React, { useEffect } from 'react'
import SocialMedias from '../SocialMedias/SocialMedias';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { TbCircleLetterSFilled, TbCircleDottedLetterS } from "react-icons/tb";


const Navbar = () => {

    const currentPath = usePathname();

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
        <header className='flex items-center justify-center w-full sticky top-0 z-[1000] bg-[var(--bg-color)]'>
            <nav className='flex items-center justify-between w-full max-w-[1250px] py-5 mx-[30px]'>
                <ul className='flex items-center gap-10'>
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

                <div className='flex items-center justify-center text-6xl text-[var(--action-color)]'>
                    <TbCircleDottedLetterS />
                </div>

                <SocialMedias />
            </nav>
        </header>

    )
}

export default Navbar
