import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./Navbar.css";

// import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
/* import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im"; */
import logo from "../Navbar/assets/logo.svg";
import menu from "../Navbar/assets/menu.svg";
import downarrow from "../Navbar/assets/downarrow.svg";
import down from "../Navbar/assets/down.svg";
import up from "../Navbar/assets/up.svg";
import behance from "./assets/behance.svg";
import facebook from "../Navbar/assets/facebook.svg";
import figma from "../Navbar/assets/figma.svg";
import instagram from "../Navbar/assets/instagram.svg";
import twitter from "../Navbar/assets/TwitterX.svg";

import {
  LogoImg,
  AboutCon,
  DropdownContainer,
  ServiceCon,
  BlogCon,
  CareerCon,
  ResourceCon,
  DownArrow,
  ContactCon,
  FollowUsSection,
  MobileAboutusList,
  MobileServices,
  OtherSectionItems,
  MobileBlogs,
  MobileCareer,
  MobileResources,
  MobileAboutSec,
  ApproachItems,
  RecognitionItems,
  Joinus,
  Developers,
  Designers,
  Insight,
  MobileContactCon,
  Contacts,
  Phone,
} from "./styledComponents";
import AboutUsSection from "../AboutUsSection/AboutUs";
import ServiceSection from "../ServiceSection";
import BlogSection from "../../pages/BlogSection/";
import CareerOppurtunities from "../CareerOppurtunities";
import ResourceCenterSection from "../ResourceCenterSection";
import Contact from "../ContactUsSection";
// import AboutUs from "../../pages/AboutUs";
// import Services from "../../pages/Services";
import FollowUsElements from "./FollowUsElements";

const followUsElements = [
  {
    id: 1,
    logoSrc: facebook,
    logoName: "Facebook",
  },
  {
    id: 2,
    logoSrc: twitter,
    logoName: "X",
  },
  {
    id: 3,
    logoSrc: instagram,
    logoName: "Instagram",
  },
  {
    id: 4,
    logoSrc: behance,
    logoName: "Behance",
  },
  {
    id: 5,
    logoSrc: figma,
    logoName: "Figma",
  },
];

