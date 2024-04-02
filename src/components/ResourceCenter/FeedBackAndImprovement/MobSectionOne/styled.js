import styled from "styled-components";

export const WebSectionOneCon=styled.div`
background-color: #2B459B;
padding:40px 0px 0px 6%;
width: 100%;
min-height: 40vh;
margin-bottom: 30px;
@media screen and (max-width: 576px) {
  min-height: 30vh;
}
`;
export const WebSectionOneHeading=styled.h2`
font-size:30px;
color:white;
width:30%;
@media screen and (max-width: 576px) {
  font-size: 20px;
}
`;
export const WebSectionDescription=styled.p`
font-size:22px;
margin-top:60px;
width: 65%;
color: #fff;
text-align: ;
@media screen and (max-width: 576px) {
    font-size: 14px;
    width: 85%;
    margin-top: 20px;
  }
`;
export const BackgroundShapeOne=styled.span`
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
width:200px;
height:220px;
top:7;
left:0;
bottom:20;
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