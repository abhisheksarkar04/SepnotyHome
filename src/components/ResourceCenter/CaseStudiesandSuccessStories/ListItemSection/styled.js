import styled from "styled-components";

export const ServiceItemDetails = styled.div`
  margin: 80px 5% 20px 4%;
  @media screen and (max-width: 576px) {
    margin: 40px 5% 20px 4%;
  
  }
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
  margin-left: 2%;
`;
export const ListHeading = styled.h1`
  font-size: 25px;
  color: #89A4FF;
  font-weight: bold;
  margin-left: -30px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin-left: -20px;
  
  }
`;
export const ServiceItemDesc = styled.p`
  margin-bottom: 50px;
  font-size: 23px;
  margin-top: 20px;
  color: #ffffff;
  width: 80%;
  margin-left: 4%;
  line-height: 1.5;
  text-align: ;
  @media screen and (max-width: 576px) {
    font-size: 3vw;
    width: 90%;
    margin-left: 9%;
  }
`;