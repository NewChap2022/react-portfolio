import React from "react";
import resume from "../assets/files/resume.pdf"

const Resume = () => {
    return (
        <div>
            <h2>Download My <a href={resume} download>Resume</a></h2>
            <div className="list-group">
                <div>
                    <h5 class="mb-1">Front-end Proficiencies</h5>
                    <ul>
                    <li class="mb-1">HTML</li>
                    <li class="mb-1">CSS</li>
                    <li class="mb-1">Javascript</li>
                    <li class="mb-1">React</li>
                    <li class="mb-1">Bootstrap</li>
                    <li class="mb-1">Responsive Design</li>
                    </ul>
                </div>
                <div>
                    <h5 class="mb-1">Back-end Proficiencies</h5>
                    <ul>
                    <li class="mb-1">APIs</li>
                    <li class="mb-1">MySQL Sequelize</li>
                    <li class="mb-1">MongoDB</li>
                    <li class="mb-1">Node</li>
                    <li class="mb-1">Express</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume