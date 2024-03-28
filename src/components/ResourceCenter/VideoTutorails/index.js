// import searchIcon from "../images/search.svg";
import DeepLearnCards from "./DeepLearnCards";
// import DeepLearnStructure from "./images/Rectangle 6283.svg";
import FooterSection from "../../Footer/FooterSection";
import rectangle1 from "../images/Rectangle 1.svg";
import rectangle2 from "../images/Rectangle2.svg";
import rectangle3 from "../images/Rectangle3.svg";
import small from "../images/Rectanglesmall.svg";
import ReactPlayer from "react-player"
// import DeepLearningImg from "./images/Rectangle 6268.png"
import styled from 'styled-components';


import image1 from "./images/Rectangle 6270.png"
import image2 from "./images/Rectangle 6271.png"
import image3 from "./images/Rectangle 6272.png"
import image4 from "./images/Rectangle 6273.png"
import image5 from "./images/Rectangle 6274.png"
import image6 from "./images/Rectangle 6275.png"

import {
  CardContainer,
  CardContainer1,
  Image,
  Title,
  Image33,
  CardContainer2,
  // Heading,
  // Description,
  // Arrow,
  ButtonCon,
  DetailsCon,
  ImageA,
  ImageB,
} from "./DeepLearnCards/styled";

import {
  Container,
  Header,
  Resource,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  ListHeading,
  RedText,
  // SearchHeading,
  // SearchHolder,
  // Input,
  // SearchIcon,
  // SearchSuggestionContainer,
  FirstSection,
  Button,
  ListItems,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  DeepLearnFrame,
  Small,
  ContentContainer,
  Small1,
  TechnicalArticalsMain,
  ImageContainer,
  // DeepLearnImage,
  DeepHeading,
  Span,
  HeadingCon,
  ListOne,
} from "./styled";


const StyledPlayer = styled(ReactPlayer)`
    padding-right: 0%;
    @media screen and (max-width: 576px) {

      padding: 28%;
      
    
    }
`;

