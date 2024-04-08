import styled from "styled-components";

export const TopicContainer = styled.li`
  display: flex;
  flex-direction: row;
  padding: 15px 40px 15px 10px;
  @media screen and (max-width: 576px) {
    padding: 20px 0px 0px 0px;
    margin-left: -20px;
  }
`;
export const Profile = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;

export const AboutCon = styled.div`
    text-align: left;
    @media screen and (max-width: 576px) {

      width: 80%;
    }
`;

export const Topic = styled.h1`
  font-size: 14px;
  color: #ffffff;
  width: 70%;
  @media screen and (max-width: 576px) {
    font-size: 50%;
    width: 100%;
    line-height: 12px;
    font-weight: none;
  }
`;

export const Name = styled.p`
  font-size: 12px;
  color: #ffffff;
  margin: 10px 0 0 0;
  @media screen and (max-width: 576px) {
    margin: 3px 0 0 0;
    font-size: 40%;
  }
`;

export const Data = styled.h1`
  font-size: 12px;
  color: #ffffff;
  margin: 0px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`;
export const DataName = styled.p`
  font-size: 12px;
  color: #ffffff;
  margin: 0px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  @media screen and (max-width: 576px) {
    margin: 0 10px 0 -50px;
    width: 60%;
  }
`;

export const SingleData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 65px;
`;

export const ProfileCon = styled.div`
  display: flex;
  flex-direction: row;
`;
