import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import Styled from "styled-components"
import './App.css';
// import SecondPage from "./Forms/SevenPage"

import SevenPage from './Website/SevenPage';




// import MaterialTable from 'material-table';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class SeventhForm extends Component {
  state = {
    compliance: [],
    otherCompliance: '',
    integration: '',
    integrationDetails: '',
    errors: {},
  };

  validateForm = () => {
    const { compliance, integration } = this.state;
    const errors = {};

    if (compliance.length === 0) {
      errors.compliance = "Please select at least one compliance requirement";
    }

    if (!integration) {
      errors.integration = "Please specify integration requirement";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  continue = e => {
    e.preventDefault();
    const {compliance ,errors} = this.state
    if (compliance.length === 0) {
      this.setState({ errors: 'Please select at least one industry.' });
      return;
    }
    this.props.nextStep();
    
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = e => {
    const { value, checked } = e.target;
    let  compliance = [...this.state.compliance]

    if (checked) {
      compliance.push(value);
    } else {
      compliance = compliance.filter(item => item !== value);
    }

    this.setState({ compliance ,error: ''});
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
  render() {
    const { compliance, otherCompliance, integration, integrationDetails, errors } = this.state;

    return (
      <Main className='form'>
        <form>

          <Stepper
            steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' },{label:""},{label:""},{label:""},{label:""}]}
            activeStep={6}
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
                    *Are there any compliance requirements?
                    </Heading>
                    <CheckBoxCon>
                    <Label htmlfor="one">
                        <input type="checkbox" id="one" value="No" name='compliance'/>
                        
                        No
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="two">
                        <input type="checkbox" id="two" name='compliance' value="HIPPA"/>
                        
                        HIPPA
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="three">
                        <input type="checkbox" id="three" name='compliance' value="PCI DSS"/>
                        
                        PCI DSS
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="four">
                        <input type="checkbox" id="four" name='compliance' vlaue="GDPR"/>
                        
                        GDPR
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="five">
                        <input type="checkbox" id="five" name='compliance' value="I need your consultation on compliance"/>
                        
                        I need your consultation on compliance
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <Input type="checkbox" id="five" name='compliance' value=""/>
                        <Input1 type="text" placeholder="Others (Please Specify)"/>

                    </CheckBoxCon>
                    {errors.compliance && <Error>{errors.compliance}</Error>} 
                </Form>
            </FormContainer>
            <Form1>
            <Heading>
            *Do you need integration with any external or internal systems?
                    </Heading>
            <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="industry" value="No" />
No
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Finanacial"/>
    <Input1 type="text" placeholder="Yes (Please Specify)"/>
    </Label>
</InputContainer>
<Heading1>
            *Do you need integration with any external or internal systems?
                    </Heading1>

                </Form2>
                <Input3 type="text" placeholder="Please add here"/>
                
          {errors.integration && <Error>{errors.integration}</Error>}
                
            </Form1>
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

export default SeventhForm;

const Error = Styled.div`
  color: red;
  margin-top: 10px;
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
const Heading1 = Styled.h1`


font-family: Roboto;

font-size: 18px;

font-family: Inter;
font-size: 20px;
font-family: Inter;
font-size: 20px;

font-size: 15px;


font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #263238;
margin-top:20px;
margin-bottom:10px;
`

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

font-size: 15px;

font-weight: 700;
line-height: 20px;
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
margin-top:13px;
`
const Label = Styled.label`

font-size:16px;


font-family: Roboto;

font-family: Inter;

font-size:15px;

font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
margin-left:10px;
`
const Form = Styled.form`

`
// const Para1 = Styled.p`

// `
const InputContainer=Styled.div`
margin-top:20px;
`
const Input1 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:200px;
height: 18px;
color: black;
padding: 10px;
border-radius:4px;

`
const Input = Styled.input`
margin-right:10px;
`
const Form1 = Styled.div`
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
const Form2 = Styled.form`

`
const Input3 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;

width:250px;

width:90%;

height:70px;
border-radius:4px;
color: black;
padding: 8px;
text-align: left;
`

