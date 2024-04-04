import styled from "styled-components";

export const Expert = styled.div`
display:flex;
flex-direction:column;
padding:10px 20px 10px 40px;
@media screen and (max-width:576px){
    width:100%;
    padding:0px;
    margin:0px;
}
`;
export const ExpHeading=styled.h2`
font-size:24px;
color:rgba(43, 69, 155, 1);
margin-bottom:30px;
margin-left:35px;
margin-top:10px;
@media screen and (max-width:576px){
    font-size:16px;
    margin-left:3%;
  }

`;
export const ExpText=styled.p`
color:white;
font-size:20px;
line-height:1.5;
margin-bottom:15px;
margin-left:37px;
padding-top:5px;
@media screen and (max-width:576px){
    font-size:14px;
    margin-left:3%;
  }
`;
export const ExpImgRole=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:25%;
@media screen and (max-width:576px){
    width:60%;
}
`;
export const ExpImg=styled.img`
width:45px;
height:45px;
margin-left:37px;

`;
export const ExpRole=styled.div`
display:flex;
flex-direction:column;
margin-bottom:17px;
`;
export const ExpName=styled.p`
font-weight:600;
color:white;
font-size:17px;
margin-bottom:4px;
@media screen and (max-width:576px){
    font-size:14px;
  }
`;
export const ExpRol=styled.p`
font-size:17px;
color:white;
@media screen and (max-width:576px){
    font-size:14px;
  }
`;
export const TransparentBg=styled.span`
width:65px;
height:8%;
margin-left:0px;
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
z-index:0;
border-radius:3px;
`;