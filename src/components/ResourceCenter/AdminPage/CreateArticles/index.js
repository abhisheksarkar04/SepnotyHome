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
  border: none;
  border-radius: 0;
  height: 100%;
  padding: 0;
  border-radius: 10px;
  .ql-editor {
    background-color: #0c111f;
    color: rgb(100%, 100%, 100%);
    height: 100%;
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
