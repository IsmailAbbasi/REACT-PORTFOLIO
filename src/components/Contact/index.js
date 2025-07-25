import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState,useRef } from 'react'
import { useNavigate } from "react-router-dom";


const Contact = () => {
    const navigate = useNavigate();

    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm = useRef()
useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animated-hover');
    }, 3000);
    return () => clearTimeout(timeoutId);
}, []);

const sendEmail = (e) => {
   e.preventDefault() 
   emailjs.sendForm('service_idlvxs3', 'template_q2thezm', refForm.current, 'Bf022dsU_9-EjjCwm',
   navigate("/"),


//    emailjs.sendForm(
//     'gmail',
//     'template_q2thezm',
//     refForm.current,
//     'Bf022dsU_9-EjjCwm'

   )
   .then(
    () => {
        alert('Message sent')
        window.location.reload(false)
},
    () => {
        alert('Failed to send the message,please try again')
        }
    )
}
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                 <AnimatedLetters 
                 letterClass={letterClass}
                 strArray={['C','o','n','t','a','c','t', '⠀','m','e',]}   
                 idx={15}/>
                </h1>
                <p>
                 I am interested in Internships/Fulltime Jobs. However, if you have other request or question, you can contact me using below form either.  
                 Contact me on - ismailabbasi118@gmail.com
                </p>
                <div className  ='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                        <input type ="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className='half'>
                        <input type ="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                               <input placeholder="Subject"  type="text" name="subject" required />
                            </li>
                        <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                                >
                            </textarea>
                        </li>
                        <li>
                      <input type="submit" className="flat-button" value="SEND"/>      
                        </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>  
    </>
    )
}

export default Contact