import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
  padding-bottom: 20px;
  width: 100%;
`;

export const Header = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  padding: 30px 20px 30px 6%;
  @media screen and (max-width: 576px) {
    font-size: 3vw;
    padding: 10px 20px 20px 6%;
  }
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Resource = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  padding: 0px 30px 20px 6%;
  @media screen and (max-width: 576px) {
    font-size: 4vw;
  }
`;

export const ContentRecomContainer = styled.div`
  background-image: linear-gradient(#1e3c72, #2a5298);
  padding: 3% 0px 3% 6%;
  @media screen and (max-width: 576px) {
    height: 25vh;
    padding: 6% 0px 3% 6%;
  }
`;

export const ConRecHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 4vw;
    margin-bottom: 20px;
  }
`;

export const ConRecDesc = styled.p`
  font-size: 23px;
  color: #ffffff;
  width: 50%;
  padding: 20px 30px 30px 0px;
  @media screen and (max-width: 576px) {
    font-size: 3vw;
    width: 80%;
    padding: 0px 30px 30px 0px;
  }
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #ffffff, #fff741);
  padding: 5px 25px 5px 25px;
  border-radius: 20px;
  color: #234581;
  border: 0px;
  outline: none;
  font-size: 13px;
  margin-top: 20px;
`;

export const Rectangle1 = styled.img`
  position: absolute;
  right: 0;
  height: 70%;
  width: 38%;
  top: 15%;
  z-index: 0;
`;

export const Rectangle2 = styled.img`
  position: absolute;
  right: 18%;
  height: 80%;
  width: 60%;
  top: -5%;
  z-index: 0;
`;

export const Rectangle3 = styled.img`
  position: absolute;
  left: 0%;
  height: 40%;
  width: 17%;
  top: 39%;
  z-index: 0;
`;
export const HeadingCon = styled.div`
  padding-left: 6%;
  
`;
export const ListHeading = styled.h1`
  font-size: 22px;
  color: #2b459b;
  font-weight: bold;
  padding-left: 9%;
  letter-spacing: 0.5px;
  @media screen and (max-width: 576px) {
    font-size: 4vw;
    padding-left: 14%;

  }

`;


export const Small = styled.img`
  position: absolute;
  height: 55px;
  width: 60px;
  z-index: 0;
  margin-left: 7%;
  @media screen and (max-width: 576px) {
    height: 6vh;
    width: 11vw;

  }
`;

export const Small1 = styled.img`
  position: absolute;
  height: 55px;
  width: 60px;
  margin-left: 7%;
  z-index: 0;
  @media screen and (max-width: 576px) {
    height: 6vh;
    width: 12vw;
    margin-left: 8%;

  }
`;
export const Small2 = styled.img`
  position: absolute;
  height: 55px;
  margin-left: 7%;
  width: 60px;
  z-index: 0;
  @media screen and (max-width: 576px) {
    height: 6vh;
    width: 11vw;

  }
`;
export const LabelCont = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #8196db;
  padding: 15px 40px 5px 60px;
  height: 60px;
  font-size: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1.3px 2px 0px #ffffff;
  @media screen and (max-width: 576px) {
    padding: 10px 10px 10px 10px;
    margin-left: 10px;
    height: 30px;
    font-size: 1vw;
    width: 100%;
  }
`;

export const Topics = styled.h1`
  color: #ffffff;
  font-weight: 500;
  padding-left: 60px;
  @media screen and (max-width: 576px) {
    padding-left: 0px;
   font-size: 2vw;

  }
`;

export const DataLabels = styled.h1`
  color: #ffffff;
  font-weight: 500;
  padding-left: 30px;
  @media screen and (max-width: 576px) {
    

  }
`;

export const DataCon = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  @media screen and (max-width: 576px) {
    
    justify-content: space-evenly;

  }
  
`;

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 7% 10px 7%;
  @media screen and (max-width: 576px) {
    margin: 50px 10px 10px 0px;
    width: 90%;

  }
`;

export const ViewButton = styled.button`
  background-color: #254989;
  font-size: 12px;
  color: #ffffff;
  border: 0px;
  outline: none;
  padding: 10px 40px 10px 40px;
  border-radius: 20px;
  margin-bottom: 60px;
  align-self: center;
  @media screen and (max-width: 576px) {
   height: 30px;
   width: 100px;
   padding: 8px 10px 10px 10px;
   margin-top: 30px;
   margin-left: 20%;
  }
`;
export const ViewButton2 = styled.button`
  background-color: #254989;
  font-size: 12px;
  color: #ffffff;
  border: 0px;
  outline: none;
  padding: 10px 40px 10px 40px;
  border-radius: 20px;
  margin-bottom: 60px;
  align-self: center;
  @media screen and (max-width: 576px) {
   height: 30px;
   width: 100px;
   padding: 8px 10px 10px 10px;
   margin-top: -10px;
   margin-left: 15%;

  }
`;

export const DailyContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4em 0 0px 0;
`;
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 30px 0;
  padding: 0px 20px 0px 5em;
  @media screen and (max-width: 576px) {
     flex-direction: column;
     margin: 10px 0 5px 0;
     padding: 0px 20px 0px 5px;
  }
`;
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c1cae7;
  width: 35%;
  border-radius: 5px;
  margin-right: 20%;
  padding: 10px;
  @media screen and (max-width: 576px) {
    width: 80%;
    margin-right: 0;
    margin-left: 10px;
    padding: 3px;
 }
`;
export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #c1cae7;
  border-radius: 7px;
  @media screen and (max-width: 576px) {
    width: 80%;
    margin-top: 30px;
    margin-left: 15%;
 }
`;

