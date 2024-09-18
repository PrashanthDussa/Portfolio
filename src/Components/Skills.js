import React from "react";

export default function Skills(props){
    return(
        <div className={props.dark ? 'dark-skills-container' : 'light-skills-container'}>
            <div class={props.dark ? "dark-tag-container" : "light-tag-container"}>
                <p className={props.dark ? "dark-tag" : "light-tag"}>Skills</p>
            </div>
            <div className="skills-content-container">
                <div className='skills-header'>
                    <p className={ props.dark ? 'dark-skills-header' : 'light-skills-header'}>The skills, tools and technologies I am really good at :</p>
                </div>
                <div className="skills-logos">
                    <div className="logo">
                        <img src='/Images/javascript.svg' alt="javascript"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Java Script</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/react.svg' alt="react"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>React</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/nodejs.svg' alt="nodejs"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Node.js</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/mongodb.svg' alt="mongodg"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>MongoDB</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/angular.svg' alt="angular"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Angular</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/django.svg' alt="django"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Django</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/tailwind.svg' alt="tailwind"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Tailwind CSS</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/typescript.svg' alt="jquery"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>TypeScript</p>
                    </div>
                </div>
                <div className="skills-logos">
                    <div className="logo">
                        <img src='/Images/java.svg' alt="java"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Java</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/python.svg' alt="python"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Python</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/spring-boot.svg' alt="spring-boot"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Spring Boot</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/mysql.svg' alt="mysql"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>MySQL</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/linux.svg' alt="linux"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Linux</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/git.svg' alt="git"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Git</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/nextjs.svg' alt="nextjs"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>Next.js</p>
                    </div>
                    <div className="logo">
                        <img src='/Images/aws.svg' alt="aws"></img>
                        <p className={props.dark ? 'dark-logo-text' : 'light-logo-text'}>AWS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}