import Styled from "styled-components";

import {
  Header,
  Service,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Button,
  Span,
  DigitalContainer,
  ListHeading,
  // Small,
  // Small1,
  // Small2,
  // Small3,
  // ServiceItemDesc,
  // ImageCon,
  // ServiceItemImg,
  // ServiceItemButton,
  // ServiceItemDetails,
  // ServiceItemCon,
  // ConatctCon,
  // ContactItem,
  // Container,
  PatternCon,
  SmallPattern,

  // ContactItem,
  // Container,
} from "./Styled";
import rectangle1 from "../images/Rectangle 1.svg";
import rectangle2 from "../images/Rectangle2.svg";
import rectangle3 from "../images/Rectangle3.svg";
import Model from "../ContactPrice/index";

// import GroupImg from "../images/Group.svg"

// import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";
import { useState } from "react";

const PriceModel = () => {
  const [seeContact, setSeeContact] = useState(false);

  const toggleContact = () => {
    setSeeContact(true);
  };
  return (
    <>
      <DigitalContainer>
        <Header>
          Approach &gt; <Span>Pricing Models at Sepnoty</Span>
        </Header>
        <Service>About Us</Service>
        <ContentRecomContainer>
          <ConRecHead> Pricing Models at Sepnoty</ConRecHead>
          <ConRecDesc>
            Pricing models in Sepnoty refer to the various strategies and
            structures that businesses use to determine the price of their
            products or services. These models are designed to ensure that the
            exact price set covers costs, generates profits, & remains
            competitive in the market. There are several common pricing models:
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <PatternCon>
          <SmallPattern></SmallPattern>
          <ListHeading>Pricing Models</ListHeading>
        </PatternCon>
        <Main>
          <Main1>
            <div>
              <Heading1>Basic</Heading1>
              <Para1>Included free in all Sepnoty plans.</Para1>
            </div>
            <Main4>
              <Main3>
                <Rupee>₹0</Rupee>
                <Type>Free forever</Type>
              </Main3>
              <Button>Get Started</Button>
            </Main4>
          </Main1>
          <Main1>
            <Heading1>Premium</Heading1>
            <Para2>
              For individuals and teams who need more control over moving and
              managing their data.
            </Para2>

            <Main2>
              <Main3>
                <Rupee>₹1,676</Rupee>
                <Type>Per month</Type>
              </Main3>
              <Button onClick={toggleContact}>Get Started</Button>
            </Main2>
          </Main1>
          <Main1>
            <Heading1>Advance</Heading1>
            <Para2>
              For teams that want to collaborate and build for themselves and
              their customers.
            </Para2>

            <Main5>
              <Main3>
                <Rupee>₹8,940</Rupee>
                <Type>Free forever</Type>
              </Main3>
              <Button onClick={toggleContact}>Get Started</Button>
            </Main5>
          </Main1>
        </Main>
      </DigitalContainer>
      {seeContact && <Model />}
      <FooterSection />
    </>
  );
};

export default PriceModel;

const Main = Styled.div`
  margin-top:100px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin: 7%;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    
   
    margin-top:20px;
    
    margin:0;
    padding: 5px;
    gap: 0px; 
    overflow-x: auto; 
  overflow-y: hidden;
    
  &::-webkit-scrollbar {
    height: 3px;
    width: 3px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Color of the track */
  }

  &::-webkit-scrollbar-thumb {
    background: #0c111f; /* Color of the scrollbar thumb */
    border-radius: 4px;
    /* Radius of the scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb on hover */
  }

  
  `;
const Main1 = Styled.div`
  background:#D9D9D9;
  border-radius:10px;
  width: 30%;
  padding:13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width:576px){
    width:300px;;
    margin-left: 3%;
    height: 250px;
  }
  `;
const Main2 = Styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:90px;
  
  @media screen and (max-width:576px){
    margin-top: 0px;
    width: 100%;
  }
  `;
const Main3 = Styled.div`
  display: flex;
  flex-direction:column;
  `;
const Heading1 = Styled.h1`
  color: #3d3d3d;
  font-size:32px;
  font-weight:700;
  margin-bottom:20px;
  @media screen and (max-width:576px){
    font-size:24px;
    font-weight:bold;
    margin-bottom: 0px;
    color: #121415;
    
  }
  `;
const Para1 = Styled.p`
  color:#000000;
  font-size:18px;
  font-weight:400;
  @media screen and (max-width:576px){
    font-size:16px;
    width: 70%;
  }
  
  `;

const Para2 = Styled.p`
  color:#000000;
  font-size:18px;
  font-weight:400;
  @media screen and (max-width:576px){
    font-size:16px;
    width: 95%;
  }
  
  `;
const Rupee = Styled.p`
  color: #000000;
  font-size:20px;
  margin-top: 10px;
  font-weight: 500;

  @media screen and (max-width: 576px) {
   
   font-size: 16px;
    }
  `;
const Botton = Styled.button`

  background:  #89a4ff;
 padding: 10px 30px 10px 30px;
  font-size: 16px;
  margin-top:10px;
margin-left: 130px;
border-radius:10px;
color: #000000;
@media screen and (max-width: 576px) {
  font-size: 14px;
}


  `;
const Main4 = Styled.div`
  display:flex;
  flex-direction:row;
  margin-top:130px;
  justify-content:space-between;
  @media screen and (max-width: 576px){
    margin-top:0px;
    width:100%;
  }
  `;
const Main5 = Styled.div`
 display:flex;
 margin-top:85px;
 flex-direction:row;
 justify-content:space-between;
 
 @media screen and (max-width: 576px){
  margin-top:0px;
}
  `;

const Type = Styled.p`
  @media screen and (max-width: 576px){
    font-size:14px;
  }`;
