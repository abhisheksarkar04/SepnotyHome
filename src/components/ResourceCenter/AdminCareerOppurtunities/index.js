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
import img1 from "./Images/image1.svg";
import img2 from "./Images/image2.svg";
import img3 from "./Images/image3.svg";
import img4 from "./Images/image4.svg";
import img5 from "./Images/image5.svg";
import img6 from "./Images/image6.svg";
import img7 from "./Images/image7.svg";
import img8 from "./Images/image8.svg";

import deleteIcon from "./Images/Vector (2).png";
import editIcon from "./Images/Group.png";



import {
    ListInnerContainer,
    Container,
    Resources, ContainerOne, Containertwo, ImagesCont,
    Image, AddImg, Contactimgcon, Name, Profile, Containerthree, ColumnDiv,
    ArticalCon, Icons, IconName, Containerfour, SpanHead, ListHeading,
    ServiceItemDesc, ApplyButton, Iph, Careop, ListDataContainer, ImageCon, EditTool, IconViews,

} from "./styled";

import FooterSection from "../../Footer/FooterSection";

const AdminCareerOppurtunities = () => {
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
                                <IconName>Articles</IconName>
                            </ArticalCon>
                            <ArticalCon>
                                <Icons src={blogicon} alt="icon" />
                                <Link to="/ResourceCenter/Myblog">
                                    <IconName>Blogs</IconName>
                                </Link>
                            </ArticalCon>
                            <ArticalCon>
                                <Icons src={careericon} alt="icon" />
                                <Link to="/ResourceCenter/AdminCareerOppurtunities">
                                <IconName>Career Opportunities</IconName>
                                </Link>
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
                            <ListHeading>Career Opportunities</ListHeading>
                            <ServiceItemDesc>
                                Career opportunities refer to the various avenues and prospects for professional advancement and development available to individuals within their chosen field or industry. These opportunities encompass job openings, promotions, skill development programs, networking events, educational pursuits, and other avenues for personal and professional growth.
                            </ServiceItemDesc>
                            <div >
                                {[{ image: img1, name: 'Software Tester ', experience: '0-2 years', CTC: 'Up to 4 LPA' },
                                { image: img2, name: 'Software Developer', experience: '0-2 years', CTC: 'Up to 4 LPA' },
                                { image: img3, name: 'Cloud Engineer.', experience: '0-2 years', CTC: 'Up to 4 LPA' },
                                { image: img4, name: 'Digital Marketing Specialist ', experience: '0-2 years', CTC: 'Up to 4 LPA' },
                                { image: img5, name: 'SEO(Search Engine Optimizer)', experience: '0-2 years', CTC: 'Up to 4 LPA' },
                                { image: img6, name: 'Video Editor', experience: '0-2 years', CTC: 'Up to 4 LPA' },
                                { image: img7, name: 'UI/UX Designer.', experience: '0-2 years', CTC: 'Up to 4 LPA' },
                                { image: img8, name: 'Graphic Designer ', experience: '0-2 years', CTC: 'Up to 4 LPA' },

                                ].map(listing =>
                                (<ListInnerContainer>
                                    <ImageCon src={listing.image} alt="dm" />
                                    <ListDataContainer>
                                        <Careop>{listing.name}</Careop>
                                        <Iph>Experience : {listing.experience}<br></br>
                                            CTC : {listing.CTC}<br></br>
                                            Onsite</Iph>
                                    </ListDataContainer>
                                    <IconViews>
                                        <ApplyButton>Apply</ApplyButton><br></br>
                                        <br></br>
                                        <EditTool src={editIcon} alt="edit" />
                                        <EditTool src={deleteIcon} alt="delete" />
                                    </IconViews>
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

export default AdminCareerOppurtunities;
