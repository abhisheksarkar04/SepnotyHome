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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // You can access form data using `inputValue` and `selectedFile`
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Check if the selected file is a PDF
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      // Reset the selected file if it's not a PDF
      setSelectedFile(null);
      alert('Please select a PDF file.');
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <form onSubmit={handleSubmit}>
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
                  accept=".pdf"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                /><span>
                  {selectedFile && (
                    <p>&nbsp;&nbsp;Selected File: {selectedFile.name}</p>
                  )}</span>
              </ChooseFile>
              <LastButton type="submit">Send</LastButton>
            </Container1>
          </Container>
        </form>
      </ThemeProvider>
      <Mob>
        <FooterSection />
      </Mob>
    </>
  );
};

export default ApplyForm;
