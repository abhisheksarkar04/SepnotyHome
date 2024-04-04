import styled from "styled-components";

export const RequestCardCon=styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;
height: 50%;
align-items:center;
padding:0px 22px 10px 22px;
width:40%;
background-color:rgba(193, 202, 231, 1);
border-radius:10px;
margin:15px;

@media screen and (max-width:576px){
    width:43%;
    justify-content: space-between;
height:700px
    margin:3px;
    padding:7px;
}
`;

export const RequestImg=styled.img`
width:70px;
height:70px;
align-self:center;
margin-bottom:5px;
@media screen and (max-width:576px){
    width:50px;
    height:50px;
}
`;
export const RequestTitle=styled.h3`
color:rgba(43, 69, 155, 1);
margin-bottom:12px;
align-items:center;
font-size:20px;
@media screen and (max-width:576px){
    font-size:14px;
}
`;
export const RequestDescription=styled.p`
color:black;
font-size:15px;
width:90%;
margin-bottom:10px;
align-items:center;

@media screen and (max-width:576px){
    font-size:12px;
}
`;
export const RequestTxt=styled.h3`
color:rgba(43, 69, 155, 1);
font-size:15px;
margin-left:61%;
margin-top:30px;
@media screen and (max-width:576px){
    margin-left:15%;
    font-size:12px;
    margin-right:0px;
}
`;
