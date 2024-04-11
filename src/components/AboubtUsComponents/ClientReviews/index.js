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
  // Button,
  Span,
  DigitalContainer,
  ListHeading,
  // Small,
  // Small1,
  // Small2,
  // Small3,
  ServiceItemDesc,
  // ImageCon,
  // ServiceItemImg,
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

import GroupImg from "../images/Rectangle 6121.png";
import Image from "../images/Rectangle 6122.svg";
import rectangle1 from "../images/Rectangle 1.svg";
import rectangle2 from "../images/Rectangle2.svg";
import rectangle3 from "../images/Rectangle3.svg";

//   import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";

const ClientReviews = () => {
  const reviewData = [
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Client Review by Emily Johnson Senior Marketing Manager, TechTrend Innovations",
      description:
        "Sepnoty's expertise in UI/UX design elevated our product to new heights. Their team's attention to detail and creative solutions exceeded our expectations.",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Client Review by David Rodriguez CEO, GlobalTech Solutions ",
        
      description:
      "We entrusted Sepnoty with the development of our e-commerce platform, and they delivered beyond our wildest dreams. Their professionalism and commitment to quality are unmatched."
      ,
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Client Review by Samantha Lee CTO, InnovateX Technologies ",
        
      
      description:
      "Sepnoty's cybersecurity solutions provided us with peace of mind. Their proactive approach and robust security measures protected our data and infrastructure effectively."

    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Client Review by Jessica Wong  Founder, HomeSmart Innovations ",
       
      description:
        "Sepnoty's smart home technology brought our vision to life. Their innovative solutions and IoT-enabled devices have transformed our homes into intelligent living spaces.",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Client Review by Michael ChenFounder, TravelEase Adventures",
      description:
      "Working with Sepnoty on our travel booking platform was a game-changer. Their expertise in problem-solving and attention to user experience resulted in a seamless booking process for our customers."
      ,
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Client Review by Laura Smith  HR Director, ConnectTech Inc.",
       
        
      description:
      "Sepnoty's HR solutions helped streamline our hiring process and improve employee engagement. Their platform made it easy to manage talent effectively and foster a positive work culture."

    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Client Review by James ThompsonCFO, FinancePro Group",
      description:
      "Sepnoty's financial services solutions revolutionized our operations. Their innovative tools and analytics capabilities enabled us to make data-driven decisions and stay ahead in the finance industry."


    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Client Review by Sarah Patel Director of Operations, HealthFirst Clinic",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
     " Client Review by Daniel Kim CTO, MediaMasters Productions",
      
      description:
      "Sepnoty's AI solutions enhanced our production processes and optimized our workflows. Their team's expertise in artificial intelligence helped us deliver high-quality content efficiently."

    },
    // Add more objects as needed
  ];
  return (
    <>
      <DigitalContainer>
        <Header>
        About Us &gt; <Span>Company</Span> &gt;  <Span>Client Reviews</Span>
        </Header>
        <Service>About Us</Service>
        <ContentRecomContainer>
          <ConRecHead>Client Reviews</ConRecHead>
          <ConRecDesc>
            Client reviews are assessments or feedback provided by customers or
            clients regarding their experiences with a product, service, or
            business. These reviews can be highly valuable for both potential
            customers and the business itself.
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <ServiceItemCon>
          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>About Our Esteemed Client Reviews</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                We band together businesses from more than 35 nations and 30
                different industries. There are more than 1500 success stories
                in our project portfolio, including projects for various CMM
                Level and Fortune 500 companies.
              </ServiceItemDesc>
            </ServiceItemDetails>
          </div>
        </ServiceItemCon>
        <Main1>
          {reviewData.map((review, index) => (
            <Main2 key={index}>
              <Image2 src={review.image} alt="not-found" />
              <Main3>
                <Image1 src={review.subImage} alt="not-found" />
                <P>{review.company}</P>
              </Main3>
              <Para>{review.description}</Para>
            </Main2>
          ))}
        </Main1>
        <FooterSection />
      </DigitalContainer>
    </>
  );
};

export default ClientReviews;

const P = Styled.p`
  margin-top:20px;
  color:white;
  @media screen and (max-width: 576px) {
    font-size:10px;
    margin-top: 0px;
    line-height: 1.7;
  }
  
  `;

const Main1 = Styled.div`
  display:flex;
  flex-direction:row;
  flex-flow : wrap;
  margin-top:20px;
  margin-left: 6.5%;
  margin-bottom: 8%;
  @media screen and (max-width: 576px) {
    margin-left:0px;
    justify-content:space-between;
    margin-top: 0px;
    padding: 8px;
    margin-bottom: 0px;
  }
  `;
const Main2 = Styled.div`
  display:flex;
  flex-direction:column;
  border: 0.99px solid #FFFFFF;
  background: #2f333f;
  gap:20px;
  border-radius:7px;
  padding: 20px;
  height:320px;
  width:350px;
  margin: 0 20px 30px 20px;
  @media screen and (max-width: 576px) {
    width:47%;
    height:auto;
    margin:10px 0px;
    gap: 0px;
    padding: 5px 2px 5px 5px;
  }
 

  `;
const Main3 = Styled.div`
  display:flex;
  flex-direction:row;

  
  `;
const Para = Styled.p`
      font-size: 16px;
      color:white;
      @media screen and (max-width: 576px) {
        font-size:13px;
        margin-top:10px;
        line-height:1.7;
        
      }
  `;
const Image1 = Styled.img`
  height: 80px;
  margin-right: 10px;
  margin-top:10px;
margin-right:10px;
@media screen and (max-width: 576px) {
  height:40px;
  margin-right:5px;
  margin-top:0px;
}
  `;
const Image2 = Styled.img`
  height:45px;
  width:140px;
  margin-top:10px;
  @media screen and (max-width: 576px) {
    height:30px;
    width:90px; 
    margin-top:0px;
    margin-bottom:10px;
  }
  `;
