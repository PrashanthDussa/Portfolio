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
                                I am a software engineer specializing in full-stack development, with experience in React, Angular, Next.js, and Spring Boot. At Vcloud Global, I improved performance for over 1,000 users by developing user-facing features and optimizing data handling, focusing on reusable components and efficient UI/UX design.                                <br></br>
                                <br></br>
                                I have worked extensively with SQL and Node.js, integrating APIs and services to streamline development. At eClerx, I enhanced interoperability and reduced development time by 30% through effective REST API integration. I also optimized performance using Lighthouse and WebPageTest.                                <br></br>
                                <br></br>
                                At Fresh Prints, I improved user experience by 30% with responsive Angular interfaces and secure JWT authentication. I focused on enhancing functionality while maintaining security and ease of use.                                <br></br>
                                <br></br>
                                I hold a Master’s in Computer Science from Arizona State University (GPA: 3.87) and a Bachelor’s from DR BR Ambedkar NIT. My skills include Java, Python, C/C++, and tools like Git, MongoDB, and Android Studio across Windows, macOS, and Linux/Unix.                                <br></br>
                                <br></br>
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}