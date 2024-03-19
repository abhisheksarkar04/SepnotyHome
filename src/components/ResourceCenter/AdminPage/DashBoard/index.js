import React, { useState } from "react";
import sepnoty from "./Images/sepnoty.png";
import add from "./Images/add.svg";
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
import Report from "../ReportFolder/index";
import CreateReport from "../NewReport/index";
import CreateBlog from "../NewBlog";
import FooterSection from "../../../Footer/FooterSection";
import AdminCareerOppurtunities from "../../AdminCareerOppurtunities";
import Myblog from "../../Myblog";
import CreateArticles from "../CreateArticles";
import CreateJob from "../NewJob";
import CreateProject from "../CreateProject";
import CreateEvent from "../CreateNewEvent";

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
  CreateCon,
  CreateTitle,
} from "./styledComponents";

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
  const [showReports, setShowReports] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showCareerOpportunities, setShowCareerOpportunities] = useState(false);
  const [showCreateArticle, setShowCreateArticle] = useState(false);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showCreateReport, setShowCreateReport] = useState(false);
  const [showCreateBlogs, setShowCreateBlogs] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showCreateCareerOpportunities, setShowCreateCareerOpportunities] =
    useState(false);

  const toggleArticles = () => {
    setShowArticles(true);
    setShowCreateArticle(false);
    setShowProjects(false);
    setShowCreateProject(false);
    setShowReports(false);
    setShowCreateReport(false);
    setShowBlog(false);
    setShowCareerOpportunities(false);
    setShowCreateBlogs(false);
    setShowCreateCareerOpportunities(false);
    setShowEvents(false);
    setShowCreateEvent(false);
  };

  const toggleEvents = () => {
    setShowEvents(true);
    setShowArticles(false);
    setShowProjects(false);
    setShowReports(false);
    setShowCareerOpportunities(false);
    setShowCreateBlogs(false);
    setShowCareerOpportunities(false);
    setShowBlog(false);
    setShowCreateBlogs(false);
    setShowCreateCareerOpportunities(false);
    setShowCreateReport(false);
    setShowCreateProject(false);
    setShowCreateEvent(false);
  };

  const toggleProjects = () => {
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowProjects(true);
    setShowCreateProject(false);
    setShowReports(false);
    setShowCreateReport(false);
    setShowBlog(false);
    setShowEvents(false);
    setShowCareerOpportunities(false);
    setShowCreateBlogs(false);
    setShowCreateCareerOpportunities(false);
    setShowCreateEvent(false);
  };

  const toggleReports = () => {
    setShowArticles(false);
    setShowEvents(false);
    setShowProjects(false);
    setShowReports(true);
    setShowCreateArticle(false);
    setShowCareerOpportunities(false);
    setShowBlog(false);
    setShowCreateBlogs(false);
    setShowCreateCareerOpportunities(false);
    setShowCreateReport(false);
    setShowCreateProject(false);
    setShowCreateEvent(false);
  };

  const toggleBlog = () => {
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowProjects(false);
    setShowCreateProject(false);
    setShowReports(false);
    setShowCreateReport(false);
    setShowBlog(true);
    setShowCareerOpportunities(false);
    setShowCreateBlogs(false);
    setShowCreateCareerOpportunities(false);
    setShowEvents(false);
    setShowCreateEvent(false);
  };

  const toggleCareerOpportunities = () => {
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowProjects(false);
    setShowCreateProject(false);
    setShowReports(false);
    setShowCreateReport(false);
    setShowBlog(false);
    setShowCareerOpportunities(true);
    setShowCreateBlogs(false);
    setShowCreateCareerOpportunities(false);
    setShowEvents(false);
    setShowCreateEvent(false);
  };

  const toggleCreateArticle = () => {
    setShowArticles(false);
    setShowCreateArticle(true);
    setShowProjects(false);
    setShowCreateProject(false);
    setShowReports(false);
    setShowCreateReport(false);
    setShowBlog(false);
    setShowCareerOpportunities(false);
    setShowCreateBlogs(false);
    setShowCreateCareerOpportunities(false);
    setShowEvents(false);
    setShowCreateEvent(false);
  };
  const toggleCreateProject = () => {
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowProjects(false);
    setShowCreateProject(true);
    setShowReports(false);
    setShowCreateReport(false);
    setShowBlog(false);
    setShowCareerOpportunities(false);
    setShowCreateBlogs(false);
    setShowCreateCareerOpportunities(false);
    setShowEvents(false);
    setShowCreateEvent(false);
  };

  const toggleCreateReport = () => {
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowProjects(false);
    setShowCreateProject(false);
    setShowReports(false);
    setShowCreateReport(true);
    setShowBlog(false);
    setShowCareerOpportunities(false);
    setShowCreateBlogs(false);
    setShowCreateCareerOpportunities(false);
    setShowEvents(false);
    setShowCreateEvent(false);
  };

  const toggleCreateBlogs = () => {
    setShowCreateBlogs(true);
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowProjects(false);
    setShowCreateProject(false);
    setShowReports(false);
    setShowCreateReport(false);
    setShowBlog(false);
    setShowCareerOpportunities(false);
    setShowCreateCareerOpportunities(false);
    setShowEvents(false);
    setShowCreateEvent(false);
  };

  const toggleCreateCareer = () => {
    setShowCreateCareerOpportunities(true);
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowProjects(false);
    setShowCreateProject(false);
    setShowReports(false);
    setShowCreateReport(false);
    setShowBlog(false);
    setShowCareerOpportunities(false);
    setShowCreateBlogs(false);
    setShowEvents(false);
    setShowCreateEvent(false);
  };

  const toggleCreateEvent = () => {
    setShowCreateEvent(true);
    setShowCreateCareerOpportunities(false);
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowProjects(false);
    setShowCreateProject(false);
    setShowReports(false);
    setShowCreateReport(false);
    setShowBlog(false);
    setShowCareerOpportunities(false);
    setShowCreateBlogs(false);
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

              {showArticles || showCreateArticle ? (
                <CreateCon onClick={toggleCreateArticle}>
                  <AddImg src={add} alt="addButton" />
                  <CreateTitle>Create Articles</CreateTitle>
                </CreateCon>
              ) : showBlog || showCreateBlogs ? (
                <CreateCon onClick={toggleCreateBlogs}>
                  <AddImg src={add} alt="addButton" />
                  <CreateTitle>Create Blog</CreateTitle>
                </CreateCon>
              ) : showCareerOpportunities || showCreateCareerOpportunities ? (
                <CreateCon onClick={toggleCreateCareer}>
                  <AddImg src={add} alt="addButton" />
                  <CreateTitle>Create Career</CreateTitle>
                </CreateCon>
              ) : showProjects || showCreateProject ? (
                <CreateCon onClick={toggleCreateProject}>
                  <AddImg src={add} alt="addButton" />
                  <CreateTitle>Create Project</CreateTitle>
                </CreateCon>
              ) : showReports || showCreateReport ? (
                <CreateCon onClick={toggleCreateReport}>
                  <AddImg src={add} alt="addButton" />
                  <CreateTitle>Create Report</CreateTitle>
                </CreateCon>
              ) : showEvents || showCreateEvent ? (
                <CreateCon onClick={toggleCreateEvent}>
                  <AddImg src={add} alt="addButton" />
                  <CreateTitle>Create Event</CreateTitle>
                </CreateCon>
              ) : null}
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
                <IconName>My Articles</IconName>
              </ArticalCon>
              <ArticalCon onClick={toggleBlog}>
                <Icons src={blogicon} alt="icon" />

                <IconName>Blogs</IconName>
              </ArticalCon>
              <ArticalCon onClick={toggleCareerOpportunities}>
                <Icons src={careericon} alt="icon" />

                <IconName>Career Opportunities</IconName>
              </ArticalCon>
              <ArticalCon onClick={toggleReports}>
                <Icons src={repots} alt="icon" />
                <IconName>Reports</IconName>
              </ArticalCon>
              <ArticalCon onClick={toggleProjects}>
                <Icons src={Projects} alt="icon" />
                <IconName>Projects</IconName>
              </ArticalCon>
              <ArticalCon onClick={toggleEvents}>
                <Icons src={eventicon} alt="icon" />
                <IconName>Events and Worshops</IconName>
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
            {showReports && <Report />}
            {showCareerOpportunities && <AdminCareerOppurtunities />}
            {showBlog && <Myblog />}
            {showCreateArticle && <CreateArticles />}
            {showCreateBlogs && <CreateBlog />}
            {showCreateCareerOpportunities && <CreateJob />}
            {showCreateReport && <CreateReport />}
            {showCreateProject && <CreateProject />}
            {showCreateEvent && <CreateEvent />}
          </Containerthree>
        </ContainerOne>
      </Container>
      <FooterSection />
    </>
  );
};

export default DashBoard;
