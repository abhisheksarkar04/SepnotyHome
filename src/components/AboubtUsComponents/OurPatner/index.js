import Styled from "styled-components";
import Contact from "../../ContactUs/SepnotyQuerySection";
import {
  Header,
  Service,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  // Button,
  Span,
  DigitalContainer,
  // ListHeading,
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
  ConatctCon,
  // ContactItem,
  // Container,
  // PatternCon,
  // SmallPattern,

  // ContactItem,
  // Container,
} from "./Styled";
import rectangle1 from "../images/Rectangle 1.svg";
import rectangle2 from "../images/Rectangle2.svg";
import rectangle3 from "../images/Rectangle3.svg";

import GroupImg from "../images/Rectangle 6128.svg";
import Line1 from "../images/Rectangle 6127.svg";

import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";

const OurPatner = () => {
  const heading = "Have a question to our Partners?";
  return (
    <>
      <DigitalContainer>
        <Header>
          Partners &gt; <Span>Our Partners</Span>
        </Header>
        <Service>About Us</Service>
        <ContentRecomContainer>
          <ConRecHead>Our Partners</ConRecHead>
          <ConRecDesc>
            "Surround yourself with only people who are going to lift you
            higher."
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <He>Our Patner</He>
        <Par>
          {" "}
          Our fruitful partnership with the suppliers regarding IT Products and
          Services creates new avenues for expansion and offers our clients
          access to the latest technological advancements. We can confidently
          rely on the caliber of tech goods we recommend because we have
          collaborations with industry leaders in cloud technologies, data
          management systems, and corporate software applications
        </Par>
        <Main>
          <Main1>
            <Img src={Line1} />
            <Image5 src={GroupImg} alt="not-found" />
            <Para1>
              As a Premium ServiceNow Partner, Sepnoty provides effective ITSM
              solutions that reduces the active negative effects of
              infrastructure changes, help to optimize IT support costs, and
              provide visibility into our clients' IT processes and
              infrastructure. We also enable quick reaction to Problems, and
              events.
            </Para1>
            <Img src={Line1} />
          </Main1>
          <Main1>
            <Img src={Line1} />
            <Image5 src={GroupImg} alt="not-found" />
            <Para1>
              As a Premium ServiceNow Partner, Sepnoty provides effective ITSM
              solutions that reduces the active negative effects of
              infrastructure changes, help to optimize IT support costs, and
              provide visibility into our clients' IT processes and
              infrastructure. We also enable quick reaction to Problems, and
              events.
            </Para1>
            <Img src={Line1} />
          </Main1>
          <Main1>
            <Img src={Line1} />
            <Image5 src={GroupImg} alt="not-found" />
            <Para1>
              As a Premium ServiceNow Partner, Sepnoty provides effective ITSM
              solutions that reduces the active negative effects of
              infrastructure changes, help to optimize IT support costs, and
              provide visibility into our clients' IT processes and
              infrastructure. We also enable quick reaction to Problems, and
              events.
            </Para1>
            <Img src={Line1} />
          </Main1>
          <Main1>
            <Img src={Line1} />
            <Image5 src={GroupImg} alt="not-found" />
            <Para1>
              As a Premium ServiceNow Partner, Sepnoty provides effective ITSM
              solutions that reduces the active negative effects of
              infrastructure changes, help to optimize IT support costs, and
              provide visibility into our clients' IT processes and
              infrastructure. We also enable quick reaction to Problems, and
              events.
            </Para1>
            <Img src={Line1} />
          </Main1>
          <Main1>
            <Img src={Line1} />
            <Image5 src={GroupImg} alt="not-found" />
            <Para1>
              As a Premium ServiceNow Partner, Sepnoty provides effective ITSM
              solutions that reduces the active negative effects of
              infrastructure changes, help to optimize IT support costs, and
              provide visibility into our clients' IT processes and
              infrastructure. We also enable quick reaction to Problems, and
              events.
            </Para1>
            <Img src={Line1} />
          </Main1>
          <Main1>
            <Img src={Line1} />
            <Image5 src={GroupImg} alt="not-found" />
            <Para1>
              As a Premium ServiceNow Partner, Sepnoty provides effective ITSM
              solutions that reduces the active negative effects of
              infrastructure changes, help to optimize IT support costs, and
              provide visibility into our clients' IT processes and
              infrastructure. We also enable quick reaction to Problems, and
              events.
            </Para1>
            <Img src={Line1} />
          </Main1>
          <Main1>
            <Img src={Line1} />
            <Image5 src={GroupImg} alt="not-found" />
            <Para1>
              As a Premium ServiceNow Partner, Sepnoty provides effective ITSM
              solutions that reduces the active negative effects of
              infrastructure changes, help to optimize IT support costs, and
              provide visibility into our clients' IT processes and
              infrastructure. We also enable quick reaction to Problems, and
              events.
            </Para1>
            <Img src={Line1} />
          </Main1>
          <Main1>
            <Img src={Line1} />
            <Image5 src={GroupImg} alt="not-found" />
            <Para1>
              As a Premium ServiceNow Partner, Sepnoty provides effective ITSM
              solutions that reduces the active negative effects of
              infrastructure changes, help to optimize IT support costs, and
              provide visibility into our clients' IT processes and
              infrastructure. We also enable quick reaction to Problems, and
              events.
            </Para1>
            <Img src={Line1} />
          </Main1>
          <Main1>
            <Img src={Line1} />
            <Image5 src={GroupImg} alt="not-found" />
            <Para1>
              As a Premium ServiceNow Partner, Sepnoty provides effective ITSM
              solutions that reduces the active negative effects of
              infrastructure changes, help to optimize IT support costs, and
              provide visibility into our clients' IT processes and
              infrastructure. We also enable quick reaction to Problems, and
              events.
            </Para1>
            <Img src={Line1} />
          </Main1>
        </Main>
      </DigitalContainer>

      <Contact heading={heading} />
      <FooterSection />
    </>
  );
};

