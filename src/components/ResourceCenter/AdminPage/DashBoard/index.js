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
import ApplicantsData from "../ApplicantsData";
import response from "./Images/response.svg";
import contactus from "./Images/contactus.svg";
import createuser from "./Images/createuser.svg";
import userAuthorization from "./Images/userauthorization.svg";
import applicants from "./Images/applicants.svg";

import activeArticles from "./Images/activearticles.svg";
import activeBlog from "./Images/activeblog.svg";
import activeCareer from "./Images/activecareer.svg";
import activeReport from "./Images/activereport.svg";
import activeEvent from "./Images/activeevent.svg";
import activeResponse from "./Images/activeresponse.svg";
import activeUser from "./Images/activeuser.svg";
import activeCreateUser from "./Images/activecreateuser.svg";
import activeContactUs from "./Images/activecontact.svg";
import activeApplicants from "./Images/activeapplicants.svg";
import activeProject from "./Images/activeproject.svg";
import search from "./Images/search.svg"

import ResponseData from "../ResponseRecived";


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
  ActiveIcon,
} from "./styledComponents";
import CreateUser from "../CreateUser";

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
  const [showCreateUser, setShowCreateUser] = useState(false);
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
  const [showApplicants, setShowApplicants] = useState(false);
  const [showResponse,setShowResponse] = useState(false)
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
    setShowCreateUser(false);
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
    setShowResponse(false);
    setActiveTab("articles");
    setShowApplicants(false);
  };

  const toggleEvents = () => {
    setShowResponse(false);
    setShowEvents(true);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleProjects = () => {
    setShowResponse(false);
    setShowArticles(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleReports = () => {
    setShowResponse(false);
    setShowArticles(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleBlog = () => {
    setShowResponse(false);
    setShowArticles(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleCareerOpportunities = () => {
    setShowResponse(false);
    setShowArticles(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleCreateArticle = () => {
    setShowResponse(false);
    setShowArticles(false);
    setShowCreateArticle(true);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };
  const toggleCreateProject = () => {
    setShowResponse(false);
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleCreateReport = () => {
    setShowResponse(false);
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleCreateBlogs = () => {
    setShowResponse(false);
    setShowCreateBlogs(true);
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleCreateCareer = () => {
    setShowResponse(false);
    setShowCreateCareerOpportunities(true);
    setShowArticles(false);
    setShowCreateArticle(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleCreateEvent = () => {
    setShowResponse(false);
    setShowCreateEvent(true);
    setShowCreateCareerOpportunities(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleContactUs = () => {
    setShowResponse(false);
    setShowContactUs(true);
    setShowCreateEvent(false);
    setShowCreateCareerOpportunities(false);
    setShowCreateUser(false);
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
    setShowApplicants(false);
  };

  const toggleApplicants = () => {
    setShowApplicants(true);
    setShowResponse(false);
    setShowContactUs(false);
    setShowCreateEvent(false);
    setShowCreateCareerOpportunities(false);
    setShowCreateUser(false);
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
    setActiveTab("Applicants");
  };


  const toggleCreateUser = () => {
    setShowContactUs(false);
    setShowCreateEvent(false);
    setShowCreateCareerOpportunities(false);
    setShowCreateUser(true);
    setShowArticles(false);
    setShowCreateArticle(false);
    setActiveTab("Create User");
    setShowApplicants(false);
  };


  const toggleResponse = () => {
    setShowResponse(true);
    setShowContactUs(false);
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

    setShowApplicants(false);

    setActiveTab("Responses Received");
  }

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

              ) : showCreateUser || showCreateUser ? (
                <CreateCon onClick={toggleCreateUser}>
                  <AddImg src={add} alt="addButton" />
                  <CreateTitle>Create User</CreateTitle>
                </CreateCon>
              )

               : showContactUs? (
                <CreateCon >
                  <AddImg src={search} alt="search" />
                  <CreateTitle>Search</CreateTitle>
                </CreateCon>): null}

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
                {activeTab === "articles" ? (
                  <>
                    <Icons src={activeArticles} alt="icon" />
                    <ActiveTab>Articles</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={vector} alt="icon" />
                    <IconName>Articles</IconName>
                  </>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleBlog}>
                {activeTab === "Blogs" ? (
                  <>
                    <Icons src={activeBlog} alt="icon" />
                    <ActiveTab>Blogs</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={blogicon} alt="icon" />
                    <IconName>Blogs</IconName>
                  </>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleCareerOpportunities}>
                {activeTab === "Career Opportunities" ? (
                  <>
                    <Icons src={activeCareer} alt="icon" />
                    <ActiveTab>Career Opportunities</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={careericon} alt="icon" />
                    <IconName>Career Opportunities</IconName>
                  </>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleReports}>
                {activeTab === "Reports" ? (
                  <>
                    <Icons src={activeReport} alt="icon" />
                    <ActiveTab>Reports</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={repots} alt="icon" />
                    <IconName>Reports</IconName>
                  </>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleProjects}>
                {activeTab === "Projects" ? (
                  <>
                    <Icons src={activeProject} alt="icon" />
                    <ActiveTab>Projects</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={Projects} alt="icon" />
                    <IconName>Projects</IconName>
                  </>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleEvents}>
                {activeTab === "Events and Workshops" ? (
                  <>
                    <Icons src={activeEvent} alt="icon" />
                    <ActiveTab>Events and Workshops</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={eventicon} alt="icon" />
                    <IconName>Events and Workshops</IconName>
                  </>
                )}
              </ArticalCon>

              <ArticalCon onClick={toggleResponse}>
                

                {activeTab === "Responses Received" ? (
                  <>
                    <Icons src={activeResponse} alt="icon" />
                    <ActiveTab>Responses Received</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={response} alt="icon" />
                    <IconName>Responses Received</IconName>
                  </>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleContactUs}>
                {activeTab === "Contact Us" ? (
                  <>
                    <Icons src={activeContactUs} alt="icon" />
                    <ActiveTab>Contact us</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={contactus} alt="icon" />
                    <IconName>Contact us</IconName>
                  </>
                )}
              </ArticalCon>
              <ArticalCon onClick={toggleApplicants}>
                {activeTab === "Applicants" ? (
                  <>
                    <Icons src={activeApplicants} alt="icon" />
                    <ActiveTab>Applicants</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={applicants} alt="icon" />
                    <IconName>Applicants</IconName>
                  </>
                )}
              </ArticalCon>

              <ArticalCon onClick={toggleCreateUser}>
                
                {activeTab === "Create User" ? (
                  <>
                    <Icons src={activeCreateUser} alt="icon" />
                    <ActiveTab>Create User</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={createuser} alt="icon" />
                    <IconName>Create User</IconName>
                  </>
                )}
              </ArticalCon>
              <ArticalCon>
                {activeTab === "User Authorization" ? (
                  <>
                    <Icons src={activeUser} alt="icon" />
                    <ActiveTab>User Authorization</ActiveTab>
                  </>
                ) : (
                  <>
                    <Icons src={userAuthorization} alt="icon" />
                    <IconName>User Authorization</IconName>
                  </>
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
            {showApplicants && <ApplicantsData />}
            {showCreateUser && <CreateUser />}

            {showResponse && <ResponseData/>}

          </Containerthree>
        </ContainerOne>
      </Container>
      <FooterSection />
    </>
  );
};

export default DashBoard;