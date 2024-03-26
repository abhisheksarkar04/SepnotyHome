import React from "react";
import {
    LastButton,
    Table,
    Container,
    SNo,
    Name,
    AccessType,
    Blog,
    Article,
    RowReports,
    RowSno,
    RowName,
    RowAccessType,
    RowBlog,
    RowCareerOppertunities,
    RowArticle,
    RowProjects,
    RowContactUs,
    RowApplicants,
    TableContainer,
    CareerOppertunities,
    Reports,
    Projects,
    ContactUs,
    Applicants,

} from "./styled";

const data = [
    {
        sNo: 1,
        name: "ManiKumar",
        accesstype: "",
        blog: "",
        article: "",
        careeroppertunities: "",
        reports: "",
        projects: "",
        contactus: "",
        applicants: "",

    },
    {
        sNo: 2,
        name: "ManiKumar",
        accesstype: "",
        blog: "",
        article: "",
        careeroppertunities: "",
        reports: "",
        projects: "",
        contactus: "",
        applicants: "",
    },
    {
        sNo: 3,
        name: "ManiKumar",
        accesstype: "",
        blog: "",
        article: "",
        careeroppertunities: "",
        reports: "",
        projects: "",
        contactus: "",
        applicants: "",
    },
    {
        sNo: 4,
        name: "ManiKumar",
        accesstype: "",
        blog: "",
        article: "",
        careeroppertunities: "",
        reports: "",
        projects: "",
        contactus: "",
        applicants: "",
    },
    {
        sNo: 5,
        name: "ManiKumar",
        accesstype: "",
        blog: "",
        article: "",
        careeroppertunities: "",
        reports: "",
        projects: "",
        contactus: "",
        applicants: "",
    },

    // Add more data rows as needed
];


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            marginInline: -44,
            width: 86,
        }}
    />
);
const ColoredLine1 = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            marginInline: -10,
            width: 112,
        }}
    />
);
const ColoredLine2 = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            marginInline: -70,
            width: 160,
        }}
    />
);
const UserAuthorization = () => {
    return (
        <Container>
            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            <SNo>S.No.</SNo>
                            <Name>Name</Name>
                            <AccessType>Access Type</AccessType>
                            <Blog>Blog</Blog>
                            <Article>Article</Article>
                            <CareerOppertunities>Career Oppertunities</CareerOppertunities>
                            <Reports>Reports</Reports>
                            <Projects>Projects</Projects>
                            <ContactUs>Contact Us</ContactUs>
                            <Applicants>Applicants</Applicants>

                            {/* Add more column headers if needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <RowSno>{row.sNo}</RowSno>
                                <RowName>{row.name}</RowName>
                                <RowAccessType>{row.accesstype}
                                    <tr> Create</tr>
                                    <ColoredLine1 color="white" />
                                    <tr>Edit / Delete</tr>
                                </RowAccessType>
                                <RowBlog>{row.blog}
                                    <tr> <input type="checkbox" /></tr>
                                    <ColoredLine color="white" />
                                    <tr> <input type="checkbox" /></tr>
                                </RowBlog>

                                <RowArticle >{row.article}
                                    <tr> <input type="checkbox" /></tr>
                                    <ColoredLine color="white" />
                                    <tr> <input type="checkbox" /></tr>
                                </RowArticle>
                                <RowCareerOppertunities>{row.careeroppertunities}
                                    <tr> <input type="checkbox" /></tr>
                                    <ColoredLine2 color="white" />
                                    <tr> <input type="checkbox" /></tr>
                                </RowCareerOppertunities>
                                <RowReports>{row.reports}
                                    <tr> <input type="checkbox" /></tr>
                                    <ColoredLine color="white" />
                                    <tr> <input type="checkbox" /></tr>
                                </RowReports>
                                <RowProjects>{row.projects}
                                    <tr> <input type="checkbox" /></tr>
                                    <ColoredLine color="white" />
                                    <tr> <input type="checkbox" /></tr>
                                </RowProjects>
                                <RowContactUs>{row.contactus}
                                    <tr> <input type="checkbox" /></tr>
                                </RowContactUs>
                                <RowApplicants>{row.applicants}
                                    <tr> <input type="checkbox" /></tr>
                                </RowApplicants>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            <LastButton>Make Changes</LastButton>
        </Container>
    );
};

export default UserAuthorization;
