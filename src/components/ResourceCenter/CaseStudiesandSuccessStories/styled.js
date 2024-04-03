import styled from "styled-components";

export const MobSection=styled.div`
background-color:rgba(12, 17, 31, 1);
width:100%;
`;

export const WebPageTitle=styled.h2`
font-size:18px;
font-weight:600;
color:white;
padding:105px 0px 10px 6%;
@media screen and (max-width: 576px) {
  font-size: 14px;
  padding:50px 0px 10px 6%;
}
`;
export const WebSpan=styled.span`
color: #fff;
font-weight: 400;
`;
export const WebHeading=styled.h1`
font-size: 30px;
font-weight:700;
margin: 30px 0px 35px 6%;
color:white;
@media screen and (max-width: 576px) {
  font-size: 16px;
  margin: 10px 0px 35px 6%;
}
`;

export const ServiceItemDetails = styled.div`
  margin: 80px 5% 20px 0;
  @media screen and (max-width: 576px) {
    margin: 40px 5% 10px 0;
  }
`;
export const SmallPattern = styled.div`
  background-color: rgba(129, 150, 219, 0.25);
  height: 55px;
  width: 60px;
  border-radius: 3px;
  position: absolute;
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
  margin-left: 6%;
  @media screen and (max-width: 576px) {
  }
`;

export const ListHeading = styled.h1`
  font-size: 25px;
  color: #89A4FF;
  font-weight: bold;
  margin-left: 28px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;
export const ServiceItemDesc = styled.p`
  margin-bottom: 100px;
  margin-top: 50px;
  font-size: 23px;
  color: #ffffff;
  width: 60%;
  margin-left: 8%;
  line-height: 1.5;
  text-align: ;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 85%;
    margin-bottom: 60px;
    margin-top: 30px;
    margin-left: 12%;
  }
`;

export const SpaceComponent = styled.div`
    margin: 30px 0px 200px 0px;
`;

export const ListItemSection = styled.ul`
 
 font-size: 20px; 
 font-weight: 900;
  margin-right: 10%;
  margin-left: 8.5%;
  list-style-type: none;
  & > li {
    color: #89A4FF;
    display: list-item;
    line-height: 1.5;
    margin-left:0;
   
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 0px 0 0 -4%;
    & > li {
      color: #89A4FF;
      line-height: 1.5;
      margin-left: 0px;
     
    }
   
  
   
`;
export const LearnPara1 = styled.p`
   color:#fff;
   font-weight: 1;
   font-size: 23px;
   width: 80%;
   margin-left: -4%;
   margin-top: -10px;
   margin-bottom: 30px;
   @media screen and (max-width: 576px) {
    width: 90%;
    margin-left: 6%;
    font-size: 14px;
    text-align: left;
    margin-bottom: 0px;
   
  }
`;
export const LearnPara2 = styled.p`
   color:#fff;
   font-weight: 1;
   font-size: 22px;
   width: 70%;
   margin-left: 8.3%;
   margin-top: 20px;
   margin-bottom: 60px;
   @media screen and (max-width: 576px) {
    margin-left: 12%;
    font-size:14px;
   width: 82%;
   margin-top: 20px;


  }
`;
export const ListHead = styled.h2`
   font-size: 25px;
   color: #89A4FF;
   margin-left: -4%;
   margin-top: 40px;
   margin-bottom: 15px;
   font-weight: 500;
   @media screen and (max-width: 576px) {
    width: 96%;
    font-size: 16px;
    margin-left: 6%;
    margin-top: 0px;
    text-align: left;

   
  }
`;

export const OrderListSection = styled.ul`
  color:#fff;
  list-style-type: disc;
 margin-left: 8%;
  margin-right: 0%;
  & > li {
    color:#fff;
    display: list-item;
    line-height: 1.8;
    font-size: 16px;
    font-weight: 500;
   
  }
 
`;

export const LearnPara11 = styled.h2`
   margin-top:30px;
   color:#fff;
   margin-bottom: 100px;
   margin-left: 10%;
   font-size:18px;
   width: 80%;
   font-weight: 10;
   
`;

export const ImgCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 8.2%;
  margin-top:20px;
  @media screen and (max-width: 576px) {
    margin-left: 12%;
    
  
  }
`;
export const InsertImg=styled.img`
height: 250px;
width: 300px;
margin-bottom: -49px;


`;
export const InsertImg1 =styled.img`
height: 250px;
width: 238px;
margin-bottom: -49px;

`;
export const WebTechButton = styled.button`
  cursor: pointer;
  gap: 0;
  padding: 8px;
  width: 299px;
  border-radius: 7px;
  background-color: rgba(217, 217, 217, 1);
  color: rgba(43, 69, 155, 1);
  margin-top: -236px; 
  margin-right: 8px;
  margin-left: -1px;
   
`;
export const WebTechButton1 = styled.button`
  cursor: pointer;
  gap: 0;
  padding: 8px;
  width: 239px;
  border-radius: 7px;
  background-color: rgba(217, 217, 217, 1);
  color: rgba(43, 69, 155, 1);
  margin-top: -236px; 
  margin-right: 8px;
  margin-left: -1px;
   
`;

export const Spacing =styled.div`
 padding: 20px 0 40px 0 ;

`;