import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
 *{ box-sizing: border-box;
  margin: 0px;
  font-family: "Inter";
 }
`;

export const Container = styled.div`
  width: 75%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreatePostBtn = styled.button`
  background-color: #435aa7;
  color: white;
  align-self: flex-end;
  font-size: 16px;
  margin-bottom: 20px;
  border: none;
  margin: 0 5% 30px 0;
  border-radius: 7px;
  text-align: center;
  padding: 10px 20px;
`;

export const Container1 = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 33px;
  border: 1px solid white;

  padding: 30px;
`;

export const Title = styled.input`
  height: 40px;
  width: 95%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 20px;
  align-items: start;
  padding-left: 30px;
  color: #263238;
  background-color: #d9d9d9;
  outline: none;
  border: none;
  font-size: 13px;
`;

export const Summary = styled.input`
  height: 65px;
  width: 90%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 40px;
  color: #263238;
  padding-left: 30px;
  background-color: #d9d9d9;
  outline: none;
  font-size: 20px;
`;

export const ChooseFile = styled.div`
  height: 65px;
  width: 95%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 10px;
  background-color: #d9d9d9;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  width: 90px;
  height: 30px;
  background-color: #d9d9d9;
  color: black;
  font-family: Sans-serif;
  font-size: 13px;
  border: 1px solid black;
`;


export const NoFile = styled.p`
  font-family: Sans-serif;
  font-size: 13px;
  color: black;
  padding-left: 10px;
`;

export const Container2 = styled.div`
  height: 250px;
  width: 95%;
  border: 1px solid #2b459b; /* Border color */
  margin-top: 15px;
  border-radius: 3px;
  margin-left: 30px;
  overflow: hidden; /* Ensures children don't exceed container */
  background-color: #d9d9d9; /* Remove background color */
  color: white;
`;

export const DropDown = styled.div`
margin-left:35px;
margin-bottom:209px;
  position:absolute;
  font-family: Sans-serif;
 
`;
export const H1Cont = styled.div`
  height: 35px;
  width: 1000px;
  background-color: #d9d9d9;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.p`
  font-family: Sans-serif;
  font-size: 10px;
  color: #263238;
  font-weight: bold;
`;

export const LastButton = styled.button`
  height: 40px;
  width: 95%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 15px;
  color: #2b459b;
  font-weight: bold;
  padding-left: 30px;
  background-color: #d9d9d9;
  font-size: 20px;
`;
