import { Outlet, Route, Routes } from "react-router-dom"
import { PoseForm } from "../poseCards/PoseForm"
import { PoseList } from "../poseCards/PoseList"
import { StudentProfile } from "../profile/StudentProfile"
import { PoseContainer } from "../poseCards/PoseContainer"
export const StudentViews = ({searchTermState}) => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <div>
                        <h1>CLEO</h1>
                        <h2>Yoga for Everyone</h2>
                    </div>
                    <article>

                    </article>
                    <Outlet />
                </>
            }>

                <Route path="poses" element={ <PoseList />} />
                <Route path="poses/list" element={<PoseContainer />} />
                <Route path="home" element={ <StudentProfile />} />
                
                
				{/* <Route path="pose/create" element={ <PoseForm /> } /> */}
                
            </Route>
        </Routes>
    )
}