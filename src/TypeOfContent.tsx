/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

interface TypeOfContentProps {
    changeType: (isProfessional: boolean) => void;
}

export const TypeOfContent = (props: TypeOfContentProps) => {
    return (
        <div className="flex justify-around dark:text-green-800 text-gray-100">
            <button className="p-3 mx-min flex items-center w-1/3 rounded-lg justify-center bg-green-800 dark:bg-green-50 hover:bg-green-900 dark:hover:bg-green-100" onClick={() => props.changeType(true)}>
                Professional
            </button>
            <button className="p-3 mx-min flex items-center w-1/3 rounded-lg justify-center bg-green-800 dark:bg-green-50 hover:bg-green-900 dark:hover:bg-green-100" onClick={() => props.changeType(false)}>
                Personal
            </button>
        </div>
    )
}