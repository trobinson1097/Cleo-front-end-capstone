export const StudentProfile = () => {
        const localCleoUser = localStorage.getItem("cleo_user")
        const cloeUserObject = JSON.parse(localCleoUser)
    



        if (cloeUserObject.student){
            // return emplyeeNav
            return <> </>
        }
        else{
            // return customerNav
            return <> </>
        }
    }

