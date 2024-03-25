import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import logout from "./Images/logout.svg";
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
import ContactUsData from "../ContactUsData";
import response from "./Images/response.svg";
import contactus from "./Images/contactus.svg";
import createuser from "./Images/createuser.svg";
import userAuthorization from "./Images/userauthorization.svg";
import applicants from "./Images/applicants.svg";

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
  ActiveTab,
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
  const [showContactUs, setShowContactUs] = useState(false);
  const [activeTab, setActiveTab] = useState("articles");
  const history = useHistory();

  const handleLogout = () => {
    // Perform any necessary cleanup or logout logic
    // Redirect the user to the login page
    history.push("/resource-center/admin-login"); // Replace "/login" with the path to your login page
  };

  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    return `${year}-${month}`;
  };
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

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
    setShowContactUs(false);
    setActiveTab("articles");
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
    setShowCreateArticle(false);
    setShowContactUs(false);
    setActiveTab("Events and Workshops");
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
    setShowContactUs(false);
    setActiveTab("Projects");
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
    setShowContactUs(false);
    setActiveTab("Reports");
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
    setShowContactUs(false);
    setActiveTab("Blogs");
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
    setShowContactUs(false);
    setActiveTab("Career Opportunities");
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
    setShowContactUs(false);
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
    setShowContactUs(false);
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
    setShowContactUs(false);
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
    setShowContactUs(false);
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
    setShowContactUs(false);
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
    setShowContactUs(false);
  };

  const toggleContactUs = () => {
    setShowContactUs(true);
    setShowCreateEvent(false);
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
    setActiveTab("Contact Us");
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
                  <CreateTitle>Create Event and Workshop</CreateTitle>
                </CreateCon>
              ) : null}
            </ImagesCont>
            <Contactimgcon>
              <Name>Manikumar Pokala</Name>
              <Profile src={profile} alt="profile" />
              <AddImg src={logout} alt="logout" onClick={handleLogout} />
            </Contactimgcon>
          </Containertwo>

          <Containerthree>
            <ColumnDiv>
              <ArticalCon onClick={toggleArticles}>
                <Icons src={vector} alt="icon" />
                {activeTab === "articles" ? (
                  <ActiveTab>Articles</ActiveTab>
                ) : (
                  <IconName>Articles</IconName>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleBlog}>
                <Icons src={blogicon} alt="icon" />
                {activeTab === "Blogs" ? (
                  <ActiveTab>Blogs</ActiveTab>
                ) : (
                  <IconName>Blogs</IconName>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleCareerOpportunities}>
                <Icons src={careericon} alt="icon" />
                {activeTab === "Career Opportunities" ? (
                  <ActiveTab>Career Opportunities</ActiveTab>
                ) : (
                  <IconName>Career Opportunities</IconName>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleReports}>
                <Icons src={repots} alt="icon" />
                {activeTab === "Reports" ? (
                  <ActiveTab>Reports</ActiveTab>
                ) : (
                  <IconName>Reports</IconName>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleProjects}>
                <Icons src={Projects} alt="icon" />
                {activeTab === "Projects" ? (
                  <ActiveTab>Projects</ActiveTab>
                ) : (
                  <IconName>Projects</IconName>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleEvents}>
                <Icons src={eventicon} alt="icon" />
                {activeTab === "Events and Workshops" ? (
                  <ActiveTab>Events and Workshops</ActiveTab>
                ) : (
                  <IconName>Events and Workshops</IconName>
                )}
              </ArticalCon>
              <ArticalCon>
                <Icons src={response} alt="icon" />
                {activeTab === "Responses Received" ? (
                  <ActiveTab>Responses Received</ActiveTab>
                ) : (
                  <IconName>Responses Received</IconName>
                )}
              </ArticalCon>

              <ArticalCon onClick={toggleContactUs}>
                <Icons src={contactus} alt="icon" />
                {activeTab === "Contact Us" ? (
                  <ActiveTab>Contact us</ActiveTab>
                ) : (
                  <IconName>Contact us</IconName>
                )}
              </ArticalCon>
              <ArticalCon>
                <Icons src={applicants} alt="icon" />
                {activeTab === "Applicants" ? (
                  <ActiveTab>Applicants</ActiveTab>
                ) : (
                  <IconName>Applicants</IconName>
                )}
              </ArticalCon>
              <ArticalCon>
                <Icons src={createuser} alt="icon" />
                {activeTab === "Create User" ? (
                  <ActiveTab>Create User</ActiveTab>
                ) : (
                  <IconName>Create User</IconName>
                )}
              </ArticalCon>
              <ArticalCon>
                <Icons src={userAuthorization} alt="icon" />
                {activeTab === "User Authorization" ? (
                  <ActiveTab>User Authorization</ActiveTab>
                ) : (
                  <IconName>User Authorization</IconName>
                )}
              </ArticalCon>
            </ColumnDiv>

            {showArticles && (
              <Containerfour>
                <DateInput
                  type="month"
                  id="monthInput"
                  name="monthInput"
                  value={currentMonth}
                  onChange={(e) => setCurrentMonth(e.target.value)}
                />
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
            {showContactUs && <ContactUsData />}
          </Containerthree>
        </ContainerOne>
      </Container>
      <FooterSection />
    </>
  );
};

export default DashBoard;
