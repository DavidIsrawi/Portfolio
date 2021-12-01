import { Card, cardDescriptionData, cardImgData } from "./Card"

export const ProfessionalInfo = () => {

    const img: cardImgData = {
        path: "./HomeDepot.png",
        title: "Home Depot"
    }

    const description: cardDescriptionData = {
        description: "Lorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsum",
        title: "Store Manager @ Home Depot"
    }

    return (
    <div>
        <Card img={img} description={description}/>
        <Card img={img} description={description} link="https://www.homedepot.com/"/>
    </div>
    )
}

