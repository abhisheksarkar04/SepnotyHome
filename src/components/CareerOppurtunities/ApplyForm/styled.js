import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
 *{ box-sizing: border-box;
  margin: 0px;
  font-family: "Inter";
  
 }
`;

export const Container = styled.div`
  width: 98%;
  background-color: rgba(12, 17, 31, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-top: 10px;

    padding-top: 140px;
    padding-bottom: 145px;
    padding-left: 3%;
  }
`;

export const Container1 = styled.div`
  margin-bottom: 40px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 33px;
  border: 1px solid white;

  padding: 30px;
  font-family: Sans-serif;
  font-size: 13px;
  padding-bottom: 50px;
  @media screen and (max-width: 576px) {
    width: 95%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;
export const List1 = styled.div`
  margin-top: 90px;

  @media screen and (max-width: 576px) {
    width: 90%;

    font-size: 13px;
    margin-top: 40px;
  }
`;

export const Title = styled.input`
  height: 65px;
  border-radius: 10px;
  font-family: Sans-serif;
  font-size: 15px;
  margin-top: 20px;
  align-items: start;
  padding-left: 30px;
  color: #263238;
  background-color: #d9d9d9;
  outline: none;
  border: none;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 48px;
    margin-top: 10px;
  }
`;

export const ChooseFile = styled.div`
  height: 80px;
  border-radius: 10px;
  margin-top: 15px;
  background-color: #d9d9d9;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 100%;
    padding-left: 10px;
    height: 50px;
  }
`;
export const Header = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  padding-bottom: 20px;
  margin-right: 950px;

  @media screen and (max-width: 576px) {
    font-size: 14px;

    margin: 0px;
  }
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Button = styled.button`
  background-color: transparent;
  color: #263238;
  font-size: 15px;
  border: none;
  padding: 10px 20px 10px 20px;
  border-radius: 2px;
  border: 1px solid #000000;

  @media screen and (max-width: 576px) {
    padding: 5px 10px 5px 10px;
    font-size: 12px;
  }
`;

export const NoFile = styled.p`
  font-family: Sans-serif;
  font-size: 13px;
  color: black;
  padding-left: 10px;
  background-color: transparent;

  @media screen and (max-width: 576px) {
    margin-left: 20px;
    font-size: 12px;
  }
`;

export const LastButton = styled.button`
  border-radius: 10px;
  margin-top: 20px;
  color: #ffffff;
  font-weight: bold;
  padding: 10px 0px;
  background-color: #0034db;
  font-size: 16px;

  @media screen and (max-width: 576px) {
    width: 95%;
    font-size: 14px;
  }
`;

export const Mob = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
