import { Card } from "./Card"
import { personalData } from "./utils/PersonalData"

export const PersonalInfo = () => {
    return (
    <section>
        {
            personalData.map(item => {
                return <Card _id={item._id} img={item.img} description={item.description} links={item.links}/>
            })
        }
    </section>
    )
}