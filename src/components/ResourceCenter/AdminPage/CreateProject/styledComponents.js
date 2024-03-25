import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
 *{ box-sizing: border-box;
  margin: 0px;
  font-family: "Inter";
 }
`;

import "react-quill/dist/quill.snow.css";

export const Container = styled.div`
  width: 75%;
  background-color: #0c111f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0 80px 0;
  align-items: center;
`;

export const CreatePostBtn = styled.button`
  background-color: #435aa7;
  color: white;
  align-self: flex-end;
  width: 160px;
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
  font-size: 16px;
  border: none;
  ::placeholder {
    color: black;
  }
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
  font-size: 16px;
  border: none;

  ::placeholder {
    color: black;
  }
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
  background-color: #d9d9d9;
  color: #000000;
  font-family: Sans-serif;
  font-size: 16px;
  border: 1px solid #000000;
  padding: 7px 15px 7px 15px;
  border-radius: 2px;
  box-shadow: 0px 0px 6px rgba(10, 10, 10, 0.5);
`;

export const NoFile = styled.p`
  font-family: Sans-serif;
  color: black;
  padding-left: 10px;
  font-size: 16px;
`;
export const Container2 = styled.div`
  height: 250px;
<<<<<<< HEAD:src/components/ResourceCenter/AdminPage/NewPost/styledComponents.js
  width: 90%;
  border: none; /* Remove default border */
=======
  width: 95%;
  border: none;
>>>>>>> main:src/components/ResourceCenter/AdminPage/CreateProject/styledComponents.js
  margin-top: 30px;
  border-radius: 3px;
  margin-left: 30px;
  overflow: hidden; /* Ensures children don't exceed container */
  background-color: transparent; /* Remove background color */
  color: white;
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
  font-size: 20px;
  color: #263238;
  font-weight: bold;
`;

export const LastButton = styled.button`
  height: 40px;
  width: 95%;
  border-radius: 10px;
  margin-left: 35px;
  margin-top: -90px;
  color: #fff;
  font-weight: 550;
  padding-left: 30px;
  background-color: #2b459b;
  font-size: 20px;
`;
