import {
  GlobalStyle,
  Container,
  CreatePostBtn,
  Container1,
  Title,
  Summary,
  ChooseFile,
  Button,
  NoFile,
  Container2,
  DropDown,
  /* H1Cont,
    Content, */
  LastButton,
  Event,
} from "./styled";

import { ThemeProvider } from "styled-components";
import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const StyledQuill = styled(ReactQuill)`
  /* Add your custom styles here */
  background-color: #d9d9d9;
  border-radius: 10px;
  border-bottom: 1px solid #2b459b;
  border-right: 1px solid #2b459b;
  border-left: 1px solid #2b459b;
  outline: none;
  font-size: 20px;

  .ql-editor {
    font-size: 16px;
    line-height: 1.5;
    border: none;
    color: #fff;
    border-radius: 10px;
    height: 70px; /* Adjust height as needed */
    padding: 10px;
    overflow-y: auto;
    outline: none;
  }
  .ql-container {
    border: none;
  }
  .ql-toolbar {
    border: 2px solid #000000;
    border-radius: 10px;

    /* Add border */
  }
  .ql-toolbar .ql-picker-label {
    font-size: 16px; /* Adjust font size for the toolbar buttons */
    font-weight: 600;
    color: #263238;
  }
`;

const theme = {};
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],

    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};

const CreateBlog = () => {
  const [value, setValue] = useState("");
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

  const options = [
    { value: "option1", label: "Select Type" },
    { value: "option2", label: "Banking IT" },
    { value: "option3", label: "Bigdata" },
    { value: "option4", label: "Business intelligent" },
    { value: "option5", label: "CIO Blog" },
    { value: "option3", label: "CRM" },
    { value: "option3", label: "Data Analytics" },
    { value: "option3", label: "Digtal Transformation" },
    { value: "option3", label: "Healthcare IT" },
    { value: "option3", label: "IT Consulting" },
    { value: "option3", label: "IT Service Mangement" },
    { value: "option3", label: "IOT" },
    { value: "option3", label: "Infotmation Security" },
    { value: "option3", label: "Mobile App development" },
    { value: "option3", label: "Orgnizational Platforms" },
    { value: "option3", label: "Software Development" },
    { value: "option3", label: "UI and UX Design" },
    { value: "option3", label: "Web Portal" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const selectStyle = {
    backgroundColor: "#d9d9d9",
    color: "black",
    padding: "8px",
    borderRadius: "10px",
    width: "200px",
  };
  const optionStyle = {
    backgroundColor: "#d9d9d9",
    color: "black",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Container1>
          <Title type="text" placeholder="Title" />

          <Event
            style={selectStyle}
            id="dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {options.map((option) => (
              <option style={optionStyle} value={option.value}>
                {option.label}
              </option>
            ))}
          </Event>

          <Summary type="text" placeholder="Enter Description " />
          <ChooseFile>
            <Button onClick={handleFileSelect}>Choose File</Button>

            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </ChooseFile>
          <Container2>
            <StyledQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
            />
          </Container2>
          <LastButton>Create Blog</LastButton>
        </Container1>
      </Container>
    </ThemeProvider>
  );
};
export default CreateBlog;
