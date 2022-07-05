import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const StudentNav = () => {
    const navigate = useNavigate()

    return (
<nav>
      <div className="navicon">
          <div></div>
      </div>
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/poses">All poses</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="">Home</Link>
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
        </nav>
    )
}