const Navbar = () => {
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isCareerOpen, setCareerOpen] = useState(false);
  const [isBlogOpen, setBlogOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);
  const [isButtonOpen, setButtonOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isMobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isOtherItemsOpen, setOtherItemsOpen] = useState(true);
  const [isMobileBlogsOpen, setMobileBlogsOpen] = useState(false);
  const [isMobileCareerOpen, setMobileCareerOpen] = useState(false);
  const [isMobileResourceOpen, setMobileResourceOpen] = useState(false);
  const [isMobileAboutItemOpen, setMobileAboutItemOpen] = useState(false);
  const [isApproachOpen, setApproachOpen] = useState(false);
  const [isRecognitionOpen, setRecognitionOpen] = useState(false);
  const [isJoinOpen, setJoinOpen] = useState(false);
  const [isDeveloperOpen, setDeveloperOpen] = useState(false);
  const [isDesignerOpen, setDesignerOpen] = useState(false);
  const [isInsightOpen, setInsightOpen] = useState(false);
  const [isMobileContactsOpen, setMobileContactsOpen] = useState(false);

  // const history = useHistory();
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenuOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMobileMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", closeMenuOutside);
    } else {
      document.removeEventListener("click", closeMenuOutside);
    }

    return () => {
      document.removeEventListener("click", closeMenuOutside);
    };
  }, [isMenuOpen]);

  const aboutUsRef = useRef(null);
  const serviceRef = useRef(null);
  const careerRef = useRef(null);
  const blogRef = useRef(null);
  const resourceRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const closeDropdownOutside = (e) => {
      if (
        !aboutUsRef.current.contains(e.target) &&
        !serviceRef.current.contains(e.target) &&
        !careerRef.current.contains(e.target) &&
        !blogRef.current.contains(e.target) &&
        !resourceRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        closeOtherSections();
        closeMobileMenu();
      }
    };

    if (
      isAboutUsOpen ||
      isServiceOpen ||
      isCareerOpen ||
      isBlogOpen ||
      isResourceOpen ||
      isButtonOpen ||
      isMenuOpen
    ) {
      document.addEventListener("click", closeDropdownOutside);
    } else {
      document.removeEventListener("click", closeDropdownOutside);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeDropdownOutside);
    };
  }, [
    isAboutUsOpen,
    isServiceOpen,
    isCareerOpen,
    isBlogOpen,
    isResourceOpen,
    isButtonOpen,
    isMenuOpen,
  ]);

  const toggleMobileContact = () => {
    setMobileContactsOpen(!isMobileContactsOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setMobileAboutUsOpen(false);
    setMobileServicesOpen(false);
    setMobileCareerOpen(false);
    setMobileBlogsOpen(false);
    setMobileResourceOpen(false);
    setOtherItemsOpen(true);
  };

  const toggleMobileAboutUs = () => {
    setMobileAboutUsOpen(!isMobileAboutUsOpen);
    setMobileServicesOpen(false);
    setMobileBlogsOpen(false);
    setMobileCareerOpen(false);
    setMobileResourceOpen(false);
    setMobileAboutItemOpen(!isMobileAboutUsOpen);
    setApproachOpen(false);
    setRecognitionOpen(false);
    setJoinOpen(false);
    if (!isMobileAboutUsOpen) {
      setOtherItemsOpen(false);
    } else {
      setOtherItemsOpen(true);
    }
  };
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };
  const toggleMobileServices = () => {
    setMobileServicesOpen(!isMobileServicesOpen);
    setMobileAboutUsOpen(false);
    setMobileBlogsOpen(false);
    setMobileCareerOpen(false);
    setMobileResourceOpen(false);
  };

  const toggleMobileBlogs = () => {
    setMobileBlogsOpen(!isMobileBlogsOpen);
    setMobileServicesOpen(false);
    setMobileAboutUsOpen(false);
    setMobileCareerOpen(false);
    setMobileResourceOpen(false);
  };

  const toggleMobileCareer = () => {
    setMobileCareerOpen(!isMobileCareerOpen);
    setMobileBlogsOpen(false);
    setMobileServicesOpen(false);
    setMobileAboutUsOpen(false);
    setMobileResourceOpen(false);
  };

  const toggleMobileResouceCenter = () => {
    setMobileResourceOpen(!isMobileResourceOpen);
    setMobileCareerOpen(false);
    setMobileBlogsOpen(false);
    setMobileServicesOpen(false);
    setMobileAboutUsOpen(false);
  };

  const toggleApproach = () => {
    setApproachOpen(!isApproachOpen);
    setMobileAboutItemOpen(false);
    setRecognitionOpen(false);
    setJoinOpen(false);
  };

  const toggleRecognition = () => {
    setRecognitionOpen(!isRecognitionOpen);
    setApproachOpen(false);
    setMobileAboutItemOpen(false);
    setJoinOpen(false);
  };
  const toggleJoin = () => {
    setJoinOpen(!isJoinOpen);
    setRecognitionOpen(false);
    setApproachOpen(false);
    setMobileAboutItemOpen(false);
  };
  const toggleDeveloper = () => {
    setDeveloperOpen(!isDeveloperOpen);
    setDesignerOpen(false);
  };
  const toggleDesigner = () => {
    setDesignerOpen(!isDesignerOpen);
    setDeveloperOpen(false);
  };
  const toggleInsight = () => {
    setInsightOpen(!isInsightOpen);
  };

  const toggleAboutUs = (e) => {
    closeOtherSections();
    setAboutUsOpen(!isAboutUsOpen);
  };

  const toggleService = () => {
    closeOtherSections();
    setServiceOpen(!isServiceOpen);
  };

  const toggleCareer = () => {
    closeOtherSections();
    setCareerOpen(!isCareerOpen);
  };

  const toggleBlog = (e) => {
    closeOtherSections();

    setBlogOpen(!isBlogOpen);
  };

  const toggleResource = () => {
    closeOtherSections();
    setResourceOpen(!isResourceOpen);
  };

  const toggleContact = () => {
    closeOtherSections();
    setButtonOpen(!isButtonOpen);
  };

  const toggleHome = () => {
    closeOtherSections();
  };

  const closeOtherSections = () => {
    setResourceOpen(false);
    setServiceOpen(false);
    setAboutUsOpen(false);
    setCareerOpen(false);
    setBlogOpen(false);
    setButtonOpen(false);
    // history.push("/");
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:contact.us@sepnoty.in";
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <LogoImg src={logo} alt="not found"></LogoImg>
        </Link>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul
          className="nav-links"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Link to="/">
            <ListComponent onClick={toggleHome}>Home</ListComponent>
          </Link>
          <DropdownContainer ref={aboutUsRef}>
            <ListComponent onClick={toggleAboutUs}>
              {isAboutUsOpen ? (
                <>
                  AboutUs
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "About us"
              )}
            </ListComponent>

            {isAboutUsOpen && (
              <AboutCon>
                <AboutUsSection closeOtherSections={closeOtherSections} />
              </AboutCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={serviceRef}>
            <ListComponent class="list-item" onClick={toggleService}>
              {isServiceOpen ? (
                <>
                  Services
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "Services"
              )}
            </ListComponent>
            {isServiceOpen && (
              <ServiceCon>
                <ServiceSection closeOtherSections={closeOtherSections} />
              </ServiceCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={blogRef}>
            <ListComponent class="list-item" onClick={toggleBlog}>
              {isBlogOpen ? (
                <>
                  Blog
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "Blog"
              )}
            </ListComponent>

            {isBlogOpen && (
              <BlogCon>
                <BlogSection closeOtherSections={closeOtherSections} />
              </BlogCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={careerRef}>
            <ListComponent class="list-item" onClick={toggleCareer}>
              {isCareerOpen ? (
                <>
                  Career Opportunities
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "Career Opportunities"
              )}
            </ListComponent>
            {isCareerOpen && (
              <CareerCon>
                <CareerOppurtunities closeOtherSections={closeOtherSections} />
              </CareerCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={resourceRef}>
            <ListComponent class="list-item" onClick={toggleResource}>
              {isResourceOpen ? (
                <>
                  Resource Center
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "Resource Center"
              )}
            </ListComponent>
            {isResourceOpen && (
              <ResourceCon>
                <ResourceCenterSection
                  closeOtherSections={closeOtherSections}
                />
              </ResourceCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={buttonRef}>
            <ListComponent class="list-item" onClick={toggleContact}>
              <button className="contact-button">Contact Us</button>
            </ListComponent>
            {isButtonOpen && (
              <ContactCon>
                <Contact closeOtherSections={closeOtherSections} />
              </ContactCon>
            )}
          </DropdownContainer>
        </ul>
        <div className="mobile" ref={menuRef}>
          <img
            src={menu}
            alt="menu"
            className="menu-icon"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div>
              <ul className="mobile-list">
                <div className="inputholder">
                  <input type="search" placeholder="Search" className="input" />
                  <button className="button">&#10006;</button>
                </div>
                <div className="item">
                  <li className="submenu-item">About us</li>
                  <button className="downcon">
                    <img
                      src={isMobileAboutUsOpen ? up : down}
                      alt="arrow"
                      onClick={toggleMobileAboutUs}
                    />
                  </button>
                </div>
                <hr className="hrl" />
                {isMobileAboutUsOpen && (
                  <MobileAboutusList>
                    {isMobileAboutItemOpen && (
                      <MobileAboutSec>
                        <Link to="/AboutUsComponents/AboutCompany">
                          <li onClick={closeMobileMenu}>About Company</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/AboutLeadership">
                          <li onClick={closeMobileMenu}>Leadership</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/AboutExperts">
                          <li onClick={closeMobileMenu}>Experts</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/ClientReviews">
                          <li onClick={closeMobileMenu}>Client Review</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/OurPatner">
                          <li onClick={closeMobileMenu}>Our Partners</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/Location">
                          <li onClick={closeMobileMenu}>Location</li>
                        </Link>
                        <hr className="hrl" />
                      </MobileAboutSec>
                    )}

                    <div className="item">
                      <li>Approach</li>

                      <button className="downcon">
                        <img
                          src={isApproachOpen ? up : down}
                          alt="down"
                          onClick={toggleApproach}
                        />
                      </button>
                    </div>
                    {isApproachOpen && (
                      <ApproachItems>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/PricingModels">
                          <li onClick={closeMobileMenu}>
                            Pricing models at sepnoty
                          </li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/SoftwareDevelopment">
                          <li onClick={closeMobileMenu}>
                            Our Approach to Software Development
                          </li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/Sustainability">
                          <li onClick={closeMobileMenu}>
                            {" "}
                            Sustainability Policy
                          </li>
                        </Link>
                      </ApproachItems>
                    )}
                    <hr className="hrl" />
                    <div className="item">
                      <li>Recognition</li>

                      <button className="downcon">
                        <img
                          src={isRecognitionOpen ? up : down}
                          alt="down"
                          onClick={toggleRecognition}
                        />
                      </button>
                    </div>
                    {isRecognitionOpen && (
                      <RecognitionItems>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/Testiomial">
                          <li onClick={closeMobileMenu}>Testimonials</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/AboutUsComponents/Awards">
                          <li onClick={closeMobileMenu}> Awards</li>
                        </Link>
                      </RecognitionItems>
                    )}
                    <hr className="hrl" />
                    <div className="item">
                      <li>Join Us</li>

                      <button className="downcon">
                        <img
                          src={isJoinOpen ? up : down}
                          alt="down"
                          onClick={toggleJoin}
                        />
                      </button>
                    </div>

                    {isJoinOpen && (
                      <Joinus>
                        <FollowUsSection>
                          {followUsElements.map((eachLogo) => (
                            <FollowUsElements
                              key={eachLogo.id}
                              logos={eachLogo}
                            />
                          ))}
                        </FollowUsSection>
                      </Joinus>
                    )}
                  </MobileAboutusList>
                )}

                {isOtherItemsOpen && (
                  <OtherSectionItems>
                    <div className="item">
                      <li>Services</li>
                      <button className="downcon">
                        <img
                          src={isMobileServicesOpen ? up : down}
                          alt="down"
                          onClick={toggleMobileServices}
                        />
                      </button>{" "}
                    </div>
                    {isMobileServicesOpen && (
                      <MobileServices>
                        <hr className="hrl" />
                        <Link to="/Services/Software-Development">
                          <li onClick={closeMobileMenu}>
                            Software Development
                          </li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/Services/Web-Development">
                          <li onClick={closeMobileMenu}>Web Development</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/Services/Mobile-App-Development">
                          <li onClick={closeMobileMenu}>
                            Mobile App Development
                          </li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/services/uiux-design">
                          <li onClick={closeMobileMenu}>UI/UX Design</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/Services/Digital-Marketing">
                          <li onClick={closeMobileMenu}>Digital Marketing</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/Services/Graphic-Designing">
                          <li onClick={closeMobileMenu}>Graphic Designing</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/Services/Video-Editing">
                          <li onClick={closeMobileMenu}>Video Editing</li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/Services/Cloud-services-integration">
                          <li onClick={closeMobileMenu}>
                            Cloud Service Integration
                          </li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/Services/Cyber-Security-Provision">
                          <li onClick={closeMobileMenu}>
                            Cyber Security Provision
                          </li>
                        </Link>
                        <hr className="hrl" />
                        <Link to="/Services/AI-Technology-services-integration">
                          <li onClick={closeMobileMenu}>
                            AI Technology Services Integration
                          </li>
                        </Link>
                      </MobileServices>
                    )}
                    <hr className="hrl" />
                    <div className="item">
                      <li>Blog</li>

                      <button className="downcon">
                        <img
                          src={isMobileBlogsOpen ? up : down}
                          alt="down"
                          onClick={toggleMobileBlogs}
                        />
                      </button>
                    </div>
                    {isMobileBlogsOpen && (
                      <MobileBlogs>
                        <hr className="hrl" />
                        <div className="item">
                          <li>Insight and News</li>

                          <button className="downcon">
                            <img
                              src={isInsightOpen ? up : down}
                              alt="down"
                              onClick={toggleInsight}
                            />
                          </button>
                        </div>

                        {isInsightOpen && (
                          <Insight>
                            <hr className="hrl" />
                            <Link to="/Blog/ThoughtLeadership">
                              <li onClick={closeMobileMenu}>
                                Thought Leadership
                              </li>
                            </Link>
                            <hr className="hrl" />
                            <Link to="/Blog/News">
                              <li onClick={closeMobileMenu}>News</li>
                            </Link>
                            <hr className="hrl" />
                            <Link to="/Blog/PressInquires">
                              <li onClick={closeMobileMenu}>Press Inquires</li>
                            </Link>
                            <hr className="hrl" />
                            <Link to="/Blog/Article">
                              <li onClick={closeMobileMenu}>Articles`</li>
                            </Link>
                          </Insight>
                        )}
                      </MobileBlogs>
                    )}
                    <hr className="hrl" />
                    <div className="item">
                      <li>Career Opportunities</li>

                      <button className="downcon">
                        <img
                          src={isMobileCareerOpen ? up : down}
                          alt="arrow"
                          onClick={toggleMobileCareer}
                        />
                      </button>
                    </div>
                    {isMobileCareerOpen && (
                      <MobileCareer>
                        <hr className="hrl" />
                        <div className="item">
                          <Link to="/CareerOppurtunities/DevelopersforHire">
                            <li onClick={closeMobileMenu}>
                              Developers for Hire
                            </li>
                          </Link>
                          <button className="downcon">
                            <img
                              src={isDeveloperOpen ? up : down}
                              alt="down"
                              onClick={toggleDeveloper}
                            />
                          </button>
                        </div>{" "}
                        {isDeveloperOpen && (
                          <Developers>
                            <hr className="hrl" />
                            <li>Java</li>
                            <hr className="hrl" />
                            <li>.Net</li>
                            <hr className="hrl" />
                            <li>Python</li>
                            <hr className="hrl" />
                            <li>PHP</li>
                            <hr className="hrl" />
                            <li>C++</li>
                            <hr className="hrl" />
                            <li>Node.js</li>
                            <hr className="hrl" />
                            <li>Javascript</li>
                            <hr className="hrl" />
                            <li>React Native</li>
                            <hr className="hrl" />
                            <li>Cloud</li>
                            <hr className="hrl" />
                            <li>Artificial Intelligence</li>
                            <hr className="hrl" />
                            <li>Machine Learning</li>
                          </Developers>
                        )}
                        <hr className="hrl" />
                        <div className="item">
                          <Link to="/CareerOppurtunities/Designersforhire">
                            <li onClick={closeMobileMenu}>
                              Designers for Hire
                            </li>{" "}
                          </Link>
                          <button className="downcon">
                            <img
                              src={isDesignerOpen ? up : down}
                              alt="down"
                              onClick={toggleDesigner}
                            />
                          </button>
                        </div>
                        {isDesignerOpen && (
                          <Designers>
                            <hr className="hrl" />
                            <li>UI/UX Design</li>
                            <hr className="hrl" />
                            <li>Digital Marketing</li>
                            <hr className="hrl" />
                            <li>Graphic Designing</li>
                            <hr className="hrl" />
                            <li>Video Editing</li>
                          </Designers>
                        )}
                      </MobileCareer>
                    )}
                    <hr className="hrl" />
                    <div className="item">
                      <li>Resource Center</li>

                      <button className="downcon">
                        <img
                          src={isMobileResourceOpen ? up : down}
                          alt="down"
                          onClick={toggleMobileResouceCenter}
                        />
                      </button>
                    </div>
                    {isMobileResourceOpen && (
                      <MobileResources>
                        <hr className="hrl" />
                        <Link to="/resource-center/analytics-and-reporting">
                          <li onClick={closeMobileMenu}>
                            Analytics and Reporting
                          </li>
                        </Link>{" "}
                        <hr className="hrl" />
                        <Link to="/resource-center/content-recommendations">
                          <li onClick={closeMobileMenu}>
                            Content Recommendation
                          </li>
                        </Link>{" "}
                        <hr className="hrl" />
                        <Link to="/resource-center/collaboration-and-community-features">
                          <li onClick={closeMobileMenu}>
                            Collaboration and Community Features
                          </li>
                        </Link>{" "}
                        <hr className="hrl" />
                        <Link to="/resource-center/technical-articles-and-blogs">
                          <li onClick={closeMobileMenu}>
                            Technical articles and Blogs
                          </li>
                        </Link>{" "}
                        <hr className="hrl" />
                        <Link to="/resource-center/video-tutorials">
                          <li onClick={closeMobileMenu}> Video Tutorials</li>
                        </Link>{" "}
                        <hr className="hrl" />
                        <Link to="/resource-center/learning-paths-and-roadmaps">
                          <li onClick={closeMobileMenu}>
                            Learning paths and Roadmaps
                          </li>
                        </Link>{" "}
                        <hr className="hrl" />
                        <Link to="/resource-center/events-and-workshop">
                          <li onClick={closeMobileMenu}>
                            Events and Workshops
                          </li>
                        </Link>{" "}
                        <hr className="hrl" />
                        <Link to="/resource-center/case-studies-and-success-stories">
                          <li onClick={closeMobileMenu}>
                            Case studies and success Stories
                          </li>
                        </Link>{" "}
                        <hr className="hrl" />
                        <Link to="/resource-center/feedback-and-improvement">
                          <li onClick={closeMobileMenu}>
                            Feedback and improvement Mechanism
                          </li>
                        </Link>{" "}
                        <hr className="hrl" />
                      </MobileResources>
                    )}
                  </OtherSectionItems>
                )}
                <hr className="hrl" />

                <li>
                  <button
                    className="contact-button"
                    onClick={toggleMobileContact}
                  >
                    Contact Us
                  </button>
                </li>
                {isMobileContactsOpen && (
                  <MobileContactCon>
                    <Contacts onClick={handleEmailClick}>
                      contact.us@sepnoty.in
                    </Contacts>
                    <Phone href="tel:+918465997345">(+91) 84659 97345</Phone>
                  </MobileContactCon>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

export const ListComponent = styled.li`
  list-style-type: none;
`;
