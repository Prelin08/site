import Header from "../components/Header"
import Summary from "../components/Summary"
import createCard from "../components/createCard"
import Currencies from "../components/Currencies"





function Page1() {
    return(
        <div>
            <Header text = {"My Currency Statistics"}/>
            <Summary />
            <div className = {"card-container"}>
                <div>
                    {Currencies.map(createCard)}
                </div>
            </div>
        </div>
    )
}

export default Page1;