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
        <div className="bg-green-800 dark:bg-green-50 dark:text-green-800 text-gray-100 shadow-md max-w-screen-lg h-1/3 rounded-md flex flex-row justify-between mx-10 my-10 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-103" onClick={() => openLink()}>
            <img src={props.img.path} alt={props.img.title} className="w-1/6"/>
            <div className="w-5/6 text-center self-center">
                <strong>{props.description.title}</strong>
                <p>
                    {props.description.description}
                </p>
            </div>
            
        </div>
    )
}