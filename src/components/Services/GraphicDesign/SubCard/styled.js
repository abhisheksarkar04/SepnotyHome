import styled from "styled-components";

export const SubCardSection=styled.div`
display:flex;
flex-direction:column;
padding:20px;
padding-top:70px 0px 60px 30px;
@media screen and (max-width:576px){
  padding:3%;
}
`;

export const SubHead=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:28px;
margin:60px 0px 20px 47px;
z-index:1;
padding-top:10px;
@media screen and (max-width:576px){
  font-size:16px;
  margin-left:8%;
  margin-top:30px;
}
`;
export const SubHeadSpan = styled.span`
  width: 65px;
  height: 8%;
  margin-top:0px;
  margin-left: 15px;
  position: absolute;
  background-color: rgba(129, 150, 219, 0.3); /* Adjust the alpha value as needed */
  z-index:0;
  @media screen and (max-width:576px){
    width:45px;
    height:6%;
    margin-left:0px;
  }
`;
export const SubPageImg=styled.img`
width:300px;
height:300px;
margin-bottom:10px;
margin-left:47px;
@media screen and (max-width:576px){
  width:200px;
height:200px;
  margin-left:8%;
  margin-bottom:0px;
}
`;
export const SubPara=styled.p`
font-size:20px;
margin:0px 0px 20px 47px;
color:white;
width:80%;
@media screen and (max-width:576px){
  font-size:14px;
  margin-left:8%;
}
`;
export const BackButton=styled.button`
color:rgba(43, 69, 155, 1);
border:none;
margin-right:95%;
cursor:pointer;
margin-left:47px;
font-size:40px;
`;
export const SubPageCardCon=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
background-color:rgba(217, 217, 217, 1);
border-radius:10px;
width:24%;
margin-top:25px;
margin-right:25px;
margin-left:30px;
padding:25px;
`;
export const SubCardText=styled.p`
font-size:20px;
color:black;
text-align:justify;
`;
