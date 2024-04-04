import styled from "styled-components";

export const OurWorkContainer = styled.div`
  background-color: #0c111f;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const OurWorkCard = styled.div`
  width: 40%;
  background-color: #dfe3f0;
  padding: 15px;
  border-radius: 8px;
  margin-left: 30%;
  box-shadow: rgba(43, 69, 155, 1);
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const OurWorkHeading = styled.h1`
  font-size: 20px;
  align-self: center;
  text-align: center;
  margin-bottom: 20px;
  color: #4c64b2;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const OurWorkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding: 0;
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const OurWorkServiceCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: 20px;
  box-sizing: border-box;
  width: 28%;
  height: 40%;
  @media screen and (max-width: 576px) {
    padding: 0;
    margin-left: 0;
    width: 50%;
  }
`;

export const OurWorkServiceImg = styled.img`
  width: 50px;
  height: 45px;
  align-self: center;
  margin-bottom: 20px;
`;

export const OurWorkGreenLine = styled.hr`
  height: 5px;
  border-radius: 7px;
  width: 131px;
  border: none;
  align-self: center;
  background-color: #2b459b;
`;

export const OurWorkServiceDetails = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const OurWorkDescription = styled.p`
  font-size: 15px;
  text-align: left;
  line-height: 18px;
  color: #b7b6bd;
  margin-left: 0;
  @media screen and (max-width: 576px) {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const OurWorkTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  line-height: 20px;
`;

export const OurWorkOur = styled.h2`
  color: white;
`;

export const OurWorkOurText = styled.span`
  background-color: #2b459b;
  color: #fff;
  padding: 2px 4px;
  border-radius: 9px 0 0 9px;
`;

export const OurWorkText = styled.span`
  color: #2b459b;
`;

export const OurWorkPara = styled.p`
  font-size: 22px;
  font-family: Roboto;
  color: #b7b6bd;
  line-height: 40px;
  margin-top: 30px;
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`;

export const OurWorkCardTitle = styled.h2`
  color: rgba(43, 69, 155, 1);
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const OurWorkButton = styled.button`
  padding: 10px;
  width: 150px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  background: rgba(43, 69, 155, 1);
  @media screen and (max-width: 576px) {
    border-radius: 10px;
  }
`;

export const OurWorkSideHeading = styled.h3`
  color: #263238;
  font-size: 18px;
  font-family: roboto;
  text-align: left;
  font-weight: 900;
  margin-top: 10px;
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const OurWorkThreeCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 576px) {
    padding: 0px;
    margin-bottom: 10px;
  }
`;

export const Details = styled.h4`
  font-weight: bold;
  color: black;
`;

export const Details2 = styled.h4`
  font-weight: 500;
  color: black;
`;

export const AdServRightDots = styled.img`
  position: absolute;
  right: 300px;
  margin-right: 57%;
  margin-top: -250px;
  height: 330px;
  width: 350px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
