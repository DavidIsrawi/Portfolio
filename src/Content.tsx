import { Card } from "./Card"
import { ContentItem, ContentType } from "./utils/DataModel"
import { userContent } from "./utils/UserContent"

export function Content(): JSX.Element {
    return (
        <section id="content">
            {userContent.contentTypes.map(contentType => (
                <ContentSection key={contentType.type} section={contentType} />
            ))}
        </section>
    )
}

interface ContentSectionProps {
    section: ContentType
}

interface ContentSectionTitleProps {
    title: string
}

function ContentSectionTitle(props: ContentSectionTitleProps): JSX.Element {
    return (
        <h2 className="mx-auto w-2/3 flex items-center gap-6">
            <strong className="mx-auto md:mx-0" tabIndex={0} id={props.title}>{props.title}</strong>
        </h2>
    )
}

function ContentSection(props: ContentSectionProps): JSX.Element {
    return (
        <section className="my-10 md:scroll-mt-14 scroll-mt-20" aria-labelledby={props.section.type}>
            <ContentSectionTitle title={props.section.type} />
            {props.section.content.map((item: ContentItem) => (
                <Card key={item.description.title} img={item.img} description={item.description} links={item.links} />
            ))}
        </section>
    )
}