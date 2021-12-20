import React, {useState} from 'react';
import './App.css';

import MainCard from './Pages/MainCard';
import Card from './Pages/Cards';
import { data } from './Data/Data';

function App() {

  const [ day, setDay] = useState (true)
  const [ week, setWeek] = useState (false)
  const [ month, setMonth] = useState (false)
  const [select, setSelect] = useState ('day');

  function HandleDay (){
    setDay(true); setWeek(false); setMonth(false); setSelect('day')
  }

  function HandleWeek (){
    setDay(false); setWeek(true); setMonth(false); setSelect('week')
  }

  function HandleMonth (){
    setDay(false); setWeek(false); setMonth(true); setSelect('month')
  }

  return (
    <body className="App">

        <MainCard 
          day={day} 
          HandleDay={HandleDay}
          week={week} 
          HandleWeek={HandleWeek}
          month={month}
          HandleMonth={HandleMonth}
        />
      
    
        <div className="ContainerCards">
          {data.map((item) => {
            return(
              <div key={item.id}>
                <Card title={item.Title} color={item.Color} img={item.Image} time={item.Time[select]} day={day} week={week} month={month} />
              </div>
            );
          })}
        </div>
      
    </body>
  );
}

export default App;