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
      heading: "Website development can be a fascinating & rewarding endeavor.",
      para1:
        "Throughout the development process, it is = essential to consider factors like user experience, search engine optimization (SEO), accessibility, and security to create a successful and effective website.",
    },
    {
      imgSrc: Export1,
      heading:
        "Technical consulting involves providing expert advice & guidance on various technical aspects of a business, project, or initiative.",
      para1:
        "Technical consulting requires a deep understanding of technologies and, strong analytical skills, effective communication, & the ability of translation of complex technical concepts into actionable recommendations for the non-technical stakeholders.",
    },
    {
      imgSrc: Export1,
      heading:
        "Redesigning the User Interface (UI) & User Experience (UX) of a website or application can significantly improve its usability, aesthetics, and overall effectiveness.",
      para1:
        "Technical consulting requires a deep understanding of technologies and, strong analytical skills, effective communication, & the ability of translation of complex technical concepts into actionable recommendations for the non-technical stakeholders.",
    },
    {
      imgSrc: Export1,
      heading:
        "Developing & migrating a (CMS) Content Management System involves several necessary steps for ensuring a very smooth transition and optimal functionality. ",
      para1:
        "Technical consulting requires a deep understanding of technologies and, strong analytical skills, effective communication, & the ability of translation of complex technical concepts into actionable recommendations for the non-technical stakeholders.",
    },
    {
      imgSrc: Export1,
      heading:
        "Technical SEO refers to the procedure of optimizing a website's technical aspects to improve its search engine visibility and ranking. ",
      para1:
        "Technical consulting requires a deep understanding of technologies and, strong analytical skills, effective communication, & the ability of translation of complex technical concepts into actionable recommendations for the non-technical stakeholders.",
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
