import { useEffect, useState } from "react"

export const StudentProfile = ({searchTermState}) => {
        const localCleoUser = localStorage.getItem("cleo_user")
        const cleoUserObject = JSON.parse(localCleoUser)
        const [poses, setPoses] = useState ([])
        const [studentPose, savedStudentPose] = useState ([])
        

        
        

        const deletePoseCard = (pose,) => {
            if (pose.userId === cleoUserObject.id) {
                return <button onClick={() => deleteButtonFunction(pose)} className="pose__delete">remove from profile</button>
            }
        }
        const deleteButtonFunction = (pose) => {
            return fetch(`http://localhost:8088/savedPoseCards/${pose.id}`, {
                method: "DELETE"
            }).then(()=>{
                fetch(`http://localhost:8088/savedPoseCards?_expand=pose`)
                .then(response => response.json())
                .then((poseArray) => {
                    setPoses(poseArray)
                })
            })
        }
        

        useEffect(
        () => {
            fetch(`http://localhost:8088/savedPoseCards?_expand=pose`)
                .then(response => response.json())
                .then((poseArray) => {
                    setPoses(poseArray)
                })
        
            },
            []
        )
        

            
        useEffect(
            () => {
                
                    const myStudent = poses.filter(pose => pose.userId === cleoUserObject.id)
                    // setting the state variable filteredTickets the new array just created, by using setFiltered function
                    savedStudentPose(myStudent)
                
            },
            // observing array being watched for changes
            [poses]
        )

        useEffect(
            () => {
                const searchedPoses = poses.filter(pose => {
                    return pose.english_name?.toLowerCase().includes(searchTermState?.toLowerCase()) ||
                    pose.description?.toLowerCase().includes(searchTermState?.toLowerCase())
                })
                setPoses(searchedPoses)
            },
            [searchTermState]
        )
        return <>
        
        <article className="poses">
            {
                studentPose.map(
                    (pose) => {
                        return <section className="pose">
                            <h1 className="english_pose">{pose?.pose?.english_name}</h1>
                            <header>{pose.pose?.sanskritName}</header>
                            {/* <p>{pose.description}</p> */}
                            <img src={pose.pose?.img_url} className="image" />
                            <p>{pose.pose?.description}</p>
                            {deletePoseCard(pose)}
                        </section>
                    }
                )
            }
        </article>
        
        </>
    }

