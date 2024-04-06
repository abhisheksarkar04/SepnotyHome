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
        "Stinger Technologies, a global provider of Business Processes outsourcing services",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Stinger Technologies, a global provider of Business Processes outsourcing services",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Stinger Technologies, a global provider of Business Processes outsourcing services",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Stinger Technologies, a global provider of Business Processes outsourcing services",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Stinger Technologies, a global provider of Business Processes outsourcing services",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Stinger Technologies, a global provider of Business Processes outsourcing services",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Stinger Technologies, a global provider of Business Processes outsourcing services",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Stinger Technologies, a global provider of Business Processes outsourcing services",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    {
      image: GroupImg,
      subImage: Image,
      company:
        "Stinger Technologies, a global provider of Business Processes outsourcing services",
      description:
        "Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, ",
    },
    // Add more objects as needed
  ];
  return (
    <>
      <DigitalContainer>
        <Header>
          Resource centre &gt; <Span>Client Reviews</Span>
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
