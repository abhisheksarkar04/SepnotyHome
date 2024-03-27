import Styled from 'styled-components';
import React, { useState } from 'react';
import ApplicationPage from '../AllForms/Website';
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
  width: 100px;
  border: 1px solid #8C8C8C;
  border-radius: 10px; /* Apply border-radius to all corners */
  font-size: 16px; /* Reduced font size for mobile */
  height: 45px;
  ${media.mobile} {
    width:60px;
  }
  
  
`;

const Buttonel = Styled.button`
  background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  width: 110px;
  border: 1px solid #8C8C8C;
  font-size: 16px; /* Reduced font size for mobile */
  height: 45px;
  ${media.mobile} {
    width:60px;
  }
  
  
`;

const Butt = Styled.button`
  background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  width: 100px;
  border: 1px solid #8C8C8C;
  border-radius: 10px; /* Apply border-radius to all corners */
  font-size: 16px; /* Reduced font size for mobile */
  height: 45px;
  ${media.mobile} {
    width:60px;
  }
  
  
`;

const ButtonCon = Styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
  margin-top: -30px;
  padding: 20px; /* Reduced padding for smaller screens */
  ${media.mobile} {
    margin-left:0px;
  }
`;

const FormContainer = Styled.div`
  margin-top: 10%;
  ${media.mobile} {
    width:576px;
  }
`;