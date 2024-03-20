import React, { useState, useRef } from "react";

import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { ThemeProvider } from "styled-components";

import {
  Container,
  CreatePostBtn,
  Container1,
  Title,
  Summary,
  ChooseFile,
  Button,
  NoFile,
  ChooseFil,
  Div1,
  DateInput,
  Div2,
  Container2,
  Select,
  Dropdown,
  SElect,
  /* H1Cont,
    Content, */
  LastButton,
  TimeInput,
  MapContainer,
  LocationCon,
  GlobalStyle,
} from "./style";

const theme = {};

const statesWithCities = [
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Trichy",
  "Mumbai",
  "Pune",
  "Kolkata",
  "Delhi",
  "Noida",
  "Jaipur",
];

const CreateEvent = () => {
  const [value, setValue] = useState("");
  const [current, setcurrent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("Location");
  const [time, setTime] = useState("00:00"); // Initial time state
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

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (newTime) => {
    setTime(newTime);
  };
  const handledatechange = (event) => {
    setcurrent(event.target.value);
  };

  const StyledQuill = styled(ReactQuill)`
  /* Add your custom styles here */
  background-color: #d9d9d9;
  border-radius: 10px;
  border: 0px solid transparent;
  outline: none;
  font-size: 20px;
  .ql-editor {
    font-size: 20px;
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
    border: 1px solid #000000;
    border-radius: 10px;
    /* Add border */
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






  const filteredOptions = [
    "Location",
    ...statesWithCities
      .filter((item) => !Array.isArray(item))
      .sort((a, b) => a.localeCompare(b)),
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        <Container1>
          <Title type="text" placeholder="Title" />
          <ChooseFil>
            <DateInput
              type="date"
              value={current}
              onChange={handledatechange}
            />
            <TimeInput type="time" value={time} onChange={handleChange} />
          </ChooseFil>

          <div>
            <Select>
              id="option-dropdown" value={selectedOption}
              onChange={handleSelectOption}
              {filteredOptions.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </div>

          <Title type="text" placeholder="Entry Fees" />
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
            />
          </Container2>
          <LastButton>Create Events and Workshops</LastButton>
        </Container1>
      </Container>
    </ThemeProvider>
  );
};

export default CreateEvent;

const Option = styled.option`
  color: black;
  font-size: 20px;
`;

const OptionDropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 1;
  background-color: white;
`;

const OptionContainer = styled.div`
  position: relative;
`;
