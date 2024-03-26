import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper } from 'react-form-stepper';
import './App.css';
import handleFormValues from './allFormValues';

import FifthPage from './Website/FifthPage';


class SecondForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndustries: [],
      error: ''
    };
  }

  continue = e => {
    e.preventDefault();
    const { selectedIndustries } = this.state;
    const formData = {
      field5: {selectedIndustries},
      // Add more fields as needed
    };
    this.props.onDataReceived(formData);
    //this.props.onDataReceived(formData);
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
    return (
      <Main className='form'>
        <form>

          <Stepper
            steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' },{label:""},{label:""},{label:""},{label:""}]}
            activeStep={4}
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

<Mai>
            <FormContainer>
                <Form>
                    <Heading>
                    *What Software features/capabilities do you need?
                    </Heading>
                    <CheckBoxCon>
                        <input type="checkbox" id="Multi domain configuration" value="Multi domain configuration" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="Multi domain configuration">
                        Multi domain configuration
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Basic features" value="Basic features" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="Basic features">
                        Basic features
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Drag - and - drop Page editor" value='Drag - and - drop Page editor' onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="Drag - and - drop Page editor">
                        Drag - and - drop Page editor
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Templates" value="Templates" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="Templates">
                        Templates
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Core features" value="Core features" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="Core features">
                        Core features
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Customizable features" value="Customizable features" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="Customizable features">
                        Customizable features
                        </Label>
                    </CheckBoxCon>
                </Form>
            </FormContainer>
            <FormContainer>
                <Form1>
                    
                    <CheckBoxCon>
                        <input type="checkbox" id="User generated content" value="User generated content" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="User generated content">
                        User generated content
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Mobile compatibility" value="Mobile compatibility" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="Mobile compatibility">
                        Mobile compatibility
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Social media Sharing functionality" value="Social media Sharing functionality" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="Social media Sharing functionality">
                        Social media Sharing functionality
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Web Analytics" value="Web Analytics" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="Web Analytics">
                        Web Analytics
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="10st" onChange={this.handleCheckboxChange}/>
                        <In type="text" placeholder='others (please specify)'/>
                    </CheckBoxCon>

                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </Form1>
            </FormContainer>
        </Mai>
            

        </form>
        <Button style={{textAlign: 'center'}}>
          <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </Button>
      </Main>
    )
  }
}

export default SecondForm;

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`
const ErrorMessage = Styled.div`
  color: red;
  margin-top: 10px;
  font-size:12px;
`;

const Main = Styled.div`
background-color:#0C111F;
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
height:380px;
width:400px;
`
const In = Styled.input`
background:transparent;
border: 1px solid gray;
margin-left:10px;
`
const CheckBoxCon = Styled.div`
gap:30px;
align-items:start;
justify-content:space-between;
margin-top:20px;
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
const Form1 = Styled.form`
margin-top:60px;
`