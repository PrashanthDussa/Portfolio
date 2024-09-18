import React from 'react'
import TypingEffect from './TypingEffect'
import StatusContainer from './StatusContainer'
import LogoContainer from './LogoContainer'
import IntroImage from './IntroImage'

export default function Intro(props){
    const [typingCompleted, setTypingCompleted] = React.useState(false);

    const handleTypingComplete = () => {
        setTypingCompleted(true);
        props.introComplete()
    };

    // React.useEffect(()=>{
    //     setTypingCompleted(false)
    // },[props.dark])

    return(
        <div className={props.dark ? 'main-dark-intro' : 'main-light-intro'} id='intro'>
            <div className={props.dark ? 'sub-dark-intro' : 'sub-light-intro'}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <h1 className={props.dark ? 'dark-h1' : 'light-h1'}> Hello, I am Prashanth Dussa</h1>
                    <IntroImage dark={props.dark}/>
                </div>
                    <p className={props.dark ? 'dark-intro-details' : 'light-intro-details'}>
                        <TypingEffect text={'I am a software engineer with 3 years of experience in Full-stack development, specializing in React, Angular, Next.js, SQL, and JavaScript. I have a strong track record of building responsive web applications, optimizing performance, and ensuring seamless data integration across platforms.'} 
                        dark={props.dark} 
                        onComplete={handleTypingComplete}/>
                    </p>
                    {typingCompleted && <StatusContainer dark={props.dark} visible={typingCompleted}/>}
                    {typingCompleted && <LogoContainer dark={props.dark} visible={typingCompleted}/>}
            </div> 
                 
        </div>
    )
}