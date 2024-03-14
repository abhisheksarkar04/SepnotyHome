import { Link } from "react-router-dom";

import sepnoty from "./Images/sepnoty.png";
import add from "./Images/add.png";
import profile from "./Images/profile.png";

import vector from "./Images/Vector.png";
import repots from "./Images/Rectangle 6959.png";
import Projects from "./Images/Rectangle 6960.png";
import careericon from "./Images/careericon.png";
import blogicon from "./Images/blogicon.png";
import eventicon from "./Images/eventicon.png";
import article1 from './Images/article1.png';


import {
    ListInnerContainer,
    Container,
    Resources, ContainerOne, Containertwo, ImagesCont,
    Image, AddImg, Contactimgcon, Name, Profile, Containerthree, ColumnDiv,
    ArticalCon, Icons, IconName, Containerfour, DateInput, SpanHead

} from "./styled";



import FooterSection from "../../Footer/FooterSection";
import { useState } from "react";

const Myblog = () => {


    return (
        <>
            <Container>
                <Resources>Resources &gt; Admin login &gt; <SpanHead>Dashboard Page</SpanHead></Resources>
                <ContainerOne>
                    <Containertwo>
                        <ImagesCont>
                            <Image src={sepnoty} alt="sepnoty" />
                            <Link to="/resource-center/admin-login/dash-board/create-post">
                                <AddImg src={add} alt="addButton" />
                            </Link>
                        </ImagesCont>
                        <Contactimgcon>
                            <Name>Manikumar Pokala</Name>
                            <Profile src={profile} alt="profile" />
                        </Contactimgcon>

                    </Containertwo>
                    <Containerthree>
                        <ColumnDiv>
                            <ArticalCon>
                                <Icons src={vector} alt="icon" />
                                <IconName>My Articles</IconName>
                            </ArticalCon>
                            <ArticalCon>
                                <Icons src={blogicon} alt="icon" />
                                <Link to="/ResourceCenter/Myblog">
                                    <IconName>My Blogs</IconName>
                                </Link>

                            </ArticalCon>
                            <ArticalCon>
                                <Icons src={careericon} alt="icon" />
                                <IconName>My Career Opportunities</IconName>
                            </ArticalCon>
                            <ArticalCon>
                                <Icons src={repots} alt="icon" />
                                <IconName>Reports</IconName>
                            </ArticalCon>
                            <ArticalCon>
                                <Icons src={Projects} alt="icon" />
                                <IconName>Projects</IconName>
                            </ArticalCon>
                            <ArticalCon>
                                <Icons src={eventicon} alt="icon" />
                                <IconName>Events and Worshops</IconName>
                            </ArticalCon>

                        </ColumnDiv>
                        <Containerfour>
                        <div style={{ display: 'flex', width: '100%' }}>
                {[{  name: 'UI Designer', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
                (<ListInnerContainer>
                    
                  
                </ListInnerContainer>))}
                {/* <p>button</p> */}
              </div>


                        </Containerfour>



                    </Containerthree>


                </ContainerOne>
            </Container>
            <FooterSection />
        </>
    );
};

export default Myblog;
