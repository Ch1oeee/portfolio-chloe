import { Link } from 'react-router-dom';
import './header.scss'

export default function Header(){
    return (
        <div className='Header'>
          <Link to="/" className='logo'>Chloé Montaigut</Link> 
            <nav className='Navigation'>
              <ul>
                <li>
                  <Link to="/competences">Compétences</Link>
                </li>
                <li>
                  <Link to="/about">À propos</Link>                </li>
                <li>
                  <Link to="/Projets">Projets</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
        </div>
    )

}