import React from "react";

export default function Projects(props){
    const imageRecoginitionStyle={
        height: '384px',
        flex: '1 0 0',
        borderRadius: '12px',
        background: 'url(/Images/imageRecognition.jpeg), lightgray 50% / cover no-repeat',
        boxShadow: '0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)',
    }

    const faceMaskRecognitionStyle={
        height: '384px',
        flex: '1 0 0',
        borderRadius: '12px',
        background: 'url(/Images/faceMaskRecognition.jpeg), lightgray 50% / cover no-repeat',
        boxShadow: '0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)',
    }

    const homeRentalsStyle={
        height: '384px',
        flex: '1 0 0',
        borderRadius: '12px',
        background: 'url(/Images/homeRentals.png), lightgray 50% / cover no-repeat',
        boxShadow: '0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)',
    }

    const handleHomeRentalsClick = () => {
        window.open('https://github.com/PrashanthDussa/home-rentals', '_blank');
      };

    return (
        <div className={props.dark ? 'dark-projects-container' : 'light-projects-container'} id="projects">
            <div class={props.dark ? "dark-tag-container" : "light-tag-container"}>
                <p className={props.dark ? "dark-tag" : "light-tag"}>Projects</p>
            </div>
            <div className='projects-content-container'>
                <div className='projects-header'>
                    <p className={ props.dark ? 'dark-projects-header' : 'light-projects-header'}>Some of the noteworthy projects I have built :</p>
                </div>
                <div className={props.dark ? 'dark-project-container' : 'light-project-container'}>
                    <div className={props.dark ? 'dark-project-image-container' : 'light-project-image-container'}>
                        <div className="project-image" style={imageRecoginitionStyle}></div>
                    </div>
                    <div className="project-text-container">
                        <div>
                            <h1 className={props.dark ? 'dark-text-header' : 'light-text-header'}>Digits Recognition System</h1>
                        </div>
                        <div>
                            <p className={props.dark ? 'dark-text' : 'light-text'}>Designed a mobile app in Android Studio, reducing data collection time by 50%. Led Flask server development, optimizing image processing by 90%. Improved user experience with real-time feedback for handwritten digit submissions.Focused on efficiency and enhanced user interaction through advanced data handling and image processing.</p>
                        </div>
                        <div className="text-tag-container">
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>Machine Learning</p>
                            </div>
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>Flask</p>
                            </div>
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>Neural Network</p>
                            </div>
                        </div>
                    </div>             
                </div>
                <div className={props.dark ? 'dark-project-container' : 'light-project-container'}>
                    <div className="project-text-container">
                        <div>
                            <h1 className={props.dark ? 'dark-text-header' : 'light-text-header'}>Face Mask Detection System</h1>
                        </div>
                        <div>
                            <p className={props.dark ? 'dark-text' : 'light-text'}>Developed a sophisticated face mask detection system using Keras, TensorFlow, and NumPy, reducing manual monitoring efforts by 80% and enabling real-time identification of mask compliance. Through rigorous validation procedures, the system achieved a high accuracy of 95% in real-world scenarios, ensuring reliable and precise outcomes.</p>
                        </div>
                        <div className="text-tag-container">
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>Machine Learning</p>
                            </div>
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>Keras</p>
                            </div>
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>TensorFlow</p>
                            </div>
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>NumPy</p>
                            </div>
                        </div>
                    </div>
                    <div className={props.dark ? 'dark-project-image-container-fmd' : 'light-project-image-container-fmd'}>
                        <div className="project-image" style={faceMaskRecognitionStyle}></div>
                    </div>             
                </div>
                <div className={props.dark ? 'dark-project-container' : 'light-project-container'}>
                    <div className={props.dark ? 'dark-project-image-container' : 'light-project-image-container'}>
                        <div className="project-image" style={homeRentalsStyle}></div>
                    </div>
                    <div className="project-text-container">
                        <div>
                            <h1 className={props.dark ? 'dark-text-header' : 'light-text-header'}>Home Rentals</h1>
                        </div>
                        <div>
                            <p className={props.dark ? 'dark-text' : 'light-text'}>Revolutionized house searching with a functional website. Enhanced front-end using HTML, CSS, JavaScript, and jQuery. Led the development of an efficient back-end with Node.js and MongoDB, reducing server processing time by 30%. Implemented responsive design for optimal user experience.</p>
                        </div>
                        <div className="text-tag-container">
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>HTML</p>
                            </div>
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>CSS</p>
                            </div>
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>JavaScript</p>
                            </div>
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>Node.js</p>
                            </div>
                            <div className={props.dark ? 'dark-project-tag' : 'light-project-tag'}>
                                <p className={props.dark ? 'dark-tag-text' : 'light-tag-text'}>MongoDB</p>
                            </div>
                        </div>
                        <div className="project-link-container">
                            <div className="project-link-icon">
                                <img src="/Images/link.svg" alt="Open Project" onClick={handleHomeRentalsClick}></img>
                            </div>
                        </div>
                    </div>             
                </div>
            </div>          
        </div>
    )
}