import styled from "styled-components";

export const BgContainer = styled.div`
  background-color: rgba(12, 17, 31, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px 30px 30px;
  @media screen and (max-width: 576px) {
    padding: 10px 0px 10px 0px;
    width: 100%;
  }
`;
export const CardListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px 10%;
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
    margin: 0px;
    padding: 0px 0px 0px 10px;
    justify-content: center;
  }
`;

export const Description = styled.p`
  font-family: "inter", sans-serif;
  font-size: 20px;
  color: #b7b6bd;
  width: 50%;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    padding: 0px 15px;
    line-height: 30px;
    font-weight: 500;
    width: 100%;
  }
`;

export const Our = styled.span`
  color: #ffffff;
  background-color: #2b459b;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding: 5px 10px;
  font-weight: 500;
`;

export const Devl = styled.span`
  color: #b7b6bd;
  font-weight: bold;
`;

export const Process = styled.span`
  color: #2b459b;
`;

export const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;
