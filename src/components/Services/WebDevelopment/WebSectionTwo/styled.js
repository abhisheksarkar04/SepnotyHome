import styled from "styled-components";

export const WebTechCardCon=styled.div`
display:flex;
flex-direction:column;
background-color:rgba(217, 217, 217, 1);
border-radius:10px;
width:30%;
justify-content: center;
margin-top:25px;
margin-right:10px;
@media screen and (max-width:576px){
    width:70%;
  }
`;
export const WebTechImg=styled.img`
width: 50px;
height: 70px;
align-self:center;
padding-top:20px;
margin-bottom: 10px;
`;
export const WebTechAbout=styled.p`
color:black;
text-align:left;
font-size:17px;
font-weight: 520;
padding:20px;
`;
export const WebTechButton=styled.button`
margin-bottom:0px;
padding-bottom:0px;
height:7vh;
cursor:pointer;
gap:0;
font-size: 20px;
font-weight: 600;
padding:8px;
border-radius:7px;
background-color:rgba(164, 164, 164, 1);
color:rgba(43, 69, 155, 1);
margin-top: auto;
`;