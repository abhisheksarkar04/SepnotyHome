import React, { Component } from "react";

import PersonalDetails from "./FirstForm";
import CourseDetails from "./SecondForm";
import Summary from "./FourthForm";
import YourIndustry from "./ThirdForm";
import FormNo5 from "./SixthForm";
import SecondForm from "./WebAppFifthForm";
import ThirdForm from "./SeventhForm";
import FourthForm from "./EightthForm";
import { Stepper, Step, StepLevel } from "react-form-stepper";

//Sample data
const coursesData = [
  {
    id: 1,
    courseName: "HTML",
    category: "Front-end",
  },
  {
    id: 2,
    courseName: "CSS",
    category: "Front-end",
  },
  {
    id: 3,
    courseName: "JavaScript",
    category: "Front-end",
  },
  {
    id: 4,
    courseName: "React",
    category: "Front-end",
  },
  {
    id: 5,
    courseName: "Angular",
    category: "Front-end",
  },
  {
    id: 6,
    courseName: "Vue",
    category: "Front-end",
  },
  {
    id: 7,
    courseName: "Java",
    category: "Back-end",
  },
  {
    id: 8,
    courseName: "Python",
    category: "Back-end",
  },
  {
    id: 9,
    courseName: "PHP",
    category: "Back-end",
  },
  {
    id: 10,
    courseName: "Express",
    category: "Back-end",
  },
];

const levelsData = ["Beginner", "Intermediate", "Advanced"];

class Application extends Component {
  state = {
    activeStep:0,
    step: 1,
    formData: {
      step1: {
        typeofDevelopment:"Application",
        typeOfWebsite: [],
        numberOfPages: '',
      },
      step2:{
        industryType:[],
        indstryotherDetails:"",
      },
      step3:{
        services:"",
        webisiteLink:"",
      },
      step4:{
        UIDesignMockups:"",
    	  chosenCMS:"",
      },
      step5:{
        appFeatures:[],
        otherFeatureDetails:"",
      },
      step6:{
        typeOfMedia:[],
    	  paymentSystem: true,
    	  visitors:"",
      },
      step7:{
        complianceRequirements:[],
        integrationDetails:"",
        details:"",
        otherCompliance:"",
      },
      step8:{
      username:"",
    	email:"",
    	companyName:"",
    	phoneNumber:"",
    	wayOfCommunication:"Any",
      agreement:{
        contact: false,
        requestInfo: false,
      }
      }
      
    },
    recivedData:[]

  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  submitData = (e) => {
    e.preventDefault();

    const { formData } = this.state;
    const formattedData = this.convertToDesiredFormat(formData);
    console.log(formattedData); //Log all form data
    alert('Data sent');
  }
  handleDataReceived = (data) => {
    this.setState(prevState => ({
      recivedData: [...prevState.recivedData, data]
      
    }), () => {
   

    });
  }

  updateFormData = (data) => {
    const { step, formData } = this.state;
    // Update the corresponding step data in formData based on the current step
    switch (step) {
      case 1:
        this.setState({
          formData: {
            ...formData,
            step1: {
              ...formData.step1,
              ...data // Update both typeOfWebsite and numberOfPages
            }
          }
        });
        break;
      case 2:
        this.setState({
          formData: {
            ...formData,
            step2: {
              ...formData.step2,
              ...data
            }
          }
        });
        break;
      case 3:
        this.setState({
          formData: {
            ...formData,
            step3: {
              ...formData.step3,
              ...data

              
            }
           
          }
          
        });
        break;
        case 4:
        this.setState({
          formData: {
            ...formData,
            step4: {
              ...formData.step4,
              ...data
            }
          }
        });
        break;
        case 5:
        this.setState({
          formData: {
            ...formData,
            step5: {
              ...formData.step5,
              ...data
            }
          }
        });
        break;
        case 6:
          this.setState({
            formData: {
              ...formData,
              step6: {
                ...formData.step6,
                ...data
              }
            }
          });
          break;
          case 7:
            this.setState({
              formData: {
                ...formData,
                step7: {
                  ...formData.step7,
                  ...data
                }
              }
            });
            break;
            case 8:
              this.setState({
                formData: {
                  ...formData,
                  step8: {
                    ...formData.step8,
                    ...data
                  }
                }
              });
              
      default:
        break;
    }
  }


  convertToDesiredFormat = (formData) => {
    const {
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
      step8,
    } = formData;
  
    const formattedData = {
      ...step1,
      ...step2,
      ...step3,
      ...step4,
      ...step5,
      ...step6,
      ...step7,
      ...step8,
    };
  
    return formattedData;
  };
  
  
  render() {
    const { step, formData ,activeStep} = this.state;
    //console.log(formData);
    
    switch(step) {
      case 1: 
        return (
          <PersonalDetails
          activeStep={activeStep}

            nextStep={this.nextStep}
            onDataReceived={this.handleDataReceived}
            formData={formData.step1}
            updateFormData={this.updateFormData}
          />
        );
      case 2:
        return (
          <CourseDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onDataReceived={this.handleDataReceived}
            formData={formData.step2}
            updateFormData={this.updateFormData}
          />
        );
      case 3:
        return (

          < YourIndustry nextStep={this.nextStep}
          prevStep={this.prevStep}
          onDataReceived={this.handleDataReceived}
          formData={formData.step3}// Pass formData as props
          updateFormData={this.updateFormData}

          />
        );
      case 4:
        return (
          <Summary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onDataReceived={this.handleDataReceived}

            formData={formData.step4} // Pass formData as props
            updateFormData={this.updateFormData}
           />
          )
      case 5:
            return (
              <SecondForm  nextStep={this.nextStep}
              prevStep={this.prevStep}
              onDataReceived={this.handleDataReceived}
              formData={formData.step5} // Pass formData as props
            updateFormData={this.updateFormData}
              />
            )
      case 6:
            return (
              <FormNo5 
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              onDataReceived={this.handleDataReceived}
              formData={formData.step6} // Pass formData as props
            updateFormData={this.updateFormData}
              
            />
            )
      case 7:
        return (
          <ThirdForm 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          onDataReceived={this.handleDataReceived}
          formData={formData.step7} // Pass formData as props
          updateFormData={this.updateFormData}
        />
        )
      case 8:
        return(
          <FourthForm 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          onDataReceived={this.handleDataReceived}
          formData={formData.step8} // Pass formData as props
          updateFormData={this.updateFormData}
          onSubmit={this.submitData}
        />
        )

          
      default: return null

      

    }
    
  }
}
export default Application;
