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
} from "./style";

import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const StyledQuill = styled(ReactQuill)`
    /* Add your custom styles here */
    background-color: #d9d9d9;
    border-radius: 8px;
    border: 0px solid transparent;
    .ql-editor {
      font-size: 16px;
      line-height: 1.5;
      border: 0px solid transparent;
      color: #333;
      border: none;
      border-radius: 8px;
      background-color: #d9d9d9;
      height: 200px; /* Adjust height as needed */
      padding: 10px;
      overflow-y: auto;
    }
  `;

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

const CreateReport = () => {

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
    <Container>
      <Container1>
        <Title type="text" placeholder="Title" />
        <ChooseFile>
          <Button onClick={handleFileSelect}>Choose File</Button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <NoFile>No file Chosen</NoFile>
        </ChooseFile>
        <LastButton>Create Report</LastButton>
      </Container1>
    </Container>
  );
};
export default CreateReport;
