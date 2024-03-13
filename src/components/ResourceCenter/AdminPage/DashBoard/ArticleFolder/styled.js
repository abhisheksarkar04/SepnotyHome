import styled from "styled-components";

export const Container=styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
align-items: center;

`;


export const Image=styled.img`
height:60px;
width:60px;

`;
export const EditTool=styled.img`
height: 26px;
width: 22px;

`;
export const ContentSection=styled.div`
display:flex;
flex-direction:row;

`;


export const Description=styled.p` 
font-family:Sans-serif;
font-size:17px;
color:white;
width:300px;

text-align:start;
margin: 0px 0px 0 15px;

`;
export const IconViews=styled.div`
display:flex;
flex-direction:row;
padding-left:60px;
align-items: center;
`;

export const Icon=styled.img`
height:8px;
width:12px;
color:#959595;
margin-top:0px;

`;

export const Views=styled.p`
font-family:roboto;
font-size: 12px;
color:#959595;
padding-left:10px;
`;