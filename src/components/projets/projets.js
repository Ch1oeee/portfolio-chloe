import '../projets/projets.scss'
import Booki from '../../assets/Booki.png'

export default function Projets () {
    return (
        <div className='projets'>

            <div className='intro'>
                <h2>Mes projets</h2>
                <p>
                Projets réalisés dans le cadre de ma formation en tant que développeuse web chez OpenClassrooms. 
                Au cours de cette expérience, j'ai eu l'opportunité d'acquérir les compétences essentielles pour le développement front-end et back-end 
                grâce aux technologies telles que HTML, CSS, JavaScript, React et Node.js, entre autres. J'ai pu également approfondir 
                mes compétences en optimisation et débogage en utilisant des outils tels que Chrome DevTools, Wave et Lighthouse.
                </p>
            </div>

            <div className='projet'>
                
                <div className='images'>
                    <div className='image-container'>
                        <img src={Booki} alt=''></img>
                        <button>Voir plus</button>
                    </div>
                </div>
                
                <div className='infos'>
                    <h3>Booki, agence de voyage</h3>
                    <p>
                        Intégration de l'interface d'un site Internet visant à faciliter 
                        la recherche d'hébergements et d'activités dans différentes villes. 
                    </p>
                </div>

            </div>



        </div>
    )
}