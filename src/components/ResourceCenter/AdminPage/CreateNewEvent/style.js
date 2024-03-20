import styled from "styled-components";
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

  padding: 10px 0 80px 0;

  align-items: center;

  ::placeholder {
    color: black;
  }
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

  height: 50px;

  border-radius: 10px;
  margin-top: 20px;
  align-items: start;
  padding-left: 30px;
  color: ;
  color: #263238B2(25, 0, 0, 0.1);
  background-color: #d9d9d9;
  font-size: 16px;
  outline: none;
  border: none;
`;

export const Summary = styled.input`
  height: 65px;
  border-radius: 10px;
  margin-top: 30px;
  color: #263238;
  padding-left: 30px;
  background-color: #d9d9d9;
  outline: none;
  font-size: 20px;
`;

export const ChooseFile = styled.div`
  height: 65px;

  border-radius: 10px;

  margin-top: 20px;
  background-color: #d9d9d9;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
`;

export const Button = styled.button`

  background-color: transparent;
  color: #263238;
  font-size: 15px;
  border: none;
  padding: 10px 20px 10px 20px;
  border-radius: 2px;
  border: 1px solid #000000;

`;

export const NoFile = styled.p`
  font-family: Sans-serif;
  font-size: 16px;
  color: black;
  padding-left: 10px;
  font-size: 20px;
`;

export const Container2 = styled.div`

  margin-top: 30px;
  border-radius: 3px;
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

  border-radius: 10px;
  margin-top: 20px;
  color: #ffffff;
  font-weight: bold;
  padding: 10px 0px;
  background-color: #2b459b;

 
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

  margin-top: 40px;
  background-color: #d9d9d9;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const DateInput = styled.input`
  height: 55px;
  width: 35%;
  border-radius: 10px;

  margin-top: 30px;
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


  border-radius: 10px;

  margin-top: 30px;
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
height: 55px;
width: 35%; 
  border-radius: 10px;
  margin-left: 35px;
  margin-top: 30px;
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


