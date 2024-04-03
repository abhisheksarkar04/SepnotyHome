import styled,{ keyframes } from "styled-components";

export const InquirySection=styled.div`
background-color:rgba(12, 17, 31, 1);
color:white;
padding:30px 0px 30px 0px;
display:flex;
flex-direction:column;

`;
export const InqueryTitle=styled.h2`
color:white;
font-size:17px;
margin:40px 30px 10px 0px;
margin-left:6%;
@media screen and (max-width:576px){
  margin-left:3%;
  font-size:14px;
}
`;
export const InqueryName=styled.h1`
color:white;
font-size:30px;
margin-left:6%;
margin-bottom:10px;
@media screen and (max-width:576px){
  margin-left:3%;
  font-size:20px;
}
`;
export const HelpJournalTitle=styled.h2`
font-size:25px;
color:rgba(43, 69, 155, 1);
margin:45px 0px 30px 0px;
margin-top:5%;
padding-left:8%;
@media screen and (max-width:576px){
  font-size:16px;
  margin-top:35px;
  margin-left:0%;
}
`;
export const HelpJournalDescription=styled.p`
color:white;
font-size:23px;
line-height:1.5;
margin:25px 0px 20px 0px;
width:80%;
padding-left:8%;
@media screen and (max-width:576px){
  font-size:14px;
line-height:1.5;
width:100%;
margin-left:0%;
}
`;
export const RequestCall=styled.div`
display:flex;
flex-direction:row;
margin:20px 40px 30px 0px;
padding-left:6%;
justify-content:space-between;
@media screen and (max-width:576px){
    flex-direction:column;
    padding-left:3%;
}
`;
export const RequestCallLeft=styled.div`
display:flex;
flex-wrap:wrap;
width:80%;
margin-bottom:20px;
@media screen and (max-width:576px){
  width:100%;
  margin-bottom:10px;
  justify-content: space-between;
}
`;
export const RequestRight=styled.div`
display:flex;
flex-direction:column;
justify-content:Flex-start;

`;
export const CalenderImg=styled.img`
width:330px;
height:330px;
align-items:center;
`;
export const CallButton=styled.button`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(252,252,252,0) 0%, rgba(252,252,252,1) 0%, rgba(246,251,34,1) 100%);
border:none;
color:rgba(35, 69, 129, 1);
border-radius:20px;
padding:10px 20px 10px 20px;
width:150px;

align-self:center;
font-size:15px;
`;
export const ExpertTitle=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:18px;

margin:0px 30px 20px 30px;
@media screen and (max-width:576px){
  font-size:16px;
  margin-left:3%;
}
`;
export const ExpertText=styled.p`
font-size:20px;
color:rgba(255, 255, 255, 1);
margin:0px 30px 20px 0px;
margin-left:6%;
width:80%;
@media screen and (max-width:576px){
  font-size:14px;
  margin-left:3%;
}
`;
export const InquiryMedia=styled.div`
margin:40px 50px 20px 0px;
margin-left:6%;
border-radius:10px;
background-color:rgba(193, 202, 231, 1);
position: relative;
width:60%;
padding-bottom:5px;
@media screen and (max-width:576px){
  width:95%;
  margin:5px;
  margin-right:10px;
  margin-left:3%;
  padding:5px;
  margin-bottom:20px;
}
`;
export const MediaImg=styled.img`
width:150px;
height:40px;
margin-right:30px;
@media screen and (max-width:576px){
  width:100px;
  margin-right:10px;
}
`;

const arrowAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  animation: ${arrowAnimation} 1s infinite;
`;
export const MarqueeWrapper = styled.div`
display: flex;
`;
export const InquiryMarquee = styled.div`
  display: flex;
  overflow: hidden;
`;
export const MarqueeContent = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;
export const ExpertResearch=styled.p`
 color:rgba(255, 255, 255, 1);
 margin-left:6%;
 font-size:20px;
 @media screen and (max-width:576px){
  font-size:14px;
  margin-left:3%;
}
`;
export const ExpertsInfo=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
padding:30px 120px 20px 0px;
padding-left:6%;
@media screen and (max-width:576px){
  flex-direction:column;
  padding-left:3%;
  padding-right:60px;
}
`;
export const SeeMoreButton=styled.button`
background-color:white;
margin-left:40%;
padding:10px 20px 10px 20px;
color:rgba(35, 69, 129, 1);
border-radius:20px;
cursor:pointer;
font-weight:400;
width:11%;
@media screen and (max-width:576px){
  width:30%;
  margin-left:35%;
  
}
`;
export const TrustWorthy=styled.h2`
font-size:24px;
font-weight:600;
margin:30px 40px 20px 40px;
color:rgba(43, 69, 155, 1);
@media screen and (max-width:576px){
  font-size:16px;
  margin-left:3%;
}
`;
export const TrustTitle=styled.p`
font-size:20px;
color:white;
width:80%;
margin:30px 0px 30px 0px;
margin-left:6%;
@media screen and (max-width:576px){
  width:100%;
  margin-left:3%;
  margin-right:2px;
  font-size:14px;
}
`;
export const TrustDescription = styled.ul`
  font-size: 20px;
  color: white;
  margin: 0px 40px 30px 0px;
  margin-left:6%;
  display: flex;
  flex-direction: column;
  list-style-type: disc; 
  @media screen and (max-width:576px){
    width:95%;
    margin-left:3%;
    margin-right:0px;
    font-size:14px;
  }
