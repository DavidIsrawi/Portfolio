import React from "react"
import { Card } from "./Card"
import { ContentTypeSelectors } from "./TypeOfContent"
import { ContentItem } from "./utils/DataModel"
import { userContent } from "./utils/UserContent"

export const Content = () => {
    const [contentToDisplay, setContentToDisplay] = React.useState<ContentItem[]>([])

    const FetchSelectedContent = (contentType: string) => {
        userContent.contentTypes.map(
            type => {
                if (type.type === contentType) {
                    setContentToDisplay(type.content)
                }
            }
        )
    }

    return (
        <React.Fragment>
            <ContentTypeSelectors selectContent={FetchSelectedContent} contentTypes={userContent.contentTypes}/>
            <ContentCards content={contentToDisplay}/>
        </React.Fragment>
    )
}

interface ContentCardsProps {
    content: ContentItem[]
}

const ContentCards = (props: ContentCardsProps) => {
    return (
        <section>
            {
                props.content.map(item => {
                    return <Card img={item.img} description={item.description} links={item.links}/>
                })
            }
        </section>
        )
}