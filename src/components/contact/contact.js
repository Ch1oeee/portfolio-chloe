import contact from '../contact/contact.scss'
import React, { useEffect } from 'react';

/* global Tally */

export default function Contact() {
    useEffect(() => {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      }
    }, []);

  return (
    <div className='form-contact'>

        <h2>Contactez-moi</h2>

      <iframe
        data-tally-src="https://tally.so/embed/mKxPy7?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="700px"
        frameborder="0" 
        title="PORTFOLIO Contact Form"
      ></iframe>
    </div>
  );
}





