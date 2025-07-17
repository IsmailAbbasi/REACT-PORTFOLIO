import './index.scss'
import {Loader} from 'react-loaders'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
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
                    <h1 className="page-title">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'Y', '⠀', 'P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
                            idx={15}
                        />
                    </h1>
                    <p>These are some of the projects that I have worked upon</p>
                    <div className="projects">
                        <p>Check out my <a href="https://examinateai.com/" target="_blank" rel="noopener noreferrer">EXAMINATE AI - EXAM PREPARATION APP</a> <br></br> ExaminateAI generates personalized practice exams, provides instant feedback, and helps you improve your knowledge in any academic field. The smartest way to prepare for tests, examinations, and certifications.

</p>
                        {/* <p>Check out my <a href="https://chat.izzy.fun" target="_blank" rel="noopener noreferrer">CHAT APPLICATION</a> <br></br> This is a real time chat Application I made using ReactJS and Firebase</p> */}
                        {/* <p>Check out my <a href="https://riddler-chatbot-app.onrender.com/" target="_blank" rel="noopener noreferrer">CHATBOT</a><br></br> This is chatbot I made using Django </p> */}
                        <p>Check out my <a href="https://netflic.netlify.app/" target="_blank" rel="noopener noreferrer">NETFLIC</a><br></br> Movie recommendation appp made by using ReactJs</p>
                        <p>Check out my <a href="https://usepopcorn-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">MOVIE RATING</a> <br></br>Movie rating app made by ReactJS</p>
                        <p>Check out my <a href="https://keycryptor-926c7cc2b1ab.herokuapp.com/signup/" target="_blank" rel="noopener noreferrer">KeyCryptor</a> <br></br>A Password Manager App made using Django and SQLite.</p>
                        <p>Check out my <a href="https://medicine-records-app.onrender.com/" target="_blank" rel="noopener noreferrer">Medicine Records</a> <br></br>A Medicine Records App made using Django and SQLite.</p>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    ) 
}

export default About
