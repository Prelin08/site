import {Link} from "react-router-dom"

export default function Navbar() {
    return(
        <div className={"navbar"}>
            <Link to="/"><button className = {"button"}>Home</button></Link>
            <Link to="/page1"><button className = {"button"}>Page 1</button></Link>
            <Link to="/page2"><button className = {"button"}>Page 2</button></Link>
        </div>
    )
}