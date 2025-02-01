import { Key } from "react"
import Card from "../components/Card"

function createCard(Currency: { id: Key ; name: string; image: string; description: string; rarity: string }){
    return (
        <Card 
                key={Currency.id}
                name={Currency.name}
                image={Currency.image}
                description={Currency.description}
                rarity={Currency.rarity}
            />
    )
}


export default createCard;