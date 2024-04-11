import Styled from "styled-components"
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
    ServiceItemDesc,
    ImageCon,
    ServiceItemImg,
    // ServiceItemButton,
    ServiceItemDetails,
    ServiceItemCon,
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
  
  import Export from "../images/Expert.svg"
  import Export1 from "../images/Expert1.svg"
  
  // import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const AboutExpert= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          About Us &gt; <Span>Company</Span> &gt; <Span>Expert</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>About Expert</ConRecHead>
            <ConRecDesc>
            It seems like you're looking for information about experts. Experts are individuals who possess a high level of knowledge, skill, or proficiency in a particular field or subject. They are often recognized for their expertise through education, experience, training, or a combination of these factors.
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" /> 
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>About Expert</ListHeading>
              </PatternCon>
  
              <ServiceItemDetails>
                <ServiceItemDesc>
                At Sepnoty Technologies Pvt Ltd, our team of experts encompasses a wide array of fields, each contributing their unique skills and expertise to our collective success. From UI/UX designers crafting intuitive interfaces to MERN stack developers building robust web applications, and cybersecurity experts ensuring data security, our team covers all aspects of technology. HR professionals foster a positive work environment, while Flutter developers create cross-platform mobile apps, and AWS specialists architect scalable cloud solutions. Graphic designers bring creativity to life, AI experts pioneer intelligent solutions, and generative designers innovate with cutting-edge techniques. Cloud integration experts seamlessly blend cloud solutions into existing infrastructure. Together, our experts collaborate seamlessly to deliver transformative solutions, driving innovation and excellence in the technology landscape.
                </ServiceItemDesc>
                <ImageCon>
                  <ServiceItemImg src={Export} alt="dm" />
                </ImageCon>
              </ServiceItemDetails>
            </div>
            </ServiceItemCon>
            <ExpertContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
            </ExpertContainer>

        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default AboutExpert;
  
  const ExpertContainer = Styled.div`
  display:flex;
  flex-direction:column;
  gap : 30px;
  margin-bottom:60px;
  margin-left:17px;

  `
  const WebsiteContainer = Styled.div`
  display:flex;
  flex-direction:column;
  gap : 10px;
  margin-left:100px;
  @media screen and (max-width: 576px) {
    margin-left:40px;
  }
  `
  const Heading = Styled.div`
  font-size: 18px;
  color: #2b459b;
  font-weight: bold;

  `
 const X = Styled.div`
 display:flex;
  flex-direction:column;
  gap : 20px;
  margin-left:100px;
  @media screen and (max-width: 576px) {
    margin-left:60px;
  }

 
 `;
 const Y = Styled.div`
 display:flex;
  flex-direction:column;
  gap : 10px;
  margin-left:60px;
  margin-top:-30px;
 
 `;
//  const Z =  Styled.div`
//  display:flex;
// flex-direction:column;
// gap : 10px;
// margin-left:100px;
 
//  `;
 const Image = Styled.img`
 margin-top:10px;
 margin-left:-110%;
height:70px;
 `
 const Para1 = Styled.p`
 margin-top:-50px;
 color:white;
 
`
const Para2 = Styled.p`
margin-top:10px;
color:white;

`
