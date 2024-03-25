import React from "react";
import {
  Rows,
  Table,
  Container,
  SNo,
  Name,
  Company,
  Email,
  Phone,
  Columns,
  RowSno,
  RowName,
  RowCompany,
  RowEmail,
  RowPhone,
  RowMessage,
  TableContainer,
} from "./styled";

const data = [
  {
    sNo: 1,
    name: "Shalini",
    companyName: "Avatar space Technology Private Limited Shalini11",
    email: "Shalini11@gmail.com",
    phoneNumber: "9526810107",
    message: "",
  },
  {
    sNo: "",
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: "",
  },
  {
    sNo: "",
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: "",
  },

  // Add more data rows as needed
];
const ContactUsData = () => {
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
                {/* Add more columns if needed */}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ContactUsData;
