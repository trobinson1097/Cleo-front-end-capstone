import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const PoseForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [pose, update] = useState({
        sanskirt_name: "",
        
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the pose list
    */
    const navigate = useNavigate()
    const localCleoUser = localStorage.getItem("cleo_user")
    const cleoUserObject = JSON.parse(localCleoUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API


        const poseToSendToApi = {
            // userId: cleoUserObject.id,
            sanskritName: pose.sanskritName,
            english_name: pose.english_name
            
        }
        // TODO: Perform the fetch() to POST the object to the API
        return fetch (`http://localhost:8088/poses`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(poseToSendToApi)
        })
        .then(response => response.json()) 
        .then(() => {
            navigate("/poses")
        })
    }

    return (
        <form className="poseForm">
            <h2 className="poseForm__title">New Pose Card</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="sanskirt_name">Sanskirt Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=" Sanskrit Name "
                        //seting a value for the form field for initial state 
                        value={pose.sanskirtName}
                        onChange={
                            (evt) => {
                                const copy = { ...pose }
                                copy.sanskirtName = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit pose
            </button>
        </form>
    )
}