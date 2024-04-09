import styled from "styled-components";

export const WebSectionOneCon=styled.div`
background-color:rgba(37, 73, 137, 1);
padding:40px 0px 0px 6%;
width:100%;
min-height: 40vh;
margin-bottom: 30px;
@media screen and (max-width: 576px) {
  min-height: 30vh;
  margin-bottom: 10px;
   
  }
`;
export const WebSectionOneHeading=styled.h2`
font-size: 30px;
color:white;

@media screen and (max-width: 576px) {
  font-size: 5vw;
   
  }
`;
export const WebSectionDescription=styled.p`
font-size:23px;
margin-top: 30px;
width: 60%;
color:white;
text-align: ;
@media screen and (max-width: 576px) {
    width: 90%;
    font-size: 3.5vw;
   
  }
`;
export const BackgroundShapeOne=styled.span`
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
width:170px;
height: 150px;
top: -90;
left:0;
margin-top: 140px;
z-index: -1;
@media screen and (max-width: 576px) {
  display:none;
 
}

`;
export const BackgroundShapeTwo=styled.span`
position:absolute;
width:250px;
height:350px;
margin-top: -80px;
margin-right:0px;
background-color:rgba(129, 150, 219, 0.25);
z-index:0;
top:-25;
right:0;
gap:0;
z-index:0;
@media screen and (max-width: 576px) {
  display:none;
 
}
`;