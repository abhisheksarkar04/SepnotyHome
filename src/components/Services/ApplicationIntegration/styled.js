import styled from "styled-components";

export const DigitalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
  padding-bottom: 20px;
  @media screen and (max-width: 576px) {
    padding-bottom: 0px;
  }
`;
export const Header = styled.h1`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  padding: 30px 20px 30px 6%;
  @media screen and (max-width: 576px) {
    padding: 10px 10px 10px 3%;
  }
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Service = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  padding: 10px 30px 20px 6%;
  @media screen and (max-width: 576px) {
    padding: 0px 10px 10px 3%;
    font-size: 16px;
  }
`;

export const ContentRecomContainer = styled.div`
  background-image: linear-gradient(#1e3c72, #2a5298);
  padding: 10px 0px 4% 6%;
  @media screen and (max-width: 576px) {
    padding: 5px 10px 0px 3%;
    height: 200px;
  }
`;

export const ConRecHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
  padding: 30px 0px 20px 0px;
  @media screen and (max-width: 576px) {
    padding: 0px 10px 0px 0;
    font-size: 20px;
  }
`;

export const ConRecDesc = styled.p`
  font-size: 25px;
  color: #ffffff;
  width: 70%;
  padding: 0px 30px 30px 0px;
  @media screen and (max-width: 576px) {
    padding: 10px 0px 20px 0;
    font-size: 14px;
    width: 90%;
  }
`;

export const Rectangle1 = styled.img`
  position: absolute;
  right: 0;
  height: 70%;
  width: 37%;
  top: 15vh;
  z-index: 0;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Rectangle2 = styled.img`
  position: absolute;
  right: 17.5vw;
  height: 80%;
  width: 60%;
  top: -1vh;
  z-index: 0;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Rectangle3 = styled.img`
  position: absolute;
  left: 0%;
  height: 62%;
  width: 18.7%;
  top: 32vh;
  z-index: 0;
  @media screen and (max-width: 576px) {
    display: none;
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

export const ServiceItemCon = styled.div`
  margin-top: 8%;
  padding-left: 6%;
  @media screen and (max-width: 576px) {
    padding-left: 3%;
    margin-top: 50px;
  }
`;

export const ItemCon = styled.div``;

export const ServiceItemDesc = styled.p`
  margin-bottom: 5px;
  font-size: 23px;
  color: #ffffff;
  width: 80%;

  padding-left: 6%;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 95%;
    padding-left: 6.5%;
  }
`;

export const ImageCon = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    width: 50%;
  }
`;
export const ServiceItemImg = styled.img`
  width: 100%;
  margin: 0px;
`;

export const ServiceItemButton = styled.button`
  width: 100%;
  background-color: #a4a4a4;
  margin-top: -13px;
  color: #2b459b;
  font-size: 17px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: 10px 0 10px 0;
`;

export const ServiceItemDetails = styled.div`
  margin: 20px 5% 4% 0%;
`;

export const ConatctCon = styled.div`
  background-color: #d4daf0;
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 5px;
`;

export const CorporateItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6%;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    padding-left: 3%;
  }
`;

export const BackButton = styled.button`
  color: rgba(43, 69, 155, 1);
  border: none;
  cursor: pointer;
  font-size: 30px;
  margin-right: 95%;
`;
export const QueryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
  margin: 0px;
  padding: 50px 0px;
  background-color: rgba(12, 17, 31, 1);
  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 10px 0px;
  }
`;
