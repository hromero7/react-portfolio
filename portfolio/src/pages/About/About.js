import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import profilePic from "../../assets/profile-pic.png";

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div className="experience">
            <div data-aos="fade" className="section-heading about-heading">
                    <h1>About Me</h1>
                    {/* <h6>Past and Current Jobs</h6> */}
                </div>
            <div className="container about">
                
                <div data-aos="fade-right" className="profile-img">
                    <img className="profile-image" src={profilePic} alt="portrait"></img>
                </div>
                <div data-aos="fade-left" className="about-details">
                    <p>
                        Full Stack Developer with a Bachelor’s in Business Administration/ Marketing.
                        I have a strong passion for programming and learning new technologies. 
                        Recently, I received my Certificate of Completion from UCR's Coding Bootcamp.
                        I am a person that is willing to adapt and accept any challenge presented. 
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className="container skill-container">
                <div className="section-heading">
                    <h1>Skills</h1>
                    {/* <h6>What I can do for you</h6> */}
                </div>
                <div data-aos="fade-up" className="my-skills">
                    <div className="skill">
                        <div className="icon-container">
                            <i className="fab fa-react"></i>
                        </div>
                        <h1>React</h1>
                    </div>
                    <div className="skill">
                        <div className="icon-container">
                            <i className="fab fa-js-square"></i>
                        </div>
                        <h1>JavaScript</h1>
                    </div>
                    <div className="skill">
                        <div className="icon-container">
                            <i className="fab fa-node"></i>
                        </div>
                        <h1>Node.js</h1>
                    </div>
                    <div className="skill">
                        <div className="icon-container">
                            <i className="fas fa-code"></i>
                        </div>
                        <h1>jQuery</h1>
                    </div>
                    <div className="skill">
                        <div className="icon-container">
                            <i className="fab fa-html5"></i>
                        </div>
                        <h1>HTML5</h1>
                    </div>
                    <div className="skill">
                        <div className="icon-container">
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <h1>CSS3</h1>
                    </div>
                    <div className="skill">
                        <div className="icon-container">
                            <i className="fas fa-database"></i>
                        </div>
                        <h1>MongoDB</h1>
                    </div>
                    <div className="skill">
                        <div className="icon-container">
                            <i className="fas fa-database"></i>
                        </div>
                        <h1>MySQL</h1>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="container work-container">
                <div className="section-heading history-heading">
                    <h1>Work Experience <i className="fas fa-briefcase"></i></h1>
                    {/* <h6>Past and Current Jobs</h6> */}
                </div>
                <div className="timeline">
                    <ul>
                        <li className="date" value="2019 - Present">
                            <h1>International E-Z UP</h1>
                            <h2>Purchasing Specialist</h2>
                            <p>
                            Accepted and processed supply requests from staff, and placed orders per procedures. Maintained documentation for all purchases, effective and lasting vendor relationships through dynamic communication, collaboration and intelligent questioning skills. Input all data into the system using NAV and recorded order updates with 100% accuracy.
                            </p>
                        </li>
                        <li className="date" value="2017 - 2018">
                            <h1>Marketing Instincts</h1>
                            <h2>Account Coordinator</h2>
                            <p>
                            Created professional PowerPoint presentations for clients such as Blizzard Entertainment, iHeartMedia, Viacom, Microsoft, and many more. Offered product solutions over the phone or through email. Escalated issues to appropriate channels as necessary. Asked appropriate open-ended questions to discover customers' needs and requirements. Maintained extensive knowledge of competitors offerings and presence in assigned territories.
                            </p>
                        </li>
                        <li className="date" value="2017 - 2017">
                            <h1>Marketing Instincts</h1>
                            <h2>Order Entry Specialist</h2>
                            <p>
                            Used Profit Maker to keep track of client information and orders, update accounts and monitor shipments to obtain and relay real-time information. Communicated with clients to verify information, fill out appropriate paperwork and carry out specified requests. Informed supervisors and coworkers of inventory needs and double-checked supplies before completing customer orders.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div data-aos="fade-up" className="container">
                <div className="section-heading history-heading">
                    <h1>Education <i className="fas fa-graduation-cap"></i></h1>
                    {/* <h6>Past and Current Jobs</h6> */}
                </div>
                <div className="timeline">
                    <ul>
                        <li className="date" value="2020 - 2020">
                            <h1>University of California, Riverside</h1>
                            <h2>Bootcamp Certificate</h2>
                            <p>
                            A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js and ReactJS.
                            </p>
                        </li>
                        <li className="date" value="2013 - 2017">
                            <h1>University of California, Riverside</h1>
                            <h2>Bachelor of Science - Business Administration</h2>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;