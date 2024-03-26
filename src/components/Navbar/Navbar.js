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
  MenuItem,
  SubMenu,
  FollowUsSection,
  MobileAboutusList,
  MobileServices,
  OtherSectionItems,
  MobileBlogs,
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
  const [Mobile, setMobile] = useState(false);
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isCareerOpen, setCareerOpen] = useState(false);
  const [isBlogOpen, setBlogOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);
  const [isButtonOpen, setButtonOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isOtherItemsOpen, setOtherItemsOpen] = useState(true);
  const [isMobileBlogsOpen, setMobileBlogsOpen] = useState(false);

  // const history = useHistory();

  const aboutUsRef = useRef(null);
  const serviceRef = useRef(null);
  const careerRef = useRef(null);
  const blogRef = useRef(null);
  const resourceRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Attach event listener to the document when any dropdown is open
    const closeDropdownOutside = (e) => {
      if (
        !aboutUsRef.current.contains(e.target) &&
        !serviceRef.current.contains(e.target) &&
        !careerRef.current.contains(e.target) &&
        !blogRef.current.contains(e.target) &&
        !resourceRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        closeOtherSections();
      }
    };

    if (
      isAboutUsOpen ||
      isServiceOpen ||
      isCareerOpen ||
      isBlogOpen ||
      isResourceOpen ||
      isButtonOpen
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
  ]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const toggleSubMenu = (menu) => {
    if (activeSubMenu === menu) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(menu);
    }
  };

  const toggleAbout = () => {
    setAboutUs(!aboutUs);
  };

  const toggleMobileAboutUs = () => {
    setMobileAboutUsOpen(!isMobileAboutUsOpen);
    setMobileServicesOpen(false);
    setMobileBlogsOpen(false);
    if (!isMobileAboutUsOpen) {
      setOtherItemsOpen(false);
    } else {
      setOtherItemsOpen(true);
    }
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!isMobileServicesOpen);
    setMobileAboutUsOpen(false);
    setMobileBlogsOpen(false);
  };

  const toggleMobileBlogs = () => {
    setMobileBlogsOpen(!isMobileBlogsOpen);
    setMobileServicesOpen(false);
    setMobileAboutUsOpen(false);
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
            setMobile(false);
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
        <img src={menu} alt="menu" className="menu-icon" onClick={toggleMenu} />
        {isMenuOpen && (
          <div>
            <ul className="mobile-list">
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
              {isMobileAboutUsOpen && (
                <MobileAboutusList>
                  <hr className="hrl" />
                  <Link to="/">
                    <li>About Company</li>
                  </Link>
                  <hr className="hrl" />
                  <Link to="/">
                    <li>Leadership</li>
                  </Link>
                  <hr className="hrl" />
                  <Link to="/">
                    <li>Experts</li>
                  </Link>
                  <hr className="hrl" />
                  <Link to="/">
                    <li>Client Review</li>
                  </Link>
                  <hr className="hrl" />
                  <Link to="/">
                    <li>Our Partners</li>
                  </Link>
                  <hr className="hrl" />
                  <Link to="/">
                    <li>Location</li>
                  </Link>
                  <hr className="hrl" />
                  <div className="item">
                    <Link to="/">
                      <li>Approach</li>
                    </Link>
                    <button className="downcon">
                      <img src={down} alt="down" />
                    </button>
                  </div>
                  <div>
                    <hr className="hrl" />
                    <Link to="/">
                      <li>Pricing models at sepnoty</li>
                    </Link>
                    <hr className="hrl" />
                    <Link to="/">
                      <li>Our Approach to Software Development</li>
                    </Link>
                    <hr className="hrl" />
                    <Link to="/">
                      <li> Sustainability Policy</li>
                    </Link>
                  </div>
                  <hr className="hrl" />
                  <div className="item">
                    <Link to="/">
                      <li>Recognition</li>
                    </Link>
                    <button className="downcon">
                      <img src={down} alt="down" />
                    </button>
                  </div>
                  <div>
                    <hr className="hrl" />
                    <Link to="/">
                      <li>Testimonials</li>
                    </Link>
                    <hr className="hrl" />
                    <Link to="/">
                      <li> Awards</li>
                    </Link>
                  </div>
                  <hr className="hrl" />
                  <div className="item">
                    <Link to="/">
                      <li>Join Us</li>
                    </Link>
                    <button className="downcon">
                      <img src={down} alt="down" />
                    </button>
                  </div>
                  <hr className="hrl" />
                  <FollowUsSection>
                    {followUsElements.map((eachLogo) => (
                      <FollowUsElements key={eachLogo.id} logos={eachLogo} />
                    ))}
                  </FollowUsSection>
                </MobileAboutusList>
              )}
              <hr className="hrl" />
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
                      <Link to="/">
                        <li>Software Development</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Web Development</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Mobile App Development</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>UI/UX Design</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Digital Marketing</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Graphic Designing</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Video Editing</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Cloud Service Integration</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Cyber Security Provision</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>AI Technology Services Integration</li>
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
                      <Link to="/">
                        <li>Insight and News</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Thought Leadership</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>News</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Press Inquires</li>
                      </Link>
                      <hr className="hrl" />
                      <Link to="/">
                        <li>Articles`</li>
                      </Link>
                    </MobileBlogs>
                  )}
                  <hr className="hrl" />
                  <div className="item">
                    <li>Career Opportunities</li>

                    <button className="downcon">
                      <img src={down} alt="down" />
                    </button>
                  </div>
                  <hr className="hrl" />
                  <div className="item">
                    <Link to="/ResourceCenter">
                      <li>Resource Center</li>
                    </Link>{" "}
                    <button className="downcon">
                      <img src={down} alt="down" />
                    </button>
                  </div>
                </OtherSectionItems>
              )}
              <hr className="hrl" />
              <Link to="/Blog">
                <li>
                  <button className="contact-button">Contact Us</button>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

export const ListComponent = styled.li`
  list-style-type: none;
`;
