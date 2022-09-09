import React from "react";

const AboutMe = () => {
    return (
        <div>
            <div className="aboutme-container row d-flex justify-content-around align-items-center">
                <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <img className="githubgif" src={require('../assets/images/github.gif')} alt="GitHub logo" />
                    <h2>About Me</h2>
                </div>
                <p className="aboutme col-sm-12 col-md-8">
                    I'm a full-stack web developer who is currently studying in bootcamp.
                    I have no coding experience before bootcamp. However I am so proud of myself what I have achieved in the past 5 months.
                    Please check out the projects I have done.
                    My past education experience allows me to learn new things fast and work as a team player.
                </p>
            </div>
        </div>
    )
}

export default AboutMe