import { Card, cardDescriptionData, cardImgData, cardLinkData } from "./Card"
import { professionalData } from './utils/ProfessionalData.js'

export const ProfessionalInfo = () => {

    const img: cardImgData = {
        path: "./HomeDepot.png",
        title: "Home Depot"
    }

    const repoLink: cardLinkData = {
        title: 'Repo',
        url: 'www.google.com'
    }

    const websiteLink: cardLinkData = {
        title: 'Website',
        url: 'www.google.com'
    }

    const linksArray: cardLinkData[] = [
        repoLink,
        websiteLink
    ]

    const description: cardDescriptionData = {
        description: "Lorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsumLorep ipsum",
        title: "Store Manager @ Home Depot"
    }

    return (
    <div>
        {
            professionalData.map(item => {
                return <Card img={item.img} description={item.description} links={item.links}/>
            })
        }
        
    </div>
    )
}

