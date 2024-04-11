
import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper ,Step } from 'react-form-stepper';
import './App.css';


class PersonalDetails extends Component {
constructor(props){
  super(props);
  this.state = {
    error:"",
  };
}


handleCheckboxChange = (event) => {
  const { id, checked } = event.target;
  const typeOfWebsite = this.props.formData.typeOfWebsite || [];
  this.props.updateFormData({
    typeOfWebsite: checked
      ? [...typeOfWebsite, id]
      : typeOfWebsite.filter(type => type !== id)
  });
};


handleRadioChange = (event) => {
  this.props.updateFormData({
    numberOfPages: event.target.value
  });
};

handleOtherDetailsChange = (e) => {
  const { value } = e.target;
  const { typeOfWebsite } = this.props.formData;
  const isChecked = typeOfWebsite.includes('other');

  // Update the "other" checkbox state based on whether the input has a value
  this.props.updateFormData({
    otherTypeOfWebsite: value,
    typeOfWebsite: value ? [...typeOfWebsite, 'other'] : typeOfWebsite.filter(type => type !== 'other')
  });
}



  continue = (e) => {
    e.preventDefault();

    const { typeOfWebsite, numberOfPages ,} = this.props.formData;
    const {nextStep} = this.props

    if (typeOfWebsite.length === 0) {
      this.setState({ error: "Please select at least one type of website." });
      return;
    }

    if (!numberOfPages) {
      this.setState({ error: "Please select the number of pages for your website/App." });
      return;
    }

    if (typeOfWebsite.includes('other') && !this.props.formData.otherTypeOfWebsite) {
      this.setState({ error: "Please specify the other type of website." });
      return;
    }

    console.log(this.props.formData)

    const {activeStep} = this.props



    // If all validations pass, clear the error and proceed
    this.setState({ error: "" });
    nextStep();
  }

  render() {
    const {error}= this.state;
    const {formData} = this.props
 
    return (
      <Main className="form">
        <form >
        <StyledStepper
          activeStep={this.props.activeStep}
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
        <Div>
        <Atyled
          activeStep={0}
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
        </Atyled>
        </Div>
      <Main1>
            <FormContainer>
            <Form>
               
                    <Heading>
                    *Choose the type of website/App you need:
                    </Heading>
                    <CheckBoxCon>
                    <Input type="checkbox" id="Corporate Website/App" value="Corporate Website/App" checked={formData.typeOfWebsite.includes('Corporate Website/App')} onChange={this.handleCheckboxChange} />
                    <Label htmlFor='Corporate Website/App'>
                        Corporate Website/App
                        </Label >
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <Label>
                        <Input type="checkbox" id="Portfolio Website/App" value="Portfolio Website/App" checked={formData.typeOfWebsite.includes("Portfolio Website/App")} onChange={this.handleCheckboxChange} />
                         Portfolio Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label>
                        <Input type="checkbox" id="Digital Media Website/App" checked={formData.typeOfWebsite.includes('Digital Media Website/App')} onChange={this.handleCheckboxChange} />
                        Digital Media Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label>
                        <Input type="checkbox" id="Educational Website/App" checked={formData.typeOfWebsite.includes('Educational Website/App')} onChange={this.handleCheckboxChange} />
                        Educational Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label>
                        <Input type="checkbox" id="Content aggregator" checked={formData.typeOfWebsite.includes('Content aggregator')} onChange={this.handleCheckboxChange} />
                        Content aggregator(eg: Forum)
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Input type="checkbox" id="other" checked={formData.typeOfWebsite.includes('other')} onChange={this.handleCheckboxChange} />
                        <Input1 type="text" id="6st" value={formData.otherTypeOfWebsite} placeholder="others (please specify" onChange={this.handleOtherDetailsChange}/>
                    </CheckBoxCon>
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
                    <Input type='radio' name="numberOfPages" value="I am not sure" checked={formData.numberOfPages === "I am not sure"} onChange={this.handleRadioChange} />
                    I am not sure
                  </Label>
                </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="up to 50" checked={formData.numberOfPages === "up to 50"} onChange={this.handleRadioChange}/>
                  up to 50
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="50-100" checked={formData.numberOfPages === "50-100"} onChange={this.handleRadioChange}/>
                  50-100
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="100-500" checked={formData.numberOfPages === "100-500"} onChange={this.handleRadioChange}/>
                  100-500
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="500-1,000" checked={formData.numberOfPages === "500-1,000"} onChange={this.handleRadioChange}/>
                  500-1,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="1,000-5,000" checked={formData.numberOfPages === "1,000-5,000"} onChange={this.handleRadioChange}/>
                  1,000-5,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="5,000-10,000" checked={formData.numberOfPages === "5,000-10,000"} onChange={this.handleRadioChange}/>
                  5,000-10,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="more than 10,000" checked={formData.numberOfPages === "more than 10,000"} onChange={this.handleRadioChange}/>
                  more than 10,000
                  </Label>
              </InputContainer>
              {error && <Error style={{ color: 'red' }}>{error}</Error>}
              </Form>
                          </FormContainer>
                      </Main1>
                      </form>
                      <Button style={{textAlign: 'center'}}>
                      <button className='buttons__button buttons__button--next'  onClick={this.continue}>Next</button>
                        </Button>
          </Main>
                  )
                }

}

export default PersonalDetails;

const Div = Styled.div`
display:none;
`

const media = {
  mobile: "@media(max-width: 576px)",
};
const StyledStepper = Styled(Stepper)`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  font-size: 9px;
  border: none;
  ${media.mobile}{
    font-size:7px;
  }
 
`;
const Atyled = Styled(Stepper)`
  display:none;
  justify-content: space-between;
  background-color: transparent;
  font-size: 9px;
  border: none;  
`

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

const Error = Styled.p`
font-size:12px;
`;

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`;
const Button1 = Styled.button`
background-color:blue;
height:40px;
width:120px;
color:white;
`;
const Main = Styled.div`
background-color:#0C111F;
${media.mobile}{
  width:100%;
  margin: 0;
  padding: 0px;
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
const Heading = Styled.h1`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color: #263238;

${
  media.mobile
}{
  font-size:14px;
  line-height: 1.5;
  color:#263238;

}
`;

const FormContainer = Styled.div`
display:flex;
flex-direction:column;
padding:20px;
border: 1px solid #C1CAE7;
background: #C1CAE7;
height:380px;
gap:20px;
border-radius:10px;
${media.mobile}{
  border-radius:12px;
  gap:0px;
  margin: 0px -10px 0px 10px;
  line-height: 1;
  padding:5px;
}
`;
const CheckBoxCon = Styled.div`
margin-top:15px;
align-items:start;
justify-content:space-between;
`;
const Label = Styled.label`
font-size:16px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
${media.mobile}{
  font-size:11px;
}
`;
const Form = Styled.div`

${media.mobile}{
 
}
`;
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
font-size:15px;
color: #263238;
font-weight:500;
height:20px;
${media.mobile}{
  font-size:11px;
  width:110px;
}
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
const InputContainer = Styled.div`
margin-top:5px;
`;
// const Input1 = Styled.textarea`
// background:transparent;
// border: 1px solid #C1CAE7;
// font-size:15px;
// color: #263238;
// font-weight:500;
// height:15px;
// `
const Input = Styled.input`
margin-right:10px;
margin-top:10px;
@media screen and (max-width: 576px){
  margin-right: 5px;
}
`