const cardList = [
  {
    id: 1,
    image: image1,
    title: "Security best practices and compliance standards",
  },
  {
    id: 2,
    image: image2,
    title: "Network security",
  },
  {
    id: 3,
    image: image3,
    title: "Data visualization tools and techniques",
  },
  {
    id: 4,
    image: image4,
    title: "Natural language processing (NLP) and text analytics",
  },
  {
    id: 5,
    image: image5,
    title: "Data visualization tools and techniques",
  },
  {
    id: 6,
    image: image6,
    title: "Security best practices and compliance standards",
  },
];
const VideoTutorials = () => {
  return (
    <>
      <Container>
        <Header>
        Resource centre &gt; <Span>Video Tutorials</Span>
        </Header>
        <Resource>Resources</Resource>
        <ContentRecomContainer>
          <ConRecHead>Video Tutorials</ConRecHead>
          <ConRecDesc>
          "With advancements in the consumer video market, what used to be a cumbersome process with video has now become an easily accessible medium for your training department."
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <ContentContainer>
          <FirstSection>
          <HeadingCon>
            <Small src={small} alt="not-found" />
            <ListHeading>Technical Videos</ListHeading>
            </HeadingCon>
            <TechnicalArticalsMain>
              <DeepLearnFrame>
                 <ImageContainer>
                 <StyledPlayer 
                 style={{ width: '600px' }}
                 controls={true} url="https://youtu.be/6ryPbOfz03U?si=kh21q0Ku9lFzarSQ" />
                 <DeepHeading>Deep learning frameworks</DeepHeading>
                 </ImageContainer>
                 <Button>Watch More</Button>
              </DeepLearnFrame>
              <ListItems>
                    <ListOne>
                      <Image src={image1} />
                      <CardContainer2>
                        <DetailsCon>
                          <Title>Security best practices and compliance standards</Title>
                        </DetailsCon>
                        <RedText>(e.g., GDPR, HIPAA)</RedText>
                        <RedText>Ethical hacking and penetration testing</RedText>
                      </CardContainer2>
                    </ListOne>
                    <ListOne>
                      <Image src={image2} />
                      <CardContainer2>
                        <DetailsCon>
                          <Title>Network security</Title>
                        </DetailsCon>
                        <RedText> (e.g., firewalls, VPNs, intrusion detection systems) </RedText>
                      </CardContainer2>
                    </ListOne>
                    <ListOne>
                      <Image33 src={image3} />
                      <CardContainer2>
                        <DetailsCon>
                          <Title>Data visualization tools and techniques</Title>
                        </DetailsCon>
                        <ButtonCon> Learn More </ButtonCon>
                      </CardContainer2>
                    </ListOne>
                    <ListOne>
                      <ImageA src={image4} />
                      <CardContainer>
                        <DetailsCon>
                          <Title>Security best practices and compliance standards</Title>
                        </DetailsCon>
                        <RedText> Deep learning frameworks </RedText>
                        <RedText> (e.g., TensorFlow, PyTorch) </RedText> 
                      </CardContainer>
                    </ListOne>
                    <ListOne>
                      <ImageA src={image5} />
                      <CardContainer>
                        <DetailsCon>
                          <Title>Security best practices and compliance standards</Title>
                        </DetailsCon>
                        <RedText> Big data platforms  </RedText>
                        <RedText> (e.g., Hadoop, Spark) </RedText> 
                      </CardContainer>
                    </ListOne>
                    <ListOne>
                      <ImageB src={image6} />
                      <CardContainer1>
                        <DetailsCon>
                          <Title>Security best practices and compliance standards</Title>
                        </DetailsCon>

                        <RedText> (e.g., GDPR, HIPAA) </RedText>
                      </CardContainer1>
                    </ListOne>
                </ListItems>
            </TechnicalArticalsMain>
          </FirstSection>
          <div>
            <HeadingCon>
            <Small1 src={small} alt="not-found" />
            <ListHeading>Daily Videos</ListHeading>
            </HeadingCon>
            <TechnicalArticalsMain>
              <DeepLearnFrame>
                 <ImageContainer>
                 <StyledPlayer controls={true} url="https://youtu.be/6M5VXKLf4D4?si=Tx6ZZxa8IrRtOTxW" />
                 <DeepHeading>Deep learning frameworks</DeepHeading>
                 </ImageContainer>
                 <Button>Watch More</Button>
              </DeepLearnFrame>
              <ListItems>
                    <ListOne>
                      <Image src={image1} />
                      <CardContainer2>
                        <DetailsCon>
                          <Title>Security best practices and compliance standards</Title>
                        </DetailsCon>
                        <RedText>(e.g., GDPR, HIPAA)</RedText>
                        <RedText>Ethical hacking and penetration testing</RedText>
                      </CardContainer2>
                    </ListOne>
                    <ListOne>
                      <Image src={image2} />
                      <CardContainer2>
                        <DetailsCon>
                          <Title>Network security</Title>
                        </DetailsCon>
                        <RedText> (e.g., firewalls, VPNs, intrusion detection systems) </RedText>
                      </CardContainer2>
                    </ListOne>
                    <ListOne>
                      <Image33 src={image3} />
                      <CardContainer2>
                        <DetailsCon>
                          <Title>Data visualization tools and techniques</Title>
                        </DetailsCon>
                        <ButtonCon> Learn More </ButtonCon>
                      </CardContainer2>
                    </ListOne>
                    <ListOne>
                      <ImageA src={image4} />
                      <CardContainer>
                        <DetailsCon>
                          <Title>Security best practices and compliance standards</Title>
                        </DetailsCon>
                        <RedText> Deep learning frameworks </RedText>
                        <RedText> (e.g., TensorFlow, PyTorch) </RedText> 
                      </CardContainer>
                    </ListOne>
                    <ListOne>
                      <ImageA src={image5} />
                      <CardContainer>
                        <DetailsCon>
                          <Title>Security best practices and compliance standards</Title>
                        </DetailsCon>
                        <RedText> Big data platforms  </RedText>
                        <RedText> (e.g., Hadoop, Spark) </RedText> 
                      </CardContainer>
                    </ListOne>
                    <ListOne>
                      <ImageB src={image6} />
                      <CardContainer1>
                        <DetailsCon>
                          <Title>Security best practices and compliance standards</Title>
                        </DetailsCon>

                        <RedText> (e.g., GDPR, HIPAA) </RedText>
                      </CardContainer1>
                    </ListOne>
                </ListItems>
            </TechnicalArticalsMain>
          </div>
        </ContentContainer>
      </Container>
      <FooterSection />
    </>
  );
};

export default VideoTutorials;
