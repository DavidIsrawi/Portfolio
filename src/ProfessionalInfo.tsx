import { Card } from "./Card"
import { professionalData } from './utils/ProfessionalData.js'

export const ProfessionalInfo = () => {

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

