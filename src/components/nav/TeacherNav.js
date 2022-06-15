import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const TeacherNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/poses/list">All poses</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="home">Home</Link>
            </li>
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li> */}

            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li> */}

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
    )
}