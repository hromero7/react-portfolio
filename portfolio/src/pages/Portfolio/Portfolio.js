import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Footer from "../../components/Footer";
import code from "../../assets/code.jpeg";
import keyboard from "../../assets/keyboard.jpeg";
import apps from "../../assets/apps.jpg";
import trends from "../../assets/trends.jpeg";
import desktop from "../../assets/desktop.jpeg";


const Portfolio = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
    <div className="portfolio-container">
        <div data-aos="fade-down" className="section-heading portfolio-heading">
            <h1>My Projects</h1>
        </div>
        <div data-aos="fade-down" className="card-container">
            <div className="card">
                <img src={code} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Employee Directory</h5>
                <p className="card-text">
                    This app allows users to search for employees and obtain contact information. 
                    Once the user begins to search for an employee, the app begins to narrow the results. 
                    Each employee is generated through the use of an API call. 
                    Tools/ languages used: React, JavaScript, JSX, Bootstrap, HTML, CSS
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <a href="https://github.com/hromero7/employee-directory/tree/master/directory" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                <a href="https://quiet-harbor-96238.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="deploy-link"><i className="fas fa-link"></i></a>
            </div>
            </div>
            <div className="card">
                <img src={desktop} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">
                This app allows the user to search for current weather information from any city, 
                as well as obtain a five day forecast. 
                This information is pulled from the Open Weather Map API and generated onto the page. 
                Tools / languages used: JavaScript, HTML, CSS
                </p>
                <a href="https://github.com/hromero7/weather-dashboard" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                <a href="https://hromero7.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="deploy-link"><i className="fas fa-link"></i></a>
            </div>
            </div>
            <div className="card">
                <img src={apps} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Fantasy Video Games</h5>
                <p className="card-text">
                Fantasy Video Games aims to provide a new and interactive approach to watch streams of competitive e-sport matches. 
                Users can create a profile and place bets on competitive e-sport matches with other users as the stream progresses. 
                Users can also use their winnings to purchase emotes and badges from the shop to customize their profile. 
                Tools / languages used: React, JavaScript, JSX, Mongoose, MongoDB, HTML, CSS
                </p>
                <a href="https://github.com/hromero7/project-3/tree/master/fantasy-video-games" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                {/* <a href="#" className="deploy-link"><i className="fas fa-link"></i></a> */}
            </div>
            </div>
            <div className="card">
                <img src={desktop} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Google Books</h5>
                <p className="card-text">
                This app allows the user to search for any book through the Google Books API.
                Users can also save these books to their list for future reference.
                Tools / languages used: React, JSX, JavaScript, HTML, CSS
                </p>
                <a href="https://github.com/hromero7/google-books" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                <a href="#" className="deploy-link"><i className="fas fa-link"></i></a>
            </div>
            </div>
            <div className="card">
                <img src={trends} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Code Quiz</h5>
                <p className="card-text">
                Test your programming knowledge with this fun quiz app! Incorrect responses will subtract time from the counter and affect your score.
                Tools / languages used: jQuery, JavaScript, HTML, CSS
                </p>
                <a href="https://github.com/hromero7/codequiz" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                <a href="https://hromero7.github.io/codequiz/" target="_blank" rel="noopener noreferrer" className="deploy-link"><i className="fas fa-link"></i></a>
            </div>
            </div>
            <div className="card">
                <img src={keyboard} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Employee Database App</h5>
                <p className="card-text">
                This back end application allows the user to search for current employees by name, department, and roles. 
                As well as add any new employees, departments, or roles. 
                Keeping track of employee's information has never been easier! 
                Tools / languages used: Node.js, MySQL, JavaScript
                </p>
                <a href="#" className="github-link"><i className="fab fa-github-square"></i></a>
                <a href="#" className="deploy-link"><i className="fas fa-link"></i></a>
            </div>
            </div>
        </div>
    </div>
    // <div className="col-md-12">
    //     <div id="main-portfolio">
    //         <h2>Portfolio</h2>
    //         <hr></hr>
    //         <div className="grid-container">
        
    //             <div className="grid-item">
    //         <img className="images" src={code} alt="code"/>
    //             <a href="https://hromero7.github.io/codequiz/" target="_blank" rel="noopener noreferrer"><p className="caption">Code Quiz Game</p></a>
    //             </div>
        
    //             <div className="grid-item">
    //         <img className="images" src={keyboard} alt="keyboard" />
    //            <a href="https://github.com/TwistedNeon/Group-Project-1" target="_blank" rel="noopener noreferrer"><p className="caption">Trends Project</p></a>
    //             </div>
        
    //             <div className="grid-item">
    //                     </div>
        
    //             <div className="grid-item">
    //         <img className="images" src={apps} alt="phone"/>
    //             <a href="https://hromero7.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer"><p className="caption">Weather Dashboard App</p></a>
    //             </div>
                
    //             <div className="grid-item">
    //         <img className="images" src={trends} alt="graph" />
    //             <a href="https://hromero7.github.io/scheduler/" target="_blank" rel="noopener noreferrer"><p className="caption">Daily Work Planner</p></a>
    //             </div>
        
    //             <div className="grid-item">
    //             </div>
        
    //             <div className="grid-item">
    //         <img className="images" src={desktop} alt="desktop" />
    //              <a href="https://hromero7.github.io/passwordgenerator/" target="_blank" rel="noopener noreferrer"><p className="caption">Password Generator</p></a>
    //             </div>
        
            
    //         </div>
    //     </div>
    //   </div>
     
    )
}

export default Portfolio;