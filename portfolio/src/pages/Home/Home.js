import React from "react";
import profilePic from "../../assets/profile-pic.png";
import "./Home.css";

const Home = () => {
    return (
        <div className="container">
            <img className="profile-pic" src={profilePic} alt="portrait"/>
            <h1>Hello, I am <span className="name-tag">Horacio Romero</span></h1>
            <h1>Full Stack Developer</h1>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-github-square"></i></a>
        </div>
    )
}

export default Home;