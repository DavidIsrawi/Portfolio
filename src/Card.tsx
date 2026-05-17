import { ContentItem, ContentItemLinks } from "./utils/DataModel"

export function Card(props: ContentItem): JSX.Element {
    return (
        <div className="max-w-4xl h-1/3 rounded-md flex flex-col md:flex-row justify-between mx-auto my-10 p-10 transition duration-200 ease-in-out transform hover:-translate-y-1 focus:-translate-y-1 motion-reduce:transform-none" tabIndex={0}>
            <img
                src={props.img.path}
                alt={props.img.title}
                className="h-20 w-20 md:h-24 md:w-24 object-contain self-center mb-4 md:mb-0"
                loading='lazy'
            />
            <div className="w-5/6 md:pl-10 text-center self-center md:text-left space-y-5">
                <h3><strong className="self-center">{props.description.title}</strong></h3>
                <p className="text-left opacity-90">
                    {props.description.description}
                </p>
                <div>
                    {props.links?.map(link => (
                        <CardLink key={link.url} title={link.title} url={link.url} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function CardLink(props: ContentItemLinks): JSX.Element {
    return (
        <a href={props.url} target="_blank" rel="noreferrer noopener" className="rounded-full px-2 py-1 text-xs mr-2 bg-primary text-light">
            {props.title}
        </a>
    )
}
