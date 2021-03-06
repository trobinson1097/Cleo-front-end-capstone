import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const StudentNav = () => {
    const navigate = useNavigate()

    return (
        <div id="mySidebar" className="sidebar">
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/poses">All Poses</Link>
            </li>
            
            <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Dashboard</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            {
                localStorage.getItem("cleo_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("cleo_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
        </div>
    )
}