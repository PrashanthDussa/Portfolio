import React from 'react'

export default function StatusContainer(props){
    const styles = {
        opacity: props.visible ? 1 : 0,
        transition: 'opacity 0.5s ease'
    }

    return(
        <div style={styles}>
             <div className='status-container'>
                        <div className='location-container'>
                            <img width="30" height="30" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-location-contact-us-flatart-icons-flat-flatarticons.png" alt="external-location-contact-us-flatart-icons-flat-flatarticons"/>
                            <p className={props.dark ? 'dark-location' : 'light-location'}>Tempe, United States</p>
                        </div>
                        <div className={props.dark ? 'dark-status' : 'light-status'}>
                            <div className='status-color'></div>
                            <div className={props.dark ? 'dark-available' : 'light-available'}>
                                <p>Available for full time jobs</p>
                            </div>
                        </div>
             </div>
        </div>
    )
}