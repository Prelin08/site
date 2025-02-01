import numberCounter from "./counter";

interface Currency{
    name: string;
    image: string;
    description: string;
    rarity: string

}

function Card(props: Currency) {
    
    return(
        <div className = {"card"}>
            <div>
                <h3>{props.name}</h3>
                <img src={props.image} alt="currency-image"/>
            </div>
            <div>
                <p>{props.description}</p>
                <p>Rarity : {props.rarity} </p>
                {numberCounter()}
            </div>
        </div>
    )
}

export default Card