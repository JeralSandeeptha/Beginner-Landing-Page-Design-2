import React, { useRef, useState } from 'react';
import '../styles/bootstrap.css';
import '../components/NavigationBar.scss';
import logo from '../images/logo.png';
import menu from '../images/menu.png';
import { TweenMax, Power3 } from 'gsap';

function NavigationBar() {

  //toggle ekak widiyata use wena animation ekak heduwe
  //mekata useState and useRef Hooks use wenawa
  //use interaction ekak wena nisa aniwaryenma EventHandler ekak denna oni

  let logoClick = useRef(null);

  const [logoState, setLogoState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(logoClick, 0.8, {width: 50, height: 50, ease:Power3.easeInOut});
    setLogoState(true);
  }
  const hanldeShrink = () => {
    TweenMax.to(logoClick, 0.8, {width: 70, height: 70, ease:Power3.easeInOut});
    setLogoState(false);
  }

  return (
    <section className='navigationBar container-fluid'>

        <div className="row">

          <div className="logo">
            <img src={logo} onClick={logoState !== true ? handleExpand : hanldeShrink} ref={el => {logoClick = el}}/> 
          </div>

          <div className="nav-links">
            <ul className="nav-items">
              <li className="items">
                <a href="#">Game Controllers</a>
              </li>
              <li className="items">
                <a href="#">VR Accessories</a>
              </li>
              <li className="items">
                <a href="#">Media Remotes</a>
              </li>
              <li className="items">
                <a href="#">Others</a>
              </li>
            </ul>
          </div>

          <div className="toggle">
            <img src={menu}/>
          </div>

        </div>
      
    </section>
  );
}

export default NavigationBar;
