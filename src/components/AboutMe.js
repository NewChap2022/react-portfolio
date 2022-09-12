import React from "react";
import Github from "../assets/images/github.gif"

const AboutMe = () => {
    return (
        <div className="aboutme-container row d-flex flex-column justify-content-center align-items-center">
            <div className="aboutme col-12 align-self-center d-flex flex-column justify-content-between align-items-center">
                <img className="githubgif" src={Github} alt="GitHub logo" />
                <h2>About Me</h2>
            </div>
            <p className="aboutme-text col-12">
                I'm a full-stack web developer who is currently studying in bootcamp.
                I have no coding experience before bootcamp. However I am so proud of myself what I have achieved in the past 5 months.
                Please check out the projects I have done.
                My past education experience allows me to learn new things fast and work as a team player.
            </p>
        </div>
    )
}

export default AboutMe