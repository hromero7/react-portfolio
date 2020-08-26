import React from "react";
import profilePic from "../../assets/profile-pic.png";
import "./Home.css";

const Home = () => {
    return (
        <div className="container">
            <img className="profile-pic" src={profilePic} alt="portrait"/>
            <h1 className="name-tag">Horacio Romero</h1>
            <h1 className="name-subtitle">Full Stack Developer</h1>
            <div className="social-icons">
            <a href="https://www.linkedin.com/in/horacio-romero-b155ba198/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/hromero7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            </div>
        </div>
    )
}

export default Home;