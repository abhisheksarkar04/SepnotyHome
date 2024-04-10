import styled from "styled-components";
export const AboutCon = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 13px;
  color: #ffffff;
  margin: 0px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    font-size: 2.5vw;
   
  }
`;

export const Role = styled.p`
  font-size: 13px;
  color: #ffffff;
  margin: 0px;
  @media screen and (max-width: 576px) {
    font-size: 2.5vw;
   
  }
`;
export const ProfileCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

`;

export const Profileimg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 70px;
  @media screen and (max-width: 576px) {
    margin-right: 30px;
    width: 10vw;
   
  }
`;
