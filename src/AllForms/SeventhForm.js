
import React, { Component } from 'react';
import { Stepper ,Step} from 'react-form-stepper';
import Styled from "styled-components"
import './App.css';

// import SecondPage from "./Forms/SevenPage"

import SevenPage from "./Website/SevenPage";
import handleFormValues from "./allFormValues";

// import MaterialTable from 'material-table';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class ThirdForm extends Component {
  state = {
    compliance: [],
    integration: "",
    integrationDetails: "",
    additionalDetails: "",
    formErrors: {
      compliance: "",
      integration: "",
      integrationDetails: "",
      additionalDetails: "",
    },
  };

  validateForm = () => {
    const { compliance, integration, integrationDetails, additionalDetails } =
      this.state;
    const formErrors = {};
    const {complianceRequirements,details} = this.props.formData


    if (complianceRequirements.length === 0) {
      formErrors.compliance = "Please select at least one compliance requirement";
    }
    if (!details) {

      formErrors.additionalDetails = "Please add additional details";
    } else {
      this.props.nextStep();
    }

    this.setState({ formErrors });
    return Object.keys(formErrors).length === 0;
  };

  handleIntegrationChange = (event) => {
    const { name, value } = event.target;


    const {externalIntegration} = this.props.formData

    this.props.updateFormData({
    externalIntegration:!externalIntegration
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

  handleIntegrationChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [name]: value,
      formErrors: {
        ...prevState.formErrors,
        integration: "",
        integrationDetails: "",
      },
    }));
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
    const { compliance, integration, integrationDetails, additionalDetails } =
      this.state;
    if (this.validateForm()) {
      // Store the selected compliance options in state or proceed further
    }
    const formData = {
      field7: {
        compliance,
        integration,
        integrationDetails,
        additionalDetails,
      },
    };
    this.props.onDataReceived(formData);
  };

  render() {
    const {
      compliance,
      formErrors,
      integration,
      integrationDetails,
      additionalDetails,
    } = this.state;

    const {complianceRequirements} = this.props.formData

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
          
<Mai>
            <FormContainer>
                <Form>
                    <Heading>
                    *Are there any compliance requirements?
                    </Heading>
                    <CheckBoxCon>
            <Label htmlFor="No">
              <input 
                type="checkbox" 
                id="No" 
                checked={complianceRequirements.includes("No")} 
                onChange={this.handleCheckboxChange} 
              />
              No
            </Label>
          </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="HIPPA">
                        <input type="checkbox" id="HIPPA" checked={complianceRequirements.includes("HIPPA")}  onChange={this.handleCheckboxChange}/>
                        
                        HIPPA
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="PCI DSS">
                        <input type="checkbox" id="PCI DSS" name='compliance' checked={complianceRequirements.includes("PCI DSS")} onChange={this.handleCheckboxChange}/>
                        
                        PCI DSS
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="GDPR">
                        <input type="checkbox" id="GDPR" name='compliance' checked={complianceRequirements.includes("GDPR")} onChange={this.handleCheckboxChange}/>
                        
                        GDPR
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlfor="I need your consultation on compliance">
                        <input type="checkbox" id="I need your consultation on compliance" name='compliance' checked={complianceRequirements.includes("I need your consultation on compliance")} onChange={this.handleCheckboxChange}/>
                        
                        I need your consultation on compliance
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <Input type="checkbox" id="five" name='compliance' value=""/>
                        <Input1 type="text" placeholder="Others (Please Specify)"/>

                    </CheckBoxCon>
                    {formErrors.compliance && <Error>{formErrors.compliance}</Error>}
                </Form>

            </FormContainer>
            <Form1>
              <Heading>
                *Do you need integration with any external or internal systems?
              </Heading>
              <Form2>
                <InputContainer>
                  <Label>
                    <input
                      type="radio"
                      name="integration"
                      value="No"
                      checked={integration === "No"}
                      onChange={this.handleIntegrationChange}
                    />
                    No
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <input
                      type="radio"
                      name="integration"
                      value="Yes (Please Specify)"
                      checked={integration === "Yes (Please Specify)"}
                      onChange={this.handleIntegrationChange}
                    />
                    Yes (Please Specify)
                    {integration === "Yes (Please Specify)" && (
                      <Input1
                        type="text"
                        name="integrationDetails"
                        value={integrationDetails}
                        onChange={this.handleIntegrationChange}
                        placeholder="Please specify integration details"
                      />
                    )}
                  </Label>
                  {formErrors.integration && (
                    <Error>{formErrors.integration}</Error>
                  )}
                  {formErrors.integrationDetails && (
                    <Error>{formErrors.integrationDetails}</Error>
                  )}
                </InputContainer>
                <Heading1>
                  *Do you need integration with any external or internal
                  systems?
                </Heading1>
              </Form2>
              <Input3
                type="text"
                name="additionalDetails"
                value={additionalDetails}
                onChange={this.handleAdditionalDetailsChange}
                placeholder="Please add here"
              />
              {formErrors.additionalDetails && (
                <Error>{formErrors.additionalDetails}</Error>
              )}
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

const Error = Styled.div`
  color: red;
  margin-top: 10px;
  font-size:12px;
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
${media.mobile}{font-size:15px;}

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
width:90%;
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
font-size:16px;
font-family: Roboto;
font-size:15px;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
margin-left:10px;
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
  width:120px;
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
width:600px;
${media.mobile}{
  width:250px;
}
`;
const Form2 = Styled.div`

`;
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
${media.mobile}{width:200px;}
`