`;

export const TrustDescriptionItems = styled.li`
  list-style-type: none;
  color: white;
  margin-bottom: 7px;
 
  &:before {
    content: '•'; /* Unicode character for a bullet point */
    color: white;
    margin-right: 5px;
  }
  @media screen and (max-width:576px){
    
    margin-left:-20px;
    margin-right:0px;
    font-size:14px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #dfe3f0;
  justify-content:flex-start;
  align-self:left;
  border-radius:10px;
  margin-left:6%;
  width: 80%;
  margin-bottom: 30px;
  padding:5px;
  margin-top:5%;
  @media screen and (max-width:576px){
    width:95%;
    margin-left:3%;
  }
`;

export const Image = styled.img`
  height: 30px;
  width: 180px;
  padding: 0px 50px 0px 50px;
  border-right: 1px solid #abaaaa;
  @media screen and (max-width:576px){
    height:30px;
    width:80px;
    padding:0px;
  }
`;

export const Img = styled(Image)`
  border: 0px;
`;
export const TechTopicsTitle=styled.h2`
font-size:24px;
font-weight:600;
margin:30px 40px 20px 40px;
color:rgba(43, 69, 155, 1);
`;
export const TechTopics=styled.h2`
color:white;
font-weight:700;
font-size:22px;
margin:30px 40px 15px 0px;
margin-left:6%;
@media screen and (max-width:576px){
  font-size:16px;
  margin-left:3%;
}
`;
export const TechTopicsCon=styled.div`
display:flex;
flex-wrap:wrap;
margin:10px 30px 40px 0px;
margin-left:6%;
width:57%;
@media screen and (max-width:576px){
  width:97%;
  margin-left:3%;
}
`;
export const TrustWorthyText=styled.p`
font-size:20px;
color:white;
margin:10px 30px 20px 0px;
margin-left:6%;
line-height:1.5;
width:80%;
@media screen and (max-width:576px){
  
  margin-left:3%;
  font-size:14px;
}
`;

export const ExpContainer=styled.div`
display:flex;
flex-direction:column;
padding-left:3%;
width:80%;
@media screen and (max-width:576px){
  width:100%;
  padding:0px;
}
`;
export const TransparentBg=styled.span`
width:60px;
height:55px;
margin-top:65px;
margin-left:30px;
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
z-index:0;
border-radius:1px;
margin-left:6%;
@media screen and (max-width:576px){
  margin-top:20px;
  width:45px;
  height:45px;
  margin-left:3%;
}
`;
export const ContactCon = styled.div`
  background-color:rgba(12, 17, 31, 1);
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;