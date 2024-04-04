

import React, { Component } from 'react';
import Styled from "styled-components"
import './App.css';
import handleFormValues from './allFormValues';
import { Stepper, Step } from 'react-form-stepper';

import SecondPage from "./Website/SecondPage"



// import MaterialTable from 'material-table';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.addCourse !== nextProps.addCourse ||
      this.props.level !== nextProps.level
    ) {
      return true;
    } else {
      return false;
    }
  }

  continue = (e) => {
    e.preventDefault();
    const { formData } = this.props;
    const { industryType } = formData;

    console.log(formData);

    //handleFormValues(formData);
    if (industryType.length === 0) {
      this.setState({ error: "Please select at least one industry." });

      return;
    }
    this.props.nextStep();
  };

  handleCheckboxChange = (e) => {

    const {checked ,id} = e.target;
    

    this.props.updateFormData({
      industryType: checked
        ? [...this.props.formData.industryType, id]
        : (this.props.formData.industryType =
            this.props.formData.industryType.filter((type) => type !== id)),
    });
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { error } = this.state;
    const { industryType } = this.props.formData;
    // const {
    //   // // coursesOptions,
    //   // levelOptions,
    //   // // addCourse,
    //   // addLevel,
    //   // level,
    // } = this.props;

    // const theme = createMuiTheme({
    //   palette: {
    //     primary: {
    //       main: '#003487',
    //     },
    //     secondary: {
    //       main: '#003487',
    //     },
    //   },
    //   overrides: {
    //     MuiPaper: {
    //       elevation2: {
    //         boxShadow: 'none',
    //       },
    //     },
    //     MuiInput: {
    //       underline: {
    //         '&:before': {
    //           borderBottom: 'none'
    //         },
    //         '&:after': {
    //           borderBottom: 'none'
    //         },
    //         '&:hover': {
    //           '&:not(.Mui-disabled)': {
    //             '&:before' : {
    //               borderBottom: 'none'
    //             }
    //           }
    //         }
    //       }
    //     },
    //     MuiTableRow: {
    //       root: {
    //         '&:nth-child(even)': {
    //           backgroundColor: '#ebebeb'
    //         }
    //       }
    //     },
    //     MuiTypography: {
    //       h6: {
    //         fontSize: '1rem',
    //         color: '#011b64'
    //       }
    //     },
    //     MuiToolbar: {
    //       root: {
    //         borderBottom: '1px solid grey',
    //         backgroundColor: '#fafafa'
    //       },
    //       gutters: {
    //         paddingLeft: '3px'
    //       }
    //     }
    //   },
    // });

    // const columns = [
    //   {
    //     title: 'course',
    //     field: 'course',
    //   },
    //   {
    //     title: 'category',
    //     field: 'category'
    //   }
    // ];

    return (
      <Main className="form">
        <form>
          <StyledStepper
            activeStep={1}
            styleConfig={{
              activeBgColor: "#2B459B",
              activeTextColor: "#fff",
              inactiveBgColor: "#fff",
              inactiveTextColor: "#2b7cff",
              completedBgColor: "#407B24",
              completedTextColor: "#fff",
            }}
          >
            <StyledStep />
            <StyledStep />
            <StyledStep />
            <StyledStep />
            <StyledStep />
            <StyledStep />
            <StyledStep />
            <StyledStep />
          </StyledStepper>

          <Main1>
            <Form1>
              <Heading>*What is your industry?</Heading>
              <Form2>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Healthcare"
                      checked={industryType.includes("Healthcare")}
                      value="Healthcare"
                      onChange={this.handleCheckboxChange}
                    />
                    Healthcare
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Retail & Wholesale"
                      value="Retail & Wholesale"
                      checked={industryType.includes("Retail & Wholesale")}
                      onChange={this.handleCheckboxChange}
                    />
                    Retail & Wholesale
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      value="Manufacturing"
                      id="Manufacturing"
                      checked={industryType.includes("Manufacturing")}
                      onChange={this.handleCheckboxChange}
                    />
                    Manufacturing
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Finanacial"
                      value="Finanacial"
                      checked={industryType.includes("Finanacial")}
                      onChange={this.handleCheckboxChange}
                    />
                    Finanacial
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Transportation & Logistics"
                      value="Transportation & Logistics"
                      checked={industryType.includes(
                        "Transportation & Logistics"
                      )}
                      onChange={this.handleCheckboxChange}
                    />
                    Transportation & Logistics
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Telecommunications"
                      value="Telecommunications"
                      checked={industryType.includes("Telecommunications")}
                      onChange={this.handleCheckboxChange}
                    />
                    Telecommunications
                  </Label>
                </InputContainer>
              </Form2>
            </Form1>
            <Form1>
              <Form3>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Public sector"
                      value="Public sector"
                      checked={industryType.includes("Public sector")}
                      onChange={this.handleCheckboxChange}
                    />
                    Public sector
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Entertainment"
                      value="Entertainment"
                      checked={industryType.includes("Entertainment")}
                      onChange={this.handleCheckboxChange}
                    />
                    Entertainment
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Education"
                      value="Education"
                      checked={industryType.includes("Education")}
                      onChange={this.handleCheckboxChange}
                    />
                    Education
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Professional services"
                      value="Professional services"
                      checked={industryType.includes("Professional services")}
                      onChange={this.handleCheckboxChange}
                    />
                    Professional services
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="checkbox"
                      name="industry"
                      id="Construction"
                      value="Construction"
                      checked={industryType.includes("Construction")}
                      onChange={this.handleCheckboxChange}
                    />
                    Construction
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Input
                    type="checkbox"
                    name="industry"
                    value="Telecommunications"
                    onChange={this.handleCheckboxChange}
                  />
                  <Input1 type="text" placeholder="others (please specify)" />
                </InputContainer>
              </Form3>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </Form1>
          </Main1>

          {/* <div className='select'>
            <select
              name='select'
              onChange={addLevel}
              className='select__item'
              value={level}
            >
              <option value='null'>Choose course level</option>
              {levelOptions}
            </select>
          </div> */}

          {/* <div className='table'> */}

          {/* 
            <MuiThemeProvider theme={theme}>
              <MaterialTable
                title='Choose courses'
                columns={columns}
                data={coursesOptions}
                onSelectionChange={addCourse}
                options={{
                  search: true,
                  selection: true,
                  paging: false,
                  toolbar: true,
                  showTextRowsSelected: false,
                  searchFieldStyle: {
                    position: 'absolute',
                    top: '-20px',
                    right: '-7px',
                    width: '200px',
                    backgroundColor: '#fff',
                    border: '1px solid grey',
                    padding: '3px 5px',
                    borderRadius: '3px',
                  },
                  headerStyle: {
                    display: 'none',
                  },
                }}
              />
            </MuiThemeProvider> */}

          {/* </div> */}
        </form>
        <Button className="buttons">
          <button
            className="buttons__button buttons__button--back"
            onClick={this.back}
          >
            Back
          </button>
          <button
            className="buttons__button buttons__button--next"
            onClick={this.continue}
          >
            Next
          </button>
        </Button>
      </Main>
    );
  }
}

