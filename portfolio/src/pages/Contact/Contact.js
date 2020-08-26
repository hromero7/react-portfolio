import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div className="contact-container">
        <div data-aos="fade-down" className="section-heading portfolio-heading">
            <h1>Contact Me</h1>
        </div>

        <div data-aos="fade-up" className="content-container">
        <div className="contact-info">
        <div className="card-info">
        <i className="fas fa-phone card-icon"></i>
        <p>(951)329-7052</p>
        </div>
        </div>
        
        <div className="contact-info">
        <div className="card-info">
        <i className="far fa-envelope card-icon"></i>
        <p>horacio_r49@yahoo.com</p>
        </div>
        </div>

        <div className="contact-info">
        <div className="card-info">
        <i className="fas fa-map-marker card-icon"></i>
        <p>Moreno Valley, CA</p>
        </div>
        </div>

        </div>

        </div>

        // <div class="col-md-12">
        //     <div id="main-contact">
        //         <h2>Contact</h2>
        //         <hr></hr>
            
        //         <form id="contact-form">
        //             <p class="form">Name</p>
        //             <input name="name" type="text" class="form-control" placeholder=" John Smith" required></input>
        //             <br></br>
        //             <p class="form">Email</p>
        //             <input name="email" type="email" class="form-control" placeholder=" example@gmail.com" required></input>
        //             <br></br>
        //             <p class="form">Message</p>
        //             <textarea name="message" type="text" class="message-box" required rows="4"/>
        //             <br></br>
        //             <button id="button">Submit</button>
            
            
        //         </form>
            
        //     </div>
        // </div>
            
    )
}


export default Contact;