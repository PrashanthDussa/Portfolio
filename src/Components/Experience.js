import React from "react";

export default function Experience(props){
    return(
        <div className={props.dark ? 'dark-experience-container' : 'light-experience-container'} id="work">
            <div class={props.dark ? "dark-tag-container" : "light-tag-container"}>
                <p className={props.dark ? "dark-tag" : "light-tag"}>Work</p>
            </div>
            <div className='experience-content-container'>
                <div className='experience-header'>
                    <p className={ props.dark ? 'dark-experience-header' : 'light-experience-header'}>Here is a quick summary of my work experience :</p>
                </div>
                <div className={props.dark ? 'dark-experience-text-parent' : 'light-experience-text-parent'}>
                    <div className="experience-text-child">
                        <div className="experience-logo-container">
                            <img src="/Images/vcloud.png" alt="vcloud"></img>
                        </div>
                        <div className="experience-text-container">
                            <div className="experience-text-header">
                                <p className={props.dark ? 'dark-experience-text-header' : 'light-experience-text-header'}>Full Stack Developer</p>
                            </div>
                            <div className="experience-text">
                                <ul className={props.dark ? 'dark-list-items' : 'light-list-items'}>
                                    <li>Developed user-facing features in React, improving performance for 1,000+ users.</li>
                                    <li>Designed reusable UI components and backend logic in Node.js and SQL, reducing data issues by 30%.</li>
                                    <li>Resolved 90% of issues via debugging and troubleshooting with Chrome DevTools.</li>
                                    <li>Collaborated with backend teams to integrate APIs, cutting integration time by 40%.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-date">
                            <p className={props.dark ? 'dark-experience-date' : 'light-experience-date'}>June 2023 - May 2024</p>
                        </div>
                    </div>
                </div>

                <div className={props.dark ? 'dark-experience-text-parent' : 'light-experience-text-parent'}>
                    <div className="experience-text-child">
                        <div className="experience-logo-container">
                            <img src="/Images/eclerx.svg" alt="eclerx"></img>
                        </div>
                        <div className="experience-text-container">
                            <div className="experience-text-header">
                                <p className={props.dark ? 'dark-experience-text-header' : 'light-experience-text-header'}>Senior Analyst</p>
                            </div>
                            <div className="experience-text">
                                <ul className={props.dark ? 'dark-list-items' : 'light-list-items'}>
                                    <li>Developed UI components using React/Next.js, enhancing responsiveness and supporting complex requirements.</li>
                                    <li>Integrated REST APIs in React, extending functionality and cutting development time by 30%.</li>
                                    <li>Optimized performance with Lighthouse/WebPageTest, boosting traffic handling by 50%.</li>
                                    <li>Engaged in Agile processes, ensuring timely delivery and improving team collaboration.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-date">
                            <p className={props.dark ? 'dark-experience-date' : 'light-experience-date'}>June 2021 - June 2022</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}