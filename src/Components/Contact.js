import React from "react";
import LogoContainer from "./LogoContainer";

export default function Contact(props){

    const handleEmailClick = () => {
        const email = 'your.email@example.com';
        const mailtoUrl = `mailto:${email}`;
        window.location.href = mailtoUrl;
      };

    return(
        <div className={props.dark ? 'dark-contact-container' : 'light-contact-container'} id="contact">
            <div class={props.dark ? "dark-tag-container" : "light-tag-container"}>
                <p className={props.dark ? "dark-tag" : "light-tag"}>Contact</p>
            </div>
            <div className="contact-content">
                <div className="contact-header-container">
                    <div className='contact-header-text'>
                        <p className={ props.dark ? 'dark-contact-header' : 'light-contact-header'}>
                            What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                        </p>
                    </div>    
                </div>
                <div className={props.dark ? 'dark-contact-content-container' : 'light-contact-content-container'}>
                        <div className="contact-email-container">
                            <div className="email-logo-container">
                                <img src="/Images/email.svg" alt="email"></img>
                            </div>
                            <p className='email-text' onClick={handleEmailClick}>prashanthdussa@yahoo.com</p>
                        </div>
                        <div className="contact-logo-header">
                            <p className={props.dark ? 'dark-contact-logo-text' : 'light-contact-logo-text'}>
                                You may also find me on these platforms!
                            </p>
                        </div>
                        <div className="contact-logo">
                            <LogoContainer dark={props.dark} visible={true}/>
                        </div>
                </div>
            </div>
        </div>
    )
}