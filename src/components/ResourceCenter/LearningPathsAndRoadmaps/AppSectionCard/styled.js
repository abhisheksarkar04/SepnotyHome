import styled from "styled-components";
export const AppCardCon=styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:75%;
margin-bottom:30px;
margin-top: 40px;
@media screen and (max-width: 576px) {
  width: 95%;
  padding: 0px;
  margin-left: -28px;
 
}
`;
export const WebSectionTwoHeading=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:25px;
margin: 5px 0px 20px 40px;
@media screen and (max-width: 576px) {
  width: 100%;
  font-size: 3.2vw;
 
}
`;


export const SmallPattern = styled.div`
  background-color: rgba(129, 150, 219, 0.25);
  height: 55px;
  width: 60px;
  border-radius: 3px;
  @media screen and (max-width: 576px) {
    height: 40px;
    width: 45px;
  }
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding-left: ;

  @media screen and (max-width: 576px) {
    padding-left: 3%;
  }
`;
export const ListHeading = styled.h1`
  font-size: 25px;
  color: #2b459b;
  font-weight: bold;
  margin-left: -29px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin-left: -20px;
  }
`;

export const HeadingSpan=styled.span`
width:60px;
height:55px;
margin-top: -6px;
margin-left:10px;
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
z-index:0;
@media screen and (max-width: 576px) {
  height: 5vh;
  width: 10vw;
  margin-left:10px;

 
}
`;
export const AppAbout=styled.p`
font-size:23px;
width: 90%;
color:white;
margin-left:40px;
margin-top:15px;
margin-bottom:15px;
line-height:1.6;
@media screen and (max-width: 576px) {
  width: 100%;
  font-size: 3vw;

 
}
`;
export const ImgCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  position: relative; /* Add this line */
  justify-content: flex-end; /* Add this line */
  margin-left: 40px;
  margin-top:20px;
  @media screen and (max-width: 576px) {
    width: 70%;
   
  
   
  }
`;
export const InsertImg=styled.img`
height:230px;
@media screen and (max-width: 576px) {
  

  height:25vh;
}

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
   
`;