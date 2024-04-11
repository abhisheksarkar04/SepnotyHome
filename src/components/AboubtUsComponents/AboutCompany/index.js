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
    Small,
    Small1,
    Small2,
    Small3,
    ServiceItemDesc,
    ImageCon,
    ServiceItemImg,
    ServiceItemButton,
    ServiceItemDetails,
    ServiceItemCon,
    ConatctCon,
    ContactItem,
    Container,
    PatternCon,
    SmallPattern,
  
    // ContactItem,
    // Container,
  } from "./Styled";
  import rectangle1 from "../images/Rectangle 1.svg"
  import Re from "./Images/re.svg";
  import rectangle2 from "../images/Rectangle2.svg";
  import rectangle3 from "../images/Rectangle3.svg";
  import FooterSection from "../../Footer/FooterSection";

  import GroupImg from "../images/Group.svg"
  
  
  // import ContactForm from "../../ContactUs/ContactForm";
  
  const AboutCompany= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          About Us &gt; <Span>Company</Span> &gt; <Span>About Company</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>About Sepnoty</ConRecHead>
            <ConRecDesc>
            "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>About Sepnoty</ListHeading>
              </PatternCon>
  
              <ServiceItemDetails>
                <ServiceItemDesc>
                Manikumar Pokala, the Founder and Chairman of Sepnoty Technologies Pvt Ltd, brings a wealth of experience and a visionary approach to leadership. With a career spanning several decades in the technology sector, Manikumar has established himself as a leader in driving innovation and business growth. His strategic vision and deep understanding of market dynamics have been instrumental in steering Sepnoty towards success.

As the driving force behind Sepnoty, Manikumar sets the vision for the organization and inspires the team to achieve new heights of excellence. His leadership style is characterized by a focus on innovation, collaboration, and customer-centricity. Under his guidance, Sepnoty has flourished, establishing itself as a trusted name in the technology industry.

Kavya Mahendran, the Co-Founder and Managing Director of Sepnoty, complements Manikumar's leadership with her dynamic and hands-on approach. With a background in business management and a passion for driving operational excellence, Kavya plays a pivotal role in ensuring the successful execution of Sepnoty's strategic initiatives.

Together, Manikumar and Kavya form a formidable leadership duo, driving Sepnoty Technologies Pvt Ltd forward with vision, passion, and a relentless commitment to excellence. Their combined expertise, strategic acumen, and dedication to innovation are instrumental in guiding the company towards its goals and ensuring its continued success in the ever-evolving technology landscape.
                </ServiceItemDesc>
                <ImageCon>
                  <ServiceItemImg src={GroupImg} alt="dm" />
                </ImageCon>
              </ServiceItemDetails>
            </div>
            </ServiceItemCon>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default AboutCompany;
  