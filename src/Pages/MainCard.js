import React from 'react';

import {HeaderMain, Header, Date, Photo, Title, Name, bottonText} from '../Style/global';
import photo from '../Image/image-jeremy.png';

function MainCard(props) {
  return (
    <HeaderMain>
      
        <Header>
            <div style={{paddingLeft: 25, display: 'flex', flexWrap: 'wrap'}}>
              <Photo>
                <img src={photo} style={{width: '100%'}}/> 
              </Photo>
              <div>
                <Title> Report for </Title>
                <Name> Jeremy Robson </Name>
              </div>
            </div>
        </Header>

        <div style={{display: 'flex', flexWrap: 'wrap',}}>
          <bottonText style={{cursor: 'pointer'}} onClick={ ()=> props.HandleDay()}> 
            { props.day === true && <Date style={{color: '#FFFFFF'}}> Daily </Date> }
            { props.day === false && <Date> Daily </Date>}
          </bottonText>
          <bottonText style={{cursor: 'pointer'}} onClick={ ()=> props.HandleWeek()}> 
            { props.week === true && <Date style={{color: '#FFFFFF'}}> Weekly </Date> }
            { props.week === false && <Date> Weekly </Date>}
          </bottonText>
          <bottonText style={{cursor: 'pointer'}} onClick={ ()=> props.HandleMonth()}> 
            { props.month === true && <Date style={{color: '#FFFFFF'}}> Monthly </Date> }
            { props.month === false && <Date> Monthly </Date>}
          </bottonText>
        </div>
        
    </HeaderMain>
  );
}

export default MainCard;
