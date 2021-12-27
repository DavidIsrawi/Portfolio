import { ContentItem, ContentItemLinks } from "./utils/DataModel"

export const Card = (props: ContentItem) => {

    const InformationSection = () => {
        return (
            <div className="w-5/6 md:pl-10 text-center self-center md:text-left space-y-5">
                <h3><strong className="self-center">{props.description.title}</strong></h3>
                <p className="text-left opacity-90">
                    {props.description.description}
                </p>
                <div>
                    {props.links?.map(link => {
                        return <CardLink title={link.title} url={link.url}/>
                    })}
                </div>
            </div>
        )
    }

    const ImageSection = () => {
        return (
            <img src={props.img.path} alt={props.img.title} className="w-1/4 md:w-1/6 self-center pb-4 md:pb-0" loading='lazy'/>
        )
    }    

    return (
        <div className="max-w-4xl h-1/3 rounded-md flex flex-col md:flex-row justify-between mx-auto my-10 p-10 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-103 focus:-translate-y-1 focus:scale-103" tabIndex={0}>
            <ImageSection/>
            <InformationSection/>
        </div>
    )
}

const CardLink = (props: ContentItemLinks) => {
    return (
        <a href={props.url} target="_blank" rel="noreferrer noopener" className="rounded-full px-2 py-1 text-xs mr-2 bg-green-800 text-gray-100">
            {props.title}
        </a>
    )
}