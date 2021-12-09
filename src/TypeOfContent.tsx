/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { ContentType } from './utils/DataModel'

interface ContentTypeSelectorsProps {
    selectContent: (content: any) => void,
    contentTypes: ContentType[]
}

export const ContentTypeSelectors = (props: ContentTypeSelectorsProps) => {
    const [selectedType, setSelectedType] = React.useState('')

    const SelectTypeAndContent = (type: string) => {
        setSelectedType(type)
        props.selectContent(type)
    }

    return (
        <section className="flex flex-wrap justify-around dark:text-primary text-light">
            {
                props.contentTypes.map(contentType => {
                    return <ContentButton selectContent={SelectTypeAndContent} buttonText={contentType.type} isSelected={selectedType===contentType.type}/>
                })
            }
        </section>
    )
}

interface ContentButtonProps {
    selectContent: (contentType: string) => void,
    buttonText: string,
    isSelected: boolean
}

const ContentButton = (props: ContentButtonProps) => {
    const selectedClasses = props.isSelected ? "bg-accent text-light" : "bg-primary dark:bg-secondary hover:bg-green-900 focus:bg-green-900"
    console.log(props.isSelected)
    return (
        <button onClick={() => props.selectContent(props.buttonText)}
        className={"p-3 mx-min my-4 md:my-0 flex items-center rounded-lg justify-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 " + selectedClasses}>
            {props.buttonText}
        </button>
    )
}