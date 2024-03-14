import Styled from "styled-components"
import {
    Header,
    Service,
    ContentRecomContainer,
    ConRecHead,
    ConRecDesc,
    // Rectangle1,
    // Rectangle2,
    // Rectangle3,
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
  } from "./styled";
  
  // import GroupImg from "../images/Rectangle 6121.png"
  import Image from "../images/Rectangle 6122.svg"
  
  // import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const Testimonial= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Recognition &gt; <Span>Testimonials</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>About our Testimonials</ConRecHead>
            <ConRecDesc>
            Sepnoty Testimonials are statements or endorsements given by individuals or entities expressing their satisfaction, approval, or support for a product, service, or experience. These statements typically highlight positive experiences, benefits, or results obtained from using a particular product or service. Testimonials serve as a form of social proof, helping to build trust and credibility by showcasing the experiences and opinions of satisfied customers or users.
            </ConRecDesc>
            {/* <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" /> */}
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>About Our Testimonisals</ListHeading>
              </PatternCon>
            </div>
            </ServiceItemCon>
            <Main1>
            <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <P><Spam></Spam>"I've been a customer of Sepnoty for over two years now, and I have always have been impressed by their professionalism and quality of service. They go above and beyond to ensure customer satisfaction."</P>
               
               <P>John Smith,CMM Level 4 Company,California</P>
           </Main2>
            </Main1>
            
        </DigitalContainer>
        
        <FooterSection />
      </>
    );
  
  };
  
  export default Testimonial;
  const Spam = Styled.span`
  margin-left:50px;
  `

  const Main1 = Styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap : wrap;
  gap:140px;
  margin-left:110px;
  margin-bottom:190px;
  `
  const Main2 = Styled.div`
  border: 0.99px solid #FFFFFF;
  background: #2f333f;
  border-radius:7px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:14px;
  height:320px;
  width:330px;
  padding:11px;
  margin-bottom:-120px;
  `
  const Image1 = Styled.img`
  margin-bottom:10px;
  height:80px;
  margin-top:10px;
  `
  const P = Styled.p`
  margin-top:10px;
  color:white;
  text-align:center;
  width:100%;
  `


