"use client"
import React from 'react'
import SocialMedias from '../SocialMedias/SocialMedias';
import LinkBtn from '../LinkBtn/LinkBtn';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import Contactbox from '../Contactbox/Contactbox';

import { TbCircleLetterSFilled, TbCircleDottedLetterS } from "react-icons/tb";

const Contactbox = () => {
    return (
        <motion.section className='flex items-center justify-center bg-[var(--action-color)] py-20 relative left-1/2 -translate-x-1/2 w-[100vw]'
            initial={{ width: "1250px" }}
            whileInView={{ width: "100vw" }}
            transition={{ duration: .6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className='w-full max-w-[1250px] flex items-center justify-between'>
                <div className="flex flex-col gap-5">
                    <h2 className='font-bold text-[3.5rem] flex flex-col'>
                        <span>Have an Idea?</span>
                        <span>Let&apos;s get in touch</span>
                    </h2>
                    <p className='w-full max-w-[600px] text-[1.1rem] text-[var(--sec-text)]'>Ready to bring your ideas to life? Let's collaborate and create something amazing together. Whether it's web development, design, or innovative solutions, I'm here to help. Get in touch today!</p>
                    <div className='flex items-center gap-5'>
                        <LinkBtn link={"/contact"} text={"Get in touch"} isWhite={true} />
                        <SocialMedias hoverBlack={true} />
                    </div>
                </div>
                <motion.div className='flex items-center justify-center text-[25rem] -z-10'
                    initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <TbCircleDottedLetterS />
                </motion.div>
            </div>
        </motion.section>
    )
}

const Footer = () => {
    return (
        <>
            <Contactbox />
            <footer className='flex items-center justify-center w-full z-[1000] bg-[var(--bg-color)]'>
                <div className='flex w-full max-w-[1250px] mx-[30px]'>
                    <div className='flex flex-col flex-1 gap-5 pt-20 pb-10 border-r-[1px] border-[var(--border-color)]'>
                        <div className='flex items-center gap-2'>
                            <span className='flex items-center justify-center text-[3rem] text-[var(--action-color)]'><TbCircleDottedLetterS /></span>
                            <span className='text-[1.5rem] font-bold'>Sudip Lmc</span>
                        </div>
                        <p className='w-[300px] text-[var(--sec-text)]'>Hey there, you can also reach me through my social media&apos;s accounts.</p>
                        <div className='flex items-center gap-5'>
                            <LinkBtn link={"/contact"} text={"Get in touch"} />
                            <SocialMedias />
                        </div>
                    </div>
                    <div className='flex flex-col flex-2'>
                        <div className='flex justify-between pl-20 mt-20 pb-10'>
                            <div className='flex flex-col flex-1 justify-start gap-4'>
                                <h4 className='font-bold text-[1.2rem]'>Contact Me</h4>
                                <ul className='flex flex-col gap-3'>
                                    <li className='flex flex-col gap-1'>
                                        <h5 className='font-bold'>Email:</h5>
                                        <Link className='text-[var(--sec-text)]' href="mailto: sudip15622@gmail.com">sudip15622@gmail.com</Link>
                                    </li>
                                    <li className='flex flex-col gap-1'>
                                        <h5 className='font-bold'>Phone:</h5>
                                        <p className='text-[var(--sec-text)]'>+977 9821253635</p>
                                    </li>
                                    <li className='flex flex-col gap-1'>
                                        <h5 className='font-bold'>Address:</h5>
                                        <p className='text-[var(--sec-text)]'>Bharatpur-5, Chitwan, Nepal</p>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex flex-col flex-1 gap-4'>
                                <h4 className='font-bold text-[1.2rem]'>Menu</h4>
                                <div className='flex flex-wrap gap-x-20 gap-y-3'>
                                    <Link className='text-[var(--sec-text)] hover:scale-105 hover:text-[var(--action-color)] transition-all duration-200 ease-linear' href="/">Home</Link>
                                    <Link className='text-[var(--sec-text)] hover:scale-105 hover:text-[var(--action-color)] transition-all duration-200 ease-linear' href="/about">About</Link>
                                    <Link className='text-[var(--sec-text)] hover:scale-105 hover:text-[var(--action-color)] transition-all duration-200 ease-linear' href="/portfolio">Portfolio</Link>
                                    <Link className='text-[var(--sec-text)] hover:scale-105 hover:text-[var(--action-color)] transition-all duration-200 ease-linear' href="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center border-t-[1px] border-[var(--border-color)] text-[var(--sec-text)] py-10 px-3'>Copyright &copy; | www.sudiplmc.dev - 2025 | All Right Reserved</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
