import styled from "styled-components";

export const MobSection=styled.div`
background-color:rgba(12, 17, 31, 1);
width:100%;
@media screen and (max-width: 576px) {
  
  padding:30px 0px 0px 0;
}
`;
export const WebPageTitle=styled.h2`
font-size:18px;
font-weight:600;
color:white;
padding: 100px 0px 20px 6%;
@media screen and (max-width: 576px) {
  font-size: 3vw;
  padding: 50px 0px 20px 6%;
 
 
}
`;
export const WebSpan=styled.span`
color: #fff;
font-weight: 400;
`;
export const WebHeading=styled.h1`
font-size: 30px;
font-weight:700;
padding-left: 6%;
margin:10px 0px 15px 0;
color:white;
@media screen and (max-width: 576px) {
  font-size: 4vw;
  margin: 0px 0px 15px 0;
 
}
`;
export const CapabilityHeading=styled.h2`
font-size:24px;
color:rgba(43, 69, 155, 1);
margin-top:50px;
margin-bottom:30px;
text-align:center;
`;
export const AppDetailsContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px 0px 30px 6%;
`;

export const MainHeading = styled.h2`
font-size: 25px;
color: #89A4FF;
font-weight: bold;
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
  padding-left: 6%;

  @media screen and (max-width: 576px) {
    padding-left: 3%;
    padding-top: 20px;
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


export const ListItemssSection = styled.ol`
 
 font-size: 25px; 
 font-weight: 900;
  margin-right: 20%;
  margin-left: 7%;
  margin-bottom: 60px;
  color: #89A4FF;
  & > li {
    color: #89A4FF;
    display: list-item;
    line-height: 1.5;

   
  }
  @media screen and (max-width: 576px) {
    font-size: 4vw;
  }
   
`;
export const LearnPara1 = styled.p`
   color:#fff;
   font-weight: 10;
   font-size: 23px;
   margin-top: 20px;
   margin-left: -2%;
   @media screen and (max-width: 576px) {
    font-size:14px;
  }
   
`;
export const LearnPara3 = styled.p`
   color:#fff;
   font-weight: 10;
   font-size:23px;
   margin-left: 6%;
   margin-top: 20px;
   
`;
export const ListHead = styled.h2`
   color: #89A4FF;
   font-size: 25px;
   font-weight: 100;
   margin-top: 20px;
   @media screen and (max-width: 576px) {
    font-size: 4vw;
  }
`;

export const LearnPara = styled.p`
  font-size:23px;
  font-weight: 0; 
  line-height:1.3;
  color: #FFF;
  width:72%;
  text-align:left;
  margin-left: 8%;
  margin-bottom: 40px;
  @media screen and (max-width: 576px) {
    margin-left: 14%;
    font-size:3vw;
    width:82%;
    margin-bottom: 20px;
  }

`;

export const OrderListSection = styled.ol`
  color:#fff;
  list-style-type: decimal;
 margin-left: 7%;
  & > li {
    color:#fff;
    display: list-item;
    line-height: 1.9;
    font-size: 23px;
    font-weight: 400;
  }
  @media screen and (max-width: 576px) {
    margin-left: 10%;
    & > li {
      color:#fff;
      display: list-item;
      line-height: 1.9;
      font-size: 3vw;
      font-weight: 400;
    }
   
  }
`;


export const LearningListSection = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: center;

`;

export const LearningPathImg1 = styled.img`
height:240px;
width: 400px;
margin: 20px 0 60px 6%;
@media screen and (max-width: 576px) {
width: 80vw;
margin: 20px 0 60px 6%;
}

`;