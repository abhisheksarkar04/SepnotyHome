import styled from "styled-components";
export const Learn = styled.p`
  color: #ffffff;
  font-size: 17px;
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`;
export const Arrow = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
  padding: 10px 0;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`;

export const Desc = styled.p`
  color: #ffffff;
  font-size: 17px;
  padding: 5px 30px 5px 0;
  @media screen and (max-width: 576px) {
    font-size: 13px;
    padding-right: 10px;
  }
`;
export const CaseStudy = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  @media screen and (max-width: 576px) {
    padding: 0;
    margin-left: -40px;
    margin: 10px 0px 0px -40px;
  }
`;

export const CaseStudyContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LearnMoreCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

export const CaseStudyImage = styled.img`
  width: 13%;
  margin-right: 5%;
  @media screen and (max-width: 576px) {
    width: 120px;
    margin-right: 3%;
    padding: 0;
    margin-left: ;
  }
`;
