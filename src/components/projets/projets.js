// import React, { useState } from "react";
// import "../modal/modal.scss";
// import projetData from "../../data.json";
// import "../projets/projets.scss";

// export default function Projets() {
//   const [selectedProjet, setSelectedProjet] = useState(null);

//   const openModal = (projet) => {
//     setSelectedProjet(projet);
//   };

//   return (
//     <div className="projets">
//       <div className="intro">
//         <h2>Mes projets</h2>
//         <p>
//          Projets réalisés dans le cadre de ma formation en tant que développeuse web chez OpenClassrooms.
//           Au cours de cette expérience, j'ai eu l'opportunité d'acquérir les compétences essentielles pour le développement front-end et back-end
//           grâce aux technologies telles que HTML, CSS, JavaScript, React et Node.js,  entre autres. J'ai pu également approfondir
//           mes compétences en optimisation et débogage en utilisant des outils tels que Chrome DevTools, Wave et Lighthouse.
//         </p>
//       </div>

//       {projetData.map((projet, index) => (
//         <div className="projet" key={index}>
//           <div className="images">
//             <div className="image-container">
//               <img
//                 src={projet.imageSrc}
//                 alt="Accueil du site web"
//               />
//             </div>
//           </div>
//           <div className="infos">
//             <h3>{projet.titre}</h3>
//             <p>{projet.description}</p>
//             <button onClick={() => openModal(projet)}>Voir plus</button>
//           </div>
//         </div>
//       ))}

//       {selectedProjet && (
//         <div className="modal">
//           {/* Affichez ici les détails du projet sélectionné */}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import "../modal/modal.scss";
import projetData from "../../data.json";
import "../projets/projets.scss";
import Modal from "../modal/modal";

export default function Projets() {
  const [selectedProjet, setSelectedProjet] = useState(null);

  const openModal = (projet) => {
    setSelectedProjet(projet);
    document.body.classList.add("modal-open"); // Ajoute la classe pour empêcher le défilement
  };

  const closeModal = () => {
    setSelectedProjet(null);
    document.body.classList.remove("modal-open"); // Retire la classe pour activer le défilement
  };

  return (
    <div className="projets">
      <div className="intro">
        <h2>Mes projets</h2>
        <p>
          Projets réalisés dans le cadre de ma formation en tant que développeuse web chez OpenClassrooms.
          Au cours de cette expérience, j'ai eu l'opportunité d'acquérir les compétences essentielles pour le développement front-end et back-end
         grâce aux technologies telles que HTML, CSS, JavaScript, React et Node.js,  entre autres. J'ai pu également approfondir
          mes compétences en optimisation et débogage en utilisant des outils tels que Chrome DevTools, Wave et Lighthouse.
        </p>
      </div>

      {projetData.map((projet, index) => (
        <div className="projet" key={index}>
          <div className="images">
            <div className="image-container">
              <img
                src={projet.imageSrc}
                alt="Accueil du site web"
              />
              <button onClick={() => openModal(projet)}>Voir plus</button>
            </div>
          </div>
          <div className="infos">
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
          </div>
        </div>
      ))}

      <Modal selectedProjet={selectedProjet} toggleModal={closeModal} />
    </div>
  );
}

