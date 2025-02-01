import Header from "../components/Header"
import Summary from "../components/Summary"
import createCard from "../components/createCard"
import Currencies from "../components/Currencies"





function Page1() {
    return(
        <div>
            <Header />
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