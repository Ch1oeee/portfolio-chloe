import './about.scss'
import Portrait from '../../assets/Portrait.png'

export default function About () {
    return (
        <div className='about'>
            <div className='content'>
                <h2>À propos de moi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
            </div>
           <div className='portrait'>
                <div className='orange-circle'></div>
                <img src={Portrait} alt='Portait dessiné de Chloé'></img>
           </div>
            
        </div>



    )
}