export default CourseDetails;

const media = {
  mobile: "@media(max-width: 576px)",
};

const StyledStepper = Styled(Stepper)`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  font-size: 9px;
  border: none;
 
`;

const StyledStep = Styled(Step)`
  text-align: center;
  border: 1px solid #2b7cff !important;
  cursor: default !important;
  span {
    font-size: 8px; /* Decrease the font size */
  }
  & > div {
    color: #0f6bff !important;
  }
`;

const ErrorMessage = Styled.p`
  color: red;
  margin-top: 10px;
  font-size:12px;
`;
const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`;

const Main = Styled.div`
background-color:#0C111F;
${media.mobile}{
  width:100%;
}
`;
const Main1 = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
${media.mobile}{
  width:100%;
  gap: 6px;
  margin: 0px 0px 0px -20px;
  padding-right: 0px;
  justify-content:space-between;
}
`;
const Form1 = Styled.div`
display:flex;
flex-direction:column;
padding:20px;
height:380px;
width:90%;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:20px;
border-radius:10px;
${media.mobile}{
  width: 52%;
  border-radius:12px;
  gap:0px;

  margin: 0px -10px 0px 10px;
  line-height: 1;
  padding:5px;
  height:300px;

`;

const Form3 = Styled.div`
margin-top:40px;
${media.mobile}{
  margin-top:15px;

}
`;
const Heading = Styled.h1`
color:#263238;
font-size:18px;
font-weight:700;
margin-bottom:20px;
font:family:Roboto;
${media.mobile}{
  font-size:13px;
}
`;
const Form2 = Styled.div`
margin-top:-20px;
${media.mobile}{
  width:220px;
  border-radius:5px;
  gap:0px;
}
`;
const Input = Styled.input`
margin-right:10px;
${media.mobile}{
  margin-right:5px;
}
`;
const InputContainer = Styled.div`
margin-top:20px;

`;

const Label = Styled.label`
font-size:16px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
@media screen and (max-width:576px){
  font-size:11px;
}
`;
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
@media screen and (max-width:576px){
  width:110px;
}
`;
