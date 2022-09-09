import React from "react";

const Footer = () => {
    return (
        <footer className="text-center">
            <a className="logo-container" href="https://github.com/NewChap2022">
                <img className="footer-logo" src={require("../assets/images/github-logo.png")} alt="github logo"></img>
            </a>
            <a className="logo-container" href="https://www.linkedin.com/in/shu-yang-iris/">
                <img className="footer-logo" src={require("../assets/images/linkedin-logo.png")} alt="linkedin logo"></img>
            </a>
            <a className="logo-container" href="https://www.facebook.com/iris.yangshu/">
                <img className="footer-logo" src={require("../assets/images/facebook-logo.png")} alt="facebook logo"></img>
            </a>
        </footer>
    )
}

export default Footer