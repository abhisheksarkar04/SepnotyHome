// import React, { PureComponent } from 'react';
// import styled from "styled-components";
// import { BarChart, Bar  } from 'recharts';
import MobSectionOne from './MobSectionOne/MobSectionOne';
import FooterSection from "../../Footer/FooterSection";
import { CiSearch } from "react-icons/ci";
import { BsSortDownAlt } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import React, {useState} from "react";



// Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Text, ResponsiveContainer
import DaimondImg from "./image 22.png";
import Vector from "./Vector.png";
import GraphPro from "./Rectangle 6232.png";

import grp1 from "./Group 1261153426.png";
import grp2 from "./Group 1261153427.png";
import grp3 from './Group 1261153428.png';
import grp4 from './Group 1261153429.png';

import purchase1 from "./Images/Group 340.png";
import tick from "./Images/Group 343.png";



import {
    // Header,
    // MobSection,
    // Span,
    // CirclesContainer,
    // CircleOne,
    // CircleTwo,
    // CircleThree,
    // // CardSection,
    // // GraphsContainer,
    // PercentageContainer,
    MobSection1,
    AnalyticsSection,
    AnalyticsPage,
    GdPageTitle,
    ServiceSpan,
    GdHeading,
    ProMainDiv,
    ProTop,
    ProBottom,
    ProTopHead,
    ProTopImg,
    ProBtn,
    VectorImg,
    GraphImg,
    BtnLearn,
    PatternCon,
    SmallPattern,
    ListHeading,
    HeadingSection,
    SearchSection,
    HeadingSearch,
    ElementsSection,
    SearchSectionBtn,
    GraphImageItem,
    DateInput,
    ProExtendMain,
    ProExtendTop,
    ProExtendBottom,
    TopHead,
    TopPara,
    PurChaseImg,
    PurChaseHead,
    PurChasePara,
    PurChaseItems,
    PurchaseTickImg,
    PurChaseItemsPara,
    PurChaseButton,
    RemoveBtn,

} from "./styled"







const AnalyticsAndReporting = () => {

    const [date, setDate]=useState();
    console.log("Date", date);


    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(true);
  
    const toggleVisibility1 = () => {
      setIsVisible1(!isVisible1);
    };
  
    const toggleVisibility2 = () => {
      setIsVisible2(!isVisible2);
    };
    const toggleVisibility3 = () => {
      setIsVisible3(!isVisible3);
    };


    return(
        <AnalyticsPage>
            
        <GdPageTitle>Resource Center &gt;<ServiceSpan> Analytics and Reporting</ServiceSpan></GdPageTitle>
        <GdHeading>Resources</GdHeading>
        
        <MobSectionOne />
        <HeadingSection>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Case Studies</ListHeading>
              </PatternCon>
              <SearchSection>
                  <HeadingSearch>Search here what you're looking for</HeadingSearch>
                  <ElementsSection>
                     <CiSearch
                      style={{
                        color: 'white', // Change outline color to white
                        fontSize: '2.2em', // Increase size (adjust as needed)
                        fontWeight: 'none',
                        border: '1px solid',
                        padding: '5px',
                        borderRadius: '30px',
                        margin: '0px 0px 0px 10px'
                      }}
                      />

                      <BsSortDownAlt
                           style={{
                            color: 'white', // Change outline color to white
                            fontSize: '2.2em', // Increase size (adjust as needed)
                            fontWeight: 'none',
                            border: '1px solid',
                            padding: '5px',
                            borderRadius: '30px',
                            margin: '0px 0px 0px 10px'
                          }}

                       />

                  {/* <input type="date" onChange={e=>setDate(e.target.value)}  
                       style={{
                        backgroundColor: 'transparent',
                        color: '#fff', // Change outline color to white
                        border: '1px solid',
                        width: '150px',
                        height: '36px',
                        borderRadius: '3px',
                        textAlign: 'center',
                        fontSize: '18px',
                        margin: '0px 0px 0px 10px',
                        fill: '#fff',
                        cursor: 'pointer',
                      }}
                   /> */}

                    <DateInput type="date" id="monthInput" name="monthInput" />

                  <SearchSectionBtn>Download Report</SearchSectionBtn>
                   

                  </ElementsSection>
                 
              </SearchSection>
        </HeadingSection>
         <AnalyticsSection>
                   {isVisible1 && (
                           <ProMainDiv>     
                           <ProTop>
                                 <ProBtn> <VectorImg src={Vector} alt="Vector"/> 15 Days</ProBtn>
                                 
                                 <IoClose onClick={toggleVisibility1}
                             style={{
                               color: 'white', // Change outline color to white
                               fontSize: '2.2em', // Increase size (adjust as needed)
                               fontWeight: 'none',
                               margin: '10px 0px 0px 90%',
                               cursor: "pointer",
                             }}
                           />
                                 <ProTopHead>
                                   Pro Version
                                 </ProTopHead>
                                 
                                 <ProTopImg src={DaimondImg} alt=" Pro version Get" /> 
                           </ProTop>
                           <ProBottom>
                               <GraphImg src={GraphPro} alt="Graph set"/>
                               <BtnLearn type="button" onClick={toggleVisibility2}>Learn More</BtnLearn>
                           </ProBottom>
                       </ProMainDiv>
                   )}
               {isVisible2 ? (
                  <MobSection1>
                      <GraphImageItem src={grp3} alt="graph reports"  />  
                      <GraphImageItem src={grp1} alt="graph reports"  />
                      <GraphImageItem src={grp4} alt="graph reports"  />
                      <GraphImageItem src={grp2} alt="graph reports"  />
                </MobSection1>  
               ) : ( 
                <ProExtendMain>
                    <ProExtendTop>
                          <TopHead>
                              If you're referring to a premium or advanced version of a service for receiving reports?
                          </TopHead>
                          <TopPara>
                          "Upgrade to our Pro Version for in-depth analytics and detailed reports, empowering you with valuable insights to drive your business forward."
                                Feel free to adjust it according to your specific context or branding!
                          </TopPara>
                    </ProExtendTop>
                    { isVisible3 && (
                           <ProExtendBottom>
                           <IoClose onClick={toggleVisibility3}
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
                    )}

                   
                </ProExtendMain>
              )}
            
            </AnalyticsSection>  
            <FooterSection />
        </AnalyticsPage>
    )
};
export default AnalyticsAndReporting;