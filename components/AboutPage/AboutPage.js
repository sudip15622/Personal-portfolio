"use client"
import React from 'react'
import LinkBtn from '../LinkBtn/LinkBtn';
import { motion } from 'framer-motion'
import { techIcons } from '@/utils/techIcons';
import Image from 'next/image';

import { FaLaptopCode, FaProjectDiagram, FaBriefcase, FaRocket, FaCode, FaBrain } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SlVector } from "react-icons/sl";
import { AiOutlinePython } from "react-icons/ai";
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
// import { RiNextjsLine, RiVercelFill, RiTailwindCssFill } from "react-icons/ri";
// import { SiExpress, SiMongodb, SiScikitlearn, SiNumpy, SiPandas, SiNetlify } from "react-icons/si";
// import { TbBrandAdobeIllustrator } from "react-icons/tb";

const AboutPage = () => {

  const journeyData = [
    {
      year: "2021",
      title: "Foundation in Programming",
      description:
        "I began my coding journey with Python, diving into programming fundamentals, data structures, and algorithms. I also explored data science, working on small projects like house price prediction using machine learning.",
      icon: <FaLaptopCode />,
    },
    {
      year: "2022",
      title: "Transition to Web Development",
      description:
        "I shifted my focus towards web development, learning core technologies like HTML, CSS, and JavaScript. I then explored modern frameworks like React.js and Next.js, gaining experience in building dynamic and interactive web applications.",
      icon: <FaProjectDiagram />,
    },
    {
      year: "2023",
      title: "Freelancing & Building Real-World Projects",
      description:
        "I started freelancing on Fiverr, offering vector tracing and web development services. I also developed FundNepal, a crowdfunding platform built with Next.js, integrating Nepali payment gateways for seamless transactions.",
      icon: <FaBriefcase />,
    },
    {
      year: "2023 - Present",
      title: "Expanding Expertise & Client Work",
      description:
        "I worked on multiple client projects, focusing on building scalable web applications with Next.js, Tailwind CSS, and MongoDB. I also enhanced my frontend and backend skills while improving UI/UX designs.",
      icon: <FaCode />,
    },
    {
      year: "2024",
      title: "Combining Web Development with AI/ML",
      description:
        "I am now integrating AI/ML into web applications to create intelligent and interactive experiences. My goal is to build AI-driven web solutions that enhance user engagement and automation.",
      icon: <FaRocket />,
    },
    {
      year: "2025 - Future",
      title: "Mastering AI-Powered Web Solutions",
      description:
        "I am focused on mastering the intersection of AI and web development, working on advanced AI-driven applications and continuously improving my skills to stay ahead in the industry.",
      icon: <FaBrain />,
    },
  ];


  const mySkills = [
    {
      title: "Web Development",
      description: "Creating responsive and interactive websites using modern frameworks.",
      icon: <CgWebsite />
    },
    {
      title: "Python & AI / ML",
      description: "Exploring machine learning and AI to build intelligent applications.",
      icon: <AiOutlinePython />
    },
    {
      title: "Vector Tracing",
      description: "Recreating high-quality vector graphics with precision.",
      icon: <SlVector />
    },
  ]

  const techNames = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "Node",
    "React",
    "Next",
    "Express",
    "MongoDb",
    "Python",
    "Sk-Learn",
    "Numpy",
    "Pandas",
    "Git",
    "Github",
    "Netlify",
    "Vercel",
    "Illustrator",
  ];



  return (
    <main>
      <section className="flex lg:flex-row flex-col gap-y-20 items-center justify-between">
        <picture className='order-2 lg:order-1 flex items-center justify-center w-full sm:w-[420px] h-auto sm:h-[420px] overflow-hidden opacity-80'>
          <Image width={500} height={400} className='w-full h-full object-cover' src="/sudip_main.jpg" alt="portfolio-about-cover" />
        </picture>
        <motion.div className='flex flex-col w-full lg:w-fit order-1 lg:order-2'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className='text-5xl font-bold mb-2'>
            I'm Sudip Lamichhane
          </h1>
          <p className="text-[1.5rem]">A proficient web developer & AI/ML enthusiast</p>
          <p className="w-full lg:max-w-[600px] text-[1.1rem] text-[var(--sec-text)] my-3">
            I'm Sudip, a Web Developer passionate about crafting dynamic, high-performing websites. With expertise in React.js, Next.js, and Node.js, I focus on building clean, scalable, and user-friendly solutions. My journey began with Python, eventually leading me to full-stack development, where I blend creativity with problem-solving to deliver seamless digital experiences.
          </p>
          <div className='flex gap-10 items-center mt-8'>
            <LinkBtn link={"/contact"} text={"Get in touch"} />
          </div>
        </motion.div>
      </section>

      <section className="relative flex lg:flex-row flex-col gap-x-10 gap-y-10 justify-between items-start lg:mt-0 mt-[-100px]">
        <div className="flex flex-col gap-5">
          <h2 className='font-bold text-5xl'>My Skills</h2>
          <p className='w-full lg:max-w-[500px] text-[1.1rem] text-[var(--sec-text)]'>I have honed my skills across multiple domains, from building dynamic web applications to exploring AI/ML and creative design. Here are the key areas I specialize in:</p>
          <motion.ul className="w-full lg:max-w-[500px] flex flex-col mt-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {mySkills.map((skill, index) => {
              return (
                <React.Fragment key={index}>
                  <li className='flex sm:flex-row flex-col gap-5 w-full'>
                    <div className="flex justify-center items-center w-fit h-fit text-[3rem] text-[var(--action-color)]">{skill.icon}</div>
                    <div className="flex flex-col gap-2">
                      <h3 className='text-[1.4rem] font-bold'>{skill.title}</h3>
                      <p className='w-full lg:max-w-[350px] text-[1.1rem] text-[var(--sec-text)]'>{skill.description}</p>
                    </div>
                  </li>
                  {index < (mySkills.length - 1) && <li className="w-full h-[1px] bg-[var(--border-color)] my-[30px]"></li>}
                </React.Fragment>
              )
            })}
          </motion.ul>
        </div>

        <div className='flex flex-col gap-4 w-full lg:max-w-[500px] mt-10'>
          <h3 className='text-[1.6rem] font-bold'>Technologies of my expertise</h3>
          <p className='text-[1.1rem] text-[var(--sec-text)]'>I work with a range of cutting-edge technologies to bring ideas to life. Here are the tools and frameworks I use:</p>
          <div className='w-full h-[1px] bg-[var(--border-color)] my-3'></div>
          <motion.div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 items-center gap-x-5 gap-y-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {techNames.map((techName, index) => {
              return (
                <div key={index} className='flex flex-col items-center justify-center text-center gap-2'>
                  <div className='flex items-center justify-center text-[2rem] text-[var(--action-color)]'>{techIcons[techName]}</div>
                  <p className='text-[.85rem] font-semibold'>{techName}</p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">My Journey & Experiences</h1>
        <div className="relative mx-auto w-full">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1 bg-[var(--border-color)] w-1 h-full hidden sm:block"></div>

          {/* Timeline Items */}
          <div className="flex flex-col space-y-12">
            {journeyData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                    }`}

                >
                  {/* Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--action-color)] p-3 rounded-full text-2xl hidden sm:flex sm:items-center sm:justify-center">
                    {item.icon}
                  </div>

                  <motion.div className="flex flex-col gap-3 w-full sm:w-5/12 p-4 bg-[var(--bg-sec-color)] rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <p className="flex gap-2 text-lg font-bold"><span className='text-[1.2rem] flex items-center justify-center'><MdOutlineDateRange /></span>{item.year}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-[var(--sec-text)]">{item.description}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
