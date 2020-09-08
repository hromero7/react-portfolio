import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import code from "../../assets/code.jpeg";
import employeeApp from "./assets/employee-directory.png";
import weatherApp from "./assets/weather-app.png";
import googleBooks from "./assets/google-books.png";
import fitness from "./assets/fitness.png";
import noteTaker from "./assets/note-taker.png";

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
                <img src={employeeApp} className="card-img-top" alt="directory" style={{height:"256px"}}/>
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
                <img src={weatherApp} className="card-img-top" alt="weather" style={{height:"256px"}}/>
            <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">
                This app allows the user to search for current weather information from any city, 
                as well as obtain a five day forecast. 
                This information is pulled from the Open Weather Map API and generated onto the page. 
                Tools / languages used: JavaScript, HTML, CSS
                </p>
                <a href="https://github.com/hromero7/weather-dashboard2.0" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                <a href="https://hromero7.github.io/weather-dashboard2.0" target="_blank" rel="noopener noreferrer" className="deploy-link"><i className="fas fa-link"></i></a>
            </div>
            </div>
            <div className="card">
                <img src={googleBooks} className="card-img-top" alt="google-book" style={{height:"256px"}}/>
            <div className="card-body">
                <h5 className="card-title">Google Books</h5>
                <p className="card-text">
                Need to add some new books to your reading list? Use this app to find new 
                books and save them to your list for future reference.
                Tools / languages used: React, JavaScript, JSX, Mongoose, MongoDB, HTML, CSS
                </p>
                <a href="https://github.com/hromero7/google-books" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                <a href="https://polar-island-65107.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="deploy-link"><i className="fas fa-link"></i></a>
            </div>
            </div>
            <div className="card">
                <img src={fitness} className="card-img-top" alt="fitness" style={{height:"256px"}}/>
            <div className="card-body">
                <h5 className="card-title">Fitness Tracker</h5>
                <p className="card-text">
                Keep track of your fitness journey with this app. Once a workout has been added, 
                checkout the workout dashboard for even more insights into your workouts. 
                Tools / languages used: JavaScript, Mongoose, MongoDB, HTML, CSS
                </p>
                <a href=" https://github.com/hromero7/fitness-tracker" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                <a href="https://powerful-sierra-20159.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="deploy-link"><i className="fas fa-link"></i></a>
            </div>
            </div>
            {/* <div className="card">
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
                <a href="#" className="deploy-link"><i className="fas fa-link"></i></a> 
            </div>
            </div> */}
            
            <div className="card">
                <img src={noteTaker} className="card-img-top" alt="notepad" style={{height:"256px"}}/>
            <div className="card-body">
                <h5 className="card-title">Note Taker</h5>
                <p className="card-text">
                Forgot your notebook? Use this handy app to take any notes and save them for later.
                Tools / languages used: Express.js, Node.js, jQuery, JavaScript, HTML, CSS
                </p>
                <a href="https://github.com/hromero7/note-taker" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                <a href="https://sheltered-shelf-03581.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="deploy-link"><i className="fas fa-link"></i></a>
            </div>
            </div>
            <div className="card">
                <img src={code} className="card-img-top" alt="code"/>
            <div className="card-body">
                <h5 className="card-title">Employee Database App</h5>
                <p className="card-text">
                This back end application allows the user to search for current employees by name, department, and roles. 
                As well as add any new employees, departments, or roles. 
                Keeping track of employee's information has never been easier! 
                Tools / languages used: Node.js, MySQL, JavaScript
                </p>
                <a href="https://github.com/hromero7/employee-tracker" target="_blank" rel="noopener noreferrer" className="github-link"><i className="fab fa-github-square"></i></a>
                {/* <a href="#" className="deploy-link"><i className="fas fa-link"></i></a> */}
            </div>
            </div>
        </div>
    </div>
     
    )
}

export default Portfolio;