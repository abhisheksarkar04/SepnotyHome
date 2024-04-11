import { Component } from "react";

import FollowUsElements from "../FollowUsElements";
import { ThemeProvider } from "styled-components";
import behance from "../Images/behance.svg";
import facebook from "../Images/facebook.svg";
import figma from "../Images/figma.svg";
import instagram from "../Images/instagram.svg";
import twitter from "../Images/TwitterX.svg";
import copyright from "../Images/copyright.svg";
import sepnotyLogo from "../Images/sepnoty-logo.svg";

import {
  GlobalStyle,
  Container,
  FooterContainer,
  LogoContainer,
  SepnotyLogo,
  SepnotyDescription,
  FollowUsSection,
  ServiceItems,
  ContactHeading,
  NewsHeading,
  NewsDesc,
  InputHolder,
  FollowUsContainer1,
  EmailMsg,
  ServiceContact,
  Button,
  CopywriteContainer,
  CopywriteContent,
  BottomContainer,
  SectionContainer,
  SepnotyDescription1,
  Sections,
  Section,
  FollowUsContainer,
  Copyright,
  ServiceCon,
  ContactCon,
} from "./styled";

const followUsElements = [
  {
    id: 1,
    logoSrc: facebook,
    logoName: "Facebook",
  },
  {
    id: 2,
    logoSrc: twitter,
    logoName: "X",
  },
  {
    id: 3,
    logoSrc: instagram,
    logoName: "Instagram",
  },
  {
    id: 4,
    logoSrc: behance,
    logoName: "Behance",
  },
  {
    id: 5,
    logoSrc: figma,
    logoName: "Figma",
  },
];

const theme = {};

class FooterSection extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <FooterContainer>
            <LogoContainer>
              <div className="logo-section">
                <SepnotyLogo src={sepnotyLogo} alt="sepnoty" />
              </div>
              <SepnotyDescription>
                We're here to help, no matter where you are in your business
                journey
              </SepnotyDescription>
              <SepnotyDescription1>
                No question is too big or small for us
              </SepnotyDescription1>
            </LogoContainer>
            <FollowUsContainer1>
              <ContactHeading>Follow Us</ContactHeading>
              <FollowUsSection>
                {followUsElements.map((eachLogo) => (
                  <FollowUsElements key={eachLogo.id} logos={eachLogo} />
                ))}
              </FollowUsSection>
            </FollowUsContainer1>
            <div>
              <NewsHeading>Our Newsletter</NewsHeading>
              <NewsDesc>Stay Informed: Subscribe to Our Newsletter!</NewsDesc>
              <div>
                <InputHolder type="text" placeholder="Your email address" />
                <Button type="button">SIGN UP</Button>
                <EmailMsg>
                  * We're serious about privacy: No spam, ever!
                </EmailMsg>
              </div>
            </div>
            <ServiceContact>
              <ServiceCon>
                <ContactHeading>Services</ContactHeading>
                <ServiceItems>Web Application Development</ServiceItems>
                <ServiceItems>Customer Software Development </ServiceItems>
                <ServiceItems>Web Development</ServiceItems>
              </ServiceCon>
              <ContactCon>
                <ContactHeading>Contact Us</ContactHeading>
                <ServiceItems>Call us</ServiceItems>
                <ServiceItems>Live Chat</ServiceItems>
                <ServiceItems>WhatsApp</ServiceItems>
                <ServiceItems>Email us</ServiceItems>
              </ContactCon>
            </ServiceContact>
            <FollowUsContainer>
              <ContactHeading>Follow Us</ContactHeading>
              <FollowUsSection>
                {followUsElements.map((eachLogo) => (
                  <FollowUsElements key={eachLogo.id} logos={eachLogo} />
                ))}
              </FollowUsSection>
            </FollowUsContainer>
          </FooterContainer>
          <BottomContainer>
            <CopywriteContainer>
              <Copyright src={copyright} alt="cr" />
              <CopywriteContent>
                2024 Sepnoty.All rights reserved.
              </CopywriteContent>
            </CopywriteContainer>
            <SectionContainer>
              <Sections>About</Sections>
              <Sections>Advertise</Sections>
              <Sections>Privacy & Policy</Sections>
              <Section>Contact Us</Section>
            </SectionContainer>
          </BottomContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default FooterSection;
