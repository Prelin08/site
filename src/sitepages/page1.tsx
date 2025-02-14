import Header from "../components/Header"
import Summary from "../components/Summary"
import createCard from "../components/createCard"
import Currencies from "../components/Currencies"
import Footer from "../components/Footer"





function Page1() {
    return(
        <div>
            <Header text = {"My Currency Statistics"}/>
            <Summary text = {"This page contains cards of individual currency information."}/>
            <div className = {"card-container"}>
                <div>
                    {Currencies.map(createCard)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Page1;