export interface CardProps {
    img: cardImgData,
    description: cardDescriptionData,
    link?: string
}

export interface cardImgData {
    path: string,
    title: string,
}

export interface cardDescriptionData {
    title: string,
    description: string
}

export const Card = (props: CardProps) => {
    const openLink = () => {
        if (props.link) {
            window.open(props.link)
        }
    }

    return (
        <div className="max-w-screen-lg h-1/3 rounded-md flex flex-col md:flex-row justify-between mx-10 my-10 p-10 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-103" onClick={() => openLink()}>
            <img src={props.img.path} alt={props.img.title} className="w-1/6 self-center pb-4 md:pb-0"/>
            <div className="w-5/6 text-center self-center md:pl-10 space-y-5">
                <strong>{props.description.title}</strong>
                <p className="text-left">
                    {props.description.description}
                </p>
            </div>
            
        </div>
    )
}