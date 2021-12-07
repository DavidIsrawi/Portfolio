import React from 'react'
import { ThemeIcon } from './ThemeIcon'

export const Toolbar = () => {
    return (
        <div className="top-0 py-1 sticky flex justify-around px-3 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 z-10">
            <ToolbarButton title='Home'/>
            <ToolbarButton title='About'/>
            <ToolbarButton title='Contact'/>
            <ThemeIcon/>
        </div>
    )
}

interface ToolbarButtonProps {
    title: string
}

const ToolbarButton = (props: ToolbarButtonProps) => {
    return (
        <button className="px-2 pb-1 border-transparent transition-all duration-400 border-b-4 hover:border-current focus:border-current">
            {props.title}
        </button>
    )
}