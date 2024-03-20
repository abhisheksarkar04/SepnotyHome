import React, { useState, useRef } from "react";

import styled from "styled-components";

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
        <CreatePostBtn>Create New Events and Workshops</CreatePostBtn>
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
