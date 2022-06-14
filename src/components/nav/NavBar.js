import { StudentNav } from "./StudentNav"
import { TeacherNav } from "./TeacherNav"
import "./NavBar.css"

export const NavBar = () => {
        const localCleoUser = localStorage.getItem("cleo_user")
        const cloeUserObject = JSON.parse(localCleoUser)
    

        if (cloeUserObject.teacher){
            // return emplyeeNav
            return <TeacherNav />
        }
        else{
            // return customerNav
            return <StudentNav />
        }
}