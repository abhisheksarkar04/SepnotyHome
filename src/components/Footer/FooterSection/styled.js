import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import layout from "../Images/layout.svg";

export const GlobalStyle = createGlobalStyle` 
 *{ box-sizing: border-box;
  margin: 0px;
  font-family: "Inter";
 }
`;

export const Container = styled.div`
  display: flex;
  background-color: #0c111f;
  flex-direction: column;
  padding: 40px 40px 5px 40px;

  background-image: url(${layout});
  background-size: cover;
  @media screen and (max-width: 576px) {
    padding: 25px 25px 5px 25px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-flow: wrap;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const LogoContainer = styled.div`
  margin-right: 0px;
  @media screen and (max-width: 576px) {
    margin-right: 0px;
  }
`;

export const SepnotyLogo = styled.img`
  height: 90px;
  width: 360px;
  margin: -50px -25px 0px -22px;

  @media screen and (max-width: 576px) {
    height: 50px;
    width: 250px;
    margin: -40px 0 0px -40px;
  }
`;

export const SepnotyDescription = styled.p`
  font-size: 14px;
  width: 330px;
  margin-top: 20px;
  color: #fff;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 258px;
    font-weight: 500px;
  }
`;

export const SepnotyDescription1 = styled.p`
  margin-top: 10px;
  color: #fff;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const ServiceContainer = styled.div`
  @media screen and (max-width: 576px) {
  }
`;

export const ServiceHeading = styled.h1`
  font-size: 17px;
  font-weight: 600;
  border-bottom: 2px solid #cac7ee;
  width: 64px;
  color: #cac7ee;
  margin-bottom: 16px;
`;

export const ServiceItems = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: #d9d9d9;
  @media screen and (max-width: 576px) {
    margin-top: 20px;
  }
`;

export const ContactUsSection = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 0px;
  }
`;

export const ContactHeading = styled.h1`
  font-size: 17px;
  color: #cac7ee;
  margin-bottom: 16px;

  @media screen and (max-width: 576px) {
    margin-bottom: 0px;
    margin-top: 10px;
    font-size: 14px;
    text-align: left;
  }
`;
export const NewsContainer = styled.div``;

export const NewsHeading = styled.h1`
  font-size: 17px;
  color: #b44555;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const NewsDesc = styled.p`
  font-size: 14px;
  color: #969595;
  padding: 10px 0px 10px;
  width: 350px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const InputHolder = styled.input`
  background-color: #4a4848;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-width: 0px;
  font-size: 12px;
  padding: 7px;
  width: 200px;
  outline: none;

  & ::placeholder {
    color: #e2dccc;
  }
  @media screen and (max-width: 576px) {
    width: 220px;
  }
`;

export const EmailMsg = styled.p`
  font-size: 12px;
  color: #969595;
  padding-top: 10px;
  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  background-color: #f93e53;
  text-align: center;
  font-size: 12px;
  border-width: 0px;
  padding: 7px 15px 7px 15px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  color: #e2dccc;
  z-index: 2;
  @media screen and (min-width: 768px) {
  }
`;

export const CopywriteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & .copywrite-icon {
    font-size: 10px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: -20px;
    justify-content: none;
    align-items: flex-start;
  }
`;

export const Copyright = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 5px;
  @media screen and (max-width: 576px) {
    ${
      "" /*     height: 22px;
    width: 22px; */
    }
  }
`;

export const CopywriteContent = styled.p`
  font-size: 10px;
  color: #d9d9d9;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-top: 10px;
    justify-content: flex-start;
    margin-left: 20px;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 0px;
  @media screen and (max-width: 576px) {
    margin: 10px 0px 10px -20px;
  }
`;

export const Sections = styled.p`
  font-size: 10px;
  position: relative;
  color: #d9d9d9;
  border-right: 1px solid #ffffff;
  margin-right: 10px;
  padding-right: 10px;
  height: 10px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    height: 20px;
    margin-right: 0px;
    padding-left: 6px;
    text-align: center;
  }
`;

export const Section = styled.p`
  font-size: 10px;
  color: #d9d9d9;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    height: 20px;
    margin-right: 0px;
    padding-left: 6px;
    text-align: center;
  }
`;

export const FollowUsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const FollowUsContainer1 = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 577px) {
    display: none;
  }
`;

export const FollowUsSection = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
    margin-right: 180px;
  }
`;

export const ServiceContact = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ServiceCon = styled.div`
  margin-right: 80px;
  @media screen and (max-width: 576px) {
    order: 1;
    margin-right: 0px;
  }
`;
export const ContactCon = styled.div`
  margin-right: 0px;
  @media screen and (max-width: 576px) {
    order: 0;
    margin-right: 0px;
  }
`;
