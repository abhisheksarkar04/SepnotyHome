
import React, { Component } from 'react';
import styled from "styled-components"
import { Stepper ,Step} from 'react-form-stepper';
import './App.css';
import submit from "./images/submit.svg";



const Popup = ({ onClose }) => (
  <PopupContainer>
    <PopupContent>
      <Img src={submit}/>
      <SubPara>Submitted <br/> successfully!</SubPara>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </PopupContent>
  </PopupContainer>
);

const SubPara = styled.p`
color:white;
font-size:32px;
margin-buttom:50px;
`

const PopupContainer = styled.div`
position: fixed;
top: 20%;
left: 40%;
width: 360px;
background-color: black;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
padding: 10px;
@media screen and (max-width: 576px) {
  width: 71%;
  height: 52%;
  left: 10%;
  top: 35%;
  margin: 10px 10px 10px -20px;
`;
const Img = styled.img`
height:30%;
`

const PopupContent = styled.div`
margin-top:50px;
  background-color:black;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  height:500px;
  gap:30px;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #2B459B;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;



class FourthForm extends Component {
  state = {
    preferredCommunication: "Any",
    error: "",
    submitted: false,
  }

  handlenameChange = (e) => {
    this.props.updateFormData({
      username: e.target.value
    });
  }

  handlecompanyChange = (e) => {
    this.props.updateFormData({
      companyName: e.target.value
    })
  }

  handleEmailChange = (e) => {
    const email = e.target.value;
    const emailPattern = /\S+@\S+\.\S+/; // Regular expression pattern for email validation

    if (!emailPattern.test(email)) {
      this.setState({ error: "Please enter a valid email address." });
    } else {
      this.setState({ error: "" });
      this.props.updateFormData({ email });
    }
  }

  handleNumberChange = (e) => {
    const phoneNumber = e.target.value;
    const phonePattern = /^\d{10}$/; 
    // Regular expression pattern for 10-digit phone number

    this.props.updateFormData({ phoneNumber });

    if (!phonePattern.test(phoneNumber)) {
      this.setState({ error: "Phone number must be 10 digits." });
    } else {
      this.setState({ error: "" });
      
    }
  }

  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const { contact, requestInfo } = this.props.formData.agreement;
    this.props.updateFormData({
      agreement: {
        ...this.props.formData.agreement,
        [name]: checked
      }
    });
  };

  areCheckboxesChecked = () => {
    const { agreement } = this.props.formData;
    return agreement.contact && agreement.requestInfo;
  }

  handleButtonClick = (page) => {
    
    this.props.updateFormData({
      wayOfCommunication: this.state.preferredCommunication,
    })
    this.setState({
      preferredCommunication: page
    })
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, phoneNumber, agreement, username, companyName } = this.props.formData;
  
    // Check if any required fields are empty
    if (!username || !companyName || !email || !phoneNumber) {
      this.setState({ error: "Please fill out all required fields." });
      return; // Exit early
    }
  
    // Check if checkboxes are checked
    if (!agreement.contact || !agreement.requestInfo) {
      this.setState({ error: "Please agree to both checkboxes." });
      return; // Exit early
    }
  
    // Validation passed, clear error and proceed with form submission
    this.setState({ error: "", submitted: true });
    this.props.onSubmit(e);
  }
  
  render() {
    const { preferredCommunication, error ,submitted } = this.state;
    const isSubmitDisabled = error !== "" || !this.areCheckboxesChecked();
    const { formData } = this.props;

    return (
      <Main className='form'>
       
        <form onSubmit={this.handleSubmit}>
          <StyledStepper
            activeStep={7}
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

          <M>
          {submitted && <Popup onClose={() => this.setState({ submitted: false })} />}
            <Mai>
              <P1>Almost done!</P1>
              <P2>Please let us know where we should send your estimate. Our experts may need to ask a few extra questions to calculate a precise quote for your case.</P2>
              <P3>Your contact data</P3>
              <M2>
                <M3>
                  <P4>*Full name</P4>
                  <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={this.handlenameChange}
                  />
                </M3>
                <M3>
                  <P4>*Company name</P4>
                  <Input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={this.handlecompanyChange}
                  />
                </M3>
              </M2>
              <M2>
                <M3>
                  <P4>*Work email</P4>
                  <Input
                    type="email"
                    name="workEmail"
                    value={formData.email}
                    onChange={this.handleEmailChange}
                  />
                </M3>
                <M3>
                  <P4>*Phone number</P4>
                  <Input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={this.handleNumberChange}
                  />
                </M3>
              </M2><br />
              <M33>
                <P8>Preferred way of communication:</P8>
                <Button1 type="button" active={preferredCommunication === 'Any'} onClick={() => this.handleButtonClick('Any')}>Any</Button1>
                <Button2 type="button" active={preferredCommunication === 'Email'} onClick={() => this.handleButtonClick('Email')}>Email</Button2>
                <Button3 type="button" active={preferredCommunication === 'Phone'} onClick={() => this.handleButtonClick('Phone')} >Phone</Button3>
              </M33>
              <br />
              <M3>
                <Input1
                  type="checkbox"
                  id="agreeToContact"
                  name="contact"
                  checked={formData.agreement.contact}
                  onChange={this.handleCheckboxChange}
                />
                <Label htmlFor="agreeToContact">
                  I agree to have Sepnoty contact me Via email, Phone, Messenger.
                </Label>
              </M3>
              <br />
              <M3>
                <Input1
                  type="checkbox"
                  id="agreeToProvideInfo"
                  name="requestInfo"
                  checked={formData.agreement.requestInfo}
                  onChange={this.handleCheckboxChange}
                />
                <Label htmlFor="agreeToProvideInfo">
                  I agree to have Sepnoty provide my request information to sepnoty affiliated development centres.
                </Label>
              </M3>
              <br />
              <P5>
                Your personal data will be stored for ten years on US servers in accordance with GDPR, and erased thereafter. We'll share it with our development centre to address your request, ensuring GDPR compliance at both locations. Refer to our <Span>Privacy Policy</Span> for details.
              </P5>
              {error && <Error>{error}</Error>}
            </Mai>
          </M>

          <Button className="buttons">
            <button
              className="buttons__button buttons__button--back"
              onClick={this.back}
            >
              Back
            </button>
            <button
              type="submit"
              className="buttons__button buttons__button--next"
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </Button>
          
        </form>
        
      </Main>
    );
  }
}

export default FourthForm;
const media = {
  mobile: "@media(max-width: 576px)",
};
const CheckboxError = styled.div`
  color: red;
  font-size: 12px;
