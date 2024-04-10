
import React, { Component , useState} from 'react';
import { Stepper ,Step} from 'react-form-stepper';
import Styled from "styled-components"
import './App.css';


// import MaterialTable from 'material-table';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class FormNo5 extends Component {
  state = {

    current: 'Yes',
    error: "",

  };

  handleButtonClick = (page) => {
    const paymentSystem = this.props.formData
    this.props.updateFormData({
      paymentSystem: !paymentSystem
    });
    
    this.setState({ current: page });
  };

  validateForm = () => {
    const {formData} = this.props
    const {typeOfMedia, visitors} = formData
    let errors = ""; // Changed const to let

    if (typeOfMedia.length === 0) {
      errors = 'Please select at least one media content type.';
    }

    if (!visitors) {
      errors = 'Please select the expected number of monthly visitors.';
    }
    if (typeOfMedia.includes('other') && !this.props.formData.otherMediaDetails) {
       errors= "Please specify the other type of media." ;
      return;
    }

    return errors;
};

handleNext = (e) => {
  e.preventDefault();

  const {typeOfMedia, visitors,otherMediaDetails} = this.props.formData

  if (typeOfMedia.length === 0) {
    this.setState({ error: "Please select at least one type of website." });
    return;
  }

  if (!visitors) {
    this.setState({ error: "Please select the number of pages for your website/App." });
    return;
  }

  if (typeOfMedia.includes('other') && !otherMediaDetails) {
    this.setState({ error: "Please specify the other type of media." });
    return;
  }

  // If all validations pass, clear the error and proceed
  this.setState({ error: "" });
  this.props.nextStep();
};


  handleRadioChange = (event) => {
    this.props.updateFormData({
      visitors: event.target.value

    });
  };

  handleCheckboxChange = (e) => {
    const { value, checked ,id} = e.target;
    this.props.updateFormData({
      typeOfMedia:checked ? [...this.props.formData.typeOfMedia, id] : this.props.formData.typeOfMedia = this.props.formData.typeOfMedia.filter(type => type !== id)
    })
  };

  handleOtherDetailsChange = (e) => {
    const { value } = e.target;
    const { typeOfMedia } = this.props.formData;

    // Update the "other" checkbox state based on whether the input has a value
    this.props.updateFormData({
      otherMediaDetails: value,
      typeOfMedia: value ? [...typeOfMedia, 'other'] : typeOfMedia.filter(feature => feature !== 'other')
    });
  }
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const { current, mediaContent, paymentSupport, monthlyVisitors, error } = this.state;
    const {typeOfMedia,visitors,otherMediaDetails} = this.props.formData


    return (
      <Main className="form">
        <form>
        <StyledStepper
          activeStep={5}
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
          activeStep={5}
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
                    *What type of media content does your Software have to support?
                    </Heading>
                    <CheckBoxCon>
                    
                        <Input1 type="checkbox" name='mediatype' checked={typeOfMedia.includes("Images")} id="Images" value="Images" onChange={this.handleCheckboxChange}/>
                        <Label htmlFor="Images">
                        Images
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlFor="Video">
                        <Input1 type="checkbox" name='mediatype' checked={typeOfMedia.includes("Video")}  id="Video" value="Video" onChange={this.handleCheckboxChange}/>
                       
                        Video
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlFor="Audio">
                        <Input1 type="checkbox" id="Audio" name='mediatype' checked={typeOfMedia.includes("Audio")}  value="Audio" onChange={this.handleCheckboxChange}/>
                        
                        Audio
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Label htmlFor="Interactive content">
                        <Input1 type="checkbox" id="Interactive content" name='mediatype' checked={typeOfMedia.includes("Interactive content")} value="Interactive content" onChange={this.handleCheckboxChange}/>
  
                        Interactive content
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <Input1 type="checkbox" id="other" name='mediatype' onChange={this.handleCheckboxChange} checked={typeOfMedia.includes("other")}/>
                        <Inpu type="text" htmlFor="five" value={otherMediaDetails} placeholder="Others (Please Specify)" onChange={this.handleOtherDetailsChange}/>
                    </CheckBoxCon>
                    <Para1>
                    Should your website or App support payments?
                    </Para1>
                    <Main5>
                        <ActiveButton type="button" active={current === 'Yes' ? "true" : "false"}  onClick={() => this.handleButtonClick('Yes')}>Yes</ActiveButton>
                        <Buttonel type="button" active={current === 'No' ? "true": "false"}  onClick={() => this.handleButtonClick('No')}>No</Buttonel>
                    </Main5>
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
                    <Input type='radio' name="numberOfPages" value="I am not sure" checked={visitors === "I am not sure"} onChange={this.handleRadioChange} />
                    I am not sure
                  </Label>
                </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="up to 50" checked={visitors === "up to 50"} onChange={this.handleRadioChange}/>
                  up to 50
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="50-100" checked={visitors === "50-100"} onChange={this.handleRadioChange}/>
                  50-100
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="100-500" checked={visitors === "100-500"} onChange={this.handleRadioChange}/>
                  100-500
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="500-1,000" checked={visitors === "500-1,000"} onChange={this.handleRadioChange}/>
                  500-1,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="1,000-5,000" checked={visitors === "1,000-5,000"} onChange={this.handleRadioChange}/>
                  1,000-5,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="5,000-10,000" checked={visitors === "5,000-10,000"} onChange={this.handleRadioChange}/>
                  5,000-10,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="more than 10,000" checked={visitors === "more than 10,000"} onChange={this.handleRadioChange}/>
                  more than 10,000

                  </Label>
                </InputContainer>
                {error && <Error>{error}</Error>}
              </Form>
            </FormContainer>
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
            onClick={this.handleNext}
          >
            Next
          </button>
        </Button>
      </Main>
    );
  }
}

