import React, {useState} from 'react';
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

  const [ day, setDay] = useState (true)
  const [ week, setWeek] = useState (false)
  const [ month, setMonth] = useState (false)
  const [select, setSelect] = useState ('day');

  const [data, setData] = useState ([
    {id: 1, Title: 'Work', Color: '#FD8C64', Time: {day: 8, week: 40, month: 160}, Image: Work },
    {id: 2, Title: 'Play', Color: '#56C2E6', Time: {day: 2, week: 14, month: 56}, Image: Play },
    {id: 3, Title: 'Study', Color: '#FF5E7D', Time: {day: 2, week: 14, month: 56}, Image: Study },
    {id: 4, Title: 'Exercise', Color: '#4BCF83', Time: {day: 2, week: 14, month: 56}, Image: Exercise },
    {id: 5, Title: 'Social', Color: '#7235D1', Time: {day: 2, week: 14, month: 56}, Image: Social },
    {id: 6, Title: 'Self Care', Color: '#F1C75B', Time: {day: 8, week: 56, month: 152}, Image: SelfCare },
  ])

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
