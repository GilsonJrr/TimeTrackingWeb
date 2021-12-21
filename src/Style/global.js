import styled from 'styled-components'

//app css

export const AppContainer = styled.body`
    background-color: #0D1323;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    align-items: center;
    justify-content: center;
    @media(max-width: 1000px){
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
    }
`;
  
export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap; 
    max-width: 852px;
    @media(max-width: 1000px){
        width: 90%;
        flex-direction: column;
        max-width: 100%;
    }
`;
  
export const ContainerMainCard = styled.div`
    /**/
    /*max-width: 354px;*/
    max-width: 350px;
    @media(max-width: 1000px){
        max-width: 90%;  
    }
    display: flex; 
    justify-content: flex-end;
`;
  
//main card css

export const HeaderMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    //web
    width: 254px;
    height: 516px;
    @media(max-width: 1000px){
        //mobile 
        width: 100%;
        height: 210px;
        margin-top: 50px;
        margin-bottom: 20px;
        margin-right: 0px;
    }
    background: #1D204B;
    border-radius: 20px;
    padding-bottom: 30px;
    margin-right: 15px;
    justify-content: center;
`;

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 65%;
    background: #5746EA;
    border-radius: 20px;
    align-items: center;
    padding-top: 34px;
    margin-bottom: 15px;
`;

export const Date = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #5F659E;
    margin-top: 5px;
    margin-bottom: 10px;
    //web
    margin-left: 30px;
    padding-right: 50px;
    @media(max-width: 1000px){
        //mobile
        padding-right: 0px;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

export const Photo = styled.div`
    width: 80px;
    height: 80px;
    background: #1D204B;
    border: 3px solid #FFFFFF;
    border-radius: 100px;
    margin-bottom: 20px;
    margin-right: 10px;
`;

export const Title = styled.div`
    font-family: Rubik;
    padding-top: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #B5ADFF;
`;

export const Name = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    //web
    font-size: 45px;
    @media(max-width: 1000px){
        //mobile
        font-size: 30px;
    }
    color: #FFFFFF;
    margin-bottom: 40px;
    margin-top: 10px ;
`;

export const bottonText = styled.div`
    background: #1D204B;
    border-color: #1D204B;
    border: none;
    outline: none;
    align-items: flex-start; 
    display: flex;
`;

// Cards CSS
export const CardMain = styled.div`
    display: flex;
    flex-direction: column;
  
    //Web
    width: 254px;
    height: 250px;
    
    @media(max-width: 1000px){
        //Mobile
        width: 100%;
        height: 167px;
        margin-left: 0px;
    }
    
    background: #FD8C64;
    border-radius: 25px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-top: 15px;
    align-items: flex-end;
    justify-content: center;
`;

export const Cards = styled.div`
    display: flex;
    width: 100%;
    height: 230px;
    border-radius: 20px;
    margin-top: -30px;
    flex-direction: column;
    cursor: pointer;
`;
  
export const Activitie = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 33px;
    margin-bottom: 15px;
    justify-content: space-between;
`;
  
export const Hours = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 55px;
    @media(max-width: 1000px){
        font-size: 36px; 
    }
    color: #FFFFFF;
`;
  
export const Past = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #5F659E;
    margin-top: 5px;
`;
  
export const Img = styled.img`
    margin-top: 43px;
`;
  
export const bottonTex = styled.div`
    background: #1D204B;
    border-color: #1D204B;
    border: none;
    outline: none;
    cursor: pointer;
    align-items: flex-start; 
    display: flex;
`;