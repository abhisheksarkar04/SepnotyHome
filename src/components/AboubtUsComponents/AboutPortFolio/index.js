import { Link } from "react-router-dom/cjs/react-router-dom.min";
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

import Export from "../images/Vector.svg";
import Export1 from "../images/Rectangle 6654.svg";
import rectangle1 from "../images/Rectangle 1.svg";
import rectangle2 from "../images/Rectangle2.svg";
import rectangle3 from "../images/Rectangle3.svg";
import FooterSection from "../../Footer/FooterSection";
// import ContactForm from "../../ContactUs/ContactForm";

const AboutPortfolio = () => {
  const websiteData = [
    {
      imgSrc: Export1,
      heading: "Creativity: Educational Apps",
      para1:
        "Inspire creativity in learning with our interactive educational apps, offering engaging content and personalized learning paths for students of all ages.Problem Solving: Healthcare Solutions",
    },
    {
      imgSrc: Export1,
      heading:
        "Problem Solving: Healthcare Solutions",
      para1:
        "Address healthcare challenges effectively with our innovative solutions, including patient management systems and AI-powered diagnostics, enhancing patient care and operational efficiency.",
    },
    {
      imgSrc: Export1,
      heading:
        "Continuous Learning: Financial Services",
      para1:
        "Stay updated with evolving financial trends using our cutting-edge solutions, from mobile banking apps to AI-driven financial analytics platforms, enabling continuous learning and adaptation in the finance industry.",
    },
    {
      imgSrc: Export1,
      heading:
        "Job Opportunities: E-commerce Platform",
      para1:
        "Unlock abundant job opportunities with our feature-rich e-commerce platform, equipped with secure payment gateways and personalized shopping experiences, connecting consumers and businesses worldwide.        ",
    },
    {
      imgSrc: Export1,
      heading:
        "Remote Work: Enterprise Resource Planning (ERP)",
      para1:
        "Seamlessly transition to remote work with our comprehensive ERP solutions, offering modules for finance, HR, and supply chain management, empowering teams to collaborate efficiently from anywhere.        ",
    },
    {
      imgSrc: Export1,
      heading:
        "Problem Solving: Travel and Tourism.",
      para1:
        "Overcome travel obstacles effortlessly with our dynamic booking engines and itinerary management tools, delivering seamless travel experiences for adventurers worldwide.        ",
    },
    {
      imgSrc: Export1,
      heading:
        "Creativity: Smart Home Technology.",
      para1:
        "Infuse creativity into home living with our smart home solutions, featuring IoT-enabled devices and energy management platforms, transforming living spaces for ultimate comfort and convenience. ",
    },
    // Add more objects as needed
  ];

  return (
    <DigitalContainer>
      <Header>
      About Us &gt; <Span>Company</Span> &gt; <Span>Portfolio</Span>
      </Header>
      <Service>About Us</Service>
      <ContentRecomContainer>
        <ConRecHead>About Portfolio</ConRecHead>
        <ConRecDesc>
          If you're looking to create a portfolio, whether for showcasing your
          work, academic achievements, or other accomplishments.
        </ConRecDesc>
        <Rectangle3 src={rectangle3} alt="not-found" />
        <Rectangle2 src={rectangle2} alt="not-found" />
        <Rectangle1 src={rectangle1} alt="not-found" />
      </ContentRecomContainer>
      <ServiceItemCon>
        <PatternCon>
          <SmallPattern></SmallPattern>
          <ListHeading>About Portfolio</ListHeading>
        </PatternCon>
        <ServiceItemDetails>
          <ServiceItemDesc>
            Today's enterprises need a full-stack intelligent business solution,
            from business solutions to managed services like technical
            consulting, UI/UX redesign, CMS development and migration, website
            development, and technical SEO. They require partners who can
            provide value, agility, and financial certainty and who possess
            extensive knowledge and experience.
          </ServiceItemDesc>
        </ServiceItemDetails>
      </ServiceItemCon>
      <ExpertContainer>
        {websiteData.map((data, index) => (
          <>
            <MobileCon>
              <Heading>{data.heading}</Heading>
              <ImageDescCon>
                <Mobilediv>
                  <Image src={data.imgSrc} alt="not-found" />
                  <Y>
                    <Para2>Learn More </Para2>
                    <Image1 src={Export} />
                  </Y>
                </Mobilediv>
                <Para1>{data.para1}</Para1>
              </ImageDescCon>
            </MobileCon>
            <WebsiteContainer key={index}>
              <Image src={data.imgSrc} alt="not-found" />
              <X>
                <Link to="/portfolio">
                  <Heading>{data.heading}</Heading>
                </Link>
                <Para1>{data.para1}</Para1>
                <Y>
                  <Para2>Learn More </Para2>
                  <Image1 src={Export} />
                </Y>
              </X>
            </WebsiteContainer>
          </>
        ))}
      </ExpertContainer>
      <FooterSection />
    </DigitalContainer>
  );
};

export default AboutPortfolio;

const ImageDescCon = Styled.div`
  display: flex;
  flex-direction: row;
`;
const ExpertContainer = Styled.div`
  display:flex;
  flex-direction:column; 
  padding-left:6%;
  flex-direction:column;
  gap:50px;
  margin-bottom:60px;
  @media screen and (max-width: 576px) {
    padding-left: 3%;
  }
  `;
const WebsiteContainer = Styled.div`

  display:flex;
  flex-direction:row;
  margin-bottom:30px;
  padding-top:20px;
  @media screen and (max-width: 576px) {
   display: none;
  }
  `;
/* const Heading = Styled.div`
  font-size: 25px;
  color: #2b459b;
  font-weight: bold;
  margin-top:15px;
  width:85%;
  line-height:1.5;
  padding-bottom:20px;
  gap : 40px;
  height:50%;
  ` */

const Heading = Styled.h1`
  font-size: 21px;
  color: #2b459b;
  font-weight: bold;
  margin-top:10px;
  @media screen and (max-width: 576px){
    font-size: 16px;
  }
  `;
const X = Styled.div`
 display:flex;
  flex-direction:column;
  @media screen and (max-width: 576px) {
   width:100%;
  }
 `;
const Y = Styled.div`
 display:flex;
  flex-direction:row;
  align-items:center;
  @media screen and (max-width: 576px) {

 `;

const Image = Styled.img`
    margin-top:10px;
    height:250px;
    margin-right:7%;
    @media screen and (max-width: 576px) {

      height:110px;
      margin-bottom:10px;
      margin-right:10px;

 `;
const Para1 = Styled.p`
 font-size:21px;
 padding-bottom:15px;
 line-height:1.5;
 width:85%;
 color:white;
 @media screen and (max-width: 576px) {
  font-size:13px;
  width:100%;
  line-height:1.2;
  margin-top:10px;
  padding-right:10px;
}


`;
const Para2 = Styled.p`
font-size:21px;
color:white;
@media screen and (max-width: 576px) {
  font-size:14px;
}
`;
const Image1 = Styled.img`
height:23px;
margin-left:10px;
@media screen and (max-width : 576px){
  height:21px;
  margin-top:0px;
}
height:20px;
margin-top:0px;
`;

const Mobilediv = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media screen and (min-width : 577px){
  display:  none;
}
`;

export const MobileCon = Styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width : 577px){
    display:  none;
  }
`;
