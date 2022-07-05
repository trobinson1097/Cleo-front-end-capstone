export const TeacherProfile = () => {
    const localCleoUser = localStorage.getItem("cleo_user")
    const cloeUserObject = JSON.parse(localCleoUser)


    
        return <> 
        <h1>This is The Teacher Dashboard</h1>
        <section>
            <p>Here are a list of links. <br /> you can use these to acess new iformation about yoga poses.</p>
            <li><a href="https://www.yogajournal.com/pose-finder/pose-finder/"> metric</a> </li>


            <p>Cleo believes everyone should have safe and reliable resources. The LGBTQ community and women in our country lack public resources and we are here to share any that we can find and deam just! </p>

            <li><a href="https://www.yogajournal.com/pose-finder/pose-finder/"> metric</a> </li>
            <li><a href="https://www.yogajournal.com/pose-finder/pose-finder/"> metric</a> </li>



        </section>
        
        </>

}