export default FormNo5;
const media = {
  mobile: "@media(max-width: 576px)",
};
const Inpu = Styled.input`
background:transparent;
border: 1px solid #8C8C8C;
${media.mobile}{
  width:100px;
}
`
const Error = Styled.p`
font-size:12px;
color:red;
`;
const Para1 = Styled.p`
${media.mobile}{
  font-size:12px;
  margin-top:10px;
}
`
const Div = Styled.div`
display:none;
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
`;
const Main = Styled.div`
background-color:#0C111F;
${media.mobile}{width:100%}
`;
const Main1 = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
${media.mobile}{gap:0px;
justify-content-start;}
`;
const Heading = Styled.h1`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color: #263238;
${media.mobile}{font-size:13px;
line-height:18px;
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
  width: 53%;
  border-radius:12px;
  gap:0px;
  margin: 0px -10px 0px 10px;
  line-height: 1;
  padding:5px;
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
${media.mobile}{
  margin-top:0px;
  font-size:11px;
}
`;
const Form = Styled.div`
${media.mobile}
`;
const Input1 = Styled.input`
margin-right:10px;

${media.mobile}{
  font-size:12px;
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
margin-top:2px;
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
margin-top:10px;
margin-right:10px;
background:transparent;
border: 1px solid #8C8C8C;
${media.mobile}{
}
`



const Label1 = Styled.label`
font-size:16px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`;

const Main5 = Styled.div`
display:flex;
flex-direction:row;

${media.mobile}{
  margin-top:10px;
}
`

const Butto = Styled.button`
  background-color: ${(props) => (props.active === "true" ? '#2B459B' : '#C1CAE7')};
  color: ${(props) => (props.active === "true" ? 'white' : 'black')};
  border: 1px solid #8C8C8C;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-left: -5px;
  
  ${media.mobile} {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

const ActiveButton = Styled(Butto)`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Buttonel = Styled(Butto)`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Mai = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
`;
