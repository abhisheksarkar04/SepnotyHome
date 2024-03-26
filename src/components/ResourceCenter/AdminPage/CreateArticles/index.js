import {
  GlobalStyle,
  Container,
  Container1,
  Title,
  Summary,
  ChooseFile,
  Button,
  Container2,
  LastButton,
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

const fonts = [
  "Arial",
  "Georgia",
  "Verdana",
  "Courier New",
  // Add more font styles as needed
];
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

const CreateArticles = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Container1>
          <Title type="text" placeholder="Title" />
          <Summary type="text" placeholder="Enter Description" />
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
          <LastButton>Create Articles</LastButton>
        </Container1>
      </Container>
    </ThemeProvider>
  );
};
export default CreateArticles;
