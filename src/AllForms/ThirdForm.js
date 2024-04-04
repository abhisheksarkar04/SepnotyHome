import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper ,Step } from 'react-form-stepper';
import './App.css';
import handleFormValues from './allFormValues';

import ThirdPage from '../AllForms/Website/ThirdPage';



class YourIndustry extends Component {
 state = {
      error: ''
    };

  continue = e => {
    e.preventDefault();
    const {formData} = this.props;
    const {services} = formData
    console.log(services)
    
    if (!services) {
      this.setState({ error: 'Please select a service.' });
      return;
    }
    // Store the selected data in parent component or wherever required
    // this.props.storeData(selectedService, websiteLink);
    this.props.nextStep();
  };

  handleRadioChange = (e) => {
    this.props.updateFormData({
      services: e.target.value
    });
  };

  handleWebsiteLinkChange = (e) => {
    this.setState({ websiteLink: e.target.value });
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }


  render() {
    const {error} = this.state
    const {formData} = this.props
    // const { 
    //   firstname, 
    //   lastname, 
    //   email, 
    //   phone, 
    //   handleChange, 
    //   validateFirstName,
    //   validateLastName,
    //   isErrorFirstName,
    //   isErrorLastName,
    //   errorMessageFirstName,
    //   errorMessageLastName
    // } = this.props;

    return (
      <Main className='form'>
        <form>
        <StyledStepper
          activeStep={2}
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
              <Fom>
                <Heading>
                *What service(s) do you need?
                </Heading>
                <div>
                <InputContainer>
<Label>
<Input  type='radio' name="industry" value="Website development" checked={formData.services==="Website development"} onChange={this.handleRadioChange}/>
Website development
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio'  name="industry" value="Technical Consulting" checked={formData.services==="Technical Consulting"} onChange={this.handleRadioChange}/>
    Technical Consulting
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio'  name="industry" value="UX design / Redesign" checked={formData.services==="UX design / Redesign"}  onChange={this.handleRadioChange}/>
    UX design / Redesign
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio'  name="industry" value="Finanacial" checked={formData.services==="Finanacial"} onChange={this.handleRadioChange}/>
    Finanacial
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio'  name="industry" value="CMS development" checked={formData.services==="CMS development"} onChange={this.handleRadioChange}/>
    CMS development
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio'  name="industry" value="Technical SEO" checked={formData.services==="Technical SEO"} onChange={this.handleRadioChange}/>
    Technical SEO
    </Label>
</InputContainer>
</div>
</Fom>

                

            </Form1>
            <Form1>
            <Form3>
                <InputContainer>
<Label>
<Input type='radio'  name="industry" value="Migration to a new CMS" checked={formData.services==="Migration to a new CMS"}  onChange={this.handleRadioChange}/>
Migration to a new CMS
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio'  name="industry" value="Delivery of new features" checked={formData.services==="Delivery of new features"} onChange={this.handleRadioChange}/>
    Delivery of new features
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio'  name="industry" value="Troubleshooting" checked={formData.services==="Troubleshooting"} onChange={this.handleRadioChange}/>
    Troubleshooting
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio'  name="industry" value="Finanacial" checked={formData.services ==="Finanacial"} onChange={this.handleRadioChange}/>
    <Input1 type="text" placeholder="others (please specify)"/>
    </Label>
</InputContainer>

<InputContainer>
<P>
Please provide a link to your existing website if you have one</P>
<Input2 
              type="text" 
              placeholder="Please add here"
              value={this.state.websiteLink}
              onChange={this.handleWebsiteLinkChange}
            /></InputContainer>
 {error && <ErrorMessage>{error}</ErrorMessage>}
 
                </Form3>
               
            </Form1>
           
        </Main1>
            
          <Button style={{textAlign: 'center'}}>
          <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
            
          </Button>

        </form>
      </Main>
    )
  }
}

export default YourIndustry;
const media = {
  mobile: '@media(max-width: 576px)'
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


const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`
const Fom = Styled.div`
${media.mobile}{
  border-radius:5px;
  gap:0px;
}
`

const Main = Styled.div`
background-color:#0C111F;
${media.mobile}{
  width:100%;
}
`

const P = Styled.p`
color:#000000;
font-size:15px;
margin-bottom:10px;
${media.mobile}{
  font-size:11px;
  width:90%;
}
`

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
`
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
  width: 53%;
  border-radius:12px;
  gap:0px;
  margin: 0px -10px 0px 10px;
  line-height: 1;
  padding:5px;
  height:300px;
`
const Heading = Styled.h1`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
color: #263238;
${
  media.mobile
}{
  font-size:13px;
  line-height: 1.5;
  color:#263238;
  font-weight: 700;
}
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
font-family:Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
${media.mobile}{
  font-size:11px;
}
`
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
font-size:15px;
color: #263238;
font-weight:500;
margin-left:10px;
${media.mobile}{
  font-size:11px;
  width:130px;;
}
`
const Input2 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:250px;
border-radius:4px;
${media.mobile}{
  width:130px;
  border-radius:5px;
  gap:0px;
}
`
const Form3 = Styled.div`
margin-top:50px;
${media.mobile}{
  border-radius:5px;
  gap:0px;
}
`
const ErrorMessage = Styled.p`
  color: red;
  margin-top: 10px;
  font-size:12px;
`;