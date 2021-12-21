import React from 'react'
import { ContentType } from './utils/DataModel'

interface JumpToTypeProps {
    contentTypes: ContentType[]
}

export const JumpToBar = (props: JumpToTypeProps) => {
    return (
        <section className="flex flex-wrap justify-evenly">
            <p><strong>Jump to</strong></p>
            {
                props.contentTypes.map(contentType => {
                    return <JumpToContentType type={contentType.type}/>
                })
            }
        </section>
    )
}

interface JumpToContentTypeProps {
    type: string,
}

const JumpToContentType = (props: JumpToContentTypeProps) => {
    return (
        // do something with the onClick
        <a href={`#${props.type}`}
        className={"dark:text-primary text-light p-3 my-4 md:my-0 flex items-center rounded-lg justify-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 bg-primary dark:bg-secondary hover:bg-green-900 focus:bg-green-900"}>
            {props.type}
        </a>
    )
}