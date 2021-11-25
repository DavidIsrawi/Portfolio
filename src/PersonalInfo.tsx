import { Card, cardDescriptionData, cardImgData } from "./Card"

export const PersonalInfo = () => {

    const imgTwitch: cardImgData = {
        title: "Dahveed Logo",
        path: "./DahveedProfile.jpg"
    }

    const descriptionTwitch: cardDescriptionData = {
        title: "Catch me on Twitch!",
        description: "I stream games, mainly Super Smash Bros Ultimate, and some times I also do software development streams when trying to learn a new language/framework."
    }

    const imgSmash: cardImgData = {
        title: "Dahveed Logo",
        path: "./DahveedProfile.jpg"
    }

    const descriptionSmash: cardDescriptionData = {
        title: "Working to be a Smash Pro player",
        description: "Since 2020, I have been working on becoming better at Super Smash by playing with more competitive players through meetups and tourneys."
    }

    return (
    <div>
        <Card img={imgTwitch} description={descriptionTwitch}/>
        <Card img={imgSmash} description={descriptionSmash}/>
    </div>
    )
}