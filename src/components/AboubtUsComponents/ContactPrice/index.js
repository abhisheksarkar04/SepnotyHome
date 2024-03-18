import Styled from "styled-components"
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
  import rectangle1 from "../images/Rectangle 1.svg"
  import rectangle2 from "../images/Rectangle2.svg";
  import rectangle3 from "../images/Rectangle3.svg";
  
  // import GroupImg from "../images/Group.svg"
  
  // import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  const heading = "Have a question About our Pricing Models?"
  
  const Model= () => {
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
            Pricing models in Sepnoty refer to the various strategies and structures that businesses use to determine the price of their products or services. These models are designed to ensure that the exact price set covers costs, generates profits, & remains competitive in the market. There are several common pricing models:
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
        </DigitalContainer>
        <Contact heading={heading}/>
        <FooterSection />
      </>
    );
  
  };
  
  export default Model;
  
  const Main = Styled.div`
  margin-top:100px;
  display:flex;
  flex-direction:row;
  margin-left:130px;
  gap:80px;
  margin-bottom:12%;
  `
  const Main1 = Styled.div`
  background:#D9D9D9;
  border-radius:10px;
  width:350px;
  height:300px;
  padding:13px;
  `
  const Main2 = Styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:90px;
  `
  const Main3 = Styled.div`
  
  `
  const Heading1 = Styled.h1`
  color: #3d3d3d;
  font-size:32px;
  font-weight:700;
  margin-bottom:20px;
  `
  const Para1 = Styled.p`
  color:#000000;
  font-size:18px;
  font-weight:400;
  `
  const Rupee = Styled.p`
  color: #000000;
  font-size:20px;
  margin-top: 10px;
  font-weight: 500;
  `
  const Botton = Styled.button`
  
  background:  #89a4ff;
  height:40px;
  width: 120px;
  font-size: 16px;
  margin-top:10px;
  margin-left:90px;
border-radius:10px;
color: #000000;

  `
  const Main4 = Styled.div`
  display:flex;
  flex-direction:row;
  margin-top:130px;
  justify-content:space-between;
  `
  const Main5 = Styled.div`
 display:flex;
 margin-top:85px;
 flex-direction:row;
 justify-content:space-between;
  `