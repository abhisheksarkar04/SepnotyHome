import styled from "styled-components";

export const DigitalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
  padding-bottom: 20px;

  @media screen and (max-width: 576px) {
    width:400px;
    height:1650px;
   
   
    }
`;
export const Header = styled.h1`
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  padding: 30px 20px 30px 5%;

  @media screen and (max-width: 576px) {
    font-size:14px;
   
    margin-bottom:-11px;
    padding-left:15px;
    }
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Service = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  padding: 10px 30px 20px 5%;

  @media screen and (max-width: 576px) {
    font-size:16px;
    padding-left:15px;
   
    }
`;

export const ContentRecomContainer = styled.div`
  background-image: linear-gradient(#1e3c72, #2a5298);
  padding: 10px 0px 4% 5%;

  
  @media screen and (max-width: 576px) {

    height:150px;
   
    }
`;

export const ConRecHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
  padding-top: 20px;

  @media screen and (max-width: 576px) {
    font-size:20px;
    padding-top:1px;
    width:336px;
    }
`;

export const ConRecDesc = styled.p`
  font-size: 25px;
  color: #ffffff;
  width:80%;
  padding: 20px 30px 30px 0px;

  @media screen and (max-width: 576px) {
    font-size:14px;
    padding-top:1px;
    width:500px;
    text-align:justify;
    margin:-22px;
    margin-left:0px;
    
    }

`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #ffffff, #fff741);
  padding: 5px 25px 5px 25px;
  border-radius: 20px;
  color: #234581;
  border: 0px;
  outline: none;
  font-size: 13px;
  margin-top: 20px;
`;

export const Rectangle1 = styled.img`
  position: absolute;
  right: 0;
  height: 68%;
  width: 38%;
  top: 12%;
  z-index: 0;

  
  @media screen and (max-width: 576px) {
    font-size:10px;
   margin:1px;
   height: 150px;
   z-index: 0;
   background:transparent;
   margin-top:130px;
   width: 190px;
   board-radius:2px;
   margin-inline: -130px;

    }
`;

export const Rectangle2 = styled.img`
  position: absolute;
  right: 17.6%;
  height: 80%;
  width: 60%;
  top: -5%;
  z-index: 0;

  @media screen and (max-width: 576px) {
    font-size:10px;
   margin:10px;
   height: 150px;
   z-index: 0;
   position: absolute;
   top:10%;
    }
`;

export const Rectangle3 = styled.img`
  position: absolute;
  left: 0%;
  height: 40%;
  width: 17%;
  top: 38%;
  z-index: 0;
  background:transparent;
  margun-bottom: 20px;

  @media screen and (max-width: 576px) {
    font-size:10px;
   margin:1px;
   height: 150px;
   z-index: 0;
   background:transparent;
   margin-top:-10px;
   width: 190px;
   board-radius:2px;
    }
`;

export const ListHeading = styled.h1`
  font-size: 25px;
  color: #2b459b;
  font-weight: bold;
  margin-left: -30px;
  margin-top:50px;

  @media screen and (max-width: 576px) {
    font-size:18px;
    margin:-30px;
    }
`;

export const ServiceItemCon = styled.div`
  margin-top: 5.9%;
`;
export const ServiceItemDesc = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ffffff;
  margin-top:50px;

`;

export const ImageCon = styled.div`
  width: 16%;
  margin: 0px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 576px) {
    height: 250px;
    width: 350px;
    margin:20px;
    margin-top: 480px;
  
    }
`;
export const ServiceItemImg = styled.img`
  width: 300px;
  margin-left: -140%;
  margin-top:120px;

  @media screen and (max-width: 576px) {

    height: 350px;
    width: 400px;
    margin:20px;
    margin-top: 240%;
    margin-inline: -330px;
    
    }
`;

export const ServiceItemButton = styled.button`
  width: 100%;
  background-color: #d9d9d9;
  margin-top: -13px;
  color: #2b459b;
  font-size: 15px;
  border-radius: 7px;
  padding: 3px 0 3px 0;
`;

export const ServiceItemDetails = styled.div`
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 5%;
  margin: 20px 5% 28px 10%;
`;

export const ConatctCon = styled.div`
  background-color: #d4daf0;
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallPattern = styled.div`
  background-color: rgba(129, 150, 219, 0.25);
  height: 50px;
  width: 60px;
  border-radius: 3px;
  margin-top:50px;

  @media screen and (max-width: 576px) {
    height: 40px;
    width: 50px;
    margin:20px;
    border-radius: 3px;
    }
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;
  margin-left: 5em;

  @media screen and (max-width: 576px) {
    font-size:10px;
   margin:0px;
    }
`;
