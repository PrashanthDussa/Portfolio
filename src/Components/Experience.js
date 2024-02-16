import React from "react";

export default function Experience(props){
    return(
        <div className={props.dark ? 'dark-experience-container' : 'light-experience-container'} id="work">
            <div class={props.dark ? "dark-tag-container" : "light-tag-container"}>
                <p className={props.dark ? "dark-tag" : "light-tag"}>Work</p>
            </div>
            <div className='experience-content-container'>
                <div className='experience-header'>
                    <p className={ props.dark ? 'dark-experience-header' : 'light-experience-header'}>Here is a quick summary of my most recent experience :</p>
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
                                    <li>Integrated Asset Control software with SQL and Python/Linux, reducing errors by 50%.</li>
                                    <li>Optimized client data using SQL commands, achieving a 40% reduction in errors.</li>
                                    <li>Revamped Asset Control Environment, leveraging Python and Linux commands in JIRA for a 30% decrease in system downtime.</li>
                                    <li>Served as the main contact for US and UK financial market clients, ensuring satisfaction and prompt issue resolution.</li>
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