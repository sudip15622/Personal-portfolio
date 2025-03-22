"use client"
import React from 'react'
import Link from 'next/link'

const LinkBtn = ({ link, text, isBlack = false, download = false, isWhite = false, newTab = false }) => {
    return (
        <>
            {isBlack ? <Link
                href={link}
                download={download}
                target={newTab ? "_blank" : ""}
                className="flex items-center justify-center bg-[var(--bg-color)] text-[1.1rem] font-bold rounded-[5px] w-[200px] h-[60px] border-2 border-[var(--border-color)]  transition-all duration-100 ease-linear hover:bg-[var(--action-color)] hover:border-0 hover:scale-y-105 origin-bottom"
            >
                {text}
            </Link> : isWhite ? <Link
                href={link}
                download={download}
                target={newTab ? "_blank" : ""}
                className="flex items-center justify-center bg-[var(--pri-text)] text-[var(--action-color)] text-[1.1rem] font-bold rounded-[5px] w-[200px] h-[60px] transition-all duration-100 ease-linear hover:bg-[var(--action-color)] hover:text-[var(--pri-text)] hover:border-2 hover:border-[var(--pri-text)] hover:scale-y-105 origin-bottom"
            >
                {text}
            </Link> : <Link
                href={link}
                download={download}
                target={newTab ? "_blank" : ""}
                className="flex items-center justify-center bg-[var(--action-color)] text-[1.1rem] font-bold rounded-[5px] w-[200px] h-[60px] transition-all duration-100 ease-linear hover:bg-[var(--bg-color)] hover:border-2 hover:border-[var(--border-color)] hover:scale-y-105 origin-bottom"
            >
                {text}
            </Link>}

        </>
    )
}

export default LinkBtn
