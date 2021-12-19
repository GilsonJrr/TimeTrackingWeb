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
        <div className="Date"> Daily </div>
        <div className="Date"> Weekly </div>
        <div className="Date"> Monthly </div>
    </div>
  );
}

export default MainCard;
