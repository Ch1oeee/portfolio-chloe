import './competences.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Competences () {
    return (
        <div className='skills' id="competences">
            <h2>Compétences</h2>

            <div className='listes'>
                
                <div className='frontend skills-section'>
                    <p>Frontend</p>
                    <ul className='rating-list'>
                        <li> 
                            <span className="competence">HTML</span>
                            <span className="rating">
                                <FontAwesomeIcon icon={faStar} className='filled' />
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                            </span>
                        </li>
                        <li> 
                            <span className="competence">CSS</span>
                            <span className="rating">
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                            </span>
                        </li>
                        <li> 
                            <span className='competence'>React</span> 
                            <span className="rating">
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                            </span>
                        </li>
                        <li> 
                            <span className='competence'>Javascript</span> 
                            <span className="rating">
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                            </span>
                        </li>
                    </ul>
                </div>
               
                <div className='backend skills-section'>
                    <p>Backend</p>
                    <ul className='rating-list'>
                        <li> 
                            <span className='competence'>Node.js </span>
                            <span className="rating">
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                            </span>
                        </li>
                        <li> 
                            <span className='competence'>Mongodb</span> 
                            <span className="rating">
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                            </span>
                        </li>
                        <li>
                            <span className='competence'>Express.js</span> 
                            <span className="rating">
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='filled'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                                <FontAwesomeIcon icon={faStar} className='empty'/>
                            </span>
                        </li>
                    </ul>
                </div>


            </div>



            
        </div>
    )
}