import React from 'react'

export default function Navbar(props){
    return(
        <nav className={props.dark? 'dark-nav' : 'light-nav'}>
            <img src={props.dark ? '/Images/logo-name-dark.svg' : '/Images/logo-name-light.svg'} className='logo-name-light' alt='name-logo'></img>
            <h2 className={props.dark ? 'nav-dark-right' : 'nav-light-right'}>About</h2>
            <h2 className={props.dark ? 'nav-dark-right' : 'nav-light-right'}>Work</h2>
            <h2 className={props.dark ? 'nav-dark-right' : 'nav-light-right'}>Contact</h2>
            <h2 className={props.dark ? 'nav-dark-right' : 'nav-light-right'}>Tenzies</h2>
            <button className={props.dark ? 'dark-resume slideleft' : 'light-resume slideleft'}>Resume</button>
            <img src={props.dark ? '/Images/lightIcon.svg' : '/Images/darkIcon.svg'} className='dark-light-icon' onClick={props.setTheme} alt='theme-logo'></img>
        </nav>
    )
}