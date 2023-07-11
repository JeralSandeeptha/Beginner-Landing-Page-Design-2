import React, { useEffect, useRef } from 'react';
import '../components/Body.scss';
import '../styles/bootstrap.css';
import arrow from '../images/arrow.png';
import controller from '../images/controller.png';
import add from '../images/add.png';
import { TweenMax, Power3 } from 'gsap';

function Body() {

  //useRef hooks
  let header = useRef(null);
  let subHeader = useRef(null);
  let subTwoHeader = useRef(null);
  let price = useRef(null);
  let btn = useRef(null);
  let playStation = useRef(null);
  let addcart = useRef(null);
  let background = useRef(null);

  //useEffect hooks
  useEffect(() => {
    TweenMax.to(
      header,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeInOut
      }
    );
  });

  useEffect(() => {
    TweenMax.to(
      subHeader,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeInOut,
        delay: 0.2
      }
    );
  });

  useEffect(() => {
    TweenMax.to(
      subTwoHeader,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeInOut,
        delay: 0.4
      }
    );
  });

  useEffect(() => {
    TweenMax.to(
      price,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeInOut,
        delay: 0.5
      }
    );
  });

  useEffect(() => {
    TweenMax.to(
      btn,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeInOut,
        delay: 0.6
      }
    );
  });

  useEffect(() => {
    TweenMax.to(
      playStation,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeInOut,
        delay: 0.4
      }
    );
  });

  useEffect(() => {
    TweenMax.to(
      addcart,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeInOut,
        delay: 0.6
      }
    );
  });

  useEffect(() => {
    TweenMax.to(
      background,
      0.8,
      {
        opacity: 1,
        y: -20,
        x: -20,
        ease: Power3.easeInOut,
        delay: 0.3
      }
    );
  });

  return (
    <section className='body container-fluid'>

      <div className="row">

        <div className="left col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">

          <h1 className="header" ref={el => {header = el}}>PS4 V2 <br/> Dualshock 4</h1>
          <h3 className="sub-header" ref={el => {subHeader = el}}>Wireless Controller for PlayStation 4</h3>
          <h5 className="sub-two-header" ref={el => {subTwoHeader = el}}>(component/Generic)</h5>
          <h2 className="price" ref={el => {price = el}}>$32.50</h2>
          <button className="butNow-btn" ref={el => {btn = el}}>But Now <img src={arrow}/></button>
        </div>

        <div className="right col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">

          <div className="controller">
            <img src={controller} ref={el => {playStation = el}}/>
          </div>
          <div className="background" ref={el => {background = el}}></div>
          <div className="addIcon">
            <img src={add} ref={el => {addcart = el}}/>
          </div>

        </div>

      </div>
      
    </section>
  );
}

export default Body;
