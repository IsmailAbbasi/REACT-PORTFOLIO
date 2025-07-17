import LogoTitle from '../../assets/images/i1.png'
import {useEffect, useState} from 'react'
import {Loader} from 'react-loaders'
import {Link} from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPython,faHtml5,faCss3,faReact,faJsSquare,faGithub} from '@fortawesome/free-brands-svg-icons'


const Home  = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['s','m','a','i','l']
    const jobArray =  ['F','u','l','l','s','t','a','c','k','⠀', 'D','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animated-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
    }, []);
    

    return(
<>
<div className="container home-page">
<div className="text-zone">

{/* <h1>Hi, <br/> I'm
Ismail
<br/>
<img src={LogoTitle} alt="developer"/>
Web Developer */}

<h1>
<span className = {letterClass}>H</span> 
<span className = {`${letterClass}_12`}>i,</span> 
<br/> 
<span className = {`${letterClass}_13`}>I</span> 
<span className = {`${letterClass}_14`}>'m</span> 
<img src={LogoTitle} alt="developer" />
<AnimatedLetters letterClass={letterClass} 
strArray={nameArray}
idx={15}/>
<br/>
<AnimatedLetters letterClass={letterClass} 
strArray={jobArray}
idx={22}/> 
<br/>

</h1>
 {/* <p> 
     <Link to="https://drive.google.com/file/d/1yuYWYXCA4wW0b9ZrEtTqRD3wja1t5SfE/view?usp=sharing">Download My Resume</Link>
    </p> 
     */}
<h2>Frontend Developer/ Javascript / Python</h2>
<Link to ="https://drive.google.com/file/d/1yuYWYXCA4wW0b9ZrEtTqRD3wja1t5SfE/view?usp=sharing"  className='flat-button' target="_blank">Download My Resume</Link>
<Link to ="/contact"  className='flat-button'>Contact Me</Link>

</div>


{/* <div class="bottom-right-links">
    <a href="/terms">Terms and Conditions</a>
    <a href="/privacy">Privacy Policy</a>
    <a href="/refunds">Refunds and Cancellations</a>
</div> */}

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

    );
}

export default Home;