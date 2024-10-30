import './index.scss'
import {Loader} from 'react-loaders'
import { useEffect,useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPython,faHtml5,faCss3,faReact,faJsSquare,faGithub} from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
const [letterClass,setLetterClass] = useState('text-animate')
useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animated-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
}, []);

return (
    <>
    <div className="container about-page">
        
    <div className="text-zone">
    <h1>
        <AnimatedLetters
        letterClass={letterClass}
    strArray={['A','b','o','u','t', '⠀','M','e',]}
    idx={15}/>
    </h1>
    <p>Privacy Policy
Data Collection
We collect personal information, including names, contact details, and any other data needed to enhance user experience. This information is securely stored and never shared without consent.

Use of Information
We use the collected data to personalize the user experience, improve our services, and communicate with users. Any additional use will be specified and requires user consent.

Data Security
Our team prioritizes data security and implements industry-standard security practices to protect user information.

User Rights
Users may request access to, correction of, or deletion of their data. Contact us at [Email Address] for data-related requests.

</p>
    </div>
    <div className='stage-cube-cont'>
    <div className='cubespinner'>
    <div className='face1'>
<FontAwesomeIcon icon={faPython} color="#306998"/>
    </div>
    <div className='face2'>
<FontAwesomeIcon icon={faHtml5} color="#F06529"/>
    </div>
    <div className='face3'>
<FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
    </div>
    <div className='face4'>
<FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
    </div>
    <div className='face5'>
<FontAwesomeIcon icon={faJsSquare} color="#EDF18D"/>
    </div>
    <div className='face6'>
<FontAwesomeIcon icon={faGithub} color="#EC4D28"/>
    </div>
    </div>
    </div>
    </div>
    <Loader type="pacman"/>
    </>
)
}
export default About

