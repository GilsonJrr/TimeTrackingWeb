import React from 'react';
import './App.css';

import Work from '../src/Image/Work.png'
import Play from '../src/Image/Play.png'
import Study from '../src/Image/Study.png'
import Exercise from '../src/Image/Exercise.png'
import Social from '../src/Image/Social.png'
import SelfCare from '../src/Image/Self-care.png'

import MainCard from './Pages/MainCard';
import Card from './Pages/Cards';

function App() {
  return (
    <body className="App">
      <MainCard/>
      <div>
        <Card title="Work" color="#FD8C64" img={Work} time="32"/>
        <Card title="Exercise" color="#4BCF83" img={Exercise} time="4"/>
      </div>
      <div>
        <Card title="Play" color="#56C2E6" img={Play} time="10"/> 
        <Card title="Social" color="#7235D1" img={Social} time="5"/>
      </div>
      <div>
        <Card title="Study" color="#FF5E7D" img={Study} time="4"/>
        <Card title="Self Care" color="#F1C75B" img={SelfCare} time="2"/>
      </div>
    </body>
  );
}

export default App;
