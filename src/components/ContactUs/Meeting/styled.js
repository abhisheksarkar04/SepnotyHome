import styled from "styled-components";

export const BottomCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6% 0% 5%;
  margin-bottom: 0px;
  width: 35%;
  margin: 0px;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const BottomHeading = styled.h1`
  font-size: 20px;
  color: #2b459b;
  font-weight: bold;
  text-align: center;
  line-height: 1.75em;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1.5em;
    padding: 0px;
    width: 70%;
  }
`;

export const BottomDesc = styled.p`
  color: #b7b6bd;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5em;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
    text-align: justify;
    margin: 0px 10px;
  }
`;

export const Button = styled.button`
  background-color: #254989;
  color: #ffffff;
  padding: 10px 20px 10px 20px;
  border-radius: 15px;
  border-width: 0px;
  align-self: center;
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 100%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
