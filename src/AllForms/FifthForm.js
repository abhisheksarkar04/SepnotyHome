import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper } from 'react-form-stepper';
import './App.css';

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
                        <input type="checkbox" id="1st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="1st">
                        Multi domain configuration
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="2st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="2st">
                        Basic features
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="3st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="3st">
                        Drag - and - drop Page editor
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="4st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="4st">
                        Templates
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="5st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="5st">
                        Core features
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="6st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="6st">
                        Customizable features
                        </Label>
                    </CheckBoxCon>
                </Form>
            </FormContainer>
            <FormContainer>
                <Form1>
                    
                    <CheckBoxCon>
                        <input type="checkbox" id="7st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="7st">
                        User generated content
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="8st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="8st">
                        Mobile compatibility
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="9st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="9st">
                        Social media Sharing functionality
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="0st" onChange={this.handleCheckboxChange}/>
                        <Label htmlfor="0st">
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
height:350px;
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
margin-top:13px;
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