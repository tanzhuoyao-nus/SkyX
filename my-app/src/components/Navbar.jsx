import React from 'react'; 
import logo from '../images/navbarlogo.png'; 
import searchIcon from '../images/search.png'; 
import styles from './components.css'; 

function Navbar (){ 
    return (
    <div className="container center">
    <nav className="menu">
        <h1 style ={{
            backgroundImage: 'url(' + logo + ')'

        }} className="menu__logo">SkyX</h1>

        <div className="menu__right">
            <ul className="menu__list">
                <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                <li className="menu__list-item"><a className="menu__link" href="#">Price Chart</a></li>
                <li className="menu__list-item"><a className="menu__link" href="#">Price Maps</a></li>
                <li className="menu__list-item"><a className="menu__link" href="#">Price Comparison</a></li>
                <li className="menu__list-item"><a className="menu__link" href="#">Buy Order</a></li>
                
            </ul>

            <button style ={{

                backgroundImage:'url(' + searchIcon + ')'
                
            }} className="menu__search-button"></button>

            <form className="menu__search-form hide" method="POST">
                <input className="menu__search-input" placeholder="Type and hit enter" />
            </form>
        </div>
    </nav>

    </div>
    ); 
} 
  

export default Navbar; 

