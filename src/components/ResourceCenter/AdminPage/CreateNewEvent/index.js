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
  } from "./style";
  import React, { useState } from "react";
  import ReactQuill from "react-quill";
  import "react-quill/dist/quill.snow.css";
  import styled from "styled-components";
  import DatePicker from 'react-datepicker';
  import 'react-datepicker/dist/react-datepicker.css';
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

  const selectStyle = {

    backgroundColor: 'transparent',
    color: 'black',
    padding: '8px',
    borderRadius: '10px',
    width: '200px',

  };
  const optionStyle = {
    backgroundColor: 'white',
    color: '',
  
  };
  
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

  const options = ["Time",'10AM' , '11AM','12PM','1PM','2PM','3PM','4PM','5PM']

  const Locations = ["Locaton","Hyderbad","Vizag","Banglore","Kolkata","Delhi"]
  
  const CreateEvent = () => {
    const [value, setValue] = useState("");
    const [current,setcurrent] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [selectedLocation,setSelectedLocation] = useState(Locations[0])

    const handledatechange = (event) =>{
      setcurrent(event.target.value)
    }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectLocation = (event) => {
    setSelectedLocation(event.target.value)
  }
    return (
      <Container>
        <CreatePostBtn>Create New Events and Workshops</CreatePostBtn>
        <Container1>
          <Title type="text" placeholder="Title" />
          <ChooseFil>
            <DateInput type="date"  value={current} onChange={handledatechange}/>
           <div>
                  {/* <label htmlFor="dropdown">Select an option:</label> */}
                  <SElect  id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                    {options.map((option) => (
                      <option style={optionStyle} value={option}>
                        {option}
                      </option>
                    ))}
                  </SElect>
                </div>
          </ChooseFil>
          <div>
          <Select  id="dropdown" value={selectedLocation} onChange={handleSelectLocation}>
            <Option>
                Location
            </Option>
            <option>
                Hyderbad
            </option>
            <option>Banglore</option>
          </Select>
          </div>
          
          
          <Title type="text" placeholder="Entry Fees" />
          <ChooseFile>
            <Button>Choose File</Button>
            <NoFile>No file Chosen</NoFile>
          </ChooseFile>
         
          <LastButton>Create Events and Workshops</LastButton>
        </Container1>
      </Container>
    );
  };
  export default CreateEvent;

  const Option = styled.option`
  color:black;
  `
  