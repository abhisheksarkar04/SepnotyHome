import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper, Step } from 'react-form-stepper';
import './App.css';


class SecondForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  continue = (e) => {
    e.preventDefault();

    const { formData } = this.props;
    const { appFeatures } = formData;

    // Validation for feature selection
    if (appFeatures.length === 0) {
      this.setState({ error: 'Please select at least one feature.'});
      return;
    }

    // Check if 'Other' checkbox is checked and 'Other Feature Details' is empty
    if (appFeatures.includes('other') && (!formData.otherFeatureDetails || formData.otherFeatureDetails.trim() === '')) {
      this.setState({ error: 'Please provide other feature details.' });
      return;
    }

    // Proceed to the next step if all validations pass
    this.setState({ error: '' });
    this.props.nextStep();
  };

  handleCheckboxChange = (e) => {
    const { checked, id } = e.target;
    const { formData } = this.props;
    const { appFeatures, otherFeatureDetails } = formData;

    // Update appFeatures based on checkbox change
    const updatedFeatures = checked
      ? [...appFeatures, id]
      : appFeatures.filter(feature => feature !== id);

    // Check if 'Other' checkbox is checked
    if (id === 'other') {
      // If 'Other' checkbox is checked, reset otherFeatureDetails
      const updatedDetails = checked ? '' : otherFeatureDetails;
      this.props.updateFormData({ appFeatures: updatedFeatures, otherFeatureDetails: updatedDetails });
    } else {
      this.props.updateFormData({ appFeatures: updatedFeatures });
    }
  }

  handleOtherDetailsChange = (e) => {
    this.props.updateFormData({ otherFeatureDetails: e.target.value });
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { error } = this.state;
    const { appFeatures,otherFeatureDetails } = this.props.formData;
    return (
      <Main className="form">
        <form>

          <StyledStepper
            activeStep={4}
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
              activeStep={4}
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
                *What website or App features/capabilities do you need?
                </Heading>
                <CheckBoxCon>
                  <input type="checkbox" id="Multi domain configuration" checked={appFeatures.includes('Multi domain configuration')} value="Multi domain configuration" onChange={this.handleCheckboxChange} />
                  <Label htmlFor="Multi domain configuration">
                    Multi domain configuration
                  </Label>
                </CheckBoxCon>
                <CheckBoxCon>
                  <input type="checkbox" id="Multilingual support" value="Multilingual support" checked={appFeatures.includes('Multilingual support')} onChange={this.handleCheckboxChange} />
                  <Label htmlFor="Multilingual support">
                    Multilingual support
                  </Label>
                </CheckBoxCon>
                <CheckBoxCon>
                  <input type="checkbox" id="Drag - and - drop Page editor" value='Drag - and - drop Page editor' checked={appFeatures.includes('Drag - and - drop Page editor')} onChange={this.handleCheckboxChange} />
                  <Label htmlFor="Drag - and - drop Page editor">
                    Drag - and - drop Page editor
                  </Label>
                </CheckBoxCon>
                <CheckBoxCon>
                  <input type="checkbox" id="Page templates" value="Page templates" checked={appFeatures.includes('Page templates')} onChange={this.handleCheckboxChange} />
                  <Label htmlFor="Page templates">
                  Page templates
                  </Label>
                </CheckBoxCon>
                <CheckBoxCon>
                  <input type="checkbox" id="Contact Forms" value="Contact Forms" checked={appFeatures.includes('Contact Forms')} onChange={this.handleCheckboxChange} />
                  <Label htmlFor="Contact Forms">
                  Contact Forms
                  </Label>
                </CheckBoxCon>
                <CheckBoxCon>
                  <input type="checkbox" id="Live Chat / bot" value="Live Chat / bot" checked={appFeatures.includes('Live Chat / bot')} onChange={this.handleCheckboxChange} />
                  <Label htmlFor="Live Chat / bot">
                  Live Chat / bot
                  </Label>
                </CheckBoxCon>
              </Form>
            </FormContainer>
            <FormContainer>
              <Form1>

                <CheckBoxCon>
                  <input type="checkbox" id="User generated content(post, comments & Feedback)" value="User generated content(post, comments & Feedback)" checked={appFeatures.includes('User generated content(post, comments & Feedback)')} onChange={this.handleCheckboxChange} />
                  <Label htmlFor="User generated content(post, comments & Feedback)">
                  User generated content(post <S></S>,comments & Feedback)
                  </Label>
                </CheckBoxCon>
                <CheckBoxCon>
                  <input type="checkbox" id="Mobile compatibility" value="Mobile compatibility" checked={appFeatures.includes('Mobile compatibility')} onChange={this.handleCheckboxChange} />
                  <Label htmlFor="Mobile compatibility">
                  Mobile compatibility
                  </Label>
                </CheckBoxCon>
                <CheckBoxCon>
                  <input type="checkbox" id="Social media Sharing functionality" value="Social media Sharing functionality" checked={appFeatures.includes('Social media Sharing functionality')} onChange={this.handleCheckboxChange} />
                  <Label htmlFor="Social media Sharing functionality">
                  Social media Sharing functionality
                  </Label>
                </CheckBoxCon>
                <CheckBoxCon>
                  <input type="checkbox" id="Web Analytics" value="Web Analytics" checked={appFeatures.includes('Web Analytics')} onChange={this.handleCheckboxChange} />
                  <Label htmlFor="Web Analytics">
                  Web Analytics
                  </Label>
                </CheckBoxCon>
                <CheckBoxCon>
                  <input type="checkbox" id="other" checked={appFeatures.includes('other')} onChange={this.handleCheckboxChange} />
                  <In type="text" htmlFor="other" value={otherFeatureDetails} placeholder='others (please specify)'  onChange={this.handleOtherDetailsChange}/>
                </CheckBoxCon>

                {error && <ErrorMessage>{error}</ErrorMessage>}
              </Form1>
            </FormContainer>
          </Mai>
        </form>
        <Button style={{ textAlign: "center" }}>
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

export default SecondForm;

const media = {
  mobile: "@media(max-width: 576px)",
};
const S = Styled.span`
margin-left:20px;
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

const Div = Styled.div`
  display:none;
`;

const Button = Styled.div`
  display:flex;
  justify-content:end;
  margin-top:90px;
  margin-left:-90px;
`;

const ErrorMessage = Styled.div`
  color: red;
  margin-top: 10px;
  font-size:12px;
`;

const Main = Styled.div`
  background-color:#0C111F;
  ${media.mobile}{
    width:100%;
  }
`;

const Mai = Styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-item:center;
  gap:20px;
  ${media.mobile}{
    gap:4px;
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

const In = Styled.input`
  background:transparent;
  border: 1px solid gray;
  margin-left:10px;
  ${media.mobile}{
    margin-left:0px;
    width:110px;
  }
`;

const Form = Styled.div`
  ${media.mobile}{
    width:100%;
  }
`;

const Form1 = Styled.div`
  margin-top:60px;
  ${media.mobile}{
    width:100%;
    margin-top:80p;
  }
`;
