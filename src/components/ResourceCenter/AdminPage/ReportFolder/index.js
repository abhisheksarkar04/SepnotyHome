import Styled from "styled-components";
import { IoClose } from "react-icons/io5";
import editIcon from "../Projects/images/Group.png";
import deleteIcon from "../Projects/images/Vector (2).png"
import grp1 from "../../AnalyticsAndReporting/Group 1261153426.png";
import grp2 from "../../AnalyticsAndReporting/Group 1261153427.png";
import grp3 from '../../AnalyticsAndReporting/Group 1261153428.png';
import grp4 from '../../AnalyticsAndReporting/Group 1261153429.png';
import purchase1 from "../../AnalyticsAndReporting/Images/Group 340.png";
import tick from "../../AnalyticsAndReporting/Images/Group 343.png";

const ReportPage = () => {
    return(
        <Container>
        <EditCon>
        <H>
            Reports
            </H>
          <EditTool src={editIcon} alt="edit" />
          <EditTool src={deleteIcon} alt="delete" />
        </EditCon>
        <Para1>
        <Span></Span>"Data-Driven Decisions: Harness the power of analytics and reporting to drive your business forward."
        </Para1>
        <Main>
            <Para2>
            <Span></Span>If you're speaking about a more sophisticated or premium version of a report-receiving service?
            </Para2>
            <Para3>
            <Span></Span>"Upgrade to our Pro Version for in-depth analytics and detailed reports, empowering you with valuable insights to drive your business forward."
Feel free to adjust it according to your specific context or branding!
            </Para3>
             
        </Main>
        <MobSection1>
                      <GraphImageItem src={grp3} alt="graph reports"  />  
                      <GraphImageItem src={grp1} alt="graph reports"  />
                      <GraphImageItem src={grp4} alt="graph reports"  />
                      <GraphImageItem src={grp2} alt="graph reports"  />
        </MobSection1> 
        <Para1><Span></Span>We have dedicatedly executed maximum projects on a periodic basis like monthly, quarterly and yearly, project execution capacity for the year! This accomplishment reflects the smart work, hard work, dedication, and efficiency of our team members.</Para1>
        <ProExtendBottom>
                           <IoClose
                                    style={{
                                      color: 'white', // Change outline color to white
                                      fontSize: '2.2em', // Increase size (adjust as needed)
                                      fontWeight: 'none',
                                      margin: '-10px 0px 0px 90%',
                                      cursor: "pointer",
                                    }}
                                  />
                                   <PurChaseImg src={tick} alt="purchase" />
                                   <PurChaseHead>Unlock All Features</PurChaseHead>
                                   <PurChasePara>"Ready to take your experience to the next level?
                                       Unlock the pro version for exclusive perks and 
                                       advanced functionalities."
                                   </PurChasePara>
                                   <PurChaseItems>
                                       <PurchaseTickImg src={purchase1} />
                                       <PurChaseItemsPara>Unlock all Activities</PurChaseItemsPara>
                                   </PurChaseItems>
                                   <PurChaseItems>
                                       <PurchaseTickImg src={purchase1} />
                                       <PurChaseItemsPara>See last year Reports</PurChaseItemsPara>
                                   </PurChaseItems>
                                   <PurChaseItems>
                                       <PurchaseTickImg src={purchase1} />
                                       <PurChaseItemsPara>Download year Reports</PurChaseItemsPara>
                                   </PurChaseItems>
                                   <PurChaseButton type="button">Purchase</PurChaseButton>
                                   <RemoveBtn>Remove Purchase</RemoveBtn>
                           </ProExtendBottom>
        </Container>
    )
}
export default ReportPage;
export const PurChaseImg = Styled.img`
   color: #2B459B;
   width: 50px;
   height: 50px

`;
export const PurChaseHead = Styled.h1`
    margin: 20px 0px 20px 0px;
   color: #fff;
    font-size: 23px;

`;
export const PurChasePara = Styled.p`
   color: #fff;
    font-size: 12px;
    width: 100%;
    font-weight: 100;
    line-height: 20px;
    margin: 0px 0 25px 20px; 

`;
export const PurChaseItems = Styled.div`
    display: flex;
   align-self: flex-start;
   margin-left: 110px;

`;
export const PurchaseTickImg = Styled.img`
    margin: 0px 20px 20px 0px;
    height: 18px;
`;

export const PurChaseItemsPara = Styled.p`
   color: #fff;
    font-size: 17px;
    font-weight: 600;
`;
export const PurChaseButton = Styled.button`
border-radius: 30px;
background: linear-gradient(
  90deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(252, 252, 252, 0) 0%,
  rgba(252, 252, 252, 1) 0%,
  rgba(246, 251, 34, 1) 100%
);
height: 40px;
width: 140px;
cursor: pointer;
margin: 20px 0 20px 0;
font-weight: 600;
`;
export const RemoveBtn = Styled.button`
    margin: 0px 0px 0px 0px;
   color: #fff;
   cursor: pointer;
    font-size:12px;
    text-align:center;
    align-self: center;
`;
const ProExtendBottom = Styled.div`
    margin: 30px 0px 0px 13%; 
   width: 60%;
   background-color: #263238;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 20px;
   margin-bottom:40px;
   margin-left:200px;
   margin-top:40px;
`;
export const MobSection1=Styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    background-color:rgba(12, 17, 31, 1);
    padding: 0 0 0 30px;
    gap:40px;
    margin-top:50px;
    margin-bottom:40px;
`;
const GraphImageItem = Styled.img`
    margin: 0px 20px 20px 0px;
   width: 350px;
   height: 380px;
`;

const Para3 = Styled.p`
font-size:19px;
`
const Para2 = Styled.p`
color:#2B459B;
font-size:20px;
`
const Main = Styled.div`
width:90%;
background-color:#D9D9D9;
padding:20px;
margin-top:20px;
gap:10px;
margin-left:20px;
`
const Span=Styled.span`
margin-left:50px;

`
const Para1 = Styled.p`
margin-top:-20px;
color:white;
font-size:22px;
margin-left:20px;
`
const Container = Styled.div`
margin-top: 10px;
  background-color: #0c111f;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  width: 80%;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin-left: 30px;
  padding: 3px;
`
const H = Styled.h1`
color:#ffffff;
font-size:24px;
padding:30px;
margin-right:75%;
margin-top:-30px;
`
const EditTool = Styled.img`
  height: 26px;
  width: 22px;
  margin-left: 20px;
`;
const EditCon = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
`;