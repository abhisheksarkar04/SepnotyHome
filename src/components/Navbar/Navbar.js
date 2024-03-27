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
} from "./styledComponents";
import AboutUsSection from "../AboutUsSection/AboutUs";
import ServiceSection from "../ServiceSection";
import BlogSection from "../../pages/BlogSection/";
import CareerOppurtunities from "../CareerOppurtunities";
import ResourceCenterSection from "../ResourceCenterSection";
import Contact from "../ContactUsSection";
// import AboutUs from "../../pages/AboutUs";
// import Services from "../../pages/Services";

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

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setAboutUsOpen(false);
  };

  const toggleAbout = () => {
    setAboutUs(!aboutUs);
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
          <ul className="mobile-list">
            <div className="item">
              <li>About us</li>
              <button className="downcon">
                <img
                  src={aboutUs ? up : down}
                  alt="arrow"
                  onClick={toggleAbout}
                />
              </button>
            </div>
            {aboutUs && (
              <>
                <div>
                  <ul className="mobile-list">
                    <div className="item">
                      <Link to="/">
                        <li>About us</li>
                      </Link>
                      <button className="downcon">
                        <img src={up} alt="up" />
                      </button>
                    </div>
                    <Link to="/">
                      <li>About Company</li>
                    </Link>
                    <Link to="/">
                      <li>Leadership</li>
                    </Link>
                    <Link to="/">
                      <li>Experts</li>
                    </Link>
                    <Link to="/">
                      <li>Client Review</li>
                    </Link>
                    <Link to="/">
                      <li>Our Partners</li>
                    </Link>
                    <Link to="/">
                      <li>Location</li>
                    </Link>
                    <div className="item">
                      <Link to="/">
                        <li>Approach</li>
                      </Link>
                      <button className="downcon">
                        <img src={down} alt="down" />
                      </button>
                    </div>
                    <div className="item">
                      <Link to="/">
                        <li>Recognition</li>
                      </Link>
                      <button className="downcon">
                        <img src={down} alt="down" />
                      </button>
                    </div>
                    <div className="item">
                      <Link to="/">
                        <li>Join Us</li>
                      </Link>
                      <button className="downcon">
                        <img src={down} alt="down" />
                      </button>
                    </div>
                  </ul>
                </div>
                <hr className="hrl" />
                <div className="item">
                  <Link to="/Services">
                    <li>Services</li>
                  </Link>
                  <button className="downcon">
                    <img src={down} alt="down" />
                  </button>
                </div>{" "}
                <hr className="hrl" />
                <div className="item">
                  <Link to="/Blog">
                    <li>Blog</li>
                  </Link>
                  <button className="downcon">
                    <img src={down} alt="down" />
                  </button>
                </div>{" "}
                <hr className="hrl" />
                <div className="item">
                  <Link to="/CareerOpportunities">
                    <li>Career Opportunities</li>
                  </Link>
                  <button className="downcon">
                    <img src={down} alt="down" />
                  </button>
                </div>{" "}
                <hr className="hrl" />
                <div className="item">
                  <Link to="/ResourceCenter">
                    <li>Resource Center</li>
                  </Link>{" "}
                  <button className="downcon">
                    <img src={down} alt="down" />
                  </button>
                </div>
                <hr className="hrl" />
                <Link to="/Blog">
                  <li>
                    <button className="contact-button">Contact Us</button>
                  </li>
                </Link>
              </>
            )}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;

export const ListComponent = styled.li`
  list-style-type: none;
`;