import React, { useState } from "react";

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
    name: "Shalini",
    companyName: "Avatar space Technology Private Limited Shalini11",
    email: "Shalini11@gmail.com",
    phoneNumber: "9526810107",
    message: "",
    file: ""
  },
  {
    sNo: "",
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: "",
    file: ""
  },
  {
    sNo: "",
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: "",
    file: ""
  },

  // Add more data rows as needed
];
const ContactUsData = () => {
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
              <SNo>S.No.</SNo>
              <Name>Name</Name>
              <Company>Company Name</Company>
              <Email>E-Mail</Email>
              <Phone>Phone Number</Phone>
              <SNo>Message</SNo>
              <Name> File </Name>
              {/* Add more column headers if needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <RowSno>{row.sNo}</RowSno>
                <RowName>{row.name}</RowName>
                <RowCompany>{row.companyName}</RowCompany>
                <RowEmail>{row.email}</RowEmail>
                <RowPhone>{row.phoneNumber}</RowPhone>
                <RowMessage>{row.message}</RowMessage>
                <RowFileUpload>
                  {row.file}
                </RowFileUpload>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <ButtonCon>
        <Button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          &larr;
        </Button>
        <Button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber * itemsPerPage >= data.length}
        >
          &rarr;
        </Button>
      </ButtonCon>
    </Container>
  );
};

export default ContactUsData;
