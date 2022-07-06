import "./home.css"
export const Home = () => {
    return <>
    <div className="home">
            <div>
                <h1>CLEO</h1>
                <h2>Yoga for Everyone</h2>
            </div>
        <div className="poseImage">
                <img src="https://www.dropbox.com/s/1oc1dqv8mfwo8uj/highlunge.svg?raw=1" className="home_image" />
        </div>
        <div className="app_title">
            <section className="welcome">
                <p className="cleo_welcome">
                Welcome to Cleo! An app created for anyone and everyone. <br />
                We encourage everyone to warm up and be aware of their abilitys to perfrom poses at any level. <br /> 
                Yoga is about listening to your body and we are happy you are here doing so but we want to make sure you dont hurt youself while attempting a new pose and can continue having fun while doing so. <br />
                
                “Yoga is the journey of the self, through the self, to the self.” ― The Bhagavad Gita 
                </p>
                <p>
                Stay bendy folks - Cleo
                </p>
            </section>
            
        </div>
    </div>
    </>
}       