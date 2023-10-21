import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.scss';
import Header from './components/header/header';
import Acceuil from './components/acceuil/acceuil';

import reportWebVitals from './reportWebVitals';
import About from './components/About/about';
import Competences from './components/Competences/competences';
import Contact from './components/contact/contact';
import Modal from './components/modal/modal';
import Projets from './components/projets/projets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
      <Header />
      <Acceuil />
      <About />
      <Projets />
      <Competences />
      {/* <Modal /> */}
      <Contact />

    </Router>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
