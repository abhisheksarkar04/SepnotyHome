import styled from "styled-components";

export const ServiceCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 60px 0px 60px;
  justify-content: space-around;
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
    padding: 0px 0px 0px 0px;
    margin-left: 0px;
  }
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  background-color: #2b459b26;
  flex-direction: column;
  border: 1px solid #cecece;
  border-radius: 15px;
  padding: 25px;
  justify-content: center;
  text-align: center;
  width: 20%;
  height: 50vh;

  margin-bottom: 50px;
  transition: transform 0.3s, background-color 0.3s;
  &:hover {
    transform: scale(1.05); /* Zoom out effect */
    background-color: #254989; /* Change color on hover */
  }
  @media screen and (max-width: 576px) {
    width: 44%;
    margin: 10px;
    height: 280px;
    background-color: #d6dae7;
    border-radius: 5px;
    padding: 10px 0px;

    &: hover {
      p {
        color: #cbcbcb;
      }
    }
  }
`;

export const ServiceImg = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  align-self: center;
  @media screen and (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
`;
export const ServiceTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  color: #79a3ec;
  margin-bottom: 15px;
  ${ServiceCardContainer}:hover & {
    color: #fff;
  }
  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;
export const ServiceDescription = styled.p`
  font-size: 14px;
  color: #ab9f9f;
  font-weight: bold;
  line-height: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    line-height: 2;
    text-align: center;
    color: #263238;
    font-weight: 550;
    margin: 0px 5px;
    padding: 0px 2px;
    flex-grow: 1;
    word-spacing: 3px;
  }
`;
export const ServiceButton = styled.button`
  padding: 7px 10px 7px 10px;
  color: white;

  font-size: 15px;
  align-self: center;
  margin-top: 40px;
  background-color: #251989;
  border-radius: 30px;
  margin-top: 15px;
  transition: transform 0.3s, background-color 0.3s;
  ${ServiceCardContainer}:hover & {
    color: #254989;
    background-color: #fff;
  }

  &:hover {
    transform: scale(1.05); /* Zoom out effect */
  }
  @media screen and (max-width: 576px) {
    border-radius: 10px;
    padding: 7px 10px 7px 10px;
    font-size: 12px;
    margin-top: auto;
    background-color: #2b459b;
  }
`;

export const PopUpCardContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #254989;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  z-index: 2;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  color: white;
  @media screen and (max-width: 576px) {
    height: 60%;
    width: 40%;
    top: 50%;
    margin-left: -20%;
  }
`;
export const PopupLftRgt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const PopUpImg = styled.img`
  width: 60px;
  height: 60px;
  align-self: center;
  padding: 5px;
`;
export const PopRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  text-align: center;
  padding: 5px;
`;

export const PopUpTitle = styled.h2`
  font-size: 18px;
  color: white;
  @media screen and (max-width: 576px) {
    font-size: 80%;
  }
`;

export const PopUpDescription = styled.p`
  font-size: 14px;
  text-align: center;
  color: white;
  line-height: 20px;
  margin-top: 20px;
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`;

export const CloseButton = styled.button`
  padding: 7px 10px;
  color: white;
  background-color: #254989;
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
`;
export const PopupText = styled.p`
  font-size: 13px;
  color: white;
  line-height: 20px;

  text-align: justify;
  padding: 20px 35px 20px 35px;
  @media screen and (max-width: 576px) {
    font-size: 20%;
    padding: 10px 5px 0px 5px;
    line-height: 15px;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;
