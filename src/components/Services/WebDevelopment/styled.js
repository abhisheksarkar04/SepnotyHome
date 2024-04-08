import styled from "styled-components";

export const WebDevelopmentPage=styled.div`
background-color:rgba(12, 17, 31, 1);

`;
export const ServiceSpan=styled.span`
font-weight:normal;

`;
export const WebPageTitle=styled.h2`
font-size:17px;
color:white;
padding:80px 0px 10px 0px;
padding-left:6%;
@media screen and (max-width:576px){
  padding-left:3%;
  font-size:14px;
}
`;

export const WebHeading=styled.h1`
font-size:28px;
font-weight:700;
margin:10px 0px 15px 00px;
color:white;
padding-left:6%;
@media screen and (max-width:576px){
  padding-left:3%;
  font-size:16px;
}
`;
export const WebSectionTwo=styled.div`
display:flex;
margin-top:40px;
flex-wrap:wrap;
justify-content: center;
@media screen and (max-width:576px){
  margin-top:20px;
}

`;
export const WebSectionTwoHeading=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:24px;
margin:60px 0px 20px 0px;
padding-left:8%;
@media screen and (max-width:576px){
  font-size:18px;
  padding-left:10%;
}
`;
export const HeadingSpan=styled.span`
width:65px;
height:8%;
margin-top: -10px;
align-self: flex-start;
margin-left: 6%;
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
z-index:0;
@media screen and (max-width:576px){
  margin-left:3%;
  width:45px;
  height:6%;
}
`;
export const WebSectionTwoCardsCon=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
margin: 40px 0 40px 0;
padding-left:6%;
padding-right:6%;
@media screen and (max-width:576px){
  justify-content:center;
}
`;
export const ContactCon = styled.div`
background-color: rgba(0, 0, 0, 0.25);
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:576px){
    flex-direction:column;
  }
`;