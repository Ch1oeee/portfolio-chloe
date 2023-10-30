import './acceuil.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Acceuil () {
    return (
        <div className='main-page' id="accueil">
            <p className='greeting'>Salut 👋🏼 je suis</p>
            <h1>chloé <br/> Montaigut</h1>
            <p className='job'>Développeuse Web</p>
            
            <div className='socials'>
                <ul>
                    <li>
                        <a href="https://github.com/Ch1oeee">
                        <FontAwesomeIcon icon={faGithub} /> </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Ch1oeee__">
                        <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/chlo%C3%A9-montaigut/">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}