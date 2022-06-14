import { useState } from "react"
import { PoseList } from "./PoseList"
import { PoseSearch } from "./PoseSearch"

export const PoseContainer = () => {
    const [searchTerms, setSearchTerms] =useState("")

    return <> 
    
    <PoseSearch setterFunction={setSearchTerms} />
    <PoseList searchTermState={searchTerms} />
    
    </>

}