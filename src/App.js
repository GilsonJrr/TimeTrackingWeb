import React from 'react';
import './App.css';

import MainCard from './Pages/MainCard';
import Card from './Pages/Cards';

function App() {
  return (
    <body className="App">
      <MainCard/>
      <div>
        <Card/>
        <Card/>
      </div>
      <div>
        <Card/> 
        <Card/>
      </div>
      <div>
        <Card/>
        <Card/>
      </div>
    </body>
  );
}

export default App;
