import styled from "styled-components";

export const MobSection=styled.div`
background-color:rgba(12, 17, 31, 1);
width:100%;
@media screen and (max-width: 576px) {
  padding:30px 0px 0px 0;

}
`;

export const WebPageTitle=styled.h2`
font-size: 18px;
font-weight:600;
color:white;
padding:105px 0px 20px 6%;
@media screen and (max-width: 576px) {
  padding:50px 0px 20px 6%;
  font-size: 14px;
}
`;
export const WebSpan=styled.span`
color: #fff;
font-weight: 400;
`;
export const WebHeading=styled.h1`
font-size: 30px;
font-weight:700;
margin:10px 0px 15px 6%;
color:white;
@media screen and (max-width: 576px) {
  font-size: 16px;
  margin: 0px 0px 15px 6%;
}
`;

export const ServiceItemDetails = styled.div`
  margin: 80px 5% 20px 6%;
  @media screen and (max-width: 576px) {
    margin: 50px 0 20px 2%;
  }
`;
export const SmallPattern = styled.div`
  background-color: rgba(129, 150, 219, 0.25);
  height: 70px;
  width: 80px;
  border-radius: 3px;
  @media screen and (max-width: 576px) {
    height: 40px;
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
  margin-left: -25px;
  @media screen and (max-width: 576px) {
    font-size: 18px;
    margin-left: -22px;
  }
`;
export const ServiceItemDesc = styled.p`
  margin-bottom: 50px;
  font-size: 23px;
  color: #ffffff;
  width: 85%;
  margin-left: 4%;
  line-height: 1.3;
  text-align: ;
  @media screen and (max-width: 576px) {
    margin-left: 12%;
    width: 80%;
    font-size: 3vw;
  }
`;

export const SpaceComponent = styled.div`
`;