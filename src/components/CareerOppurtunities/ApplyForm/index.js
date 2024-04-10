import {
  GlobalStyle,
  Container,
  Container1,
  Title,
  ChooseFile,
  Button,
  Header,
  Span,
  LastButton,
  List1,
  Mob,
} from "./styled";
import FooterSection from "../../Footer/FooterSection";
import { ThemeProvider } from "styled-components";
import React, { useState, useRef } from "react";
const theme = {};

const ApplyForm = () => {

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const buttonStyle = isActive ? 'active' : '';

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if (regex.test(value) && value.length <= 10) {
      setInputValue(value);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && inputValue.length > 0) {
      setInputValue(inputValue.slice(0, -1));
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <List1>
            <Header>
              Career Oppurunities &gt; <Span>Apply</Span>
            </Header>
          </List1>
          <Container1>
            <Title type="text" placeholder="Applicant Name" />
            <Title type="text" placeholder="E-Mail" />
            <Title
              type="tel"
              id="input"
              value={inputValue}
              onChange={handleChange}
              placeholder="Phone Number"
              maxLength={10}
              onKeyDown={handleKeyDown}
            />
            <ChooseFile>
              <Button onClick={handleFileSelect}>Choose File</Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileUpload}
              /><span>
              {selectedFile && (
                <p>&nbsp;&nbsp;Selected File: {selectedFile.name}</p>
              )}</span>
            </ChooseFile>

            <LastButton type="submit" onClick={handleClick}>Send</LastButton>
          </Container1>
        </Container>
      </ThemeProvider>
      <Mob>
        <FooterSection />
      </Mob>
    </>
  );
};

export default ApplyForm;
