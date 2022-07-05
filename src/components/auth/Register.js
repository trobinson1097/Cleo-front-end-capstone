import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [student, setStudent] = useState({
        email: "",
        fullName: "",
        isTeacher: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("cleo_user", JSON.stringify({
                        id: createdUser.id,
                        teacher: createdUser.isTeacher
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${student.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateStudent = (evt) => {
        const copy = {...student}
        copy[evt.target.id] = evt.target.value
        setStudent(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Regester for Cleo</h1>
                <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateStudent}
                            type="text" id="fullName" className="form-control"
                            placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateStudent}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <input onChange={(evt) => {
                        const copy = {...student}
                        copy.isTeacher = evt.target.checked
                        setStudent(copy)
                    }}
                        type="checkbox" id="isTeacher" />
                    <label htmlFor="email"> I am a Teacher </label>
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
            <section className="link--register">
                <Link to="/login">Have an account?</Link>
            </section>
        </main>
    )
}

