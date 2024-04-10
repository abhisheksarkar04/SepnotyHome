import {
  GlobalStyle,
  Container,
  Container1,
  Title,
  ChooseFile,
  Button,
  NoFile,
  Header,
  Span,
  LastButton,
  Event,
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
    fileInputRef.current.click(); // Trigger file input when "Choose File" button is clicked
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);
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
            <Title type="tel" pattern="[\+]?[0-9]{2}[\s]?[0-9]{10}" maxLength="13" placeholder="Phone Number" />

            <ChooseFile>
              <Button onClick={handleFileSelect}>Choose File</Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
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
