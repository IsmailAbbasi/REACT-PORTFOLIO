import LogoTitle from '../../assets/images/i1.png'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
const Home  = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['s','m','a','i','l']
    const jobArray =  ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animated-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
    }, []);
    

    return(

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
<h2>Frontend Developer/ Javascript / Python</h2>
<Link to ="/contact"  className='flat-button'>CONTACT ME</Link>
</div>

        </div>


    );
}

export default Home;