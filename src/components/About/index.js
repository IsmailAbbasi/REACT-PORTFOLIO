import './index.scss'
import {Loader} from 'react-loaders'
import { useEffect,useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPython,faHtml5,faCss3,faReact,faJsSquare,faGithub} from '@fortawesome/free-brands-svg-icons'

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
    <p>Highly skilled and motivated web developer with expertise in React.js and Django, seeking challenging opportunities to contribute my technical skills and creativity to innovative projects. I am persuing Btech CSE from Jamia Hamdard , New Delhi</p>
    <p> Technical Skills:
    Frontend: React.js, HTML5, CSS3, JavaScript
    Backend: Python, Django
    Version Control: Git, GitHub
    Other: APIs, JSON, Bootstrap</p>
    <p>Some hobbies :P
        Sports, Tech, Photography
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

