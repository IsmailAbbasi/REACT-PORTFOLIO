// src/components/About/terms.js
import './index.scss';  // Make sure this path is correct
import { Loader } from 'react-loaders';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faHtml5, faCss3, faReact, faJsSquare, faGithub } from '@fortawesome/free-brands-svg-icons';

const Terms = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

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
              strArray={['T', 'e', 'r', 'm', 's', '⠀', 'a', 'n', 'd', '⠀', 'C', 'o', 'n', 'd', 'i', 't', 'i', 'o', 'n', 's']}
              idx={15}
            />
          </h1>
          <p>
            Welcome to our application. By accessing or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully. If you do not agree with any part, please discontinue use of our services.
          </p>
          <p>
            Our app provides a platform for educational resources and teacher-student interactions. We reserve the right to update or modify our services at any time without prior notice.
          </p>
          <p>
            Users are responsible for providing accurate information and for maintaining the security of their account credentials. Any misuse of our platform will lead to account suspension or termination.
          </p>
          <p>
            Our platform is provided on an "as is" basis. We are not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services.
          </p>
        </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'><FontAwesomeIcon icon={faPython} color="#306998" /></div>
            <div className='face2'><FontAwesomeIcon icon={faHtml5} color="#F06529" /></div>
            <div className='face3'><FontAwesomeIcon icon={faCss3} color="#28A4D9" /></div>
            <div className='face4'><FontAwesomeIcon icon={faReact} color="#5ED4F4" /></div>
            <div className='face5'><FontAwesomeIcon icon={faJsSquare} color="#EDF18D" /></div>
            <div className='face6'><FontAwesomeIcon icon={faGithub} color="#EC4D28" /></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Terms;
