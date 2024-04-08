import styled from "styled-components";

export const WebSectionOneCon = styled.div`
  background-color: rgba(37, 73, 137, 1);
  padding: 40px 0px 20px 6%;
  width: 100%;
  min-height: 40vh;
  @media screen and (max-width:576px){
    padding-top:20px;
    padding-left:4%;
  }
`;
export const WebSectionOneHeading = styled.h2`
  font-size: 30px;
  color: white;
  width: 30%;
  @media screen and (max-width:576px){
    font-size:20px;
    width: 80%;
  }
`;
export const WebSectionDescription = styled.p`
  font-size: 25px;
  margin-top: 20px;
  width: 70%;
  color: white;
  text-align: justify;
  @media screen and (max-width:576px){
    font-size:14px;
    width: 90%;
  }
`;
export const BackgroundShapeOne = styled.span`
  position: absolute;
  background-color: rgba(129, 150, 219, 0.25);
  width: 170px;
  height: 250px;
  top: 7;
  left: 0;
  z-index: 0;
  @media screen and (max-width:576px){
    display:none;
  }
`;
export const BackgroundShapeTwo = styled.span`
  position: absolute;
  width: 250px;
  height: 350px;
  margin-top: -80px;
  margin-right: 0px;
  background-color: rgba(129, 150, 219, 0.25);
  z-index: 0;
  top: -25;
  right: 0;
  gap: 0;
  z-index: 0;
  @media screen and (max-width:576px){
    display:none;
  }
`;
