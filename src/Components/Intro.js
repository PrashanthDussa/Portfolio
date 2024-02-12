import React from 'react'
import TypingEffect from './TypingEffect'
import StatusContainer from './StatusContainer'
import LogoContainer from './LogoContainer'

export default function Intro(props){
    const [typingCompleted, setTypingCompleted] = React.useState(false);

    const handleTypingComplete = () => {
        setTypingCompleted(true);
    };

    React.useEffect(()=>{
        setTypingCompleted(false)
    },[props.dark])

    return(
        <div className={props.dark ? 'main-dark-intro' : 'main-light-intro'}>
            <div className={props.dark ? 'sub-dark-intro' : 'sub-light-intro'}>
                    <h1> Hello, I am Prashanth Dussa</h1>
                    <p className={props.dark ? 'dark-intro-details' : 'light-intro-details'}>
                        <TypingEffect text={'I am a skilled Computer Science graduate with expertise in programming languages such as C, C++, Java, and Python. My background encompasses Web Development, Database Management. Noteworthy achievements include optimizing Financial Data processing and creating a Mobile app for Image recognition. I excel in streamlining processes, enhancing user experiences, and applying technology for impactful solutions.'} 
                        dark={props.dark} 
                        onComplete={handleTypingComplete}/>
                    </p>
                    {typingCompleted && <StatusContainer dark={props.dark} visible={typingCompleted}/>}
                    {typingCompleted && <LogoContainer dark={props.dark} visible={typingCompleted}/>}
            </div> 
                 
        </div>
    )
}