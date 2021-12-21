import React,{useState} from 'react';
import '../App.css';

import {CardMain} from '../Style/global';
import Dots from '../Image/Dots.png';

function Card(props) {

  const [bgColor, setBgColor] = useState ('#1D204B')

  return (
    <CardMain style={{backgroundColor: props.color }}>

        <img src={props.img} />

        <div className="Card" style={{background: bgColor }} onMouseOver={ ()=> setBgColor('#34397b')} onMouseOut={ ()=> setBgColor('#1D204B')}>

            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', paddingRight: 25, paddingLeft: 25, paddingTop: 10}}> 
              <div className="Activitie"> {props.title} </div>
              <div>
                <img className="Img" src={Dots} alt="Dots"/> 
              </div>
            </div>
            
            <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-between', alignItems: 'baseline', paddingRight: 25, paddingLeft: 25, paddingBottom: 10}}>
              <div className="Hours">{props.time}hrs</div>
              { props.day === true && <div className="Past">Yesterday - {props.lastTime}hrs</div> }
              { props.week === true && <div className="Past">Last Week - {props.lastTime}hrs</div> }
              { props.month === true && <div className="Past">Last Month - {props.lastTime}hrs</div> }
            </div>

        </div>
        
    </CardMain>
  );
}

export default Card;