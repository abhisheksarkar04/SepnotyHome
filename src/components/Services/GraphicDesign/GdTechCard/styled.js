import styled from "styled-components";
export const AppCardCon=styled.div`
display:flex;
flex-direction:column;
padding-left:2%;
margin-bottom:30px;
@media screen and (max-width:576px){
  padding:0px;
}
`;
export const WebSectionTwoHeading=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:24px;
margin:0px 0px 20px 0px;
padding-left:3%;
@media screen and (max-width:576px){
  font-size:16px;
  margin-left:2%;
}
`;
export const HeadingSpan=styled.span`
width:65px;
height:8%;
margin-top: -8px;

position:absolute;
background-color:rgba(129, 150, 219, 0.25);
z-index:0;
@media screen and (max-width:576px){
  width:45px;
  margin-left:0px;
}
`;
export const AppAbout=styled.p`
font-size:24px;
padding-left:3%;
color:white;

margin-top:15px;
margin-bottom:15px;
@media screen and (max-width:576px){
  font-size:14px;
  margin-left:2%;
}
`;
export const ImgCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  position: relative; /* Add this line */
  justify-content: flex-end; /* Add this line */
  
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
  background-color: rgba(164, 164, 164, 1);
  color: rgba(43, 69, 155, 1);
  margin-top: -20px; 
   
`;