"use client"
import React, { useState, useEffect } from 'react'
import myProjects from '@/data/myProjects.json'
import Link from 'next/link'
import Image from 'next/image'
import LinkBtn from '../LinkBtn/LinkBtn'
import { motion } from 'framer-motion'
import { FadeLoader } from 'react-spinners'

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const ProjectCard = ({ details }) => {
    return (
        <Link href={details.baseLink} className='w-full h-full flex flex-col overflow-hidden'>
            <picture className='relative w-full h-[300px] flex items-center justify-center overflow-hidden opacity-70'>
                <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='w-full h-full object-cover grayscale transition-all duration-[.4s] group-hover:scale-105 group-hover:grayscale-0' src={details.bannerImage} alt={details.title} />
            </picture>
            <div className='flex flex-col gap-5 w-full pt-4 px-4 pb-10'>
                <div className='flex items-center justify-between group-hover:text-[var(--action-color)] transition-colors duration-[.4s]'>
                    <h2 className='font-bold text-[1.3rem]'>{details.title}</h2>
                    <div className='flex items-center justify-center p-1 text-[2rem]'><FaArrowRight /></div>
                </div>
                <p className='text-[var(--sec-text)] w-'>{details.description.slice(0, 150)}...</p>
            </div>
        </Link>
    )
}

const PortfolioPage = () => {

    const [currentProjects, setCurrentProjects] = useState([])
    const [currentCategory, setCurrentCategory] = useState('All projects')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (myProjects) {
            setLoading(true)
            if (currentCategory === "All projects") {
                setCurrentProjects(myProjects);
            } else {
                let newProjects = myProjects.filter((project) => {
                    return project.category === currentCategory
                })
                setCurrentProjects(newProjects)
            }
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }

    }, [currentCategory])

    const categories = [
        "All projects",
        "Web development",
        "Pyhon & AI / ML",
        "Vector tracing"
    ]

    return (
        <main>
            <motion.section className='flex flex-col items-center text-center justify-center gap-y-5'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h1 className='text-[3.5rem] font-bold'>
                    Projects I&apos;ve Built
                </h1>
                <p className='w-full max-w-[700px] text-[1.1rem] text-[var(--sec-text)]'>
                    Here are some of the projects I&apos;ve built, ranging from web applications to freelancing work. Each project reflects my skills, creativity, and passion for development.
                </p>
                <LinkBtn link={"/contact"} text={"Get in touch"} />

            </motion.section>
            <section className='w-full flex flex-col gap-20'>
                <ul className='flex items-center justify-center gap-20'>
                    {categories.map((category, index) => {
                        return (
                            <li key={index} onClick={() => { setCurrentCategory(category) }} className={`${category === currentCategory ? "text-[var(--action-color)] " : ""}flex items-center justify-center font-semibold text-[1.1rem] hover:text-[var(--action-color)] transition-colors duration-[.4s] cursor-pointer`}>{category}</li>
                        )
                    })}
                </ul>
                {loading ? <div className='flex items-center justify-center w-full h-[200px] text-[4rem]'>
                    <FadeLoader color='var(--action-color)' />
                </div> : <ul className='w-full flex flex-wrap justify-between gap-x-20 gap-y-20'>
                    {currentProjects.length > 0 && currentProjects.map((project, index) => {
                        return (
                            <motion.li key={index} className='min-w-[550px] flex flex-1 items-center justify-center rounded-md border-b-[1px] border-[var(--border-color)] overflow-hidden group'
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <ProjectCard details={project} />
                            </motion.li>
                        )
                    })}
                </ul>}
            </section>
        </main>
    )
}

export default PortfolioPage
