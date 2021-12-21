import React, {useState} from 'react';

import MainCard from './Pages/MainCard';
import Card from './Pages/Cards';
import { data } from './Data/Data';

import {AppContainer, ContainerCards, ContainerMainCard} from './Style/global';

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
    <AppContainer>

        <ContainerMainCard>
          <MainCard 
            day={day} 
            HandleDay={HandleDay}
            week={week} 
            HandleWeek={HandleWeek}
            month={month}
            HandleMonth={HandleMonth}
          />
        </ContainerMainCard>
    
        <ContainerCards>
          {data.map((item) => {
            return(
              <div key={item.id}>
                <Card 
                  title={item.Title} 
                  color={item.Color} 
                  img={item.Image} 
                  time={item.Time[select]} 
                  lastTime={item.LastTime[select]} 
                  day={day} 
                  week={week} 
                  month={month} 
                />
              </div>
            );
          })}
        </ContainerCards>
      
    </AppContainer>
  );
}

export default App;