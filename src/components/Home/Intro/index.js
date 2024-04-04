import Introimage from "../assets/Introimg.svg";
import play from "../assets/play-button.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

import {
  IntroCircles,
  IntroWhiteCircle,
  IntroBlueCircle,
  IntroRightText,
  IntroExplorePart,
  IntroExplorePart2,
  IntroAchievements,
  IntroOrangeText,
  IntroBlackText,
  IntroRightImg,
  Home,
  Homehd1,
  HomeLefthd1,
  HomeLeftRight,
  HomeLeft,
  Homep1,
  HomeButtonVideo,
  HomeProposalText,
  HomeProposalTextRight,
  HomePlayVideo,
  HomePlayButton,
  HomeVideoText,
  CirclesText,
  HomeRight,
  HomeExplorePartLeft,
  HomeAchievements,
  HomeOrangeText,
  HomeBlackText,
  MobileIntro,
  Homep2,
} from "./styledComponents";

/*
 TransparentImg,
   TransparentImgs,
   TransparentImgss,
   <TransparentImg src={bgTransparent} alt="not found" />
      <TransparentImgs src={bgTransparents} alt="not found" />
      <TransparentImgss src={midTransparent} alt="not found" />
      import bgTransparent from "../assets/bgtransparent1.svg";
import bgTransparents from "../assets/bgTransparent2.svg";
import midTransparent from "../assets/bgTransparent3.svg";
*/
const HomeSection = () => {
  const [projects] = useState("200+k");
  const [active] = useState("81+k");
  const [customer] = useState("24/7");

  return (
    <>
      <Home>
        <Homehd1>
          Empowering The Next Generation of Software And Web-App Development
        </Homehd1>
        <HomeLeftRight>
          <HomeLeft>
            <HomeLefthd1>
              Empowering The Next Generation of Software And Web-App Development
            </HomeLefthd1>
            <Homep1>
              Sepnoty, is a Developing agency Specialized in Delivering World
              class Solutions For Web and Mobile Through Mature And Development
              Technology.
            </Homep1>

            <HomeButtonVideo>
              <Link to="/getproposal">
                <HomeProposalText>Get a Proposal</HomeProposalText>
              </Link>

              <HomePlayVideo>
                <HomePlayButton src={play} alt="not found" />
                <HomeVideoText>Watch Our Intro</HomeVideoText>
              </HomePlayVideo>
            </HomeButtonVideo>
            <CirclesText>
              <IntroCircles>
                <IntroWhiteCircle />
                <IntroWhiteCircle />
                <IntroWhiteCircle />
                <IntroBlueCircle />
                <IntroBlueCircle />
              </IntroCircles>

              <IntroRightText>
                1.8k People bought our services today.
              </IntroRightText>
            </CirclesText>
            <HomeExplorePartLeft>
              <HomeAchievements>
                <HomeOrangeText>{projects}</HomeOrangeText>

                <HomeBlackText>Projects Done</HomeBlackText>
              </HomeAchievements>
              <HomeAchievements>
                <HomeOrangeText>{active}</HomeOrangeText>

                <HomeBlackText>Active Customers</HomeBlackText>
              </HomeAchievements>
              <HomeAchievements>
                <HomeOrangeText>{customer}</HomeOrangeText>

                <HomeBlackText>Customers Support</HomeBlackText>
              </HomeAchievements>
            </HomeExplorePartLeft>
          </HomeLeft>
          <HomeRight>
            <IntroRightImg src={Introimage} alt="not found" />
            <Link to="/getproposal">
              <HomeProposalTextRight>Get a Proposal</HomeProposalTextRight>
            </Link>
            <MobileIntro>
              <HomePlayVideo>
                <HomePlayButton src={play} alt="not found" />
                <HomeVideoText>Watch Our Intro</HomeVideoText>
              </HomePlayVideo>
              <Homep2>
                Sepnoty, is a Developing agency Specialized in Delivering World
                class Solutions For Web and Mobile Through Mature And
                Development Technology.
              </Homep2>
            </MobileIntro>
            <IntroExplorePart>
              <IntroAchievements>
                <IntroOrangeText>{projects}</IntroOrangeText>

                <IntroBlackText>Projects Done</IntroBlackText>
              </IntroAchievements>
              <IntroAchievements>
                <IntroOrangeText>{active}</IntroOrangeText>

                <IntroBlackText>Active Customers</IntroBlackText>
              </IntroAchievements>
              <IntroAchievements>
                <IntroOrangeText>{customer}</IntroOrangeText>

                <IntroBlackText>Customers Support</IntroBlackText>
              </IntroAchievements>
            </IntroExplorePart>

            <IntroExplorePart2>
              <IntroAchievements>
                <IntroOrangeText>{projects}</IntroOrangeText>

                <IntroBlackText>Projects Done</IntroBlackText>
              </IntroAchievements>
              <IntroAchievements>
                <IntroOrangeText>{active}</IntroOrangeText>

                <IntroBlackText>Active Customers</IntroBlackText>
              </IntroAchievements>
              <IntroAchievements>
                <IntroOrangeText>{customer}</IntroOrangeText>

                <IntroBlackText>Customers Support</IntroBlackText>
              </IntroAchievements>
            </IntroExplorePart2>
          </HomeRight>
        </HomeLeftRight>
      </Home>
    </>
  );
};

export default HomeSection;
