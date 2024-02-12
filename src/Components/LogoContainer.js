import React from 'react'

export default function LogoContainer(props){

    const githubUrl = 'https://github.com/prashanthdussa'
    const linkedinUrl= 'https://www.linkedin.com/in/prashanth-dussa/'
    const instaUrl= 'https://www.instagram.com/prashanthdussa/'

    const styles = {
        opacity: props.visible ? 1 : 0,
        transition: 'opacity 0.5s ease'
    }

    return(
        <div style={styles}>
            <div className='logos'>
                            <div className='github-logo'>
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                    <img src={props.dark ? '/Images/github-dark.svg' : '/Images/github-light.svg'}
                                        alt="External Link"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </a>
                            </div>
                            <div className='linkedin-logo'>
                                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <img src='/Images/linkedin.svg'
                                         alt="External Link"
                                         style={{ cursor: 'pointer' }}
                                    />
                                </a>    
                            </div>
                            <div className='instagram-logo'>
                                <a href={instaUrl} target="_blank" rel="noopener noreferrer">
                                        <img src='/Images/instagram.svg'
                                            alt="External Link"
                                            style={{ cursor: 'pointer' }}
                                        />
                                </a>
                            </div>
            </div>         
        </div>
    )
}