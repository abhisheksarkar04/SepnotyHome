import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import Styled from "styled-components"
import handleFormValues from '../../allFormValues';
class FirstSoftwarePage extends Component {

  state = {
    softwareTypes: [],
    numberOfPages: '',
    formErrors: {
      softwareTypes: '',
      numberOfPages: ''
    }
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
      numberOfPages: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();


    const { softwareTypes, numberOfPages } = this.state;
    const {typeOfSoftware,tools} = this.props.formData
  // Call the handleFormValues function from FormUtils.js
    if (typeOfSoftware.length === 0) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          softwareTypes: 'Please select at least one type of software.'
        }
      });
      return;
    }
    if (!tools) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          numberOfPages: 'Please select the number of pages for your website/App.'
        }
      });
      return;
    }
   
    // if(softwareTypes.length === 0 && !numberOfPages){
        
    // }
    // Store the form data or proceed with further actions
  
    // Proceed to the next step or page
    this.props.nextStep();
  };



  continue = e => {
    e.preventDefault();
    const {typeOfSoftware,tools} = this.props.formData
    // Check for errors
    /* const { softwareTypes, numberOfPages } = this.state;
    const formData = {
      field1: {softwareTypes , numberOfPages},
      // Add more fields as needed
    };
    this.props.onDataReceived(formData); */
    const formErrors = {};
    // console.log(softwareTypes,numberOfPages);
    // Check software types
    if (typeOfSoftware.length === 0) {
        formErrors.softwareTypes = 'Please select at least one type of software.';
    }

    // Check number of pages
    if (!tools) {
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
    const { softwareTypes, numberOfPages, formErrors } = this.state;
    const {typeOfSoftware,tools} = this.props

    return (
      <Main className='form'>
        <form onSubmit={this.handleSubmit}>

          <Stepper
            steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' },{label:""},{label:""},{label:""},{label:""}]}
            activeStep={0}
            styleConfig={{
              activeBgColor: '#2B459B',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#407B24',
              completedTextColor: '#fff',
              size: '1em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

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
                    <Input type="checkbox" id="6st" checked={softwareTypes.includes('6st')} onChange={this.handleCheckboxChange} />
                        <Input1 type="text" id="6st" placeholder="others (please specify"/>
                    </CheckBoxCon>

                </Form>
                {formErrors.softwareTypes && <Span style={{ color: 'red' }}>{formErrors.softwareTypes}</Span>}
            </FormContainer>
            <FormContainer>
                <Form>
                    <Heading>
                    *How many Tools will your Software have?
                    </Heading>
                    <InputContainer>
                  <Label>
                    <Input type='radio' name="numberOfPages" value="I am not sure" checked={tools === "I am not sure"} onChange={this.handleRadioChange} />
                    I am not sure
                  </Label>
                </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="up to 50" checked={tools === "up to 50"} onChange={this.handleRadioChange}/>
                  up to 50
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="50-100" checked={tools === "50-100"} onChange={this.handleRadioChange}/>
                  50-100
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="100-500" checked={tools === "100-500"} onChange={this.handleRadioChange}/>
                  100-500
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="500-1,000" checked={tools === "500-1,000"} onChange={this.handleRadioChange}/>
                  500-1,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="  1,000-5,000" checked={tools === "1,000-5,000"} onChange={this.handleRadioChange}/>
                  1,000-5,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="5,000-10,000" checked={tools === "5,000-10,000"} onChange={this.handleRadioChange}/>
                  5,000-10,000
                  </Label>
              </InputContainer>
              <InputContainer>
              <Label>
                  <Input type='radio' name="numberOfPages" value="more than 10,000" checked={tools === "more than 10,000"} onChange={this.handleRadioChange}/>
                  more than 10,000
                  </Label>
              </InputContainer>
              {formErrors.numberOfPages && <Span style={{ color: 'red' }}>{formErrors.numberOfPages}</Span>}
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
const media = {
  mobile: '@media(max-width: 576px)'
};
const Span = Styled.p`
font-size:12px;
`

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
  justify-content:start;
  align-item:start;
  gap:2px;
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
  font-size:13px;
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
margin-left:10px;
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