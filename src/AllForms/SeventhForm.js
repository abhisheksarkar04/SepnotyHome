
import React, { Component } from 'react';
import { Stepper ,Step} from 'react-form-stepper';
import Styled from "styled-components"
import './App.css';

// import SecondPage from "./Forms/SevenPage"


// import MaterialTable from 'material-table';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class ThirdForm extends Component {
  state = {
    formErrors: {
      compliance: "",
      integration: "",
      additionalDetails: ""
    },
  };

  validateForm = () => {
    const { formData } = this.props;
    const formErrors = {};

    const { complianceRequirements, otherCompliance, integrationDetails, details } = formData;

    if (complianceRequirements.length === 0) {
      formErrors.compliance = "Please select at least one compliance requirement";
    } else if (complianceRequirements.includes("Other") && !otherCompliance) {
      formErrors.compliance = "Please specify 'Other' compliance requirement";
    }

    if (!integrationDetails) {
      formErrors.integration = "Please provide integration details";
    }

    if (!details) {
      formErrors.additionalDetails = "Please add additional details";
    }

    // Set the state with form errors
    this.setState({ formErrors });

    // Check if there are any errors
    return Object.keys(formErrors).length === 0;
  };
  
  handleIntegrationChange = (event) => {
    const {externalIntegration} = this.props.formData
    this.props.updateFormData({
      integrationDetails:event.target.value
    })
      
  };

  handleCheckboxChange = event => {
    const { id, checked } = event.target;
    const complianceRequirements = this.props.formData.complianceRequirements || [];
    this.props.updateFormData({
      complianceRequirements: checked
        ? [...complianceRequirements, id]
        : complianceRequirements.filter(type => type !== id)
    });

  };

  handleOtherComplianceChange = event => {
    const { formData } = this.props;
    const { complianceRequirements } = formData;
    const { value } = event.target;
  
    // If the input field is empty, remove the "Other" option from the complianceRequirements array
    if (value === "") {
      this.props.updateFormData({
        complianceRequirements: complianceRequirements.filter(type => type !== "Other"),
        otherCompliance: value
      });
    } else {
      // If the input field is not empty, add or keep the "Other" option in the complianceRequirements array
      if (!complianceRequirements.includes("Other")) {
        this.props.updateFormData({
          complianceRequirements: [...complianceRequirements, "Other"],
          otherCompliance: value
        });
      } else {
        this.props.updateFormData({
          otherCompliance: value
        });
      }
    }
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleAdditionalDetailsChange = (event) => {
    const { name, value } = event.target;
    this.props.updateFormData({
      details:event.target.value
      })

  };

  continue = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      // Proceed to the next step
      this.props.nextStep();
    }
  };

  render() {
    const {
      compliance,
      formErrors,
      integration,
      additionalDetails,
    } = this.state;

    const {complianceRequirements,otherCompliance,integrationDetails,details} = this.props.formData

    return (
      <Main className="form">
        <form>
        <StyledStepper
          activeStep={6}
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
          activeStep={6}
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
            <FormContainer>
                <Form>
                    <Heading>
                    *Are there any compliance requirements?
                    </Heading>
                    <CheckBoxCon>
            <Label htmlFor="No">
              <Input8
                type="checkbox" 
                id="No" 
                checked={complianceRequirements.includes("No")} 
                onChange={this.handleCheckboxChange} 
              />
              No
            </Label>
          </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlFor="HIPPA">
                        <Input8 type="checkbox" id="HIPPA" checked={complianceRequirements.includes("HIPPA")}  onChange={this.handleCheckboxChange}/>
                        
                        HIPPA
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlFor="PCI DSS">
                        <Input8 type="checkbox" id="PCI DSS" name='compliance' checked={complianceRequirements.includes("PCI DSS")} onChange={this.handleCheckboxChange}/>
                        
                        PCI DSS
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlFor="GDPR">
                        <Input8 type="checkbox" id="GDPR" name='compliance' checked={complianceRequirements.includes("GDPR")} onChange={this.handleCheckboxChange}/>
                        
                        GDPR
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlFor="I need your consultation on compliance">
                        <Input8 type="checkbox" id="I need your consultation on compliance" name='compliance' checked={complianceRequirements.includes("I need your consultation on compliance")} onChange={this.handleCheckboxChange}/>
                        
                        I need your consultation on compliance
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <Input8 type="checkbox"
              id="Other"
              name='compliance'
              checked={complianceRequirements.includes("Other")}
              onChange={this.handleCheckboxChange}/>
                        <Input1  type="text"
                placeholder="Other Compliance (Please Specify)"
                value={otherCompliance} // Bind value to state
                onChange={this.handleOtherComplianceChange}/>

                    </CheckBoxCon>
                    <Error>{formErrors.compliance}</Error>
                </Form>

            </FormContainer>
            <Form1>
              <Heading>
                *Do you need integration with any external or internal systems?
              </Heading>
              <Form2>
                <InputContainer>
                  <Label>
                    <Input4
                      type="text"
                      name="integration"
                      value={integrationDetails}
                      onChange={this.handleIntegrationChange}
                    />
                  </Label>
                  <Error>{formErrors.integration}</Error>
                </InputContainer>
                <Heading1>
                *Here, you can add any details you want to share with us:
                </Heading1>
              </Form2>
              <Input3
                type="text"
                name="additionalDetails"
                value={details}
                onChange={this.handleAdditionalDetailsChange}
                placeholder="Please add here"
              />
            <Error>{formErrors.additionalDetails}</Error>
            </Form1>
          </Mai>
        </form>
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

export default ThirdForm;
const media = {
  mobile: "@media(max-width: 576px)",
};

const Input8 = Styled.input`
margin-right:10px;
`

const Input4 = Styled.input`
background:transparent;
border: 1px solid #8C8C8C;
outline:none;
${media.mobile}{
  width:80%;

}
`
const Div = Styled.div`
display:none;
`
const Error = Styled.div`
  color: red;
  margin-top: 10px;
  font-size:12px;
  ${media.mobile}{
    font-size:8px;
  }
`;
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
const Heading1 = Styled.h1`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #263238;
margin-top:20px;
margin-bottom:10px;
${media.mobile}{font-size:15px;}
`;

const Mai = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
${media.mobile}{gap:10px;justify-content:start;align-items:start;margin-left:-30px;}
`;
const Heading = Styled.h1`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #263238;
${media.mobile}{font-size:14px;
line-height:15px;}

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

const FormContainer = Styled.div`
display:flex;
flex-direction:column;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:-20px;
border-radius:10px;
padding:20px;
height:350px;
width:100%;
${media.mobile}{
  width:50%;
}
`;
const CheckBoxCon = Styled.div`
gap:30px;
align-items:start;
justify-content:space-between;
margin-top:13px;
`;
const Label = Styled.label`
font-size:14px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
margin-right:10px;
text-align: left;
${media.mobile}{font-size:13px;}

`
const Form = Styled.div`

${media.mobile}{
 width:100%;
}

`;
// const Para1 = Styled.p`

// `
const InputContainer = Styled.div`
margin-top:20px;
`;
const Input1 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:200px;
height: 18px;
color: black;
padding: 10px;
border-radius:4px;
${media.mobile}{
  width:100px;
}

`;
const Input = Styled.input`
margin-right:10px;
margin-left:10px;
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
width:90%;
${media.mobile}{
  width:52%;
}
`;
const Form2 = Styled.div`

`;
const Input3 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:200px;
height:70px;
border-radius:4px;
color: black;
padding: 8px;
text-align: left;
${media.mobile}{width:90%;fontsize:10px;}
`

