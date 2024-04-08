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
      <ActiveButton active={currentPage === 'website' ? "true" : "false"} onClick={() => handleButtonClick('website')}>Website</ActiveButton>
<Buttonel active={currentPage === 'application' ? "true" : "false"} onClick={() => handleButtonClick('application')}>Application</Buttonel>
<Butt active={currentPage === 'software' ? "true" : "false"} onClick={() => handleButtonClick('software')}>Software</Butt>
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

const Button = Styled.button`
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

const ActiveButton = Styled(Button)`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Buttonel = Styled(Button)`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Butt = Styled(Button)`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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