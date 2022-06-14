import { Outlet, Route, Routes } from "react-router-dom"
import { PoseForm } from "../poseCards/PoseForm"
import { PoseList } from "../poseCards/PoseList"

export const StudentViews = () => {
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

                <Route path="poses" element={ <PoseList />} />
				<Route path="pose/create" element={ <PoseForm /> } />
            </Route>
        </Routes>
    )
}