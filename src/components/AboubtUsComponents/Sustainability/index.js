import {
  Header,
  Service,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Span,
  DigitalContainer,
  ListHeading,
  ServiceItemImg,
  ServiceItemCon,
  PatternCon,
  SmallPattern,
  ServiceItemImg2,
} from "./Styled";
import rectangle1 from "../images/Rectangle 1.svg";
import rectangle2 from "../images/Rectangle2.svg";
import rectangle3 from "../images/Rectangle3.svg";

import GroupImg from "../images/Rectangle 6880.svg";

// import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";
import styled from "styled-components";

const Sustainability = () => {
  return (
    <>
      <div>
        <DigitalContainer>
          <Header>
          About Us &gt; <Span> Approach &gt; </Span><Span>Sustainability Policy</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>Sustainability Policy</ConRecHead>
            <ConRecDesc>
              "The only way forward, if we are going to improve the quality of
              the environment, is to get everybody involved."
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Sustainability Policy</ListHeading>
              </PatternCon>
            </div>
          </ServiceItemCon>
          <Main>
            <Main1>
              <Main2>
                <Para1>About Our Sustainability Policy</Para1>
                <Para>
                  <Spam></Spam>A sustainability policy outlines an
                  organization's commitment to environmental, social, and
                  economic sustainability. It serves as a guiding framework that
                  articulates the organization's values, goals, & strategies for
                  integrating sustainability into its operations,
                  decision-making processes, and overall business practices.
                </Para>
              </Main2>

              <ServiceItemImg src={GroupImg} alt="dm" />
            </Main1>
            <Main1>
              <Main3>
                <Para1>Our Commitment:</Para1>
                <Para>
                  <Spam></Spam>
                  Sepnoty is committed to promoting sustainability in all
                  aspects of our operations. We recognize that our activities
                  have social, environmental, and economic impacts, and we are
                  dedicated to minimizing our negative impacts while maximizing
                  positive contributions to society and the planet.
                  Sustainability Policy is classified into five divisions.
                </Para>
              </Main3>
            </Main1>
            <Spam></Spam>
            <Para2>Environmental Stewardship</Para2>
            <Para2>Social Responsibility</Para2>
            <Para2>Economic Prosperity</Para2>
            <Para2>Continuous Improvement:</Para2>
            <Para2>Implementation:</Para2>
            <Para3>
              <Spam></Spam>
              This sustainability policy applies to all employees, contractors,
              suppliers, & partners of Sepnoty. All individuals associated with
              our organization are expected to adhere to this policy and
              actively contribute to our sustainability efforts. The management
              is responsible for overseeing the implementation of this policy
              and ensuring that it remains relevant and effective over time.
            </Para3>
          </Main>
          <ServiceItemImg2 src={GroupImg} alt="dm" />
        </DigitalContainer>
      </div>
      <FooterSection />
    </>
  );
};

export default Sustainability;

const Para = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 1100px;
  color: white;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 95%;
    margin-bottom: 20px;
    font-weight: 400;
  }
`;
const Para3 = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 1100px;
  color: white;

  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 95%;
    margin-top: 10px;
  }
`;
const Para2 = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 1100px;
  color: white;

  @media screen and (max-width: 576px) {
    font-size: 14px;
    margin-bottom: 20px;
    width: 95%;
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 120px;
  gap: 10px;
  margin-bottom: 60px;

  @media screen and (max-width: 576px) {
    gap: 0px;
    margin-left: 12%;
    margin-bottom: 10px;
  }
`;
const Main1 = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;
const Main2 = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

const Main3 = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
  }
`;

const Para1 = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;

  @media screen and (max-width: 576px) {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
const Spam = styled.span`
  margin-left: 50px;
  @media screen and (max-width: 576px) {
    margin-left: 0px;
  }
`;
