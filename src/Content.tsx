import React from "react"
import { Card } from "./Card"
import { ContentItem, ContentType } from "./utils/DataModel"
import { userContent } from "./utils/UserContent"

export const Content = () => {
    return (
        <section id="content">
            {
                userContent.contentTypes.map(contentType => {
                    return <ContentSection section={contentType}/>
                })
            }
        </section>
    )
}

interface ContentSectionProps {
    section: ContentType
}

interface ContentSectionTitleProps {
    title: string
}

const ContentSectionTitle = (props: ContentSectionTitleProps) => {
    return (
        <h2 className="mx-auto w-2/3 flex items-center gap-6">
            <strong className="mx-auto md:mx-0" tabIndex={0}>{props.title}</strong>
        </h2>
    )
}

const ContentSection = (props: ContentSectionProps) => {
    return (
        <section id={props.section.type} className="my-10 md:scroll-mt-14 scroll-mt-20">
            <ContentSectionTitle title={props.section.type}/>
            {
                props.section.content.map((item: ContentItem) => {
                    return <Card img={item.img} description={item.description} links={item.links}/>
                })
            }
        </section>
        )
}