export const IconList = styled.ul`
  border-radius: 8px;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  align-items: center;
  margin: 0 10% 0 0;
  background-image: linear-gradient(#2e6790, #aac2e5, rgba(0, 0, 10, 0.5));
  @media screen and (max-width: 576px) {
    width: 10%;
    margin: 0 2% 0 0;
    padding: 0 0px 0 0px;
 }
`;
export const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 0 10px 0px;
  @media screen and (max-width: 576px) {
    height: 4vh;
  width: 5vw;
    margin: 0 0 0px -8px;
 }
`;
export const ChatHistory = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 20px 60px 20px;
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
    margin: 30px 0px 60px 20px;
 }
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    
 }
  
`;

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #254989;
  padding: 3px 10px 8px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    height: 10vh;
  }
`;

export const Person = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 50px;
  @media screen and (max-width: 576px) {
    margin-right: 13px;
    height: 8vh;
    width: 10vw;
  }
`;

export const Name = styled.h1`
  font-size: 16px;
  color: #ffffff;
  margin: 0px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    font-size: 3.5vw;
  }
`;

export const LastSeen = styled.p`
  font-size: 11px;
  color: #ffffff;
  margin: 0px;
  font-weight: 200;
  @media screen and (max-width: 576px) {
    font-size: 2vw;
  }
`;

export const PersonDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px 10px 10px;
  @media screen and (max-width: 576px) {
    
   
  }
`;
export const Icons = styled.img`
  height: 13px;
  width: 13px;
  margin-right: 10px;
  @media screen and (max-width: 576px) {
    height: 3vh;
  width: 4vw;
  }
`;

export const FromContainer = styled.div`
  margin-bottom: 20px;
  align-self: flex-start;
  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

export const FromTime = styled.p`
  font-size: 12px;
  color: #263238;
  margin: 0;
  padding: 10px 0px 3px 10px;
`;

export const FromMessage = styled.p`
  background-color: #254989;
  font-size: 13px;
  color: #ffffff;
  border-radius: 5px;
  padding: 12px 100px 12px 12px;
  margin: 0;
  @media screen and (max-width: 576px) {
    font-size: 2.5vw;
  }
`;

export const ToContainer = styled.div`
  margin-bottom: 20px;
  align-self: flex-end;
  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

export const ToTime = styled.p`
  font-size: 12px;
  color: #263238;
  margin: 0;
  padding: 10px 10px 3px 0px;
  text-align: right;
`;

export const ToMessage = styled.p`
  background-color: #254989;
  font-size: 13px;
  color: #ffffff;
  border-radius: 5px;
  padding: 12px 30px 12px 12px;
  margin: 0;
  @media screen and (max-width: 576px) {
    font-size: 2.5vw;
  }
`;



export const TextArea = styled.div`
  background-color: #254989;
  font-size: 12px;
  color: #ffffff;
  border-radius: 4px;
  padding: 0px 10px 0px 20px;
  margin: 0px;
  display: flex;
  height:30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ChatHeading = styled.h1`
  font-size: 17px;
  color: #2b459b;
  font-weight: bold;
  margin: 20px 10px 20px 20px;
  @media screen and (max-width: 576px) {
    margin: 10px 10px 10px 10px;
  }
`;
export const SendBg = styled.button`
  height: 23px;
  width: 23px;
  border-radius: 100px;
  background-color: #ffffff;
  dispaly: flex;
  justify-content: center;
  align-items: center;
`;

export const IconsCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Send = styled.img`
  height: 12px;
  width: 12px;
  align-self: center;
  text-align: center;
`;

export const YourMsg = styled.p`
  font-size: 13px;
  color: #ffffff;
`;
export const MessageHeaderCon = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: #2b459b;
  border-radius: 7px;
  justify-content: space-between;
  padding: 0px 10px 0px 20px;
`;

export const MessHeading = styled.h1`
  font-size: 18px;
  color: #ffffff;
  margin:15px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    font-size: 6vw;

  }
`;

export const Search = styled.img`
  height: 18px;
  width: 18px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 2px;
  @media screen and (max-width: 576px) {
    height: 3vh;
    width: 5.4vw;

  }
`;

export const Write = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 10px;
  @media screen and (max-width: 576px) {
    height: 3vh;
    width: 5.4vw;

  }
`;



export const MailCon = styled.div`
  background-color: #2b459b;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px 15px 3px 15px;
  border-radius: 7px;
  margin: 15px 0 15px 0;
`;

export const MailProfile = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`;

export const Active = styled.span`
  height: 10px;
  width: 10px;
  background-color: #e3555e;
  border-radius: 50px;
  margin-left: 28px;
  margin-bottom: 20px;
  position: absolute;
`;

export const MailMsg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MailIcon = styled.img`
  height: 25px;
  width: 25px;
`;

export const Msg = styled.p`
  font-size: 14px;
  color: #ffffff;
  @media screen and (max-width: 576px) {
    font-size: 3vw;

  }
`;

export const CommunityHeading = styled.h1`
  font-size: 20px;
  color: #8196db;
  font-weight: 500;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    font-size: 4vw;

  }
`;
export const CommunityDesc = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
      width: 70%;
      font-size: 3vw;
   
  }
`;

export const ConnectButton = styled(Button)`
  margin-left: 5%;
  align-self: flex-start;
  font-size: 11px;
  font-weight:600;
  @media screen and (max-width: 576px) {
    width: 35%;
    font-size: 2vw;
    margin-top: -10px;
 
}
`;
export const ProfileList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CommunityCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9%;
  margin-bottom: 40px;
  margin-top: 40px;
`;
