import { TeacherViews } from "./TeacherViews"
import { StudentViews } from "./StudentViews"

export const ApplicationViews = () => {

        const localCleoUser = localStorage.getItem("cleo_user")
        const cleoUserObject = JSON.parse(localCleoUser)
    

        if (cleoUserObject.teacher){
            // return emplyeeViews
            return <TeacherViews />
        }
        else{
            // return customerView 
            return <StudentViews />
        }




}
