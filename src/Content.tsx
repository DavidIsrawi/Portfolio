import React from "react"
import { Card } from "./Card"
import { RightArrowIcon } from "./Icons"
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
        <h2 className="text-4xl mx-auto w-2/3 flex items-center gap-6">
            <RightArrowIcon/>
            <strong className="mx-auto md:mx-0" tabIndex={0}>{props.title}</strong>
        </h2>
    )
}

const ContentSection = (props: ContentSectionProps) => {
    return (
        // TODO: Whenever we update to Tailwing v3, update this section to have a scroll margin top
        <section id={props.section.type}>
            <ContentSectionTitle title={props.section.type}/>
            {
                props.section.content.map((item: ContentItem) => {
                    return <Card img={item.img} description={item.description} links={item.links}/>
                })
            }
            <hr className="w-1/3 mx-auto m-12 border-1 border-secondary"/>
        </section>
        )
}