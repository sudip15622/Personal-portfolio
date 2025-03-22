"use client"
import React, { useState, useEffect } from 'react'
import myProjects from '@/data/myProjects.json'
import LinkBtn from '../LinkBtn/LinkBtn';
import SocialMedias from '../SocialMedias/SocialMedias';
import ProjectCard from '../ProjectCard/ProjectCard';
import { motion } from 'framer-motion'
import Image from 'next/image';

import { LuArrowBigRightDash } from "react-icons/lu";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { SlVector } from "react-icons/sl";
import { AiOutlinePython } from "react-icons/ai";
import Link from 'next/link';

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const myServices = [
    {
      title: "Web Development",
      description: "View all web development projects i have done and services i provide.",
      icon: <CgWebsite />
    },
    {
      title: "Python & AI / ML",
      description: "View all python and AI / ML projects i have done and services i provide.",
      icon: <AiOutlinePython />
    },
    {
      title: "Vector Tracing",
      description: "View all vector tracing projects i have done and services i provide.",
      icon: <SlVector />
    },
  ]

  const handleProjectPrev = () => {
    if (currentIndex < myProjects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }
  const handleProjectNext = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(myProjects.length - 1)
    }
  }

  return (
    <main>
      <motion.div className="flex items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='flex flex-col'>
          <div className='text-[1.1rem]'>Hey there,</div>
          <h1 className='text-[3.5rem] flex justify-center flex-col font-bold'>
            I'm Sudip Lamichhane
          </h1>
          <div className='flex items-center gap-2 text-[var(--action-color)] my-3'>
            <span className="text-[1.2rem]"><LuArrowBigRightDash /></span>
            <p className="text-[1.3rem]">Web Developer | AI / ML Enthusiast</p>
          </div>
          <p className="w-full max-w-[700px] text-[1.1rem] text-[var(--sec-text)] my-3">
            Hi, I'm Sudip, a Web Developer passionate about building dynamic, user-friendly websites. With expertise in React.js, Next.js, and Node.js, I create seamless digital experiences with clean code and intuitive design. Let’s bring ideas to life!
          </p>
          <div className='flex gap-10 items-center mt-8'>
            <LinkBtn link={"/contact"} text={"Get in touch"} />
            <LinkBtn link={"/sudipCV.pdf"} text={"Download CV"} isBlack={true} download={true} />
          </div>
        </div>

        <picture className='shadow-[0_0_30px_var(--action-color)] rounded-full flex items-center justify-center w-[420px] h-[420px] overflow-hidden'>
          <Image className='w-full h-full object-cover opacity-70 grayscale transition-all duration-[.4s] hover:grayscale-0 hover:scale-105' width={500} height={400} src="/sudip_croppe.png" alt="portfolio-cover" />
        </picture>

        {/* <ul className="flex flex-col justifly-center gap-7">
          <li className='flex flex-col items-end'>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-[3.5rem]'>2</span>
              <span className='text-[var(--action-color)] text-[2rem]'><FaPlus /></span>
            </div>
            <p className='text-[var(--sec-text)] text-[1.1rem]'>Years of Experience</p>
          </li>
          <li className='flex flex-col items-end'>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-[3.5rem]'>10</span>
              <span className='text-[var(--action-color)] text-[2rem]'><FaPlus /></span>
            </div>
            <p className='text-[var(--sec-text)] text-[1.1rem]'>Completed Projects</p>
          </li>
          <li className='flex flex-col items-end'>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-[3.5rem]'>5</span>
              <span className='text-[var(--action-color)] text-[2rem]'><FaPlus /></span>
            </div>
            <p className='text-[var(--sec-text)] text-[1.1rem]'>Satisfied Clients</p>
          </li>
        </ul> */}
      </motion.div>

      <section className="flex justify-between">
        <motion.div className="flex flex-col gap-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className='font-bold text-[3.5rem]'>My Services</h2>
          <p className='w-full max-w-[500px] text-[1.1rem] text-[var(--sec-text)]'>Offering expert web development and graphics solutions, from building dynamic websites to creating stunning visual designs. Let's bring your ideas to life!</p>
          <LinkBtn link={"/contact"} text={"Contact Me"} isBlack={true} />
        </motion.div>

        <motion.ul className="w-full max-w-[550px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {myServices.map((service, index) => {
            return (
              <React.Fragment key={index}>
                <li className='flex items-center justify-center'>
                  <Link href={"/portfolio"} className='flex justify-between w-full cursor-pointer duration-200 ease-linear transition-transform hover:translate-x-2 group'>
                    <div className="flex justify-center items-center w-fit h-fit text-[4rem] text-[var(--action-color)]">{service.icon}</div>
                    <div className="flex flex-col gap-2">
                      <h3 className='text-[1.6rem] font-bold group-hover:text-[var(--action-color)] transition-colors duration-200 ease-linear'>{service.title}</h3>
                      <p className='w-full max-w-[400px] text-[1.1rem] text-[var(--sec-text)]'>{service.description}</p>
                    </div>
                    <div className="flex justify-center items-center text-[2rem] group-hover:text-[var(--action-color)] transition-colors duration-200 ease-linear"><FaArrowRight /></div>
                  </Link>
                </li>

                {index < (myServices.length - 1) && <li className="w-full h-[1px] bg-[var(--border-color)] my-[50px]"></li>}
              </React.Fragment>
            )
          })}
        </motion.ul>
      </section>

      <section className="relative flex justify-between items-start">
        <div className="flex flex-col gap-5">
          <h2 className='font-bold text-[3.5rem]'>About Me</h2>
          <p className='w-full max-w-[400px] text-[1.1rem] text-[var(--sec-text)]'>A passionate web developer and designer dedicated to crafting seamless digital experiences. Combining creativity with technical expertise to build impactful solutions.</p>
          <div className='flex items-center gap-5'>
            <LinkBtn link={"/about"} text={"Learn More"} isBlack={true} />
            <SocialMedias />
          </div>
        </div>

        <picture className='absolute flex items-center justify-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] -z-10 w-[400px] h-auto overflow-hidden'>
          <Image className='w-full h-full object-cover' width={500} height={400} src="/sudip.jpg" alt="portfolio-about-cover" />
        </picture>

        <div className='flex flex-col gap-4 max-w-[400px] mt-[80px]'>
          <h3 className='text-[1.6rem] font-bold'>Companies I worked for</h3>
          <p className='text-[1.1rem] text-[var(--sec-text)]'>I've had the opportunity to work with these companies and clients, delivering quality solutions.</p>
          <div className='w-full h-[1px] bg-[var(--border-color)] my-3'></div>
          <motion.div className="flex items-center gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <picture className="flex items-center justify-center w-[70px] h-auto overflow-hidden">
              <Image
                className="w-full h-full object-cover filter grayscale"
                width={200}
                height={150}
                src="/google.webp"
                alt="google-logo"
              />
            </picture>
            <picture className="flex items-center justify-center w-[70px] h-auto overflow-hidden">
              <Image
                className="w-full h-full object-cover filter grayscale"
                width={200}
                height={150}
                src="/microsoft.png"
                alt="microsoft-logo"
              />
            </picture>
            <picture className="flex items-center justify-center w-[70px] h-auto overflow-hidden">
              <Image
                className="w-full h-full object-cover filter grayscale brightness-75"
                width={200}
                height={150}
                src="/apple.png"
                alt="apple-logo"
              />
            </picture>
          </motion.div>
        </div>
      </section>

      <section className='flex flex-col gap-10'>
        <motion.div className='flex items-center justify-between'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className='font-bold text-[3.5rem]'>My Latest Work</h2>
          <LinkBtn link={"/portfolio"} text={"Browse portfolio"} />
        </motion.div>
        {myProjects.length > 0 && <>
          <motion.div className='relative flex w-full p-10 bg-[var(--bg-sec-color)] rounded-[5px]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {myProjects.map((work, index) => {
              return (
                (index == currentIndex) && <div key={index} className='flex items-center justify-center w-full'>
                  <ProjectCard details={work} projectNo={index + 1} />
                </div>
              )
            })}
            <div className='absolute bottom-10 right-10 flex items-center justify-center gap-8 h-[60px]'>
              <button onClick={(e) => { handleProjectPrev() }} className="flex justify-center items-center text-[2rem] text-[var(--sec-text)] hover:text-[var(--action-color)] hover:scale-110 transition-all duration-200 ease-linear"><FaArrowLeft /></button>
              <button onClick={(e) => { handleProjectNext() }} className="flex justify-center items-center text-[2rem] text-[var(--sec-text)] hover:text-[var(--action-color)] hover:scale-110 transition-all duration-200 ease-linear"><FaArrowRight /></button>
            </div>
          </motion.div>
        </>}
      </section>

    </main>
  )
}

export default Home
