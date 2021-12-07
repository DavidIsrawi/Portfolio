import { Card } from "./Card"
import { professionalData } from "./utils/ProfessionalData"

export const ProfessionalInfo = () => {

    return (
    <section>
        {
            professionalData.map(item => {
                return <Card _id={item._id} img={item.img} description={item.description} links={item.links}/>
            })
        }
        
    </section>
    )
}

