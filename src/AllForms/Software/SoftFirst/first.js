import React, { Component } from 'react';
import { Stepper ,Step} from 'react-form-stepper';
import Styled from "styled-components"
class FirstSoftwarePage extends Component {

  state = {
    error:"",
  };

  handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const typeOfSoftware = this.props.formData.typeOfSoftware || [];
    this.props.updateFormData({
      typeOfSoftware: checked
        ? [...typeOfSoftware, id]
        : typeOfSoftware.filter(type => type !== id)
    });
  };

  handleRadioChange = (event) => {
    this.props.updateFormData({
      numberofTools: event.target.value
    });
  };

  handleOtherDetailsChange = (e) => {
    this.props.updateFormData({ otherSoftwareDetails: e.target.value });
  }

  

  continue = (e) => {
    e.preventDefault();

    const { typeOfSoftware, numberofTools } = this.props.formData;

    if (typeOfSoftware.length === 0) {
      this.setState({ error: "Please select at least one type of website." });
      return;
    }

    if (!numberofTools) {
      this.setState({ error: "Please select the number of pages for your website/App." });
      return;
    }

    if (typeOfSoftware.includes('other') && !this.props.formData.otherSoftwareDetails) {
      this.setState({ error: "Please specify the other type of website." });
      return;
    }

    // If all validations pass, clear the error and proceed
    this.setState({ error: "" });
    this.props.nextStep();
  }

  render() {
    const { softwareTypes, numberOfPages, formErrors } = this.state;
    const {formData} = this.props
    const {error}= this.state;

    const {typeOfSoftware,numberofTools,otherSoftwareDetails} = formData

    return (
      <Main className='form'>
        <form onSubmit={this.handleSubmit}>

        <StyledStepper
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
        </StyledStepper>
<Div>
<StyledStepper
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
        </StyledStepper>

</Div>
      <Main1>
            <FormContainer>
                <Form>
                    <Heading>
                    *Choose the type of Software you need:
                    </Heading>
                    <CheckBoxCon>
                    <Input type="checkbox" id="System software" checked={typeOfSoftware.includes('System software')} onChange={this.handleCheckboxChange} />
                    <Label htmlfor="System software">
                    System software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <Label htmlfor="Utility software">
                        <Input type="checkbox" id="Utility software" checked={typeOfSoftware.includes('Utility software')} onChange={this.handleCheckboxChange} />
                        Utility software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label htmlfor="Application software">
                        <Input type="checkbox" id="Application software" checked={typeOfSoftware.includes('Application software')} onChange={this.handleCheckboxChange} />
                        Application software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label htmlfor="Designing software">
                        <Input type="checkbox" id="Designing software" checked={typeOfSoftware.includes('Designing software')} onChange={this.handleCheckboxChange} />
                        Designing software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label htmlfor="Programming software">
                        <Input type="checkbox" id="Programming software" checked={typeOfSoftware.includes('Programming software')} onChange={this.handleCheckboxChange} />
                        Programming software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Input type="checkbox" id="other" checked={typeOfSoftware.includes('other')} onChange={this.handleCheckboxChange} />
                        <Input1 type="text" id="6st" value= {otherSoftwareDetails} placeholder="others (please specify" onChange={this.handleOtherDetailsChange}/>
                    </CheckBoxCon>

                </Form>
            </FormContainer>
            <FormContainer>
                <Form>
                    <Heading>
                    *How many Tools will your Software have?
                    </Heading>
                    <InputContainer>
                  <Label>
                    <Input type='radio' name="numberOfPages" value="I am not sure" checked={numberofTools === "I am not sure"} onChange={this.handleRadioChange} />
                    I am not sure
                  </Label>
                </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="up to 50" checked={numberofTools === "up to 50"} onChange={this.handleRadioChange}/>
                  up to 50
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="50-100" checked={numberofTools === "50-100"} onChange={this.handleRadioChange}/>
                  50-100
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="100-500" checked={numberofTools === "100-500"} onChange={this.handleRadioChange}/>
                  100-500
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="500-1,000" checked={numberofTools === "500-1,000"} onChange={this.handleRadioChange}/>
                  500-1,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="1,000-5,000" checked={numberofTools === "1,000-5,000"} onChange={this.handleRadioChange}/>
                  1,000-5,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="5,000-10,000" checked={numberofTools === "5,000-10,000"} onChange={this.handleRadioChange}/>
                  5,000-10,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="more than 10,000" checked={numberofTools === "more than 10,000"} onChange={this.handleRadioChange}/>
                  more than 10,000
                  </Label>
              </InputContainer>
              {error && <Error style={{ color: 'red' }}>{error}</Error>}
                              </Form>
                          </FormContainer>
                      </Main1>
                      </form>
                      <Button style={{textAlign: 'center'}}>
                      <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
                        </Button>
          </Main>
                  )
                }
}

export default FirstSoftwarePage;

const Error = Styled.p`
font-size:12px;
`

const Div = Styled.div`
display:none;
`
const media = {
  mobile: '@media(max-width: 576px)'
};
const Span = Styled.p`
font-size:12px;
`
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
const Button1 = Styled.button`
background-color:blue;
height:40px;
width:120px;
color:white;
`
const Main = Styled.div`
background-color:#0C111F;
${media.mobile}{
  width:100%;
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
  justify-content:center;
  align-item:center;
  margin-left:-30px;
}
`
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
  font-size:13px;
}
`

const FormContainer = Styled.div`
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
  width:52%;
  border-radius:5px;
  gap:0px;
}
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
${media.mobile}{
  font-size:11px;
}
`
const Form = Styled.form`
${media.mobile}{
  width:100%;
  border-radius:5px;
  gap:0px;
}
`
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
font-size:15px;
color: #263238;
font-weight:500;
height:20px;
${media.mobile}{font-size:13px;}
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
margin-right:10px;
margin-top:10px;
`