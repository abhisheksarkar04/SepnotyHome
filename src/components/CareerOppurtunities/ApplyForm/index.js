import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components"
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

const theme = {};

const ApplyForm = () => {
  const [applicantName, setApplicantName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");


  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setSelectedFileName(file.name);
      setErrorMessage(""); // Clear any previous error message
      console.log("Selected file:", file);
    } else {
      setSelectedFile("");
      setSelectedFileName("");
      setErrorMessage("Please upload only a PDF file.");
    }
  };

  const handleNameChange = (value) => {
    setApplicantName(value);
    if (value.trim() !== "") {
      setErrorMessage(""); // Clear error message when field becomes valid
    }
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    if (validatePhoneNumber(value)) {
      setErrorMessage(""); // Clear error message when field becomes valid
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (validateEmail(value)) {
      setErrorMessage(""); // Clear error message when field becomes valid
    }
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateForm = () => {
    if (!applicantName.trim()) {
      setErrorMessage("Please enter your full name");
      return false;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage("Please enter a valid 10-digit phone number");
      return false;
    }
    if (!selectedFile) {
      setErrorMessage("Please attach a file");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = new FormData();
    data.set("username", applicantName);
    data.set("email", email);
    data.set("phoneNumber", phoneNumber);
    data.set("files",selectedFile);

      alert("application sent")
      console.log("Form Data:", data);
      // Send formData to server or perform further actions
    }
  };

 
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <List1>
            <Header>
              Career Opportunities &gt; <Span>Apply</Span>
            </Header>
          </List1>
          <Container1>
            <Title
              type="text"
              placeholder="Applicant Name"
              value={applicantName}
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <Title
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
            <Title
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />

<ChooseFile>
              <Button onClick={handleFileSelect}>Choose File</Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />

              {selectedFileName && <P>{selectedFileName}</P>}
            </ChooseFile>
            
            <LastButton type="submit" onClick={handleSubmit}>
              Send
            </LastButton>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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

const P = styled.p`
margin-left:30px;
`
