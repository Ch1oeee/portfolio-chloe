import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './header.scss'
import Competences from '../Competences/competences';
import About from '../About/about';
import Projets from '../projets/projets';
import Contact from '../contact/contact';

export default function Header() {
  return (
    <div className='Header'>
      <a href='="#accueil' className='logo'>
        Chloé Montaigut
      </a>
     
      <nav className='Navigation'>
        <ul>
          <li>
            <a href="#accueil">Accueil</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#competences">Compétences</a>
          </li>
          <li>
            <a href="#projets">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}


