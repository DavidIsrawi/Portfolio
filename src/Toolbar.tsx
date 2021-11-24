import React from 'react'
import { ThemeIcon } from './ThemeIcon'

export const Toolbar = () => {
    return (
        <div className="top-0 pt-2 sticky flex justify-around px-3">
            <button>Top</button>
            <button>Contact</button>
            <button>Source Code</button>
            <ThemeIcon/>
        </div>
    )
}