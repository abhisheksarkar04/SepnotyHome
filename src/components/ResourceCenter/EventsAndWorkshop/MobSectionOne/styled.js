import styled from "styled-components";

export const WebSectionOneCon=styled.div`
background-color:rgba(37, 73, 137, 1);
padding:40px 0px 0px 6%;
width:100%;
min-height: 40vh;

margin-bottom: 30px;

`;
export const WebSectionOneHeading=styled.h2`
font-size: 30px;
color:white;
width:30%;
@media screen and (max-width: 576px) {
  width: 96%;
  font-size: 20px;
 
}
`;
export const WebSectionDescription=styled.p`
font-size: 22px;
margin-top: 20px;
width: 70%;
color:white;
line-height: 1.3;
text-align:;
@media screen and (max-width: 576px) {
  width: 96%;
  font-size: 14px;
 
}
`;
export const BackgroundShapeOne=styled.span`
position: absolute;
background-color:rgba(129, 150, 219, 0.25);
width:200px;
height:150px;
z-index: -1;
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

export const Button = styled.button`
  background-image: linear-gradient(to right, #ffffff, #fff741);
  padding: 5px 25px 5px 25px;
  border-radius: 8px;
  color: #234581;
  border: 0px;
  height: 45px;
  width:180px;
  font-size: 22px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
  @media screen and (max-width: 576px) {
    height: 40px;
    width:120px;
    font-size: 18px;
    border-radius: 28px;
   
  }
`;