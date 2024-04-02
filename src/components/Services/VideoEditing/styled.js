import styled from "styled-components";

export const DigitalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
  padding-bottom: 20px;
  @media screen and (max-width: 576px) {
    padding-bottom: 0px;
    width: 100%;
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
  margin-top: 5%;
  @media screen and (max-width: 576px) {
    margin-top: 50px;
  }
`;

export const ItemCon = styled.div``;

export const ServiceItemDesc = styled.p`
  margin-bottom: 30px;
  font-size: 23px;
  color: #ffffff;
  width: 80%;
  line-height: 1.5;
  padding-left: 2.5%;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 90%;
    padding-left: 0;
    margin-left: 7%;
  }
`;

export const ImageCon = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding-left: 2.5%;
  @media screen and (max-width: 576px) {
    width: 50%;
    padding-left: 0px;
    margin-left: 7%;
  }
`;
export const ServiceItemImg = styled.img`
  width: 100%;
  margin: 0px;
`;

export const ServiceItemButton = styled.button`
  width: 100%;
  background-color: #a4a4a4;
  margin-top: -10px;
  color: #2b459b;
  font-size: 17px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: 10px 0 10px 0;
  @media screen and (max-width: 576px) {
    padding: 4px 0px 4px;
    font-size: 14px;
  }
`;

export const ServiceItemDetails = styled.div`
  margin-top: 20px;
  margin-right: 5%;
  margin: 20px 5% 4% 6%;
  @media screen and (max-width: 576px) {
    margin: 20px 5% 4% 3%;
  }
`;

export const ConatctCon = styled.div`
  background-color: #d4daf0;
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  width: 330px;
  height: 230px;
  border-radius: 7px;
  padding: 20px 15px 30px 30px;
  margin: 30px 1px 30px 01px;

  @media screen and (max-width: 576px) {
    width: 290px;
    margin: 10px 0px 10px 0px;
  }
`;

export const CardHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  flex-flow: wrap;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Logo = styled.img`
  height: 23px;
  width: 23px;

  border: 0px;
`;
export const PostHeading = styled.h1`
  color: #2b459b;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;
export const PostCon = styled.div`
  background-color: #000000;
  ${"" /*   //margin: 10px 7%; */}
  padding-top: 40px;
  border-radius: 5px;
  width: 80%;
  align-self: center;
  @media screen and (max-width: 576px) {
    padding: 20px 0px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const CardTitle = styled.p`
  color: #171717;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CardHeading = styled.h1`
  color: #000000;
  font-size: 15px;
  font-weight: 600;
`;
export const ToolsCon = styled.div`
  margin: 20px 5% 4% 5%;
`;

export const ToolsCardCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
  margin: 0 7% 0 8%;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ToolsCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  width: 380px;
  height: 230px;
  border-radius: 7px;
  padding: 30px 20px 30px 30px;
  margin: 30px 30px 30px 30px;
  @media screen and (max-width: 576px) {
    width: 290px;
    margin: 10px 0px 10px 0px;
    height: 270px;
  }
`;

export const ToolTitle = styled.h1`
  font-size: 16px;
  color: #000000;
  margin-left: 5px;
`;

export const CropBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 0, 0, 0.5);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;

export const TrimBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 255, 0.2);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;

export const EditerBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 255, 0, 0.3);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;

export const FocusBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(89, 235, 255, 0.5);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;
export const ClipBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(237, 169, 87, 0.4);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;

export const GradingBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(139, 74, 228, 0.53);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;

export const SmallPattern = styled.div`
  background-color: rgba(129, 150, 219, 0.25);
  height: 55px;
  width: 60px;
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