`;

const SubmitButton = styled.button`
  /* Your button styles */
`;
const StyledStepper = styled(Stepper)`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  font-size: 9px;
  border: none;
 
`;

const StyledStep = styled(Step)`
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
const P8 = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-right: 30px;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #263238;
  margin-left: 30px;
  margin-bottom: 15px;
  width: 80%;
`;
const Error = styled.p`
  color: red;
`;

const Button = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 90px;
  margin-left: -90px;
`;

const Main = styled.div`
  background-color: #0c111f;
  ${media.mobile} {
    width: 80%;
    margin-left:-10%;
  }
`;
const Input1 = styled.input`
  margin-left:-80%;
  color: #c1cae7;
  cursor: pointer;
  ${media.mobile} {
    margin-left: -400px;
  }
`;
const M = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left:10%;
  width: 80%;
  ${media.mobile} {
    width: 10%;
    margin-left:auto;
  }
`;
const Mai = styled.div`
  padding: 30px 40px 10px 40px;
  background-color: #c1cae7;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #c1cae7;
  margin-left: 0px;
  ${media.mobile}{
    padding:0px;
  }
`;
const P1 = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #2b459b;
  margin-left: 30px;
  ${media.mobile} {
    font-size: 14px;
    margin-left:3px;
  }
`;
const P2 = styled.div`
  margin-left: 30px;
  margin-top: -50px;
  margin-right: 30px;
  color: #263238;
  font-weight: 500;
  margin-top: 18px;
  width: 80%;
  ${media.mobile} {
    font-size: 13px;
    margin-left:3px;
  }
`;
const P3 = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: #263238;
  margin-left: 30px;
  margin-top: 15px;
  margin-bottom: 0px;
  ${media.mobile}{
    font-size:11px;
    margin-left:0px;;

  }
`;
const M2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  ${media.mobile}{
    gap:20px;
  }
`;
const M3 = styled.div`
  display: flex;
  flex-direction: column;
`;

const M33 = styled.div`
  display: flex;
  flex-direction: row;
`;

const P4 = styled.p`
  font-size: 18px;
  font-size: 15px;
  font-weight: 700;
  margin-right: 30px;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #263238;
  margin-left: 30px;
  margin-bottom: 15px;
  ${media.mobile}{
    font-size:12px;
  }
`;
const Input = styled.input`
margin-left:30px;
margin-top:-15px;
background:transparent;
border: 1px solid #8C8C8C;
width:180px;
height: 30px;
margin-bottom: -90px
border-radius: 3px;
${media.mobile}{
  width:120px;
}
`;
const Button1 = styled.button`
  background-color: ${(props) => (props.active ? "#2B459B" : "#C1CAE7")};
  color: ${(props) => (props.active ? "white" : "black")};
  width: 60px;
  border-radius: 5px;
  font-size: 12px;
  height: 30px;
  border: 1px solid #8c8c8c;
`;
const Button2 = styled.button`
  margin-left: 0px;
  margin-top: 0px;
  background-color: ${(props) => (props.active ? "#2B459B" : "#C1CAE7")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: 1px solid #8c8c8c;
  width: 80px;
  height: 30px;
`;
const Button3 = styled.button`
  background-color: ${(props) => (props.active ? "#2B459B" : "#C1CAE7")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: 1px solid #8c8c8c;
  width: 80px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 30px;
`;
const Label = styled.label`
  color: #263238;
  font-weight: 500;
  font-size: 13px;
  margin-left: 60px;
  margin-top: -15px;
`;
const Span = styled.span`
  color: #bc2424;
`;
const P5 = styled.p`
  font-size: 12px;
  font-size: 13px;
  line-height: 1.5;
  line-space: 20px;
  font-weight: 600;
  margin-left: 40px;
  margin-left: 20px;
  color: #263238;
`;
