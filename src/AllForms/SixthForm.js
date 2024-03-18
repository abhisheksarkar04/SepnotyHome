import React, { Component , useState} from 'react';
import { Stepper } from 'react-form-stepper';
import Styled from "styled-components"
import './App.css';

import SixthPage from "./Website/SixthPage"




// import MaterialTable from 'material-table';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class  FormNo5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Yes"
    };
  }

  handleButtonClick = (page) => {
    this.setState({ current: page });
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.addCourse !== nextProps.addCourse || this.props.level !== nextProps.level ) {
      return true;
    } else {
      return false;
    }
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {current} = this.state
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
          return(
        
        <Mai>
                    <FormContainer>
                        <Form>
                            <Heading>
                            *What type of media content does your Software have to support?
                            </Heading>
                            <CheckBoxCon>
                                <input type="checkbox" id="one"/>
                                <Label htmlfor="one">
                                Images
                                </Label>
                            </CheckBoxCon>
                            <CheckBoxCon>
                                <input type="checkbox" id="two"/>
                                <Label htmlfor="two">
                                Video
                                </Label>
                            </CheckBoxCon>
                            <CheckBoxCon>
                                <input type="checkbox" id="three"/>
                                <Label htmlfor="three">
                                Audio
                                </Label>
                            </CheckBoxCon>
                            <CheckBoxCon>
                                <input type="checkbox" id="four"/>
                                <Label htmlfor="four">
                                Interactive content
                                </Label>
                            </CheckBoxCon>
                            <CheckBoxCon>
                                <input type="checkbox" id="five"/>
                                <Input type="text" htmlfor="five" placeholder="Others (Please Specify)"/>
                                
                                
                            </CheckBoxCon>
                            <Para1>
                            Should your website or App support payments?
                            </Para1>
                            <Main5>
                                <ActiveButton type="button" active={current === 'Yes'}  onClick={this.handleButtonClick('Yes')}>Yes</ActiveButton>
                                <Buttonel type="button" active={current === 'No'}  onClick={this.handleButtonClick('No')}>No</Buttonel>
                            </Main5>
                            
                        </Form>
                    </FormContainer>
                    <FormContainer>
                        <Form>
                        <Heading>
                        *What is the expected number of monthly visitors?
                            </Heading>
                            
                    <InputContainer>
                    <Input1 type='radio' name="industry" value="Healthcare"/>
        
                        <Label1>
                            I am not sure
                            </Label1>
                        </InputContainer>
                        <InputContainer>
                        <Input1 type='radio' name="industry" value="Healthcare"/>
        
                        <Label1>
                            up to 50
                            </Label1>
                        </InputContainer>
                        <InputContainer>
                        <Input1 type='radio' name="industry" value="Healthcare"/>
        
                        <Label1>
                            50-100
                            </Label1>
                        </InputContainer>
        
                        <InputContainer>
                            <Input1 type='radio' name="industry" value="Healthcare"/>
        
                            <Label1>
                                100-500
                            </Label1>
                        </InputContainer>
        
                        <InputContainer>
                        <Input1 type='radio' name="industry" value="Healthcare"/>
        
                        <Label1>
                            500-1,000
                            </Label1>
                        </InputContainer>
                        <InputContainer>
                        <Input1 type='radio' name="industry" value="Healthcare"/>
        
                        <Label1>
                            1,000-5,000
                            </Label1>
                        </InputContainer>
                        <InputContainer>
                        <Input1 type='radio' name="industry" value="Healthcare"/>
        
                        <Label1>
                            5,000-10,000
                            </Label1>
                        </InputContainer>
                        <InputContainer>
                        <Input1 type='radio' name="industry" value="Healthcare"/>
        
                        <Label1>
                            more than 10,000
                            </Label1>
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
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </Button>
      </Main>
    )
  }
}

export default FormNo5;
const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`

const Main = Styled.div`
background-color:#0C111F;
`
const Input1 = Styled.input`
margin-top:10px;
margin-left: 10px;

`
const Label1 = Styled.label`
font-size:14px;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
margin-top:20px;
margin-left: 10px;
`

const Main5 = Styled.div`
display:flex;
flex-direction:row;
`
const ActiveButton = Styled.button`
background-color: ${(props) => (props.active ? 'blue' : 'white')};
color: ${(props) => (props.active ? 'white' : 'black')};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 20px;
  width:60px;
  height:30px;
  
`;

const Buttonel = Styled.button`
  font-size: 20px;
  background-color: ${(props) => (props.active ? 'blue' : 'white')};
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
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:-20px;
border-radius:10px;
padding:20px;
height:350px;
width:600px;
`
const CheckBoxCon = Styled.div`
gap:30px;
align-items:start;
justify-content:space-between;
margin-top:5px;
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
const Para1 = Styled.p`
color: #263238;
margin-top:30px;
margin-bottom:20px;
`
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
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:250px;
border-radius:4px;
`