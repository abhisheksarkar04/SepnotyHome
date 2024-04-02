import styled from "styled-components";
import circleImage from "../assets/circleimg.png";
import circleImage2 from "../assets/circleimage2.png";

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Intro1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 50px;
  padding: 90px 30px 0px 60px;
  background-color: #0c111f;
  line-height: 1.5;
  height: 100%;
  width: 100%;
  font-family: "Roboto";
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    padding: 45px 0px 0px 30px;
  }
`;
export const Intro2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Intro3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const Intro33 = styled.div`
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    background-color: #0c111f;
    padding: 0px 0px 0px 20px;
  }
`;
export const Introhd1 = styled.h1`
  color: white;
  margin-top: 30px;
  letter-spacing: 2px;
  width: 70%;
  font-size: 42px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    letter-spacing: 0px;
    width: 100%;
    margin-top: 60px;
  }
`;
export const Introp1 = styled.p`
  color: #ececec;
  line-height: 1.5;
  margin-top: 10px;
  width: 80%;
  font-weight: 500;
  letter-height: 5px;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const Introp11 = styled.p`
  color: #ececec;
  line-height: 1.5;
  margin-top: 10px;
  width: 95%;
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    line-height: 1.9;
    font-size: 18px;
  }
`;
export const IntroCircles = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-right: 30px;
  display: flex;
  margin-top: 40px;
`;
export const IntroWhiteCircle = styled.li`
  margin-right: -15px;
  background: url(${circleImage}) center/cover no-repeat;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  border-color: aliceblue;
  border-width: 1px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid whitesmoke;
  @media screen and (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`;
export const IntroBlueCircle = styled.li`
  margin-right: -15px;
  background: url(${circleImage2}) center/cover no-repeat;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  border-color: white;
  border-width: 1px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid whitesmoke;
  @media screen and (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`;
export const IntroBlueCircleText = styled.span`
  margin-top: 5px;
  color: white;
`;
export const IntroRightText = styled.p`
  margin-top: 15px;
  color: white;
  padding: 0px 0px 40px 0px;
`;
export const IntroButtonVideo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const IntroButtonVideo2 = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;
export const IntroProposalText = styled.button`
  border-radius: 30px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(252, 252, 252, 0) 0%,
    rgba(252, 252, 252, 1) 0%,
    rgba(246, 251, 34, 1) 100%
  );
  color: rgba(35, 69, 129, 1);
  height: 40px;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  font-family: "roboto";
  cursor: pointer;
  @media screen and (max-width: 576px) {
    height: 30px;
    align-self: center;
  }
`;
export const IntroPlayVideo = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  display: flex;
  @media screen and (max-width: 576px) {
    display: flex;
  }
`;

export const IntroPlayVideo2 = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
  }
`;
export const IntroPlayButton = styled.img`
  border: 3px solid rgb(178, 169, 213);
  border-radius: 50%;
  height: 30px;
  width: 30px;
  @media screen and (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-left: -20px;
  }
`;
export const IntroVideoText = styled.p`
  margin-top: 3px;
  margin-left: 10px;
  color: white;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`;
export const IntroExplorePart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 60px 60px 0px;
  background-color: #0c111f;
  line-height: 1.5;
  margin-top: -20px;
  @media screen and (max-width: 576px) {
    display: none;
    padding: 30px 0px 50px 30px;
  }
`;

export const IntroExplorePart2 = styled.div`
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 60px 60px 0px;
  background-color: #0c111f;
  line-height: 1.5;
  margin-top: -20px;
  @media screen and (max-width: 576px) {
    display: none;
    padding: 30px 0px 50px 30px;
    justify-content: space-between;
  }
`;
export const IntroAchievements = styled.div`
  margin-right: 40px;
  text-align: center;
  @media screen and (max-width: 576px) {
    width: 100px;
    margin-right: 0px;
  }
`;
export const IntroOrangeText = styled.h2`
  color: white;
  font-weight: 800;
  @media screen and (max-width: 576px) {
    color: white;
    font-weight: 800;
    font-size: 15px;
  }
`;
export const IntroBlackText = styled.p`
  color: white;
  @media screen and (max-width: 576px) {
    font-size: 17px;
    font-weight: 0;
    margin-top: 10px;
  }
`;
export const IntroExploreText = styled.a`
  cursor: pointer;
  color: white;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const IntroRightImg = styled.img`
  width: 570px;
  height: 400px;
  margin-top: 50px;
  margin-right: 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 430px;
    margin-left: -60px;
    margin-top: -70px;
    margin-right: 100px;
    margin-bottom: 0px;
  }
