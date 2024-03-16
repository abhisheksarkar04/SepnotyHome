import React from "react";
import portfolio from "./images/portfolio.png";
import design from "./images/design.png";
import bg from "./images/bg.png";
import deleteIcon from "./images/Vector (2).png";
import editIcon from "./images/Group.png";
/* import usd from "../images/interface.png";
import wearable from "../images/wearable.png";
import CaseStudy from "../CaseStudies"; */
/* import ContactForm from "../../ContactUs/ContactForm"; */
import {
  Container,
  Desc,
  Image,
  PortfolioHeading,
  PatternCon,
  SmallPattern,
  ListHeading,
  ContentDesc,
  SolutionDesc,
  ImageContainer,
  DesignImage,
  Bgimage,
  TechCon,
  Techtitle,
  SubCon,
  ContentContainer,
  Contents,
  EditTool,
  EditCon,
} from "./styled";

// import main from "../../assets/images/Capture.PNG"
const Project = () => {
  return (
    <>
      <Container>
        <EditCon>
          <EditTool src={editIcon} alt="edit" />
          <EditTool src={deleteIcon} alt="delete" />
        </EditCon>
        <Image src={portfolio} />
        <ContentContainer>
          <div>
            <PortfolioHeading>Change by Design</PortfolioHeading>
            <Desc>
              "Change by Design UI Portfolio" could be interpreted as a
              portfolio showcasing user interface designs that emphasize the
              concept of change driven by design principles.
            </Desc>
          </div>
          <SubCon>
            <TechCon>
              <Techtitle>Industry</Techtitle>
              <SolutionDesc>Telecommunications, Software products</SolutionDesc>
            </TechCon>
            <TechCon>
              <Techtitle>Technologies</Techtitle>
              <SolutionDesc>Android, Mobile, Windows Phone</SolutionDesc>
            </TechCon>
          </SubCon>
          <Contents>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Customer</ListHeading>
              </PatternCon>

              <ContentDesc>
                The customer, an international company, showcasing user
                interface designs that emphasize the concept of change driven by
                design principles
              </ContentDesc>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Challenge</ListHeading>
              </PatternCon>
              <ContentDesc>
                This approach requires a deep understanding of user needs,
                market dynamics, and organizational goals. Designers must
                navigate through various challenges, including resistance to
                change, limited resources, conflicting priorities, and evolving
                technologies.
              </ContentDesc>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Solution</ListHeading>
              </PatternCon>

              <ContentDesc>
                Prioritize understanding and addressing the needs and
                preferences of the end-users through comprehensive research,
                empathy-building, and user testing. This ensures that design
                decisions are grounded in user insights and contribute to
                meaningful improvements in user experiences.Embrace an iterative
                design approach, where concepts are quickly prototyped, tested,
                and refined based on user feedback. This allows for continuous
                improvement and ensures that design solutions are responsive to
                evolving user needs and project requirements.
              </ContentDesc>
              {/* <img src={main} width={600} alt="" /> */}
              <ImageContainer>
                <Bgimage src={bg} alt="bg" />
                <DesignImage src={design} alt="design" />
              </ImageContainer>
              <ContentDesc>
                Implement effective change management strategies to navigate
                organizational resistance and facilitate the adoption of
                design-driven initiatives. This may involve transparent
                communication, stakeholder engagement, training, and
                incentivizing behavior change to support the successful
                implementation of design solutions.
              </ContentDesc>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Results</ListHeading>
              </PatternCon>

              <ContentDesc>
                By integrating these solutions into the design process,
                organizations can leverage the power of "Change by Design" to
                drive meaningful transformations that positively impact user
                experiences, business outcomes, and organizational success.
              </ContentDesc>
            </div>

            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Technologies and Tools</ListHeading>
              </PatternCon>

              <ContentDesc>
                Android: Android SDK, Android Studio, Eclipse, ADT Plugin, JAR
                Signer, SQLite, Volley, Gradle, logcat, UiAutomator <br />
                Windows Phone 7: Windows Phone Toolkit, NLog
                <br />
                Desktop: C++, Python ,WebRTC, Visual Studio
              </ContentDesc>
            </div>
          </Contents>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Project;
