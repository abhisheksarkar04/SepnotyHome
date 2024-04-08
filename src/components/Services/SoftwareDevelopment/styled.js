import styled from "styled-components";

export const SoftDevSection = styled.div`
  background-color: rgba(12, 17, 31, 1);
  display: flex;
  flex-direction: column;
  color: white;
  @media screen and (max-width:576px){
    width:100%;
  }
`;
export const ServiceSpan = styled.span`
  font-weight: normal;
  
`;
export const PageTitle = styled.h2`
  color: white;
  font-size: 20px;
  padding: 100px 0px 20px 6%;
  @media screen and (max-width:576px){
    padding: 100px 0px 20px 3%; 
    font-size: 14px;
  }
`;

export const SectionThreeHeading = styled.h2`
  font-size: 25px;
  text-align: center;
  @media screen and (max-width:576px){
    font-size:20px;
  }
`;
export const SpanThree = styled.span`
  color: rgba(43, 69, 155, 1);
`;
export const SectionThreeDescription = styled.p`
  font-size: 23px;
  line-height: 25px;
  width: 60%;
  margin: 40px;

  margin-left: 6%;
  @media screen and (max-width:576px){
    width:90%;
    margin-left: 3%;
    font-size:14px;
    text-align:justify;
  }
`;
export const SectionThree = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 6%;
  justify-content: space-between;
  @media screen and (max-width:576px){
    padding:3%;
    justify-content:center;
  }
`;
export const SectionFour = styled.div`
  background-color: rgba(37, 73, 137, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 40px 40px 0px;
`;
export const SectionFourHeading = styled.h2`
  color: white;
  align-self: center;
  font-size: 28px;
  @media screen and (max-width:576px){
    font-size:20px;
  }
`;
export const SectionFourDescription = styled.p`
  font-size: 24px;
  line-height: 25px;
  width: 80%;
  margin: 40px;
 
  margin-left: 6%;
  @media screen and (max-width:576px){
    font-size:14px;
    width: 95%;
    text-align:justify;
  }
`;
export const ChooseSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
  align-items: center;
  margin: auto;
  @media screen and (max-width:576px){
    flex-direction:column;
    justify-content:center;
    align-self:center;
    margin-left:12%;
  }
`;

export const SectionFiveHeading = styled.h2`
  color: white;
  font-size: 28px;
  text-align: center;
  margin-top: 25px;
  @media screen and (max-width:576px){
    font-size:20px;
    
  }
`;
export const SectionFiveTitle = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
  @media screen and (max-width:576px){
    font-size:20px;
  }
`;
export const SpanFive = styled.span`
  color: rgba(43, 69, 155, 1);
`;
export const WorksCon = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${"" /*   justify-content: center; */}
  margin-top: 30px;
  margin-bottom: 20px;
  padding-left: 6%;
  @media screen and (max-width:576px){
    justify-content:center;
    padding-left: 0%;
  }
`;
export const SectionSix = styled.div`
  padding: 30px;
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
