import React from "react";

export default function Footer(props){
    return(
        <div className={props.dark ? 'dark-footer-container' : 'light-footer-container'}>
            <div className="footer-container-parent">
                <div className="footer-container-child">
                    <div className="footer-logo-container">
                        <img src="/Images/copyright.svg" alt="copyright"></img>
                    </div>
                    <div>
                        <p className={props.dark ? 'dark-footer-text' : 'light-footer-text'}>
                            2024 | Designed and coded with ❤️ by Prashanth Dussa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}