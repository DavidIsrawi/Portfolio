import React from 'react'
import { ThemeIcon } from './ThemeIcon'

export const Toolbar = () => {
    return (
        <div className="top-0 py-1 sticky flex justify-around px-3 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
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
        <button className="outline-none border-2 rounded-full px-4 pb-1 border-transparent hover:border-current transition-colors duration-200">{props.title}</button>
    )
}