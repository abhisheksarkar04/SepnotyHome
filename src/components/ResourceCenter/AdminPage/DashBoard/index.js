import React, { useState } from "react";
import sepnoty from "./Images/sepnoty.png";
import add from "./Images/add.png";
import profile from "./Images/profile.png";

import vector from "./Images/Vector.png";
import repots from "./Images/Rectangle 6959.png";
import Projects from "./Images/Rectangle 6960.png";
import careericon from "./Images/careericon.png";
import blogicon from "./Images/blogicon.png";
import eventicon from "./Images/eventicon.png";

import facebbok from "./Images/fbimg.png";
import disney from "./Images/disneyimg.png";
import airimg from "./Images/airimg.png";
import Aiimg from "./Images/AiImg.png";
import views from "./Images/viewicon.png";
import EventsAndWorkshop from "../Events/Events&Workshop";
import { Link } from "react-router-dom";

import ArticlesFolder from "../DashBoard/ArticleFolder";
import Project from "../Projects";

import {
  Container,
  Resources,
  ContainerOne,
  Containertwo,
  ImagesCont,
  Image,
  AddImg,
  Contactimgcon,
  Name,
  Profile,
  Containerthree,
  ColumnDiv,
  ArticalCon,
  Icons,
  IconName,
  Containerfour,
  DateInput,
  SpanHead,
} from "./styledComponents";

import FooterSection from "../../../Footer/FooterSection";

const Lists = [
  {
    id: 1,
    imageUrl: disney,
    content:
      "The Disney Principle of Motion Design for Interface Animations.....",
    icon: views,
    views: "6000 views",
  },

  {
    id: 2,
    imageUrl: airimg,
    content: "How Airbnb's landing page design influences user behavior.....",
    icon: views,
    views: "6000 views",
  },

  {
    id: 3,
    imageUrl: Aiimg,
    content: "It’s time for tech to ask “Should We” Instead of “Could We”.....",
    icon: views,
    views: "6000 views",
  },

  {
    id: 4,
    imageUrl: facebbok,
    content: "Facebook creates “Radioactive Images,” and Other AI....",
    icon: views,
    views: "6000 views",
  },
];

const DashBoard = () => {
  const [showArticles, setShowArticles] = useState(true);
  const [showEvents, setShowEvents] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
 

  const toggleArticles = () => {
    setShowArticles(true);
    setShowEvents(false);
    setShowProjects(false);
  };

  const toggleEvents = () => {
    setShowEvents(true);
    setShowArticles(false);
    setShowProjects(false);
  };

  const toggleProjects = () => {
    setShowProjects(true);
    setShowArticles(false);
    setShowEvents(false);
  };

  return (
    <>
      <Container>
        <Resources>
          Resources &gt; Admin login &gt; <SpanHead>Dashboard Page</SpanHead>
        </Resources>
        <ContainerOne>
          <Containertwo>
            <ImagesCont>
              <Image src={sepnoty} alt="sepnoty" />
              <Link to="/resource-center/admin-login/dash-board/create-post">
                <AddImg src={add} alt="addButton" />
              </Link>
            </ImagesCont>
            <Contactimgcon>
              <Name>Manikumar Pokala</Name>
              <Profile src={profile} alt="profile" />
            </Contactimgcon>
          </Containertwo>

          <Containerthree>
            <ColumnDiv>
              <ArticalCon onClick={toggleArticles}>
                <Icons src={vector} alt="icon" />
                <IconName>Articles</IconName>
              </ArticalCon>
              <ArticalCon>
                <Icons src={blogicon} alt="icon" />
                <IconName>Blogs</IconName>
              </ArticalCon>
              <ArticalCon>
                <Icons src={careericon} alt="icon" />
                <IconName>Career Opportunities</IconName>
              </ArticalCon>
              <ArticalCon>
                <Icons src={repots} alt="icon" />
                <IconName>Reports</IconName>
              </ArticalCon>
              <ArticalCon onClick={toggleProjects}>
                <Icons src={Projects} alt="icon" />
                <IconName>Projects</IconName>
              </ArticalCon>
              <ArticalCon onClick={toggleEvents}>
                <Icons src={eventicon} alt="icon" />
                <IconName>Events and Workshops</IconName>
              </ArticalCon>
            </ColumnDiv>

            {showArticles && (
              <Containerfour>
                <DateInput type="month" id="monthInput" name="monthInput" />
                {Lists.map((each) => (
                  <ArticlesFolder key={each.id} details={each} />
                ))}
              </Containerfour>
            )}
            {showProjects && <Project />}
            {showEvents && <EventsAndWorkshop />}
          </Containerthree>
        </ContainerOne>
      </Container>
      <FooterSection />
    </>
  );
};

export default DashBoard;
