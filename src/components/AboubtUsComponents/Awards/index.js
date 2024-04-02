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
    // ServiceItemDesc,
    // ImageCon,
    // ServiceItemImg,
    // ServiceItemButton,
    // ServiceItemDetails,
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
  
  import GroupImg from "../images/Rectangle 6122 (1).svg"
  
  // import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const Awards= () => {
    const awardsData = [
      {
          heading: "Webby Awards",
          para1: "Recognizes excellence on the internet, including websites, apps, social media, video, podcasts, & more, across various categories."
      },
      {
        heading: "Webby Awards",
        para1: "Recognizes excellence on the internet, including websites, apps, social media, video, podcasts, & more, across various categories."
    },
    {
      heading: "Webby Awards",
      para1: "Recognizes excellence on the internet, including websites, apps, social media, video, podcasts, & more, across various categories."
  },
  {
    heading: "Webby Awards",
    para1: "Recognizes excellence on the internet, including websites, apps, social media, video, podcasts, & more, across various categories."
 }, 
 {
  heading: "Webby Awards",
  para1: "Recognizes excellence on the internet, including websites, apps, social media, video, podcasts, & more, across various categories."
},
{
  heading: "Webby Awards",
  para1: "Recognizes excellence on the internet, including websites, apps, social media, video, podcasts, & more, across various categories."
},
{
  heading: "Webby Awards",
  para1: "Recognizes excellence on the internet, including websites, apps, social media, video, podcasts, & more, across various categories."
},
{
  heading: "Webby Awards",
  para1: "Recognizes excellence on the internet, including websites, apps, social media, video, podcasts, & more, across various categories."
},
{
  heading: "Webby Awards",
  para1: "Recognizes excellence on the internet, including websites, apps, social media, video, podcasts, & more, across various categories."
},
      // Add more objects as needed
  ];
    return (
      <>
        <DigitalContainer>
          <Header>
          Recognition &gt; <Span>Awards</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>Awards</ConRecHead>
            <ConRecDesc>
            "Receiving an award is like reaching a milestone, a moment of celebration for the hard work and dedication put into achieving excellence."
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Awards</ListHeading>
              </PatternCon>
            </div>
            </ServiceItemCon>
            <Main>
                    {awardsData.map((award, index) => (
                        <Main1 key={index}>
                            <Image5 src={GroupImg} alt="not-found"/>
                            <Heading>{award.heading}</Heading>
                            <Para1>{award.para1}</Para1>
                        </Main1>
                    ))}
                </Main>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default Awards;
  const media = {
    mobile: '@media(max-width: 576px)'
  };
  
  const Main = Styled.div`
  display:flex;
  flex-wrap : wrap;
  margin-left:110px;
  gap:140px;
  margin-bottom:190px;
  @media screen and (max-width:576px){
    margin-left:5px;
    gap:50px;
  }
  `
  const Main1 = Styled.div`
  border: 1px solid #FFFFFF;
  background: #D9D9D917;
  width:300px;
  align-item:center;
  justify-content:center;
  height:250px;
  border-radius:8px;
  margin-bottom:-120px;
  padding:10px;
  @media screen and (max-width : 576px){
    width:150px;
    margin-bottom:20px;
  }
  `
  const Heading = Styled.h1`
  text-align:center;
  font-size: 20px;
  color: #2b459b;
  font-weight: bold;
  margin-top:10px;
  ${media.mobile}{
    font-size:13px;
  }
  `
  const Image5 = Styled.img`
  height:90px;
  align-item:center;
  justify-content:start;
  margin-left:90px;
  margin-top:10px;
 @media screen and (max-width:576px){
  margin-left:40px;
  height:40px;
 }
  `
  const Para1 = Styled.p`
  margin-top:10px;
  text-align:center;
  color:white;
  ${media.mobile}{
    font-size:13px;
    height:100px;
  }
  `