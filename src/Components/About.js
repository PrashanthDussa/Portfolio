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
                                I am a skilled software engineer with three years of experience in full-stack development, specializing in React, Angular, Next.js, and Spring Boot. At Vcloud Global, I developed user-facing features and optimized performance for over 1,000 users, improving data handling and UI/UX efficiency.<br></br>
                                <br></br>
                                With strong expertise in both frontend and backend technologies, I have successfully integrated REST APIs and improved system performance at eClerx Services Limited. My focus on performance optimization and scalability has enabled seamless handling of high traffic in web applications.<br></br>
                                <br></br>
                                At Fresh Prints, I led UI development with Angular, enhancing user experience by 30%, and implemented secure authentication using JWT and Spring Security. My work consistently prioritized functionality, security, and user-centric solutions.<br></br>
                                <br></br>
                                I hold a Master’s Degree in Computer Science from Arizona State University and a Bachelor’s Degree from DR BR Ambedkar National Institute of Technology. My technical expertise includes Java, Python, C, C++, SQL, Node.js, MongoDB, and Git across Windows, macOS, and Linux environments.<br></br>
                                <br></br>
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}