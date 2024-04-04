import styled from "styled-components";

export const MobSection=styled.div`
background-color:rgba(12, 17, 31, 1);
width:100%;
`;

export const WebPageTitle=styled.h2`
font-size:18px;
font-weight:600;
color:white;
padding: 100px 0px 10px 6%;
@media screen and (max-width: 576px) {
  font-size: 14px;
  padding: 60px 0px 10px 6%;
 
}
`;
export const WebSpan=styled.span`
color: #fff;
font-size: 16px;
font-weight: 400;
@media screen and (max-width: 576px) {
  font-size: 14px;
 
}
`;
export const WebHeading=styled.h1`
font-size: 30px;
font-weight:700;
padding-left: 6%;
margin:20px 0px 40px 0;
color:white;
@media screen and (max-width: 576px) {
  font-size: 16px;
 
}
`;

export const ServiceItemDetails = styled.div`
  margin: 80px 5% 20px 6%;
`;
export const SmallPattern = styled.div`
  background-color: rgba(129, 150, 219, 0.25);
  height: 55px;
  width: 60px;
  border-radius: 3px;
  @media screen and (max-width: 576px) {
    height: 45px;
    width: 50px;
   
  }
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const ListHeading = styled.h1`
  font-size: 25px;
  color: #89A4FF;
  font-weight: bold;
  margin-left: -28px;
  @media screen and (max-width: 576px) {
    width: 96%;
    font-size: 16px;
    margin-left: -20px;
   
  }
`;
export const ServiceItemDesc = styled.p`
  margin-bottom: 50px;
  font-size: 23px;
  color: #ffffff;
  width: 80%;
  margin-left: 2%;
  line-height: 1.5;
  text-align: ;
  @media screen and (max-width: 576px) {
    width: 90%;
    margin-left: 6%;
    font-size: 14px;
   
  }
`;

export const SpaceComponent = styled.div`
    margin: 30px 0px 200px 0px;
`;

export const ListItemSection = styled.ul`
 
 font-size: 20px; 
 font-weight: 900;
  margin: 40px 10% 0 5%;
  list-style-type: none;
  & > li {
    color: #89A4FF;
    display: list-item;
    line-height: 1.5;
    margin-left: 0px;
   
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 0px 0 0 -4%;
    & > li {
      color: #89A4FF;
      line-height: 1.5;
      margin-left: 0px;
     
    }
   
  }
   
`;
export const LearnPara1 = styled.p`
   color:#fff;
   font-weight: 1;
   width: 80%;
   font-size: 22px;
   margin-top:-10px;
   margin-bottom: 30px;
   @media screen and (max-width: 576px) {
    width: 90%;
    margin-left: 6%;
    font-size: 14px;
    text-align: left;
    margin-bottom: 0px;
   
  }
`;
export const ListHead = styled.h2`
   font-size: 22px;
   color: #89A4FF;
   margin-bottom: 15px;
   font-weight: 500;
   @media screen and (max-width: 576px) {
    width: 96%;
    font-size: 16px;
    margin-left: 6%;
    text-align: left;

   
  }
`;

export const OrderListSection = styled.ul`
  color:#fff;
  list-style-type: disc;
  margin: 0px 0 0 6%;
  & > li {
    color:#fff;
    display: list-item;
    line-height: 1.8;
    font-size: 22px;
    font-weight: 500;
   
  }
  @media screen and (max-width: 576px) {
    text-align: left;
    & > li{
      text-align: left;
      font-size: 14px;
      margin: -5px 0 0 0;
    }
  }
 
`;

export const LearnPara11 = styled.h2`
   margin-top:30px;
   color:#fff;
   margin-bottom: 100px;
   margin-left: 8%;
   font-size:22px;
   width: 70%;
   font-weight: 10;
   @media screen and (max-width: 576px) {
    margin-left: 12%;
    font-size:14px;
   width: 80%;
   margin-top:50px;
  }
   
`;