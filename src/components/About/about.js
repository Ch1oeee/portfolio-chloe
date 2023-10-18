import './about.scss'
import Portrait from '../../assets/Portrait.png'

export default function About () {
    return (
        <div className='about'>
            <div className='content'>
                <h2>À propos de moi</h2>
                <p>Après une licence LEA anglais-chinois, j'ai décidé de me former chez OpenClassrooms au metier du web en suivant une formation de développeur web. Grace à cette formation j'ai pu acquérir de nombreuses compétences que j'ai pu mettre à profit à travers les divers projets que j'ai eu à réaliser au cours de celle-ci.
                    Mon profil créatif et organisé me permet de m'intégrer harmonieusement dans des équipes diverses.
                    Actuellement à la recherche d'un emploi en tant que développeur front-end.</p>
            </div>
           <div className='portrait'>
                <div className='orange-circle'></div>
                <img src={Portrait} alt='Portait dessiné de Chloé'></img>
           </div>
            
        </div>



    )
}
