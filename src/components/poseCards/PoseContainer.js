import { useState } from "react"
import { PoseForm } from "./PoseForm"
import { PoseList } from "./PoseList"
import { PoseSearch } from "./PoseSearch"

export const PoseContainer = () => {
    const [searchTerms, setSearchTerms] =useState("")
    const [poseForm, setPose] =useState("")
    return <> 

    <PoseForm setterFunction={setPose} />    
    <PoseSearch setterFunction={setSearchTerms} />
    <PoseList searchTermState={searchTerms} poseFormState={poseForm}/>
    
    </>

}