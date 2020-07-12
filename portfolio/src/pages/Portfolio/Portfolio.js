import React from "react";
import "./style.css";
import Footer from "../../components/Footer";
import code from "../../assets/code.jpeg";
import keyboard from "../../assets/keyboard.jpeg";
import apps from "../../assets/apps.jpg";
import trends from "../../assets/trends.jpeg";
import desktop from "../../assets/desktop.jpeg";

const Portfolio = () => {
    return (
    <div className="col-md-12">
        <div id="main-portfolio">
            <h2>Portfolio</h2>
            <hr></hr>
            <div className="grid-container">
        
                <div className="grid-item">
            <img className="images" src={code} alt="code"/>
                <a href="https://hromero7.github.io/codequiz/" target="_blank" rel="noopener noreferrer"><p className="caption">Code Quiz Game</p></a>
                </div>
        
                <div className="grid-item">
            <img className="images" src={keyboard} alt="keyboard" />
               <a href="https://github.com/TwistedNeon/Group-Project-1" target="_blank" rel="noopener noreferrer"><p className="caption">Trends Project</p></a>
                </div>
        
                <div className="grid-item">
                        </div>
        
                <div className="grid-item">
            <img className="images" src={apps} alt="phone"/>
                <a href="https://hromero7.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer"><p className="caption">Weather Dashboard App</p></a>
                </div>
                
                <div className="grid-item">
            <img className="images" src={trends} alt="graph" />
                <a href="https://hromero7.github.io/scheduler/" target="_blank" rel="noopener noreferrer"><p className="caption">Daily Work Planner</p></a>
                </div>
        
                <div className="grid-item">
                </div>
        
                <div className="grid-item">
            <img className="images" src={desktop} alt="desktop" />
                 <a href="https://hromero7.github.io/passwordgenerator/" target="_blank" rel="noopener noreferrer"><p className="caption">Password Generator</p></a>
                </div>
        
            
            </div>
        </div>
        <Footer/>
      </div>
     
    )
}

export default Portfolio;