/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

interface TypeOfContentProps {
    changeType: (isProfessional: boolean) => void
}

export const TypeOfContent = (props: TypeOfContentProps) => {
    return (
        <div className="flex justify-around dark:text-green-800 text-gray-100">
            <ContentButton changeType={props.changeType} buttonText="Professional"/>
            <ContentButton changeType={props.changeType} buttonText="Personal"/>
        </div>
    )
}

interface ContentButtonProps {
    changeType: (isProfessional: boolean) => void,
    buttonText: string
}

const ContentButton = (props: ContentButtonProps) => {
    return (
        <button onClick={() => props.changeType(props.buttonText === "Professional")}
        className="p-3 mx-min flex items-center w-1/3 rounded-lg justify-center bg-green-800 dark:bg-green-200 hover:bg-green-900 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            {props.buttonText}
        </button>
    )
}