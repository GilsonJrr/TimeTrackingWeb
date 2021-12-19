import React from 'react';
import '../App.css';

import Dots from '../Image/Dots.png';

function Card(props) {
  return (
    <div className="CardMain" style={{backgroundColor: props.color }}>

        <img src={props.img} />

        <div className="Card">

          <div> 
            <div className="Activitie"> {props.title} </div>
            <div className="Hours">{props.time}hrs</div>
            <div className="Past">Last week - 36hrs</div>
          </div> 

          <div className="Img">
            <img src={Dots} alt="Dots"/>
          </div>

        </div>
        
    </div>
  );
}

export default Card;