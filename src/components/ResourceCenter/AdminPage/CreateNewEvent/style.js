import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
 *{ box-sizing: border-box;
  margin: 0px;
  font-family: "Inter";
 }
`;

export const Container = styled.div`
  width: 100%;

  background-color: #0c111f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0 80px 0;
  align-items: center;

  ::placeholder {
    color: black;
  }
`;

export const CreatePostBtn = styled.button`
  background-color: #435aa7;
  color: white;
  align-self: flex-end;
  width: 300px;
  height: 40px;
  font-size: 16px;
  margin-bottom: 20px;
  border: none;
  margin: 0 140px 30px 0;
  border-radius: 7px;
  text-align: center;
`;

export const Container1 = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 33px;
  border: 1px solid white;
  margin-left: 50px;
  padding: 30px;
`;

export const Title = styled.input`
  height: 47px;
  width: 95%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 20px;
  align-items: start;
  padding-left: 30px;
  color: #263238;
  background-color: #d9d9d9;
  font-size: 20px;
  outline: none;
`;

export const Summary = styled.input`
  height: 65px;
  width: 95%;
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
  margin-top: 40px;
  background-color: #d9d9d9;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #435aa7;
  color: white;
  font-family: Sans-serif;
  font-size: 13px;
  border: none;
  padding: 7px 15px 7px 15px;
  border-radius: 5px;
`;

export const NoFile = styled.p`
  font-family: Sans-serif;
  font-size: 20px;
  color: black;
  padding-left: 10px;
  font-size: 20px;
`;

export const Container2 = styled.div`
  height: 250px;
  width: 95%;
  margin-top: 30px;
  border-radius: 3px;
  margin-left: 30px;
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
  margin-top: 40px;
  color: #2b459b;
  font-weight: bold;
  padding-left: 30px;
  background-color: #d9d9d9;
  font-size: 20px;
`;

export const ChooseFil = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Div1 = styled.div`
  height: 65px;
  width: 43%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 40px;
  background-color: #d9d9d9;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const DateInput = styled.input`
  height: 65px;
  width: 33%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 40px;
  background-color: #d9d9d9;
  color: #263238;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  padding-right: 10px;
`;
export const Dropdown = styled.input`
  height: 65px;
  width: 30%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 40px;
  background-color: #d9d9d9;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Div2 = styled.div`
  height: 65px;
  width: 43%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 40px;
  background-color: #d9d9d9;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Select = styled.select`
  height: 65px;
  width: 95%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 40px;
  background-color: #d9d9d9;
  color: #263238;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  outline: none;
  background-size: 100px 100px; /* Adjust icon size */
`;

export const TimeInput = styled.input`
  height: 65px;
  width: 33%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 40px;
  background-color: #d9d9d9;
  color: #263238;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  padding-right: 10px;
`;

export const LocationCon = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #d9d9d9;
`;
