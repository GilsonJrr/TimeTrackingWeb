import React from 'react';
import '../App.css';

function MainCard(props) {
  return (
    <div className="HeaderMain">
        <div className="Header">
            <div className="Photo"></div>
            <div className="Title"> Report for </div>
            <div className="Name"> Gilson Cosme </div>
        </div>
        <button className="bottonText" onClick={ ()=> props.HandleDay()}> 
          { props.day === true && <div className="Date" style={{color: '#FFFFFF'}}> Daily </div> }
          { props.day === false && <div className="Date"> Daily </div>}
        </button>
        <button className="bottonText" onClick={ ()=> props.HandleWeek()}> 
          { props.week === true && <div className="Date" style={{color: '#FFFFFF'}}> Weekly </div> }
          { props.week === false && <div className="Date"> Weekly </div>}
        </button>
        <button className="bottonText" onClick={ ()=> props.HandleMonth()}> 
          { props.month === true && <div className="Date" style={{color: '#FFFFFF'}}> Monthly </div> }
          { props.month === false && <div className="Date"> Monthly </div>}
        </button>
    </div>
  );
}

export default MainCard;
