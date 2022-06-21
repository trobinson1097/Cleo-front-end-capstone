import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import "./PoseCards.css"
import { SavedPoseCards } from "./SavedPoseCards"

export const PoseList = ({ searchTermState }) => {
    const [poses, setPoses] = useState([])
    const [filteredPoses, setFiltered] = useState([])
    const [studentPoses, savePoseCard] = useState()



    const navigate = useNavigate()

    const fetchedPoses = () => {
        return fetch(`http://localhost:8088/poses?_expand=level`)
            .then(response => response.json())
            .then((poseArray) => {
                setPoses(poseArray)
            })

    }
    // get cleo user object out of local storage 
    //creat a string then convert to json using parse 
    const localCleoUser = localStorage.getItem("cleo_user")
    const cleoUserObject = JSON.parse(localCleoUser)

    const deletePoseCard = (pose) => {
        if (pose.userId === cleoUserObject.id) {
            return <button onClick={() => deleteButtonFunction(pose)} className="pose__delete">DELETE</button>
        }
    }


    const deleteButtonFunction = (pose) => {
        return fetch(`http://localhost:8088/poses/${pose.id}`, {
            method: "DELETE"
        }).then(fetchedPoses)
    }

    // const savePoseCard = (pose) => {
    //     if (pose.userId === cleoUserObject.id) {
    //         return <button onClick={() => deleteButtonFunction(pose)} className="pose__delete">DELETE</button>
    //     }
    // }

    
    const handleSaveButtonClick = (event, poseId) => {
        event.preventDefault()

        //object to save to api
        const savePoseToApi = {
            userId: cleoUserObject.id,
            poseId: poseId


        }
        // TODO: Perform the fetch() to POST the object to the API
        fetch(`http://localhost:8088/savedPoseCards/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(savePoseToApi)
        })
            .then(response => response.json())
    }



    useEffect(
        () => {
            const searchedPoses = poses.filter(pose => {
                return pose.english_name?.toLowerCase().includes(searchTermState?.toLowerCase())
            })
            setFiltered(searchedPoses)
        },
        [searchTermState]
    )





    useEffect(
        () => {
            fetchedPoses() //console.log("Initial state of poses", poses) // View the initial state of poses
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            setFiltered(poses)
        },
        [poses]
    )

    return <>


        <>
            <button onClick={() => navigate("/poses/create")} className="button">Create A New Pose Card</button>
        </>

        <h2>List of Tickets</h2>

        <article className="poses">
            {
                filteredPoses.map(
                    (pose) => {
                        return <section className="pose">
                            <h1 className="english_pose">{pose.english_name}</h1>
                            {/* <div>
                            <button onClick={handleSavePose()}>Save to Dashboard</button>
                            {studentPoses && <div>Content</div>}
                        </div> */}
                            <header>{pose.sanskritName}</header>
                            <img src={pose.img_url} className="image" />
                            <footer>Pose Level: {pose.level?.name}</footer>
                            {deletePoseCard(pose)}
                            <button
                                onClick={(clickEvent) => handleSaveButtonClick(clickEvent, pose.id)}
                                className="btn btn-primary">
                                Save To Dashboard
                            </button>
                        </section>
                    }
                )
            }
        </article>
    </>
}
