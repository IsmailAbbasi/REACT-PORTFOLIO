import {Link,NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/i1.png'
import LogoSubtitle from '../../assets/images/ismaillogo1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (

    
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={LogoS} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="ismail"/>

            </Link>
            <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className ="about-link" to="/about ">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            </nav>
            <ul>
                <li>   
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mohd-ismail-abbasi-bba550228/">
            <FontAwesomeIcon icon = {faLinkedin} colors="#4d4d4e" />
                    </a>
                </li>
                <li>   
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/IsmailAbbasi">
            <FontAwesomeIcon icon = {faGithub} colors="#4d4d4e" />
                    </a>
                </li>
                <li>   
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/ismailisonmoon/">
            <FontAwesomeIcon icon = {faInstagram} colors="#4d4d4e" />
                    </a>
                </li>
                <li>   
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/ismailisonmoon">
            <FontAwesomeIcon icon = {faTwitter} colors="#4d4d4e" />
                    </a>
                </li>
            
            </ul>
    </div>
   

)
export default Sidebar;