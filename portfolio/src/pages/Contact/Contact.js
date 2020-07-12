import React from "react";
import "./style.css";

const Contact = () => {
    return (
        <div class="col-md-12">
            <div id="main-contact">
                <h2>Contact</h2>
                <hr></hr>
            
                <form id="contact-form">
                    <p class="form">Name</p>
                    <input name="name" type="text" class="form-control" placeholder=" John Smith" required></input>
                    <br></br>
                    <p class="form">Email</p>
                    <input name="email" type="email" class="form-control" placeholder=" example@gmail.com" required></input>
                    <br></br>
                    <p class="form">Message</p>
                    <textarea name="message" type="text" class="message-box" required rows="4"/>
                    <br></br>
                    <button id="button">Submit</button>
            
            
                </form>
            
            </div>
        </div>
            
    )
}


export default Contact;