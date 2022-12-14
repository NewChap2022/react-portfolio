import React, { useState } from "react";
import codeQuiz from "../assets/images/code-quiz.png";
// import weatherDashboard from "../assets/images/weather-dashboard.png";
import allAboutPokeon from "../assets/images/all-about-pokemon.png";
import employeeManagementApp from "../assets/images/employee-management-app.png";
import techBlog from "../assets/images/tech-blog.png";
import tickTock from "../assets/images/tick-tock.png";
import whatscookin from "../assets/images/whats-cookin.png";

const Portfolio = () => {
    const [portfolio] = useState([
        {
            name: "What's Cookin",
            description: "A food blog site using MERN",
            technologies: ["MongoDB", "Express", "React", "Node"],
            deployment: true,
            deployLink: "https://floating-river-67151.herokuapp.com/",
            githubLink: "https://github.com/ryanraposo/whatscookin",
            screenshot: whatscookin
        },
        {
            name: "Code Quiz",
            description: "A quiz with timer and saving-score function.",
            technologies: ["Javascript", "CSS"],
            deployment: true,
            deployLink: "https://newchap2022.github.io/code-quiz/index.html",
            githubLink: "https://github.com/NewChap2022/code-quiz",
            screenshot: codeQuiz
        },
        {
            name: "All About Pokenmon",
            description: "A website has pokemon animation, games and pokemon information",
            technologies: ["Javascript", "CSS", "Bootstrap"],
            deployment: true,
            deployLink: "https://newchap2022.github.io/PokeAPI/",
            githubLink: "https://github.com/NewChap2022/PokeAPI/",
            screenshot: allAboutPokeon
        },
        {
            name: "Employee Management App",
            description: "A command-line application to manage a company's employee database",
            technologies: ["Node", "Inquirer", "MySQL"],
            deployment: false,
            githubLink: "https://github.com/NewChap2022/employee-manager-app",
            screenshot: employeeManagementApp
        },
        {
            name: "Tech Blog",
            description: "a CMS-style blog site",
            technologies: ["Sequelize", "Bcrypt", "Dotenv", "Handlebar", "MySQL"],
            deployment: true,
            deployLink: "https://shrouded-castle-47195.herokuapp.com/",
            githubLink: "https://github.com/NewChap2022/tech-blog",
            screenshot: techBlog
        },
        {
            name: "Tick Tock",
            description: "An application assists users to clock-in/out as a timesheet registy and allows managers to keep track of working schedules",
            technologies: ["Sequelize", "Bcrypt", "Dotenv", "Handlebar", "MySQL", "Day.js"],
            deployment: true,
            deployLink: "https://pay-day-schedule.herokuapp.com",
            githubLink: "https://github.com/tahir-arslan/pay-day",
            screenshot: tickTock
        }
    ]);

    const [hover, setHover] = useState({});
    const mouseOver = (event, index) => {
        setHover(c => {
            return {
                ...c,
                [index]: "flex"
            };
        })
    }

    const mouseOut = (event, index) => {
        setHover(c => {
            return {
                ...c,
                [index]: "none"
            };
        })
    }


    return (
        <div className="row portfolio-container">
            {portfolio.map((element, index) => (
                <div className="card mb-3 col-12 col-sm-6 col-md-4" key={element.name}>
                    <h3 className="card-header bg-info text-white">{element.name}</h3>
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">{element.description}</h6>
                    </div>
                    <div className="d-block user-select-none screenshot"
                        onMouseOver={(e) => {
                            mouseOver(e, index);
                        }}
                        onMouseOut={(e) => {
                            mouseOut(e, index);
                        }}
                        style={{
                            backgroundImage: `url(${element.screenshot})`,
                            width: "100%",
                            height: 200,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <ul style={{
                            textAlign: "center",
                            listStylePosition: "inside",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            width: "100%",
                            height: 200,
                            listStyle: "none",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            display: hover[index] || "none"
                        }}
                        >
                            {element.technologies.map((technology, index) => (
                                <li key={index} style={{ color: "white" }}>{technology}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="card-body text-center">
                        {element.deployment ? <a href={element.deployLink} rel="noreferrer" target={"_blank"} className="card-link">View App</a> : <></>}
                        <a href={element.githubLink} rel="noreferrer" target={"_blank"} className="card-link">View Code</a>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Portfolio