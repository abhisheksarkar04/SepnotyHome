import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper } from 'react-form-stepper';
import './App.css';
import handleFormValues from './allFormValues';

import SecondPage from "./Website/SecondPage"









// import MaterialTable from 'material-table';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndustries: [],
      error: ''
    };
  }
 
    shouldComponentUpdate(nextProps) {
        if (this.props.addCourse !== nextProps.addCourse || this.props.level !== nextProps.level ) {
          return true;
        } else {
          return false;
        }
      }

  continue = e => {
    e.preventDefault();
    const { selectedIndustries } = this.state;
    const formData = {
      field2: {selectedIndustries}
      // Add more fields as needed
    };
    this.props.onDataReceived(formData);
    if (selectedIndustries.length === 0) {
      this.setState({ error: 'Please select at least one industry.' });
      return;
    }
    this.props.nextStep();
  };

  handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let selectedIndustries = [...this.state.selectedIndustries];
    if (checked) {
      selectedIndustries.push(value);
    } else {
      selectedIndustries = selectedIndustries.filter(industry => industry !== value);
    }
    this.setState({ selectedIndustries, error: '' });
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { error } = this.state;
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
      <Main className='form'>
        <form>

          <Stepper
             steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' },{ label: '' }, { label: '' }, { label: '' },{ label: '' }]}
            activeStep={1}
            styleConfig={{
              activeBgColor: '#2B459B',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#407B24',
              completedTextColor: '#fff',
              size: '1em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

<Main1>
            <Form1>
                <Heading>
                *What is your industry?
                </Heading>
                <Form2>
                <InputContainer>
<Label>
<Input type='checkbox' name="industry" value="Healthcare" id='' onChange={this.handleCheckboxChange}/>
Healthcare
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Retail & Wholesale" onChange={this.handleCheckboxChange}/>
    Retail & Wholesale
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Manufacturing" onChange={this.handleCheckboxChange}/>
    Manufacturing
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Finanacial" onChange={this.handleCheckboxChange}/>
    Finanacial
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Transportation & Logistics" onChange={this.handleCheckboxChange}/>
    Transportation & Logistics
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Telecommunications" onChange={this.handleCheckboxChange}/>
    Telecommunications
    </Label>
</InputContainer>

                </Form2>

                
            </Form1>
            <Form1>
            <Form3>
                <InputContainer>
<Label>
<Input type='checkbox' name="industry" value="Public sector" onChange={this.handleCheckboxChange}/>
Public sector
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Entertainment" onChange={this.handleCheckboxChange}/>
    Entertainment
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Education" onChange={this.handleCheckboxChange}/>
    Education
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Professional services" onChange={this.handleCheckboxChange}/>
    Professional services
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Construction" onChange={this.handleCheckboxChange}/>
    Construction
    </Label>
</InputContainer>
<InputContainer>
    <Input type='checkbox' name="industry" value="Telecommunications" onChange={this.handleCheckboxChange}/>
    <Input1 type="text" placeholder="others (please specify)"/>
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
        <Button className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </Button>
      </Main>
    )
  }
}

export default CourseDetails;

const ErrorMessage = Styled.div`
  color: red;
  margin-top: 10px;
  font-size:12px;
`;
const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
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
const Form1 = Styled.div`
display:flex;
flex-direction:column;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:-10px;
border-radius:10px;
padding:20px;
width:700px;
height:380px;
`
const Form3 = Styled.div`
margin-top:40px;
`
const Heading = Styled.h1`
color:#263238;
font-size:18px;
font-weight:700;
margin-bottom:20px;
font:family:Roboto;
`
const Form2 = Styled.form`
`
const Input = Styled.input`
margin-right:10px;
`
const InputContainer=Styled.div`
margin-top:20px;
`
const Label = Styled.label`
font-size:16px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
`