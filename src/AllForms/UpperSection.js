import Styled from "styled-components";
import Button from "./Button"
import Image from "./images/Stars.svg"

// import image2 from "./images/Group 1261153425.svg";

import Stars from "./images/Stars2.svg"
import image2 from "./images/Standing.svg";
// import Stars from "./images/Stars2.svg"
// import image2 from "./images/Standing.svg";
// import Stars from "./images/Stars2.svg"
// import image2 from "./images/Standing.svg";


import FooterSection from "../components/Footer/FooterSection";


const CostHome = () => {
    return (
        <Main2>
        <Main>
            <HomeContainer>
            <StarsImage src={Image}/>
                <SideContainer>
                <Heading>
                 Website development 
                </Heading>
                <Heading1>
                    Cost
                </Heading1>
                </SideContainer>
                <DevelopContainer>
                <Heading1>
                    Calculator
                </Heading1>
                <Para1>
                    To expedite the estimation of your website<br/> development cost, kindly provide some basic <br/>information about your business requirements<br/> by answering a few straightforward questions.<br/> This will assist our experts in offering a more<br/> accurate assessment.
                    </Para1>
                <Heading3>
                What type of development do you need?
                </Heading3>
                </DevelopContainer>
            </HomeContainer>
            <RightContainer>
            <Image2 src={image2}/>
            </RightContainer> 
        </Main>
        <D>
          <Button />
        </D>
        <FooterSection/>
        </Main2>
    )
}
export default CostHome;
const D = Styled.div`
  margin-left: 60px;
`;

const Main2 = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100.8%;
  margin-left: -6px;
  background: #0C111F;
  background-size: cover;
`;

const Main = Styled.div`
  display: flex;
  flex-direction: column; /* Change to column for mobile */
  justify-content: space-between;
  width: auto;
  background-color: #0C111F;
  font-family: 'Roboto';
  
  @media screen and (min-width: 567px) {
    flex-direction: row; /* Reset to row for larger screens */
  }
`;

const HomeContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const StarsImage = Styled.img`
  margin-top: 50px;
  width: 60%;
`;

const DevelopContainer = Styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  margin-left: 20px; /* Adjusted margin for mobile */
`;

const Heading = Styled.h1`
  color: #B7B6BD;
  font-size: 30px; /* Reduced font size for mobile */
  margin-top: 10px;
`;

const Heading1 = Styled.h1`
  color: #4C64B2;
  margin-top: 10px;
  font-size: 30px; /* Reduced font size for mobile */
`;

const Para1 = Styled.p`
  font-size: 20px; /* Reduced font size for mobile */
  font-weight: 500;
  color: #B7B6BD;
  margin-top: 20px;
`;

const Heading3 = Styled.h1`
  color: white;
  font-size: 28px; /* Reduced font size for mobile */
  margin-top: 10px;
`;

const RightContainer = Styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
`;

const Image2 = Styled.img`
  width: 100%; /* Adjusted width to fit smaller screens */
  height: auto; /* Maintain aspect ratio */
`;

const SideContainer = Styled.div`
  display: flex;
  flex-direction: column; /* Change to column for mobile */
  margin-top: 10px;
  gap: 20px;
  margin-left: 20px; /* Adjusted margin for mobile */
`;