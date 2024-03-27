import React, { Component , useState} from 'react';
import { Stepper } from 'react-form-stepper';
import Styled from "styled-components"
import './App.css';

import SixthPage from "./Website/SixthPage";
import handleFormValues from './allFormValues';




// import MaterialTable from 'material-table';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class  FormNo5 extends Component {
  state = {
    current: 'Yes',
    mediaContent: [],
    paymentSupport: '',
    monthlyVisitors: '',
    errors: {}
  };

  handleButtonClick = (page) => {
    this.setState({ current: page });
  };

  validateForm = () => {
    const { mediaContent, paymentSupport, monthlyVisitors } = this.state;
    const errors = {};

    if (mediaContent.length === 0) {
      errors.mediaContent = 'Please select at least one media content type.';
    }

    if (!monthlyVisitors===0) {
      errors.monthlyVisitors = 'Please select the expected number of monthly visitors.';
    }

    return errors;
  };

  handleNext = () => {
    const errors = this.validateForm();

    const {  mediaContent, paymentSupport, monthlyVisitors ,current} = this.state;
    const formData = {
      field6: { mediaContent,monthlyVisitors,current},
      // Add more fields as needed
    };
    this.props.onDataReceived(formData);
    
    //this.props.onDataReceived(formData);

    if (Object.keys(errors).length === 0) {
      // No validation errors, proceed to the next step
      this.props.nextStep();
    } else {
      // Validation errors found, update state with errors
      this.setState({ errors });
    }
  };

  handleRadioChange = (event) => {
    this.setState({
      monthlyVisitors: event.target.value,
      formErrors: {
        ...this.state.formErrors,
        month: ''
      }
    });
  };

  handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const { mediaContent } = this.state;

    if (checked) {
      this.setState({ mediaContent: [...mediaContent, value] });
    } else {
      this.setState({ mediaContent: mediaContent.filter((item) => item !== value) });
    }
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { current, mediaContent, paymentSupport, monthlyVisitors, errors } = this.state;

    return (
      <Main className='form'>
        <form>

          <Stepper
            steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' },{label:""},{label:""},{label:""},{label:""}]}
            activeStep={5}
            styleConfig={{
              activeBgColor: '#2B459B',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: 'fff',
              completedBgColor: '#407B24',
              completedTextColor: '#fff',
              size: '1em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />
       
        
        <Mai>
        <FormContainer>
                <Form>
                    <Heading>
                    *What type of media content does your Software have to support?
                    </Heading>
                    <CheckBoxCon>
                    <Label htmlfor="Images">
                        <Input1 type="checkbox" name='mediatype' id="Images" value="Images" onClick={this.handleCheckboxChange}/>

                        Images
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="Video">
                        <Input1 type="checkbox" name='mediatype' id="Video" value="Video" />
                       
                        Video
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="Audio">
                        <Input1 type="checkbox" id="Audio" name='mediatype' value="Audio" onClick={this.handleCheckboxChange}/>
                        
                        Audio
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="Interactive content">
                        <Input1 type="checkbox" id="Interactive content" name='mediatype' value="Interactive content" onClick={this.handleCheckboxChange}/>
  
                        Interactive content
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <Input type="checkbox" id="five" name='mediatype' onClick={this.handleCheckboxChange}/>
                        <Input type="text" htmlfor="five" placeholder="Others (Please Specify)"/>
                    </CheckBoxCon>
                    {errors.mediaContent && <Error>{errors.mediaContent}</Error>}
                    <Para1>
                    Should your website or App support payments?
                    </Para1>
                    <Main5>
                        <ActiveButton type="button" active={current === 'Yes'}  onClick={() => this.handleButtonClick('Yes')}>Yes</ActiveButton>
                        <Buttonel type="button" active={current === 'No'}  onClick={() => this.handleButtonClick('No')}>No</Buttonel>
                    </Main5>
                </Form>
            </FormContainer>
            <FormContainer>
                <Form>
                    <Heading>
                    *How many pages will your website/App
                      have?
                    </Heading>
                    <InputContainer>
              <Label>
                  <Input type='radio' name="industry" value="I am not sure" onChange={this.handleRadioChange}/>
                  I am not sure
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="industry" value="up to 50" onChange={this.handleRadioChange}/>
                  up to 50
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="industry" value="50-100" onChange={this.handleRadioChange}/>
                  50-100
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="industry" value="100-500" onChange={this.handleRadioChange}/>
                  100-500
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="industry" value="500-1,000" onChange={this.handleRadioChange}/>
                  500-1,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="industry" value="  1,000-5,000" onChange={this.handleRadioChange}/>
                  1,000-5,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="industry" value="5,000-10,000" onChange={this.handleRadioChange}/>
                  5,000-10,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="industry" value="Healthcare" onChange={this.handleRadioChange}/>
                  more than 10,000
                  </Label>
              </InputContainer>
                              </Form>
                          </FormContainer>
           
                </Mai>

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
        <Button className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' onClick={this.handleNext}>Next</button>

          </Button>
      </Main>
    )
  }
}

export default FormNo5;
const Error = Styled.p`
font-size:12px;
color:red;
`
const Para1 = Styled.p`
`

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`
const Button1 = Styled.button`
background-color:blue;
height:40px;
width:120px;
color:white;
`
const Main = Styled.div`
background-color:#0C111F;
`
const Main1 = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
`
const Heading = Styled.h1`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color: #263238;
`

const FormContainer = Styled.div`
display:flex;
flex-direction:column;
padding:20px;
height:380px;
width:600px;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:20px;
border-radius:10px;
`
const CheckBoxCon = Styled.div`
margin-top:15px;
align-items:start;
justify-content:space-between;
`
const Label = Styled.label`
font-size:16px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
margin-left:10px;
`
const Form = Styled.form`
`
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
font-size:15px;
color: #263238;
font-weight:500;
height:20px;
margin-right:10px;
margin-top:0px;
`
// const Buttonel = Styled.button`
//   font-size: 20px;
//   background-color: #d9d9d9;
//   border-bottom-right-radius: 10px;
//   border-top-right-radius: 10px;
//   border-top-left-radius: 10px;
//   border-bottom-left-radius: 10px;
//   padding: 0px;
//   width:60px;
//   height:30px;
//   margin-left: -10px;
//   border-right: 1px solid #9e9898;
// `;



// const Para1 = Styled.p`

// `
const InputContainer=Styled.div`
margin-top:5px;
`
// const Input1 = Styled.textarea`
// background:transparent;
// border: 1px solid #C1CAE7;
// font-size:15px;
// color: #263238;
// font-weight:500;
// height:15px;
// `
const Input = Styled.input`
margin-top:10px;
margin-left:10px;
`


const Label1 = Styled.label`
font-size:16px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`

const Main5 = Styled.div`
display:flex;
flex-direction:row;
`
const ActiveButton = Styled.button`
background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
color: ${(props) => (props.active ? 'white' : 'black')};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 20px;
  width:60px;
  height:30px;
  
`;

const Buttonel = Styled.button`
  font-size: 20px;
  background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
color: ${(props) => (props.active ? 'white' : 'black')};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0px;
  width:60px;
  height:30px;
  margin-left: -10px;
  border-right: 1px solid #9e9898;
`;

const Mai = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
`