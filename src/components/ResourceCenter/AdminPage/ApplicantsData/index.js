import React, { useState } from "react";
import styled from "styled-components";


import ImgBack from "../ResponseRecived/Images/LeftArrow.svg";
import ImgNext from "../ResponseRecived/Images/rightArrow.svg";

import {
  
  Table,
  Container,
  SNo,
  Name,
  Company,
  Email,
  Phone,
  RowSno,
  RowName,
  RowCompany,
  RowEmail,
  RowPhone,
  RowMessage,
  TableContainer,
  Button,
  ButtonCon,
  RowFileUpload
} from "./styled";

const itemsPerPage = 10;

const data = [
  {
    sNo: 1,
    applicantName: "Thriyojana",
    experience: "2 years",
    email: "thriyoga8989@gmail.com",
    phoneNumber: "9839681000",
    role: "Front-End Developer",
    file: ""
  },
  {
    sNo: 2,
    applicantName: "Jai Ram",
    experience: "6 years",
    email: "jairamga8989@gmail.com",
    phoneNumber: "899681000",
    role: "back-End Developer",
    file: ""
  },
  {
    sNo: 3,
    applicantName: "Jhon Leo",
    experience: "10 years",
    email: "johnleo8989@gmail.com",
    phoneNumber: "7879681000",
    role: "back-End Developer",
    file: ""
  },

  // Add more data rows as needed
];
const ApplicantsData = () => {
  const [pageNumber, setPageNumber] = useState(1); // State for current page number

  // Slice the data array to display items for the current page
  const displayedData = data.slice(
    (pageNumber - 1) * itemsPerPage,
    pageNumber * itemsPerPage
  );

  return (
    <Container>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <SNo>S.NO</SNo>
              <Name>Applicant Name</Name>
              <Company>Experience </Company>
              <Email>E-Mail Id</Email>
              <Phone>Contact Number</Phone>
              <SNo>Role</SNo>
              <Name>Resume</Name>
              {/* Add more column headers if needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <RowSno>{row.sNo}</RowSno>
                <RowName>{row.applicantName}</RowName>
                <RowCompany>{row.experience}</RowCompany>
                <RowEmail>{row.email}</RowEmail>
                <RowPhone>{row.phoneNumber}</RowPhone>
                <RowMessage>{row.role}</RowMessage>
                <RowFileUpload>
                  {row.file}
                </RowFileUpload>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <ButtonCon>
        <Button type="button"
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
           &larr;
        </Button>
        <Button type="button"
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber * itemsPerPage >= data.length}
        >
          &rarr;
        </Button>
      </ButtonCon>
    </Container>
  );
};

export default ApplicantsData;


const Cont = styled.div`
display:flex;
flex-direction : row;
justify-content:center;
align-items:center;
gap:30px;
margin-bottom:20px;
`;