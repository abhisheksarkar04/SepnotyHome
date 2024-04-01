import styled from 'styled-components';

export const SectionOneCon=styled.div`
background-color: #2B459B;
padding:30px 50px 30px 6%;
color:white;
margin-bottom:40px;
`;
export const SectionOneHeading=styled.h1`
width:40%;
font-size: 30px;
margin-bottom:30px;
@media screen and (max-width: 600px) {
  width:90%;
  font-size: 20px;
}
`;

export const SectionOneDescription=styled.p`
width:60%;
font-size:25px;
margin-top:30px;
padding-top: 10px;
padding-bottom: 20px;
@media screen and (max-width: 600px) {
  width:90%;
  font-size:14px;
}
`;
export const IntroProposalText = styled.button`
border-radius: 30px;
background: linear-gradient(
  90deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(252, 252, 252, 0) 0%,
  rgba(252, 252, 252, 1) 0%,
  rgba(246, 251, 34, 1) 100%
);
color: rgba(35, 69, 129, 1);
height: 40px;
margin-top: 10px;
padding-left: 30px;
padding-right: 30px;
border: none;
font-family: "roboto";
cursor: pointer;
z-index: 0;
@media screen and (max-width: 576px) {
  height: 30px;
  align-self:center;
  padding-left: 20px;
  padding-right: 20px;
}
`;
export const BackgroundShapeOne=styled.span`
position: ;
background-color:rgba(129, 150, 219, 0.25);
width:170px;
height:250px;
top:7;
left:0;
z-index: ;
`;
export const BackgroundShapeTwo=styled.span`
position:absolute;
width:250px;
height:350px;
margin-top: -80px;
margin-right:0px;
background-color:rgba(129, 150, 219, 0.25);
z-index: -3;
top:-25;
right:0;
gap:0;
z-index:1;
`;