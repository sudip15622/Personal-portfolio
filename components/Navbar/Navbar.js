"use client"
import React, { useRef, useState, useEffect } from 'react'
import SocialMedias from '../SocialMedias/SocialMedias';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { TbCircleLetterSFilled, TbCircleDottedLetterS } from "react-icons/tb";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";


const Navbar = () => {

    const currentPath = usePathname();

    const [showPages, setShowPages] = useState(false);
    const menuBtnRef = useRef(null);
    const menuBoxRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuBoxRef.current && !menuBoxRef.current.contains(event.target)) {
                if(menuBtnRef.current && !menuBtnRef.current.contains(event.target)) {
                    setShowPages(false);
                }
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [showPages]);


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
        <>
            <header className='flex items-center justify-center w-full sticky top-0 z-[1002] bg-[var(--bg-color)] h-20'>
                <nav className='flex items-center justify-between w-full max-w-[1250px] mx-[30px]'>
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
                    <button
                        ref={menuBtnRef}
                        onClick={() => setShowPages(!showPages)}
                        className="flex md:hidden flex-col justify-center items-center w-10 h-10 relative z-[1003]"
                    >
                        <motion.div
                            initial={false}
                            animate={{
                                rotate: showPages ? 135 : 0,
                                y: showPages ? 3 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-[2px] bg-[var(--pri-text)] rounded origin-center"
                        />
                        <motion.div
                            initial={false}
                            animate={{
                                rotate: showPages ? -135 : 0,
                                y: showPages ? -3 : 4,
                                opacity: showPages ? 1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-[2px] bg-[var(--pri-text)] rounded origin-center mt-1"
                        />
                    </button>



                    <div className='flex items-center justify-center text-5xl md:text-6xl text-[var(--action-color)]'>
                        <TbCircleDottedLetterS />
                    </div>

                    <SocialMedias />
                </nav>

            </header>

            <AnimatePresence >
                {showPages && (
                    <motion.ul className='z-[1000] fixed left-0 top-20 flex md:hidden flex-col justify-center border-y-1 border-white w-[100vw] py-2 bg-[var(--bg-color)]'
                        ref={menuBoxRef}
                        initial={{ top: -80 }}
                        animate={{ top: 80 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        exit={{ top: -80 }}
                    >
                        {navbarPages.map((navPage, index) => {
                            return (
                                <li key={index} className={`text-[1.1rem] transition-colors duration-200 ease-linear px-[30px] py-2 w-full`}>
                                    <Link href={navPage.path} className={`${currentPath == navPage.path ? "text-[var(--action-color)]" : ""}`}>
                                        {navPage.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </>

    )
}

export default Navbar
