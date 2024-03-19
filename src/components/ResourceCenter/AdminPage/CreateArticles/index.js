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
} from "./styled";
import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

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
  .ql-container {
    border: none;
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
    <Container>
      <CreatePostBtn>Create New Articles</CreatePostBtn>
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
          <NoFile>{selectedFile ? selectedFile.name : "No file chosen"}</NoFile>
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
        <LastButton>Create Articles</LastButton>
      </Container1>
    </Container>
  );
};
export default CreateArticles;
