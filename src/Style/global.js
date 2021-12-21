import styled from 'styled-components'

export const HeaderMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    //web
    width: 254px;
    height: 516px;
    @media(max-width: 1000px){
        //mobile 
        width: 346px;
        height: 210px;
        margin-top: 50px;
    }
    background: #1D204B;
    border-radius: 20px;
    padding-bottom: 15px;
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
        margin-left: 15px;
        margin-right: 15px;
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
        font-size: 25px;
    }
    color: #FFFFFF;
    margin-bottom: 66px;
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
        width: 346px;
        height: 200px;
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