import React, { Component } from "react";
import Styled from "styled-components";
import { Stepper } from "react-form-stepper";
import "./App.css";
import handleFormValues from "./allFormValues";

import ThirdPage from "../AllForms/Website/ThirdPage";

class YourIndustry extends Component {
  state = {
    selectedService: "",
    websiteLink: "",
    error: "",
  };

  continue = (e) => {
    e.preventDefault();
    const { selectedService, websiteLink } = this.state;
    const formData = {
      field3: { selectedService, websiteLink },
      // Add more fields as needed
    };
    this.props.onDataReceived(formData);
    if (!selectedService) {
      this.setState({ error: "Please select a service." });
      return;
    }
    // Store the selected data in parent component or wherever required
    // this.props.storeData(selectedService, websiteLink);
    this.props.nextStep();
  };

  handleRadioChange = (e) => {
    this.setState({ selectedService: e.target.value, error: "" });
  };

  handleWebsiteLinkChange = (e) => {
    this.setState({ websiteLink: e.target.value });
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { error } = this.state;
    // const {
    //   firstname,
    //   lastname,
    //   email,
    //   phone,
    //   handleChange,
    //   validateFirstName,
    //   validateLastName,
    //   isErrorFirstName,
    //   isErrorLastName,
    //   errorMessageFirstName,
    //   errorMessageLastName
    // } = this.props;

    return (
      <Main className="form">
        <form>
          <Stepper
            steps={[
              { label: "" },
              { label: "" },
              { label: "" },
              { label: "" },
              { label: "" },
              { label: "" },
              { label: "" },
              { label: "" },
            ]}
            activeStep={2}
            styleConfig={{
              activeBgColor: "#2B459B",
              activeTextColor: "#fff",
              inactiveBgColor: "#fff",
              inactiveTextColor: "#2b7cff",
              completedBgColor: "#407B24",
              completedTextColor: "#fff",
              size: "1em",
            }}
            className={"stepper"}
            stepClassName={"stepper__step"}
          />

          <Main1>
            <Form1>
              <Fom>
                <Heading>*What service(s) do you need?</Heading>
                <div>
                  <InputContainer>
                    <Label>
                      <Input
                        type="radio"
                        name="industry"
                        value="Healthcare"
                        onChange={this.handleRadioChange}
                      />
                      Website development
                    </Label>
                  </InputContainer>
                  <InputContainer>
                    <Label>
                      <Input
                        type="radio"
                        name="industry"
                        value="Healthcare"
                        onChange={this.handleRadioChange}
                      />
                      Technical Consulting
                    </Label>
                  </InputContainer>
                  <InputContainer>
                    <Label>
                      <Input
                        type="radio"
                        name="industry"
                        value="Manufacturing"
                        onChange={this.handleRadioChange}
                      />
                      UX design / Redesign
                    </Label>
                  </InputContainer>
                  <InputContainer>
                    <Label>
                      <Input
                        type="radio"
                        name="industry"
                        value="Finanacial"
                        onChange={this.handleRadioChange}
                      />
                      UI design / Redesign
                    </Label>
                  </InputContainer>
                  <InputContainer>
                    <Label>
                      <Input
                        type="radio"
                        name="industry"
                        value="Transportation & Logistics"
                        onChange={this.handleRadioChange}
                      />
                      CMS development
                    </Label>
                  </InputContainer>
                  <InputContainer>
                    <Label>
                      <Input
                        type="radio"
                        name="industry"
                        value="Telecommunications"
                        onChange={this.handleRadioChange}
                      />
                      Technical SEO
                    </Label>
                  </InputContainer>
                </div>
              </Fom>
            </Form1>
            <Form1>
              <Form3>
                <InputContainer>
                  <Label>
                    <Input
                      type="radio"
                      name="industry"
                      value="Migration to a new CMS"
                      onChange={this.handleRadioChange}
                    />
                    Migration to a new CMS
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="radio"
                      name="industry"
                      value="Delivery of new features"
                      onChange={this.handleRadioChange}
                    />
                    Delivery of new features
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="radio"
                      name="industry"
                      value="Troubleshooting"
                      onChange={this.handleRadioChange}
                    />
                    Troubleshooting
                  </Label>
                </InputContainer>
                <InputContainer>
                  <Label>
                    <Input
                      type="radio"
                      name="industry"
                      value="Finanacial"
                      onChange={this.handleRadioChange}
                    />
                    <Input1 type="text" placeholder="others (please specify)" />
                  </Label>
                </InputContainer>

                <InputContainer>
                  <P>
                    Please provide a link to your existing website if you have
                    one
                  </P>
                  <Input2
                    type="text"
                    placeholder="Please add here"
                    value={this.state.websiteLink}
                    onChange={this.handleWebsiteLinkChange}
                  />
                </InputContainer>
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </Form3>
            </Form1>
          </Main1>

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
        </form>
      </Main>
    );
  }
}

export default YourIndustry;
const media = {
  mobile: "@media(max-width: 576px)",
};

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`;
const Fom = Styled.div`
${media.mobile}{
  width:220px;
  border-radius:5px;
  gap:0px;
}
`;

const Main = Styled.div`
background-color:#0C111F;
${media.mobile}{
  width:100%;
}
`;

const P = Styled.p`
color:#000000;
font-size:15px;
margin-bottom:10px;
`;

const Main1 = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
${media.mobile}{
  width:100%;
  justify-content:start;
  align-item:start;
  gap:1px;
  margin-left:-30px;
}
`;
const Form1 = Styled.div`
display:flex;
flex-direction:column;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:-20px;
border-radius:10px;
padding:20px;
height:380px;
width:700px;
`;
const Heading = Styled.h1`
color:#263238;
font-size:18px;
font-weight:700;
margin-bottom:20px;
font-family:Roboto;
`;
const Form2 = Styled.form`

`;
const Input = Styled.input`
margin-right:10px;
`;
const InputContainer = Styled.div`
margin-top:20px;
`;
const Label = Styled.label`
font-size:16px;
font-family:Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`;
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
font-size:15px;
color: #263238;
font-weight:500;
margin-left:10px;
`;
const Input2 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:250px;
border-radius:4px;
${media.mobile}{
  width:220px;
  border-radius:5px;
  gap:0px;
}
`;
const Form3 = Styled.div`
margin-top:50px;
${media.mobile}{
  width:227px;
  border-radius:5px;
  gap:0px;
}
`;
const ErrorMessage = Styled.div`
  color: red;
  margin-top: 10px;
  font-size:12px;
`;
