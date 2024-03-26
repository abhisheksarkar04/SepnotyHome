import React, { Component } from 'react';

import PersonalDetails from './FirstForm';
import CourseDetails from './SecondForm';
import Summary from './FourthForm';
import YourIndustry from './ThirdForm';
import FormNo5 from "./SixthForm";
import SecondForm from './FifthForm';
import ThirdForm from "./SeventhForm";
import FourthForm from "./EightthForm"

//Sample data
const coursesData = [
  {
    id: 1,
    courseName: 'HTML',
    category: 'Front-end'
  },
  {
    id: 2,
    courseName: 'CSS',
    category: 'Front-end'
  },
  {
    id: 3,
    courseName: 'JavaScript',
    category: 'Front-end'
  },
  {
    id: 4,
    courseName: 'React',
    category: 'Front-end'
  },
  {
    id: 5,
    courseName: 'Angular',
    category: 'Front-end'
  },
  {
    id: 6,
    courseName: 'Vue',
    category: 'Front-end'
  },
  {
    id: 7,
    courseName: 'Java',
    category: 'Back-end'
  },
  {
    id: 8,
    courseName: 'Python',
    category: 'Back-end'
  },
  {
    id: 9,
    courseName: 'PHP',
    category: 'Back-end'
  },
  {
    id: 10,
    courseName: 'Express',
    category: 'Back-end'
  }       
];

const levelsData = ['Beginner', 'Intermediate', 'Advanced'];

class Form extends Component {
  state = {
    step: 1,
    recivedData:[],
    SecondData:"",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }
  submitData = e => {
    e.preventDefault();
    alert('Data sent');
  }
  handleDataReceived = (data) => {
    this.setState(prevState => ({
      recivedData: [...prevState.recivedData, data]
    }));
    console.log(this.state.recivedData)
  }
  render() {
   const {step} = this.state
    
    switch(step) {
      case 1: 
        return (
          <PersonalDetails 
            nextStep={this.nextStep}
            onDataReceived={this.handleDataReceived}
          />
        )
      case 2:
        return (
          <CourseDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onDataReceived={this.handleDataReceived}
          />
        )
      case 3:
        return (
          < YourIndustry nextStep={this.nextStep}
          prevStep={this.prevStep}
          onDataReceived={this.handleDataReceived}
          
          />
        )
      case 4:
          return (
            < Summary nextStep={this.nextStep}
            prevStep={this.prevStep}
            onDataReceived={this.handleDataReceived}
           />
          )
      case 5:
            return (
              <SecondForm  nextStep={this.nextStep}
              prevStep={this.prevStep}
              onDataReceived={this.handleDataReceived}
              />
            )
      case 6:
            return (
              <FormNo5 
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              onDataReceived={this.handleDataReceived}
              
            />
            )
      case 7:
        return (
          <ThirdForm 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          onDataReceived={this.handleDataReceived}
        />
        )
      case 8:
        return(
          <FourthForm 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          onDataReceived={this.handleDataReceived}

        />
        )

          
      default: return null
    }
  }
}

export default Form;
