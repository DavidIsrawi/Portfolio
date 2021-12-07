import { Card } from "./Card"
import { personalData } from "./utils/PersonalData"

export const PersonalInfo = () => {
    return (
    <div>
        {
            personalData.map(item => {
                return <Card img={item.img} description={item.description} links={item.links}/>
            })
        }
    </div>
    )
}