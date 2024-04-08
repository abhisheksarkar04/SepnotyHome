
import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper ,Step } from 'react-form-stepper';
import './App.css';

class Summary extends Component {
  state = {
    error: ''

  };
  validateFormData = (formData) => {
    const { UIDesignMockups,chosenCMS,cmsDetails } = formData;

    // Check if services are selected
    if (!UIDesignMockups) {
      this.setState({ error: "Please select a MockUps" });
      return false;
    }

    else if(!chosenCMS){
      this.setState({error:"please select a CMS"})
      return false;
    }

    // Check if the "Others" option is selected and otherServiceDetails is provided
    if (chosenCMS === "Yes" && !cmsDetails) {
      this.setState({ error: "Please provide details for the 'Others' option." });
      return false;
    }

    return true;
  };

  continue = (e) => {
    e.preventDefault();
    const { formData } = this.props;
    if (!this.validateFormData(formData)) {
      return; // Prevent proceeding if form data is not valid
    }
    else{
      this.props.nextStep();
    }
    
  }

  handleMockupsChange = (e) => {
    this.props.updateFormData({
      UIDesignMockups: e.target.value
    });

  };
  handleCMsDetails = (e) => {
    this.props.updateFormData({
      cmsDetails:e.target.value
    })
  }
  
  
  
  handleCMSChange = (e) => {
    const {chosenCMS,cmsDetails} = this.props.formData
    const selectedCms = e.target.value;
    let error = "";

    // Clear error when user selects a service
    if (selectedCms !== "Yes") {
      error = "";
    }

    this.props.updateFormData({
      chosenCMS:selectedCms,
      cmsDetails: "", // Clear otherServiceDetails when user selects a service
    });

    this.setState({ error });
  };



  back = e => {

    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { error } = this.state;
    const {UIDesignMockups,chosenCMS,cmsDetails} = this.props.formData

    return (
      <Main className="form">
        <div>

        <StyledStepper
          activeStep={3}
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
          activeStep={3}
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
       
          <Mai>
            <Form1>
              <Heading>*Do you have UI design mockups?</Heading>
              <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="mockups" value="Yes" checked={UIDesignMockups === "Yes"}  onChange={this.handleMockupsChange} />
Yes
</Label>
</InputContainer>
<InputContainer>
<Label>
<Input type='radio' name="mockups" value="I will engage third party for UI design" checked={UIDesignMockups === "I will engage third party for UI design"} onChange={this.handleMockupsChange} />
    I will engage third party for UI design
    </Label>
</InputContainer>
<InputContainer>
<Label>
<Input type='radio' name="mockups" value="I will need you to provide UI design" checked={UIDesignMockups === "I will need you to provide UI design"} onChange={this.handleMockupsChange} />
    I will need you to provide UI design
    </Label>
</InputContainer>
                </Form2>

         
            </Form1>
            <Form1>
              <Heading>*Have you chosen a CMS?</Heading>
              <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="cms" value="No" checked={chosenCMS==="No"} onChange={this.handleCMSChange} />
No
</Label>
</InputContainer>
<InputContainer>
<Label>
<Input type='radio' name="cms" value="Yes" checked={chosenCMS==="Yes"} onChange={this.handleCMSChange} />
<Input1 type="text" value={cmsDetails} placeholder="Yes (Please Specify)" onChange={this.handleCMsDetails} />
    </Label>
</InputContainer>
{error && <ErrorMessage>{error}</ErrorMessage>}

                </Form2>

            </Form1>
          </Mai>
        </div>
        <Button className="buttons">
          <button
            className="buttons__button buttons__button--back"
            onClick={this.back}
          >
            Back
          </button>
          <button
            className="buttons__button buttons__button--next"
            onClick={this.continue}
          >
            Next
          </button>
        </Button>
      </Main>
    );
  }
}

export default Summary;
const media = {
  mobile: "@media(max-width: 576px)",
};
const ErrorMessage = Styled.div`
  color: red;
  margin-top: 10px;
  font-size:12px;
`;

const Div = Styled.div`
display:none;
`

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`;

const Main = Styled.div`
background-color:#0C111F;
${media.mobile}{width:100%}
`;

const Mai = Styled.div`
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
const Form1 = Styled.div`
display:flex;
flex-direction:column;
padding:20px;
height:380px;
width:100%;
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
  height:300px;
`
const Heading = Styled.h1`
color:#263238;
font-size:18px;
font-weight:700;
margin-bottom:20px;
font-family:Roboto;
margin-bottom:30px;
${media.mobile}{
  font-size:14px;
}
`;
const Form2 = Styled.div`
${media.mobile}{
  border-radius:5px;
  gap:0px;
}
`;
const Input = Styled.input`
margin-right:10px;
`;
const InputContainer = Styled.div`
margin-top:10px;
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
`
const Input1 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:250px;
border-radius:4px;
${media.mobile}{
  width:120px;
  border-radius:5px;
  gap:0px;
}
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
// const Input2 = Styled.input`
// background: #C1CAE7;
// border: 1px solid gray;
// `
