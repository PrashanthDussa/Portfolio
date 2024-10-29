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
                                    <li>Developed and maintained high-performance Java and React applications, ensuring reliability and scalability.</li>
                                    <li>Designed RESTful APIs using Spring Boot and SQL, optimizing data exchange and reducing response times by 20%.</li>
                                    <li>Integrated AWS services (EC2, S3, Lambda) to enable cloud-hosted solutions, enhancing scalability and reducing costs by 25%.</li>
                                    <li>Streamlined CI/CD processes with Jenkins, automating 80% of deployment tasks and minimizing manual intervention.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-date">
                            <p className={props.dark ? 'dark-experience-date' : 'light-experience-date'}>January 2024 - Present</p>
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
                                    <li>Developed backend services using Java and Spring, improving processing speeds by 30% and meeting complex client requirements.</li>
                                    <li>Built a responsive React dashboard for agents with real-time search and filtering, reducing ticket handling time by 20%.</li>
                                    <li>Conducted performance tuning and load testing with JMeter, addressing bottlenecks and ensuring stability under high traffic volumes.</li>
                                    <li>Actively participated in Agile processes, including sprint planning and retrospectives, ensuring timely delivery and effective teamwork.</li>
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