export default OurPatner;

const He = Styled.h1`
  margin-left:100px;
  margin-top:120px;
  font-size:24px;
 margin-bottom: 20px;
  color:white;
  @media screen and (max-width:576px){
    font-size:16px;
    margin-left:30px;
    margin-top:40px;
    margin-bottom:10px;
  }
  
  `;

const Main = Styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap : wrap;
  margin-left:100px;
  margin-top:40px;
  margin-bottom:40px;
  @media screen and (max-width:576px){
    justify-content:space-between;
    margin-bottom: 10px;
    margin-left:15px;
    margin-top: 20px;
  }
  
  `;
const Main1 = Styled.div`
  width:300px;
  align-item:center;
 
  height:300px;
  border-radius:20px;
 margin-right: 140px;
  @media screen and (max-width : 576px){
    width:40%;
    height: auto;
    margin-bottom: 0px;
    margin-right: 20px;
  }
  
  `;
// const Heading = Styled.h1`
// margin-top:20px;
// text-align:center;
// font-size: 20px;
// color: #2b459b;
// font-weight: bold;
// `
const Image5 = Styled.img`
  height:70px;
  margin-top:10px;
  margin-bottom:10px;
  @media screen and (max-width:576px){
    height:45px;
  }
 
  `;
const Para1 = Styled.p`
  margin-top:2px;
  font-size:16px;
  
  color:white;
  @media screen and (max-width :576px){
    font-size:14px; 
    line-height:1.2;
  }
  
  `;
const Img = Styled.img`
  width:350px;
  @media screen and (max-width:576px){
    width:100%;
  }

  `;
const Par = Styled.p`
  margin-left:100px;
  width:55%;
  font-size:20px;
  color:white;
  @media screen and (max-width:576px){
    font-size:14px;
    width:65%;
    margin-left:30px;
  }
  `;
