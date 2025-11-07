"use client"
import React from 'react'
import Link from 'next/link';

import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const SocialMedias = ({ hoverBlack = false }) => {

    const mediaInfos = [
        {
            link: "https://www.facebook.com/sudiplc.dev",
            icon: <FaFacebookF />,
        },
        // {
        //     link: "https://www.instagram.com/sudiplmc.dev",
        //     icon: <RiInstagramFill />,
        // },
        {
            link: "https://github.com/sudip15622",
            icon: <FaGithub />,
        },
        {
            link: "https://www.linkedin.com/in/sudip15622/",
            icon: <FaLinkedin />,
        },
    ]

    return (
        <>
            <div className='flex items-center gap-3'>
                {mediaInfos.map((media, index) => {
                    return (
                        hoverBlack ? <Link key={index} href={media.link} target='_blank' className='p-[2px] text-[1.3rem] hover:scale-110 hover:text-[var(--bg-color)] transition-all duration-200 ease-linear'>
                            {media.icon}
                        </Link> : <Link key={index} href={media.link} target='_blank' className='p-[2px] text-[1.3rem] hover:scale-110 hover:text-[var(--action-color)] transition-all duration-200 ease-linear'>
                            {media.icon}
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default SocialMedias
