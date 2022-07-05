import { Outlet, Route, Routes } from "react-router-dom"
import { StudentProfile } from "../profile/StudentProfile"
import { PoseContainer } from "../poseCards/PoseContainer"
import { Home } from "./Home"
export const StudentViews = ({searchTermState}) => {
	return (
        <Routes>
                <Route exact path="/" element={<Home />} /> 

                <Route path="poses" element={ <PoseContainer />} />
                
                <Route path="/dashboard" element={ <StudentProfile />} />
                
                
				{/* <Route path="pose/create" element={ <PoseForm /> } /> */}
                

        </Routes>
    )
}