import { Link } from 'react-router-dom';
import './header.scss'

export default function Header(){
    return (
        <div className='Header'>
          <Link to="/" className='logo'>Chloé Montaigut</Link> 
            <nav className='Navigation'>
              <ul>
                <li>
                  <Link to="/Competences">Compétences</Link>
                </li>
                <li>
                  <Link to="/A-propos">à propos</Link>
                </li>
                <li>
                  <Link to="/Projets">Projets</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </nav>
        </div>
    )

}