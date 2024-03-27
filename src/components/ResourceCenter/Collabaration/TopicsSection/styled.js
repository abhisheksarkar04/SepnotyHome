import styled from "styled-components";

export const TopicContainer = styled.li`
  display: flex;
  flex-direction: row;
  padding: 15px 40px 15px 10px;
  @media screen and (max-width: 576px) {
    font-size: ;
    padding: 20px 0px 0px 0px;
  }
`;
export const Profile = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;

export const AboutCon = styled.div`
    text-align: left;
`;

export const Topic = styled.h1`
  font-size: 14px;
  color: #ffffff;
  width: 70%;
  @media screen and (max-width: 576px) {
    font-size: 60%;
    padding: ;
    width: 120%;
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
`;
export const DataName = styled.p`
  font-size: 12px;
  color: #ffffff;
  margin: 0px;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
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
