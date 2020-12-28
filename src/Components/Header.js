import logo from "../Assets/logo.svg"
import HeaderNav from "./HeaderNav"
import { Link } from "react-router-dom";

import "./header.css"

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <Link to="/"><img src={logo} alt=""/></Link>
                <HeaderNav />
            </div>
        </div>
    )
}

export default Header