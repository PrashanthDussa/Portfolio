import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { saveAs } from 'file-saver';
import { pdfjs } from 'react-pdf';
import ResumePDF from '../Prashanth_Dussa_2024.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Navbar(props){

    const handleDownloadResume = () => {
        saveAs(ResumePDF, 'Prashanth_Dussa_Resume.pdf');
      };

    return(
        <nav className={props.dark? 'dark-nav' : 'light-nav'} id='navbar'>
            <div className='site-logo-container'>
            <ScrollLink to="intro" smooth={true} duration={1200}><img src={props.dark ? '/Images/logo-name-dark.svg' : '/Images/logo-name-light.svg'} className='logo-name-light' alt='name-logo'></img></ScrollLink>
            </div>
            <ScrollLink to="about" smooth={true} duration={1200}><h2 className={props.dark ? 'nav-dark-right' : 'nav-light-right'}>About</h2></ScrollLink>
            <ScrollLink to="work" smooth={true} duration={1200}><h2 className={props.dark ? 'nav-dark-right' : 'nav-light-right'}>Work</h2></ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={1200}><h2 className={props.dark ? 'nav-dark-right' : 'nav-light-right'}>Projects</h2></ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={1200}><h2 className={props.dark ? 'nav-dark-right' : 'nav-light-right'}>Contact</h2></ScrollLink>
            <button className={props.dark ? 'dark-resume slideleft' : 'light-resume slideleft'} onClick={handleDownloadResume}>Resume</button>
            <img src={props.dark ? '/Images/lightIcon.svg' : '/Images/darkIcon.svg'} className='dark-light-icon' onClick={props.setTheme} alt='theme-logo'></img>
        </nav>
    )
}