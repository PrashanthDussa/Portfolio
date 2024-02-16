import React from "react";
import AboutImage from "./AboutImage";

export default function About(props){
    return(
        <div class={props.dark ? "dark-above-container":"light-above-container"} id="about">
            <div class={props.dark ? "dark-tag-container" : "light-tag-container"}>
                <p className={props.dark ? "dark-tag" : "light-tag"}>About Me</p>
            </div>
            <div class="above-content-container"> 
                    <div class="image-container">
                        <AboutImage dark={props.dark}/>
                    </div>
                    <div className="text-container">
                        <div>
                            <p className={props.dark ? "dark-text-container-header" : "light-text-container-header"}>Wanna know about me?</p>
                        </div>
                        <div className="text-container-paragraph">
                            <p className={props.dark ? "dark-text-container-text" : "light-text-container-text"}>
                                I am pursuing my Masters in Computer Science at Arizona State University, expected to graduate in May 2024. I hold a Bachelors Degree in Computer Science from DR BR Ambedkar National Institute of Technology Jalandhar, graduated in June 2021.
                                <br></br>
                                <br></br>
                                My programming proficiency spans C, C++, Java, and Python. In web development, I am adept at HTML, CSS, JavaScript, jQuery, and ReactJS. I have hands-on experience with tools like SQL, Node.js, MongoDB, Spring Boot, Android Studio, and version control using Git/GitHub. My familiarity extends across Windows, macOS, and Linux/Unix.
                                <br></br>
                                <br></br>
                                As a Senior Analyst at eClerx Services Limited in Pune, India, I integrated Asset Control software with SQL and Python/Linux, reducing errors by 50%. I optimized client data with SQL commands, achieving a 40% error reduction. My role included revamping the Asset Control Environment, leading to a 30% decrease in system downtime.
                                <br></br>
                                <br></br>
                                In Image Recognition project at ASU, I streamlined data collection by 50% with a mobile app. The Face Mask Detection System, using Keras and TensorFlow, reduced manual monitoring by 80%. In Home Rentals, I cut server processing time by 30% with a website using HTML, CSS, JavaScript, jQuery, Node.js, and MongoDB.
                                <br></br>
                                <br></br>
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}