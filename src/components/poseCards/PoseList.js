import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import "./PoseCards.css"

export const PoseList = ({ searchTermState }) => {
    const [poses, setPoses] = useState([])
    const [filteredPoses, setFiltered] = useState([])
    // const [emergency, setEmergency] = useState(false)
    // const [openOnly, updateOpenOnly] = useState(false)
    const navigate = useNavigate()

    const fetchedPoses = () => {
        return fetch(`http://localhost:8088/poses`)
            .then(response => response.json())
            .then((poseArray) => {
                setPoses(poseArray)
            })
    
    }
    // get cleo user object out of local storage 
    //creat a string then convert to json using parse 
    const localCleoUser = localStorage.getItem("cleo_user")
    const cleoUserObject = JSON.parse(localCleoUser)
    

    useEffect(
        () => {
            const searchedPoses = poses.filter (pose => { 
                return pose.sanskritName.toLowerCase().includes(searchTermState.toLowerCase())
            })
        setFiltered(searchedPoses)
        },
        [ searchTermState ]
    )


    

    useEffect(
        () => {
           fetchedPoses() //console.log("Initial state of poses", poses) // View the initial state of poses
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            // if (cleoUserObject.teacher) {
            //     setFiltered(poses)
            //     // for employee
            // }
            // else {                                      // condition 
            //     const myPoses = poses.filter(pose => pose.userId === cleoUserObject.id)
                setFiltered(poses)
                // for customers
            },
        [poses]
    )

    // useEffect(
    //     () => {
    //         if (openOnly) {
    //             const openTicketArray = poses.filter(pose => {
    //                 return pose.userId === cleoUserObject.id && pose.dateCompleted === ""
    //             })
    //             setFiltered(openTicketArray)
    //         }
    //         else {
    //             const myTickets = poses.filter(pose => pose.userId === cleoUserObject.id)
    //         setFiltered(myTickets)
    //     }
    // },
    //     [openOnly]
    // )

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
                        <header>{pose.sanskritName}</header>
                        <img src={pose.img_url} className="image" />
                        {/* <footer>Emergency: {pose.emergency ? "YEE" : "no"}</footer> */}
                    </section>
                }
            )
        }
    </article>
</>
}
