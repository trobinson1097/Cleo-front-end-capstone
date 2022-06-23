import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./PoseCards.css"
export const PoseForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [levels, setLevel] = useState([])
    const [pose, update] = useState({
        sanskirtName: "",
        english_name: "",
        img_url: "",
        description: "",
        levelId: 0
    })

    useEffect(
        () => {
            //console.log("Initial state of Locations", tickets) // View the initial state of tickets
            fetch(`http://localhost:8088/levels`)
                .then(response => response.json())
                .then((levelsArray) => {
                    setLevel(levelsArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )
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
            userId: cleoUserObject.id,
            sanskritName: pose.sanskritName,
            english_name: pose.english_name,
            description: pose.description,
            levelId: pose.levelId,
            img_url: pose.img_url,
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
            navigate("/poses/list")})
    }

    return (
        <form className="poseForm">
            <h2 className="poseForm__title">New Pose Card</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="sanskirtName">Sanskirt Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=" Sanskrit Name "
                        //seting a value for the form field for initial state 
                        value={pose.sanskritName}
                        onChange={
                            (evt) => {
                                const copy = { ...pose }
                                copy.sanskritName = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="english_name">English Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=" English Name "
                        //seting a value for the form field for initial state 
                        value={pose.english_name}
                        onChange={
                            (evt) => {
                                const copy = { ...pose }
                                copy.english_name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=" Pose description "
                        //seting a value for the form field for initial state 
                        value={pose.description}
                        onChange={
                            (evt) => {
                                const copy = { ...pose }
                                copy.description = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="img_url">Image URL:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=" Input Img URL "
                        //seting a value for the form field for initial state 
                        value={pose.img_url}
                        onChange={
                            (evt) => {
                                const copy = { ...pose }
                                copy.img_url = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="pose__heading">Pose level:</div>
                {levels.map((level) => {
                    return (
                        <div className="pose__form" key={`levelType--${level.id}`}>
                            <input
                                required autoFocus
                                onChange={
                                    (changeEvent) => {
                                    const copy = { ...pose }
                                    copy.levelId = parseInt(changeEvent.target.value)
                                    update(copy);
                                }}
                                type="radio"
                                name="level"
                                value={level.id}
                            /> {" "}
                                {level.name}
                        </div>
                    )
                })}
            </fieldset>
            <button
                onClick={(clickEvent) => {
                    handleSaveButtonClick(clickEvent)
                    update(
                    {
                        sanskirtName: "",
                        english_name: "",
                        description: "",
                        img_url: "",
                        level: ""
                    }
                )}
                }
                className="btn btn-primary">
                Submit pose
            </button>
        </form>
    )
}