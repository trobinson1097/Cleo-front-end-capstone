export const TeacherProfile = () => {
    const localCleoUser = localStorage.getItem("cleo_user")
    const cloeUserObject = JSON.parse(localCleoUser)


    
        return <> 
        <h1>This is The Teacher Dashboard</h1>
        <section>
            <h4>Here are a list of liks. <br /> you can use these to acess new iformation about yoga poses.</h4>
            <p>Refrences:</p>
            <li><a href="https://www.yogajournal.com/pose-finder/pose-finder/"> metric</a> </li>


        </section>
        
        </>

}
