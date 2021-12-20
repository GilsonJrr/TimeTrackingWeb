import React,{useState} from 'react';
import '../App.css';

import Dots from '../Image/Dots.png';

function Card(props) {

  return (
    <div className="CardMain" style={{backgroundColor: props.color }}>

        <img src={props.img} />

        <div className="Card">

            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', paddingRight: 25}}> 
              <div className="Activitie"> {props.title} </div>
              <div>
                <img className="Img" src={Dots} alt="Dots"/> 
              </div>
            </div>
            
            <div>
              <div className="Hours">{props.time}hrs</div>
              { props.day === true && <div className="Past">Yesterday - 5hrs</div> }
              { props.week === true && <div className="Past">Last Week - 36hrs</div> }
              { props.month === true && <div className="Past">Last Month - 100hrs</div> }
            </div>

        </div>
        
    </div>
  );
}

export default Card;