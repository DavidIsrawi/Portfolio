import React from 'react'
import { ThemeIcon } from './ThemeIcon'

export const Toolbar = () => {
    return (
        <div className="top-0 py-1 sticky flex justify-around px-3 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <ThemeIcon/>
        </div>
    )
}