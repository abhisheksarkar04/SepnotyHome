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
} from "./styled";

import { ThemeProvider } from "styled-components";
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
    background-color: #d9d9d9;
    height: 200px; /* Adjust height as needed */
    padding: 10px;
    overflow-y: auto;
    outline: none;
  }
  .ql-container {
    border: none;
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
    { value: 'option1', label: 'Select work mode' },
    { value: 'option2', label: 'Hybrid' },
    { value: 'option3', label: 'On site' },
    { value: 'option4', label: 'Work From Home' },



  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const selectStyle = {

    backgroundColor: '#d9d9d9',
    color: 'black',
    padding: '8px',
    borderRadius: '10px',
    width: '200px',

  };
  const optionStyle = {
    backgroundColor: '#d9d9d9',
    color: 'black',

  };


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
      <Container1>
        <Title type="text" placeholder="Title" />
        <Title type="text" placeholder="Experience" />
        <Title type="text" placeholder="Salary Range" />
        <br></br><br></br>
        <DropDown>
          <div>
            {/* <label htmlFor="dropdown">Select an option:</label> */}
            <select style={selectStyle} id="dropdown" value={selectedOption} onChange={handleSelectChange}>
              {options.map((option) => (
                <option style={optionStyle} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div> 
        </DropDown>
        <ChooseFile>
          <Button>Choose File</Button>

        </ChooseFile>
        <Container2>
          <StyledQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            placeholder="Job Opportunity"
          />
        </Container2>
        <LastButton>Create Job Opportunity</LastButton>
      </Container1>
      </Container>
    </ThemeProvider>
  );
};
export default CreateBlog;
