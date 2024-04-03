import styled from "styled-components";

export const SectionOneCon = styled.div`
  background-color: rgba(37, 73, 137, 1);
  padding: 60px 50px 60px 6%;
  color: white;
  @media screen and (max-width:576px){
    padding: 30px 50px 60px 3%;
  }
`;
export const SectionOneHeading = styled.h1`
  width: 30%;
  font-size: 30px;
  margin-bottom: 30px;
  @media screen and (max-width:576px){
    font-size: 20px;
    width:80%;
  }
`;
export const SectionOneTitle = styled.p`
  background-color: rgba(0, 32, 135, 1);
  display: inline;
  padding: 1px 2px 1px 2px;
  font-size: 24px;
  margin-bottom: 10px;
  @media screen and (max-width:576px){
    font-size: 16px;
    width: 60%;
  }
`;
export const SectionOneDescription = styled.p`
  width: 80%;
  font-size: 24px;
  line-height: 25px;
  margin-top: 30px;
  @media screen and (max-width:576px){
    font-size: 14px; 
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
    margin-top:17px;
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
    height:320px;
    margin-top: -50px;
  }
`;
