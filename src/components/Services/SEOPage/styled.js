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
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  padding: 30px 20px 30px 6%;
  @media screen and (max-width: 576px) {
    padding: 10px 10px 10px 3%;
    font-size: 14px;
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
    padding: 10px 10px 20px 0;
    font-size: 14px;
    width: 90%;
  }
`;

export const Rectangle1 = styled.img`
  position: absolute;
  right: 0;
  height: 65%;
  width: 37%;
  top: 15%;
  z-index: 0;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Rectangle2 = styled.img`
  position: absolute;
  right: 16%;
  height: 78%;
  width: 60%;
  top: -1%;
  z-index: 0;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Rectangle3 = styled.img`
  position: absolute;
  left: 0%;
  height: 40%;
  width: 17%;
  top: 38%;
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
  margin-top: 6.8%;
`;
export const ServiceItemDesc = styled.p`
  margin-bottom: 23px;
  font-size: 23px;
  color: #ffffff;
  width: 80%;
  line-height: 1.5;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 90%;
  }
`;

export const ImageCon = styled.div`
  width: 25%;
  margin: 0px;
  display: flex;
  flex-direction: column;
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
  background-color: #d9d9d9;
  margin-top: -13px;
  color: #2b459b;
  font-size: 17px;
  border-radius: 7px;
  padding: 7px 0 7px 0;
`;

export const ServiceItemDetails = styled.div`
  margin: 20px 5% 20px 8.2%;
  @media screen and (max-width: 576px) {
    margin: 20px 5% 20px 8.8%;
  }
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
  height: 50px;
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
  margin-bottom: 0px;
  margin-left: 5em;
  @media screen and (max-width: 576px) {
    margin-left: 3%;
  }
`;

export const SeoItemsCon = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SeoItemsList = styled.ul`
  margin: 10px 0px 10px 0px;
  padding: 0px;
  list-style-type: disc;
  line-height: 1.5;
`;

export const SeolistItem = styled.li`
  font-size: 23px;
  color: #ffffff;
  margin-left: 9.5%;
  padding-right: 7%;
  width: 80%;
  @media screen and (max-width: 576px) {
    margin-left: 13%;
    font-size: 14px;
    width: 90%;
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
  @media screen and (max-width: 555px) {
    flex-direction: column;
    padding: 10px;
  }
`;
