import { ThemeProvider } from "styled-components";
import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

import {
  Container,
  CreatePostBtn,
  Container1,
  Title,
  Summary,
  ChooseFile,
  Button,
  NoFile,
  Container2,
  /* H1Cont,
  Content, */
  LastButton,
  GlobalStyle,
} from "./styledComponents";

const StyledQuill = styled(ReactQuill)`
  /* Add your custom styles here */
  background-color: #d9d9d9;
  border-radius: 5px;
  border: 0px solid transparent;
  outline: none;
  .ql-editor {
    font-size: 16px;
    line-height: 1.5;
    border: none;
    color: #fff;
    border-radius: 2px;
    background-color: #0c111f;
    height: 200px; /* Adjust height as needed */
    padding: 10px;
    overflow-y: auto;
    outline: none;
  }
  .ql-editor::before {
    color: rgba(255, 255, 255, 0.5); /* 50% opacity white */
  }
  .ql-container {
    border: 1px solid #2b459b;
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

const CreateProject = () => {
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
        <CreatePostBtn>Create New Project</CreatePostBtn>
        <Container1>
          <Title type="text" placeholder="Title" />
          <Summary type="text" placeholder="Project Summary" />
          <ChooseFile>
            <Button onClick={handleFileSelect}>Choose File</Button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <NoFile>
              {selectedFile ? selectedFile.name : "No file chosen"}
            </NoFile>
          </ChooseFile>
          <Container2>
            <StyledQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              placeholder="project Description"
            />
          </Container2>
          <LastButton>Create Post</LastButton>
        </Container1>
      </Container>
    </ThemeProvider>
  );
};
export default CreateProject;
