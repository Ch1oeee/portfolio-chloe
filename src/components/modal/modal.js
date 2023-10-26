import React from "react";
import "../modal/modal.scss";
import projetData from "../../data.json";

export default function Modal({ selectedProjet, toggleModal }) {
  const handleModalClose = () => {
    toggleModal(); 
  };

  return (
    <div className={`modal ${selectedProjet ? "active" : ""}`}>
      <div className="overlay" onClick={handleModalClose}></div>
      <div className="modal-content">
        {selectedProjet && (
          <>
            <h3>{selectedProjet.titre}</h3>
            <div className="technologies">
                  <ul>
                      {selectedProjet.technologies.map((techno, index) => (
                          <li key={index}>{techno}</li>
                      ))}
                  </ul>
                </div>
            <div className="infos">
              <img src={selectedProjet.imageModal} alt="Responsive du site web"></img>
              <div className="details"> 
                <p>{selectedProjet.texte}</p>
                <a
                  href={selectedProjet.lienGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>
            <button className="close-modal" onClick={handleModalClose}>
              X
            </button>
          </>
        )},
      </div>
    </div>
  );
}