`;
export const TransparentImg = styled.img`
  position: absolute;
  width: 440px;
  top: 100;
  left: 0;
  opacity: 0.7;
`;
export const TransparentImgs = styled.img`
  position: absolute;
  top: 100;
  width: 440px;
  right: 0;
  opacity: 0.7;
`;
export const TransparentImgss = styled.img`
  position: absolute;

  width: 440px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
`;
export const Homehd1 = styled.h1`
  color: white;
  letter-spacing: 2px;
  width: 45%;
  font-size: 42px;
  margin: 85px 0px 0px 0px;
  display: none;
  @media screen and (max-width: 576px) {
    font-size: 17px;
    letter-spacing: 0px;
    width: 100%;
    margin: 85px 0px 0px 20px;
    display: block;
    line-height: 2.3rem;
    padding-right: 20px;
  }
`;

export const HomeLeftRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px 30px 0px 60px;
  background-color: #0c111f;
  line-height: 1.5;
  height: 100%;
  width: 100%;
  font-family: "Roboto";
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    padding: 0px 0px 0px 30px;
  }
`;
export const HomeLefthd1 = styled.h1`
  color: white;
  letter-spacing: 2px;
  width: 70%;
  font-size: 42px;
  margin: 40px 0px 10px 0px;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    letter-spacing: 0px;
    width: 100%;
    margin-top: 60px;
    display: none;
  }
`;
export const HomeLeft = styled.div`
  @media screen and (max-width: 576px) {
    order: 1;
  }
`;
export const Homep1 = styled.p`
  color: #ececec;
  line-height: 1.5;
  width: 80%;
  font-weight: 500;
  letter-height: 5px;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const HomeButtonVideo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const HomeProposalText = styled.button`
  border-radius: 30px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(252, 252, 252, 0) 0%,
    rgba(252, 252, 252, 1) 0%,
    rgba(246, 251, 34, 1) 100%
  );
  color: rgba(35, 69, 129, 1);
  height: 40px;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  font-family: "roboto";
  cursor: pointer;
  @media screen and (max-width: 576px) {
    height: 30px;
    align-self: center;
    display: none;
  }
`;
export const HomeProposalTextRight = styled.button`
  border-radius: 30px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(252, 252, 252, 0) 0%,
    rgba(252, 252, 252, 1) 0%,
    rgba(246, 251, 34, 1) 100%
  );
  color: rgba(35, 69, 129, 1);
  height: 40px;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  font-family: "roboto";
  cursor: pointer;
  display: none;
  @media screen and (max-width: 576px) {
    margin-top: -70px;
    padding: 10px 26px 10px 26px;
    margin-left: 20%;
    display: block;
    margin-bottom: 20px;
    font-size: 14px;
  }
`;
export const HomePlayVideo = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  display: flex;
  @media screen and (max-width: 555px) {
    display: flex;
  }
`;
export const HomePlayButton = styled.img`
  border: 3px solid rgb(178, 169, 213);
  border-radius: 50%;
  height: 30px;
  width: 30px;
  @media screen and (max-width: 576px) {
    height: 35px;
    width: 35px;
    margin: 0px;
  }
`;
export const HomeVideoText = styled.p`
  margin-top: 3px;
  margin-left: 10px;
  color: white;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin-top: 4px;
  }
`;
export const CirclesText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 576px) {
  }
`;
export const HomeRight = styled.div`
  @media screen and (max-width: 576px) {
    order: 0;
  }
`;
export const HomeExplorePartLeft = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  background-color: #0c111f;
  line-height: 1.5;

  @media screen and (max-width: 576px) {
    display: flex;
  }
`;

export const HomeAchievements = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HomeOrangeText = styled.h2`
  color: white;
  font-weight: 800;
  @media screen and (max-width: 576px) {
    align-self: center;
    font-size: 17px;
  }
`;
export const HomeBlackText = styled.p`
  color: white;
  @media screen and (max-width: 576px) {
    font-size: 17px;
    font-weight: 0;
    margin-top: 10px;
  }
`;
