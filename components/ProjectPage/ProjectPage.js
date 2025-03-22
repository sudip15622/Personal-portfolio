"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import LinkBtn from '../LinkBtn/LinkBtn'
import { techIcons } from '@/utils/techIcons'

import { FaAngleDoubleDown, FaServicestack, FaUser, FaHandPointRight, FaDev, FaArrowRight } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { LuTypeOutline } from "react-icons/lu";
import { SiSololearn } from "react-icons/si";

const ProjectPage = ({ details }) => {

    return (
        <main>
            <section className='w-full flex flex-col gap-y-14'>
                <div className='flex items-center justify-between'>
                    <motion.div className='flex flex-col gap-y-2'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h1 className='text-[3.5rem] font-bold'>{details.title}</h1>
                        <p className='w-full max-w-[1000px] text-[1.1rem] text-[var(--sec-text)]'>{details.description}</p>
                    </motion.div>
                    <motion.div className='flex items-center justify-center text-[5rem] text-[var(--action-color)]'
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FaAngleDoubleDown />
                    </motion.div>
                </div>
                <motion.picture className='w-full h-[550px] flex items-center justify-center overflow-hidden opacity-70 rounded-[5px]'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: .7 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Image width={1000} height={500} className='w-full h-full object-cover transition-all duration-[.2s] grayscale hover:grayscale-0' src={details.bannerImage} alt={details.title} />
                </motion.picture>
            </section>

            <section className='flex items-center justify-between'>
                <motion.div className='flex flex-col w-full max-w-[500px]'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className='font-bold text-[3.5rem]'>About Project</h2>
                    <p className='w-full text-[1.1rem] text-[var(--sec-text)]'>A brief insight about the project and it&apos;s development date, client, type, service and so on.</p>
                    <ul className='grid grid-cols-2 items-stretch justify-between w-full gap-x-20 gap-y-10 mt-5'>
                        <li className='flex items-start gap-x-5'>
                            <div className='flex items-center justify-center text-[2rem] bg-[var(--action-color)] rounded-full p-2'>
                                <MdOutlineDateRange />
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <h2 className='text-xl font-semibold'>Date</h2>
                                <p className='text-[var(--sec-text)]'>{details.overview.date}</p>
                            </div>
                        </li>
                        <li className='flex items-start gap-x-5'>
                            <div className='flex items-center justify-center text-[2rem] bg-[var(--action-color)] rounded-full p-2'>
                                <LuTypeOutline />
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <h2 className='text-xl font-semibold'>Type</h2>
                                <p className='text-[var(--sec-text)]'>{details.overview.type}</p>
                            </div>
                        </li>
                        <li className='flex items-start gap-x-5'>
                            <div className='flex items-center justify-center text-[2rem] bg-[var(--action-color)] rounded-full p-2'>
                                <FaServicestack />
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <h2 className='text-xl font-semibold'>Service</h2>
                                <p className='text-[var(--sec-text)]'>{details.overview.service}</p>
                            </div>
                        </li>
                        <li className='flex items-start gap-x-5'>
                            <div className='flex items-center justify-center text-[2rem] bg-[var(--action-color)] rounded-full p-2'>
                                <FaUser />
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <h2 className='text-xl font-semibold'>Client</h2>
                                <p className='text-[var(--sec-text)]'>{details.overview.client}</p>
                            </div>
                        </li>
                    </ul>
                    <div className='flex gap-10 items-center mt-10'>
                        <LinkBtn link={details.liveDemo} text={"Live demo"} newTab={true}/>
                        <LinkBtn link={details.githubRepo} isBlack={true} text={"View on github"} newTab={true}/>
                    </div>
                </motion.div>
                <motion.picture className='w-full max-w-[600px] h-[400px] flex items-center justify-center opacity-70 rounded-xl overflow-hidden'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: .7 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Image className='object-cover h-full w-full grayscale transition-all duration-[.4s] hover:scale-105 hover:grayscale-0' src={details.aboutImage} width={400} height={300} alt={`overview-${details.id}`} />
                </motion.picture>
            </section>

            <section className='flex justify-between items-center'>
                <motion.picture className='w-full max-w-[400px] h-[550px] flex items-center justify-center opacity-70 overflow-hidden rounded-xl'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: .7 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Image className='object-over h-full w-full grayscale transition-all duration-[.4s] hover:scale-105 hover:grayscale-0' src={details.featureImage} width={400} height={500} alt={`feature-${details.id}`} />
                </motion.picture>
                <motion.div className='flex flex-col w-full max-w-[500px]'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className='font-bold text-[3.5rem]'>Key Features</h2>
                    <p className='text-[1.1rem] text-[var(--sec-text)]'>Explore the core features that make this project efficient, user-friendly, and impactful.</p>
                    <div className='w-full h-[1px] bg-[var(--border-color)] my-3'></div>
                    <ul className='flex flex-col gap-y-5 mt-[30px]'>
                        {details.features.map((feature, index) => {
                            return (
                                <li key={index} className='flex items-start gap-x-5'>
                                    <div className='w-fit h-fit flex items-center justify-center text-2xl text-[var(--action-color)]'>
                                        <FaHandPointRight />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h2 className='font-semibold'>{feature.title}</h2>
                                        <p className='text-[var(--sec-text)]'>{feature.description}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </motion.div>
            </section>

            <section className='flex flex-col gap-y-10 items-center'>
                <div className='mx-auto w-full max-w-[800px] text-center flex flex-col justify-center gap-y-2'>
                    <h2 className='font-bold text-[3.5rem]'>Technology Stack</h2>
                    <p className='text-[1.1rem] text-[var(--sec-text)] mb-[20px]'>This project utilizes a modern tech stack to ensure high performance, scalability, and an excellent user experience, with carefully chosen tools for both front-end and back-end development.</p>
                </div>
                <motion.ul className='flex flex-wrap items-center justify-center gap-x-20 gap-y-10 w-full max-w-[1000px] mt-auto'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {details.technologies.map((tech, index) => {
                        return (
                            <li key={index} className='flex flex-col items-center justify-center text-center gap-2 w-[120px]'>
                                <div className='flex items-center justify-center text-[3.5rem] text-[var(--action-color)]'>{techIcons[tech]}</div>
                                <p className='text-[1rem] font-semibold'>{tech}</p>
                            </li>
                        )
                    })}
                </motion.ul>
            </section>

            <section className="flex justify-between items-start">
                <div className="flex flex-col gap-y-5">
                    <h2 className='font-bold text-[3.5rem]'>My Contributions</h2>
                    <div className='flex items-center gap-x-5'>
                        <div className='flex items-center font-bold justify-center text-[1.2rem] px-5 y-2 bg-[var(--action-color)] text-[var(--pri-text)] rounded-4xl'>Role</div>
                        <p className='font-semibold text-[1.4rem] text-[var(--action-color)]'>{details.role}</p>
                    </div>
                    <motion.ul className="w-full max-w-[500px] flex flex-col gap-y-5 mt-2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >

                        {details.contributions.map((contribution, index) => {
                            return (
                                <li key={index} className='flex items-start gap-x-5'>
                                    <div className='w-fit h-fit flex items-center justify-center text-xl text-[var(--action-color)]'>
                                        <FaArrowRight />
                                    </div>
                                    <p className='font-semibold'>{contribution}</p>
                                </li>
                            )
                        })}
                    </motion.ul>
                </div>

                <div className='flex flex-col gap-4 max-w-[500px] mt-10'>
                    <h3 className='text-[1.6rem] font-bold'>Lession learned from this project</h3>
                    <p className='text-[1.1rem] text-[var(--sec-text)]'>I work with a range of cutting-edge technologies to bring ideas to life. Here are the tools and frameworks I use:</p>
                    <div className='w-full h-[1px] bg-[var(--border-color)] my-3'></div>
                    <motion.ul className="flex flex-wrap items-center gap-x-5 gap-y-7"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {details.lessonsLearned.map((lession, index) => {
                            return (
                                <li key={index} className='flex items-start gap-x-5'>
                                    <div className='w-fit h-fit flex items-center justify-center text-xl text-[var(--action-color)]'>
                                        <SiSololearn />
                                    </div>
                                    <p className='font-semibold'>{lession}</p>
                                </li>
                            )
                        })}
                    </motion.ul>
                </div>
            </section>

            <motion.section className='flex flex-col gap-y-14'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='flex items-center justify-between'>
                    <h2 className='text-[3.5rem] font-bold'>Project Gallery</h2>
                    <LinkBtn link={details.liveDemo} text={"Live demo"} newTab={true}/>
                </div>
                <ul className='w-full flex flex-wrap items-center justify-center gap-x-4'>
                    {details.gallery.map((imageAddress, index) => {
                        return (
                            <picture key={index} className='flex flex-1 items-center justify-center h-[400px] opacity-70 overflow-hidden border-[1px] border-[var(--border-color)] transition-all duration-[.6s] hover:flex-3 rounded-xl group'>
                                <Image src={imageAddress} width={300} height={200} className='object-cover w-full h-full grayscale transition-all duration-[.6s] group-hover:grayscale-0' alt={`gallery-${index}`} />
                            </picture>
                        )
                    })}
                </ul>
            </motion.section>
        </main>
    )
}

export default ProjectPage
