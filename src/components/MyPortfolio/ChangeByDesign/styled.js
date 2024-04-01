import styled from "styled-components";
export const Image = styled.img`
  height: 55vh;
  margin-top: 60px;
  width: 100%;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const Container = styled.div`
  background-color: #0c111f;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  @media screen and (max-width: 576px) {
    padding-top: 50px;
  }
`;
export const PortfolioHeading = styled.h1`
  color: #ffffff;
  font-size: 40px;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const Desc = styled.p`
  color: #ffffff;
  font-size: 20px;
  line-height: 1.5;
  width: 85%;
  @media screen and (max-width: 576px) {
    font-size: 13px;
    width: 100%;
    padding-right: 10px;
  }
`;

export const SmallPattern = styled.div`
  background-color: #33406d;
  height: 45px;
  width: 50px;
  @media screen and (max-width: 576px) {
    height: 35px;
    width: 35px;
  }
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;
export const ListHeading = styled.h1`
  font-size: 25px;
  color: #8196db;
  font-weight: bold;
  margin-left: -30px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const ContentDesc = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-left: 65px;
  width: 85%;
  margin-bottom: 15px;
  line-height: 1.5;
  padding-right: 20px;
  @media screen and (max-width: 576px) {
    font-size: 13px;
    width: 90%;

    margin-left: 22px;
  }
`;

export const SolutionDesc = styled.p`
  color: #ffffff;
  font-size: 20px;
  height: 60px;
  padding-top: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const Bgimage = styled.img`
  position: relative;
  width: 100%;
  margin: 50px 0;
`;
export const DesignImage = styled.img`
  width: 83%;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #8196db;
  color: #ffffff;
  border-radius: 5px;
  font-size: 18px;
  padding: 7px 5px;
  margin-right: 10px;
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`;

export const TechCon = styled.div`
  border-left: 1px solid #8196db;
  padding: 0px 0px;
  height: 80px;
  padding: 5px;
  margin: 30px 0 40px 0;
`;

export const Techtitle = styled.p`
  color: rgba(217, 217, 217, 0.5);
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const SubCon = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MoreCaseStudies = styled.button`
  border-radius: 10px;
  background-color: #d9d9d9;
  border: 0px;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 40px;
  align-self: center;
  color: #121415;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
`;

export const ContentContainer = styled.div`
  margin-top: 10px;
  margin-left: 8%;
  @media screen and (max-width: 576px) {
    margin-left: 3%;
  }
`;

export const Contents = styled.div`
  padding-left: 1%;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    padding-left: 0px;
  }
`;

export const QueryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
  margin: 0px;
  padding: 50px 0px;
  background-color: rgba(12, 17, 31, 1);
  @media screen and (max-width: 555px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const ListCon = styled.div`
  background-color: #0c111f;
  display: flex;
  flex-direction: column;
  padding: 30px 0px 50px 0px;
`;

export const ListConHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
  margin-left: 8%;
  @media screen and (max-width: 576px) {
    margin-left: 3%;
  }
`;
