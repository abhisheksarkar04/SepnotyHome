import styled from "styled-components";

export const WebSectionOneCon=styled.div`
background-color:rgba(37, 73, 137, 1);
padding:40px 0px 20px 0px;
padding-left:6%;
width:100%;
min-height: 40vh;
@media screen and (max-width:576px){
    padding-left:3%;
    padding-top:10px;
  }
`;
export const WebSectionOneHeading=styled.h2`
font-size:26px;
color:white;
width:30%;
@media screen and (max-width:576px){
    width:50%;
    font-size:20px;
  }
`;
export const WebSectionDescription=styled.p`
font-size:24px;
margin-top:20px;
width:80%;
color:white;
text-align:justify;
@media screen and (max-width:576px){
    font-size:14px;
    width:90%;
}
`;
export const BackgroundShapeOne=styled.span`
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
width:170px;
height:250px;
top:7;
left:0;
z-index:0;
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
`;