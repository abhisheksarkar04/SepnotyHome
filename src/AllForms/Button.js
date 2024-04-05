import Styled from 'styled-components';
import React, { useState } from 'react';
import ApplicationPage from "./Applicationform";
import WebsitePage from '../AllForms/Website';
import SoftwarePage from "../AllForms/Software";



function MainPage() {
  const [currentPage, setCurrentPage] = useState("website");
  
  const handleButtonClick = (page) => {
    setCurrentPage(page);
   
  };
  

  return (
    <ButtonCon >
      <div>
      <  ActiveButton active={currentPage === 'website'}  onClick={() => handleButtonClick('website')}>Website</ActiveButton>
        <Buttonel active={currentPage === 'application'}   onClick={() => handleButtonClick('application')}>Application</Buttonel>
        <Butt active={currentPage === 'software'}  onClick={() => handleButtonClick('software')}>Software</Butt>
      </div>
      <FormContainer>
        {currentPage === 'application' && <ApplicationPage />}
        {currentPage === 'website' && <WebsitePage />}
        {currentPage === 'software' && <SoftwarePage />}
      </FormContainer>
    </ButtonCon>
  );
}

export default MainPage;
const media = {
  mobile: '@media(max-width: 576px)'
};

const ActiveButton = Styled.button`
  background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  
  border: 1px solid #8C8C8C;
  border-top-left-radius: 10px;
  border-bottom-left-radius:10px; /* Apply border-radius to all corners */
  font-size: 16px; /* Reduced font size for mobile */
  padding: 10px 20px 10px 20px; 
  ${media.mobile} {
    padding: 5px 10px 5px 10px; 
    font-size:12px;
  }

  
  
`;

const Buttonel = Styled.button`
  background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  
  border: 1px solid #8C8C8C;
  border-top-right-radius: 10px;
  border-bottom-right-radius:10px;
  font-size: 16px; /* Reduced font size for mobile */
  padding: 10px 20px 10px 20px; 
  ${media.mobile} {
    padding: 5px 10px 5px 10px; 
    font-size:12px;
  }
  
  
`;

const Butt = Styled.button`
  background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
  color: ${(props) => (props.active ? 'white' : 'black')};

  border-top-right-radius: 10px;
  border-bottom-right-radius:10px;
  border: 1px solid #8C8C8C;
  margin-left:-5px;
   /* Apply border-radius to all corners */
  font-size: 16px; /* Reduced font size for mobile */
  padding: 10px 20px 10px 20px; 
  ${media.mobile} {
    font-size:12px;
    padding: 5px 10px 5px 10px; 
  }
  
  
`;

const ButtonCon = Styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
  margin-top: -30px;
  padding: 20px; /* Reduced padding for smaller screens */
  ${media.mobile} {
    margin-left:0px;
    width:100%;
  }
`;

const FormContainer = Styled.div`
  margin-top: 10%;
  ${media.mobile} {
    width:100%;
  }
`;