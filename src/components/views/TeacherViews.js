import { Outlet, Route, Routes } from "react-router-dom"
import { PoseContainer } from "../poseCards/PoseContainer"
import { PoseForm } from "../poseCards/PoseForm"
import { Resources } from "../profile/Resources"
import { Home } from "./Home"




// import { EmployeeList } from "../employees/EmployeeList"
// import { CustomerList } from "../customers/CustomerList"

export const TeacherViews = () => {


    return (
        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/dashboard" element={<Resources />} />
                <Route path="poses" element={<PoseContainer />} />
                <Route path="poses/create" element={ <PoseForm /> } />

            
        </Routes>
    )
}
