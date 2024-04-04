
import React, { Component } from 'react';
import Styled from "styled-components"
import './App.css';
import handleFormValues from "./allFormValues";
import FirstStep from "./Website/FirstPage";
import { Stepper, Step ,StepLabel} from 'react-form-stepper';


class PersonalDetails extends Component {
constructor(props){
  super(props);
  this.state = {
    formErrors: {
      typeOfWebsite: '',
      numberOfPages: ''
    },
    activeStep: 0
  };
}
componentDidMount() {
  // Initialization tasks after the component is mounted
  console.log("SecondSoftware component mounted");
}

componentWillUnmount() {
  // Cleanup tasks before the component is unmounted
  console.log("SecondSoftware component unmounted");
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

  handleSubmit = (event) => {
    event.preventDefault();

    const { typeOfWebsite, numberOfPages } = this.state;

    // Call the handleFormValues function from FormUtils.js

    if (typeOfWebsite.length === 0) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          typeOfWebsite: "Please select at least one type of software.",
        },
      });
      return;
    }
    if (!numberOfPages) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          numberOfPages:
            "Please select the number of pages for your website/App.",
        },
      });
      return;
    }

    // if(softwareTypes.length === 0 && !numberOfPages){

    // }
    // Store the form data or proceed with further actions
    console.log("Form data:", this.state);
    // Proceed to the next step or page
  };
  continue = (e) => {
    e.preventDefault();

    const { typeOfWebsite, numberOfPages } = this.props.formData;
    const formErrors = {};
    // Check software types
    //console.log("Form data:", this.props.formData);
    if (typeOfWebsite.length === 0) {

      formErrors.softwareTypes = 'Please select at least one type of software.';

    }
    // Check number of pages
    if (!numberOfPages) {

      formErrors.numberOfPages = 'Please select the number of pages for your website/App.';
    }
    // If there are errors, update the state with the errors
    if (Object.keys(formErrors).length > 0) {
      this.setState({ formErrors });
      return; // Prevent navigation to the next step/page
    }

    // If there are no errors, proceed to the next step
    this.props.nextStep();
  }

  render() {
    const { typeOfWebsite, numberOfPages, formErrors ,activeStep} = this.state;
    const {formData} = this.props

    return (
      <Main className="form">
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



        
      <Main1>
            <FormContainer>
            <Form>
               
                    <Heading>
                         *Choose the type of  you need:
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
                    <Input type="checkbox" id="6st" checked={formData.typeOfWebsite.includes('6st')} onChange={this.handleCheckboxChange} />
                        <Input1 type="text" id="6st" placeholder="others (please specify"/>
                    </CheckBoxCon>
                {formErrors.typeOfWebsite && <Error style={{ color: 'red' }}>{formErrors.typeOfWebsite}</Error>}
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
                  <Input type='radio' name="numberOfPages" value="  1,000-5,000" checked={formData.numberOfPages === "1,000-5,000"} onChange={this.handleRadioChange}/>
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
              {formErrors.numberOfPages && <Error style={{ color: 'red' }}>{formErrors.numberOfPages}</Error>}
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
height:380px;
width:90%;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:20px;
border-radius:10px;
${media.mobile}{
  width: 50%;
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
margin-left:10px;
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

