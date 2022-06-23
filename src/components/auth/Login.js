import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("trobinson1097@gmail.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("cleo_user", JSON.stringify({
                        id: user.id,
                        teacher: user.isTeacher
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        
        <main className="container--login">
            <section className="loginSection">
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>CLEO YOGA</h1>
                    <h2>Welcome, please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail" > Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit" className="login-button">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register ">
                <Link to="/register">Join Cleo</Link>
            </section>
        </main>
    )
}

