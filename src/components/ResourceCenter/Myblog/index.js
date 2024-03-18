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
import article2 from './Images/article2.svg';



import {

    Container,
    Resources, ContainerOne, Containertwo, ImagesCont,
    Image, AddImg, Contactimgcon, Name, Profile, Containerthree, ColumnDiv,
    ArticalCon, Icons, IconName, Containerfour, SpanHead, ArticleName,
    ArticleDescription, ArticleTime, Arrow, ArticleConatiner,
    ArticleTextConatiner, ArticleTitle, ArticleImg,Div,

} from "./styled";



import FooterSection from "../../Footer/FooterSection";

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
                            <Div>
                                {[{
                                    id: 1,
                                    title: 'IOT',
                                    name: 'AZURE-The Future IOT Security',
                                    imgUrl: article1,
                                    description: "Internet of Things (IoT) has emerged as a game-changer, it has transformed industries, improved efficiency, and changed the way.",
                                    time: "Jan 7 2024",
                                },
                                {
                                    id: 2,
                                    title: 'Mobile App Development',
                                    name: '60+ Brilliant App Ideas for Startups to Launch in 2024',
                                    imgUrl: article2,
                                    description: "Coming up with million-dollar app ideas is not easy. The concept of the app is the foremost important part.",
                                    time: "Jan 23 2024",
                                },
                                {
                                    id: 3,
                                    title: 'UI/UX',
                                    name: 'The Importance of UI/UX for your Online Business',
                                    imgUrl: article1,
                                    description: "Imagine sitting down to watch a highly anticipated action movie, only to find that it lacks excitement, meaningful plot twists.",
                                    time: "NOV 08 2024",
                                },
                                {
                                    id: 4,
                                    title: 'CRM',
                                    name: 'Top Reasons to Migrate from Zoho CRM to Dynamics 365 Sales',
                                    imgUrl: article2,
                                    description: "Customer Relationship Management (CRM) systems play a crucial role in modern business operations. They help organizations manage customer data, streamline.",
                                    time: "Jan 10 2024",
                                },
                                ].map(listing =>
                                (<ArticleConatiner>
                                    <ArticleImg src={listing.imgUrl} alt="not found">
                                    </ArticleImg>
                                    <ArticleTextConatiner>
                                        <ArticleTitle>{listing.title}</ArticleTitle>
                                        <ArticleName>{listing.name}</ArticleName>
                                        <ArticleDescription>{listing.description}</ArticleDescription>
                                        <ArticleTime>{listing.time}</ArticleTime>
                                        <Arrow>&rarr;</Arrow>
                                    </ArticleTextConatiner>
                                </ArticleConatiner>))}
                            </Div>
                        </Containerfour>
                    </Containerthree>
                </ContainerOne>
            </Container>
            <FooterSection />
        </>
    );
};

export default Myblog;
