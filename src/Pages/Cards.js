import React,{useState} from 'react';

import {CardMain, Cards, Activitie, Img, Hours, Past} from '../Style/global';
import Dots from '../Image/Dots.png';

function Card(props) {

  const [bgColor, setBgColor] = useState ('#1D204B')

  return (
    <CardMain style={{backgroundColor: props.color }}>

        <img src={props.img} />

        <Cards style={{background: bgColor }} onMouseOver={ ()=> setBgColor('#34397b')} onMouseOut={ ()=> setBgColor('#1D204B')}>

            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', paddingRight: 25, paddingLeft: 25, paddingTop: 10}}> 
              <Activitie> {props.title} </Activitie>
              <div>
                <Img src={Dots} alt="Dots"/> 
              </div>
            </div>
            
            <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-between', alignItems: 'baseline', paddingRight: 25, paddingLeft: 25, paddingBottom: 10}}>
              <Hours>{props.time}hrs</Hours>
              { props.day === true && <Past>Yesterday - {props.lastTime}hrs</Past> }
              { props.week === true && <Past>Last Week - {props.lastTime}hrs</Past> }
              { props.month === true && <Past>Last Month - {props.lastTime}hrs</Past> }
            </div>

        </Cards>
        
    </CardMain>
  );
}

export default Card;