
import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper ,Step } from 'react-form-stepper';
import './App.css';


class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  continue = (e) => {
    e.preventDefault();
  
    const { formData } = this.props;
    const { industryType, indstryotherDetails } = formData;
  
    // Validation for industry selection
    if (industryType.length === 0) {
      this.setState({ error: 'Please select at least one industry.' });
      return;
    }
  
    // Check if 'Other' checkbox is checked and 'Industry Other Details' is empty
    if (industryType.includes('10st') && (!indstryotherDetails || indstryotherDetails.trim() === '')) {
      this.setState({ error: 'Please provide other details.' });
      return;
    }
    this.setState({ error: '' });
  this.props.nextStep();
  }

  handleCheckboxChange = (e) => {
    const { value, checked ,id} = e.target;
    this.props.updateFormData({
      industryType: checked ? [...this.props.formData.industryType, id] : this.props.formData.industryType.filter(type => type !== id)
    });
  };

  handleOtherDetailsChange = (e) => {
    const { value } = e.target;
    const { industryType } = this.props.formData;
  
    // If 'Industry Other Details' is provided, remove the error message
    if (value.trim() !== '' && industryType.includes('other')) {
      this.setState({ error: '' });
    }
  
    this.props.updateFormData({ indstryotherDetails: value });
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { error } = this.state;
    const { industryType, indstryotherDetails} = this.props.formData;
    return (
      <Main className="form">
        <form>

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
        <StyledStepper1
          activeStep={1}
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
        </StyledStepper1>
        </Div>
        

          <Mai>
            <FormContainer>

                <Form>
                    <Heading>
                    *What is your industry?
                    </Heading>
                    <CheckBoxCon>
                        <input type="checkbox" id="Health Care" checked={industryType.includes('Health Care')} value="Health Care" onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Health Care">
                        Health Care
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Retail & Wholesale" value="Retail & Wholesale" checked={industryType.includes('Retail & Wholesale')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Retail & Wholesale">
                        Retail & Wholesale
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Manufacturing" value='Manufacturing' checked={industryType.includes('Manufacturing')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Manufacturing">
                        Manufacturing
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Financial services banking & Insurance" value="Financial services banking & Insurance" checked={industryType.includes('Financial services banking & Insurance')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Financial services banking & Insurance">
                        Financial services , banking & insurance
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Transportation & Logistics" value="Transportation & Logistics" checked={industryType.includes('Transportation & Logistics')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Transportation & Logistics">
                        Transportation & Logistics
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Telecommunications" value="Telecommunications" checked={industryType.includes('Telecommunications')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Telecommunications">
                        Telecommunications
                        </Label>
                    </CheckBoxCon>
                </Form>
            </FormContainer>
            <FormContainer>
                <Form1>
                <CheckBoxCon>
                        <input type="checkbox" id="Public sector" value="Public sector" checked={industryType.includes('Public sector')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Public sector">
                        Public sector
                        </Label>
                    </CheckBoxCon>
                <CheckBoxCon>
                        <input type="checkbox" id="Entertainment" value="Entertainment" checked={industryType.includes('Entertainment')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Entertainment">
                        Entertainment
                        </Label>
                    </CheckBoxCon>
                    
                    <CheckBoxCon>
                        <input type="checkbox" id="Education" value="Education" checked={industryType.includes('Education')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Education">
                        Education
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Professional Services" value="Professional Services" checked={industryType.includes('Professional Services')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Professional Services">
                        Professional Services
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="Constructions" value="Constructions" checked={industryType.includes('Constructions')} onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Constructions">
                        Constructions
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="other"  checked={industryType.includes('other')} onChange={this.handleCheckboxChange}/>
                        <In type="text" placeholder='others (please specify)' value={indstryotherDetails} onChange={this.handleOtherDetailsChange}/>
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
           <span>←</span> Back
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

export default CourseDetails;

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
 
`;
const StyledStepper1 = Styled(Stepper)`
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
  width:100%;
  gap: 6px;
  display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
  padding-right: 0px;
  justify-content:space-between;

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
${media.mobile}{
  font-size:15px;
}
`;

const FormContainer = Styled.div`
display:flex;
flex-direction:column;
padding:20px;
border: 1px solid #C1CAE7;
width:100%;
background: #C1CAE7;
gap:20px;
border-radius:10px;
${media.mobile}{
  border-radius:12px;
  gap:0px;
  margin: 0px -10px 0px 10px;
  line-height: 1;
  padding:3px;
}
`

const In = Styled.input`
background:transparent;
border: 1px solid gray;
margin-left:10px;
${media.mobile}{
  margin-left:10px;
  width:110px;
}
`
const CheckBoxCon = Styled.div`
gap:30px;
align-items:start;
justify-content:space-between;
margin-top:20px;
${media.mobile}{
  margin-top:10px;
}
`;
const Label = Styled.label`
font-size:16px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
margin-left:10px;
${media.mobile}{
  font-size:11px;
}
`;
const Form = Styled.div`
${media.mobile}{
  width:100%;
}
`;
const Form1 = Styled.div`
margin-top:20px;
${media.mobile}{
  width:100%;
  margin-top:40%;
}
`;
