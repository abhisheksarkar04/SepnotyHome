import styled from "styled-components";
export const ExpertCardContainer=styled.div`
 display:flex;
 flex-direction:row;
 width:30%;
 margin-right:16%;
 margin-bottom:20px;
 @media screen and (max-width:576px){
    width:100%;
    margin:0px;
    margin-bottom:20px;
 }
`;
export const ExpertImg=styled.img`
width:40px;
height:40px;
margin-left:35px;
`;
export const ExpertAbout=styled.p`
font-size:19px;
color:white;
margin-left:15px;
line-height:22px;
`;