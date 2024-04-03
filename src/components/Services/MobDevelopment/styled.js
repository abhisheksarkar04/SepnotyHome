import styled from "styled-components";
export const MobSection=styled.div`
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
  font-size:14px;
  padding-left:3%;
}
`;
export const WebHeading=styled.h1`
font-size:30px;
font-weight:700;
margin:10px 0px 15px 0px;
padding-left:6%;
color:white;
@media screen and (max-width:576px){
  font-size:16px;
  padding-left:3%;
}
`;
export const CapabilityHeading=styled.h2`
font-size:28px;
color:rgba(43, 69, 155, 1);
margin-top:50px;
margin-bottom:30px;
text-align:center;
@media screen and (max-width:576px){
  font-size:20px;
}
`;
export const AppDetailsContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px 0px 30px 0px;
padding-left:6%;
padding-right:6%;
@media screen and (max-width:576px){
  padding-left:3%;
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
