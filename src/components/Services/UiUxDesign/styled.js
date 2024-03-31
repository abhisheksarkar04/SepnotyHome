import styled from "styled-components";

export const UiUxDesignPage = styled.div`
  background-color: rgba(12, 17, 31, 1);
  width: 100%;
`;
export const ServiceSpan = styled.span`
  font-weight: normal;
  
`;
export const WebPageTitle = styled.h2`
  font-size: 17px;
  color: white;
  padding: 80px 0px 10px 6%;
  @media screen and (max-width:576px){
    font-size:14px;
    padding-left:4%;
  }
`;

export const WebHeading = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: 10px 0px 15px 6%;
  color: white;
  @media screen and (max-width:576px){
    font-size:16px;
    margin-left:4%;
  }
`;
export const WebSectionTwoHeading = styled.h2`
  color: rgba(43, 69, 155, 1);
  font-size: 28px;
  margin: 60px 0px 20px 7.5%;
  padding-top: 10px;
  @media screen and (max-width:576px){
    font-size:20px;
    margin-left:10%;
  }
`;
export const HeadingSpan = styled.span`
  width: 60px;
  height: 55px;
  margin-top: 0px;
  margin-left: 6%;
  position: absolute;
  background-color: rgba(129, 150, 219, 0.25);
  z-index: 0;
  @media screen and (max-width:576px){
    height:50px;
    margin-left:4%;
  }
`;
export const WorksImg = styled.img`
  width: 100%;
  height: 50%;
`;
export const DesProcessHeading = styled.h2`
  font-size: 28px;
  color: rgba(43, 69, 155, 1);
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  @media screen and (max-width:576px){
    font-size:20px;
    
  }
`;
export const DesignDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 20px 0px;

`;
export const DesignToolsTitle = styled.h2`
  color: rgba(43, 69, 155, 1);
  font-size: 26px;
  margin: 0px 0px 20px 7.5%;
  @media screen and (max-width:576px){
    font-size:20px;
    margin-left:10%;
  }
`;
export const DesignTitleSpan = styled.span`
  width: 60px;
  height: 55px;
  margin-top: -9px;
  margin-left: 6%;
  position: absolute;
  background-color: rgba(129, 150, 219, 0.25);
  z-index: 0;
  @media screen and (max-width:576px){
    margin-left:4%;
  }
`;
export const StaticToolsTitle = styled.h2`
  color: white;
  margin-top: 40px;
  margin-left: 7.5%;
  margin-bottom: 20px;
  font-size: 24px;
  @media screen and (max-width:576px){
    font-size:20px;
    margin-left:10%;
  }
`;
export const StaticToolsCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 7.5%;
  margin-bottom: 30px;
  @media screen and (max-width:576px){
    
    margin-left:10%;
  }
`;
export const StaticToolImgCon = styled.div`
  background-color: rgba(217, 217, 217, 1);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  padding: 15px;
  margin-right: 25px;
`;
export const StaticToolImg = styled.img`
  height: 30px;
  width: 30px;
`;
export const ContactCon = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:576px){
    flex-direction:column;
  }
`;
