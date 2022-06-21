import { Outlet, Route, Routes } from "react-router-dom"
import { PoseContainer } from "../poseCards/PoseContainer"
import { PoseList } from "../poseCards/PoseList"
import { PoseForm } from "../poseCards/PoseForm"
import { TeacherProfile } from "../profile/TeacherProfile"

// import { EmployeeList } from "../employees/EmployeeList"
// import { CustomerList } from "../customers/CustomerList"

export const TeacherViews = () => {


    return (
        <Routes>
            <Route path="/" element={
                <>
                    <div>
                        <h1>Cleo</h1>
                        <h2>Yoga for Everyone</h2>
                    </div>
                    <div>Welcome to your profile <br /> Here is where you will find your Pose Cards</div>

                    <Outlet />
                </>
            }>
                <Route path="home" element={<TeacherProfile />} />
                <Route path="poses/list" element={<PoseContainer />} />
                <Route path="poses/create" element={ <PoseForm /> } />

            </Route>
        </Routes>
    )
}
