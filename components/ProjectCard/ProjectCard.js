"use client"
import React from 'react'
import { motion } from 'framer-motion' // Import Framer Motion
import LinkBtn from '../LinkBtn/LinkBtn';
import Image from 'next/image';

import { TbCircleLetterSFilled, TbCircleDottedLetterS } from "react-icons/tb";

const ProjectCard = ({ details, projectNo }) => {
    return (
        <div
            className='w-full h-full flex flex-col gap-8'
        >
            {/* Animated Picture */}
            <motion.picture
                className='flex items-center justify-center w-full h-[300px] lg:h-[450px] overflow-hidden opacity-70'
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "linear" }}
            >
                <Image className='w-full h-full object-cover grayscale' width={1000} height={400} src={details.bannerImage} alt="project-cover" />
            </motion.picture>

            {/* Animated Header */}
            <motion.div
                className='flex flex-col gap-x-8 gap-y-5 lg:flex-row lg:items-center lg:justify-between'
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <div className='flex items-center gap-4'>
                    <motion.div
                        className='flex items-center justify-center text-4xl text-[var(--action-color)]'
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <TbCircleDottedLetterS />
                    </motion.div>
                    <div className='font-bold text-[2.8rem]'>{projectNo < 10 ? `0${projectNo}` : `${projectNo}`}</div>
                    <h3 className='font-bold text-[2rem]'>{details.title.split("-")[0]}</h3>
                </div>
                <motion.p
                    className='w-full lg:max-w-[500px] text-[var(--sec-text)] text-[1.1rem]'
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    {details.description.slice(0, 150)}...
                </motion.p>
            </motion.div>

            {/* Divider (Animated) */}
            <motion.div
                className='w-full h-[1px] bg-[var(--border-color)]'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            ></motion.div>

            {/* Static Link Button (No Animation) */}
            <LinkBtn link={details.baseLink} text={"View full project"} isBlack={true} />
        </div>
    )
}

export default ProjectCard
