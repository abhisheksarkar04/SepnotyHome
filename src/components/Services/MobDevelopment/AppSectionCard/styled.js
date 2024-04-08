import styled from "styled-components";
export const AppCardCon=styled.div`
display:flex;
flex-direction:column;

margin-bottom:30px;
`;
export const WebSectionTwoHeading=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:26px;
margin:0px 0px 20px 0px;
padding-left:2%;
@media screen and (max-width:576px){
  font-size:16px;
  padding-left:6%;
}
`;
export const HeadingSpan=styled.span`
width:65px;
height:8%;
margin-top:-9px;
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
z-index:0;
@media screen and (max-width:576px){
  width:45px;
  height:6%;
}
`;
export const AppAbout=styled.p`
font-size:24px;
line-height:26px;

color:white;
padding-left:2%;
margin-top:18px;
margin-bottom:18px;
@media screen and (max-width:576px){
  font-size:14px;
  padding-left:6%;
}
`;
export const ImgCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  position: relative; /* Add this line */
  justify-content: flex-end; /* Add this line */
  padding-left:2%;
  @media screen and (max-width:576px){
    width: 50vw;
    padding-left:6%;
  }
`;
export const InsertImg=styled.img`

`;
export const WebTechButton = styled.button`
  margin-bottom: 0px;
  padding-bottom: 0px;
  cursor: pointer;
  gap: 0;
  padding: 8px;
  border-radius: 7px;
  background-color: rgba(217, 217, 217, 1);
  color: rgba(43, 69, 155, 1);
  margin-top: -20px; 
  height:6vh;
   font-size:18px;
   font-weight:500;
   @media screen and (max-width:576px){
    height:4vh;
    font-size:16px;
    margin-top: -15px; 
    padding:5px;
   }
`;