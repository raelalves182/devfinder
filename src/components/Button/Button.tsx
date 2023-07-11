"use client"

import React from 'react'
import { useTheme } from "next-themes";
import { SunIcon } from '@heroicons/react/24/solid';


const Button = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
            className='transition-all duration-100 dark:text-white text-gray-800 text-xs flex items-center gap-1 uppercase'>
            Light <SunIcon className='w-5 h-5' />
        </button>
    )
}

export default Button;
