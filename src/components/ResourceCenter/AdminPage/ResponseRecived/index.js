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
import styled from "styled-components";
import Img1 from "./Images/LeftArrow.svg"
import Img2 from "./Images/rightArrow.svg"

const data = [
  {
    sNo: 1,
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6:"",
    Q7:"",
    Q8:""

  },
  {
    sNo: 2,
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6:"",
    Q7:"",
    Q8:""
  },
  {
    sNo: 3,
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6:"",
    Q7:"",
    Q8:""
  },

  // Add more data rows as needed
];
const ResponseData = () => {
  return (
    <Container>
        <Para1>Website</Para1>
        <TableContainer>
      <Cont>
        <img src={Img1} alt="dummy"/>
        <img src={Img2} alt="dummy"/>
      </Cont>
        <Table>
          <thead>
            <tr>
              <SNo>S.No.</SNo>
              <Phone colSpan="2">Q1</Phone>
              <Phone>Q2</Phone>
              <Phone>Q3</Phone>
              <Phone colSpan="2">Q4</Phone>
              <Phone>Q5</Phone>
              <Phone colSpan="2">Q6</Phone>
              <Phone colSpan="2">Q7</Phone>
              <Phone>Q8</Phone>
              <Phone>Name</Phone>
              <Phone>Company Name</Phone>
              <Phone>Email</Phone>
              <Phone>Phone Number</Phone>
              {/* Add more column headers if needed */}
            </tr>
          </thead>
          <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <RowSno>{row.sNo}</RowSno>
          <RowName>{row.Q1}</RowName>
          <RowName>{row.Q2}</RowName>
          <RowName>{row.Q3}</RowName>
          <RowName>{row.Q2}</RowName>
          <RowName>{row.Q5}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
        </tr>
      ))}
    </tbody>
        </Table>
      </TableContainer>
      

      <Para1>Application</Para1>
      <TableContainer>
      <Cont>
        <img src={Img1} alt="dummy"/>
        <img src={Img2} alt="dummy"/>
      </Cont>
        <Table>
          <thead>
            <tr>
              <SNo>S.No.</SNo>
              <Phone colSpan="2">Q1</Phone>
              <Phone>Q2</Phone>
              <Phone>Q3</Phone>
              <Phone colSpan="2">Q4</Phone>
              <Phone>Q5</Phone>
              <Phone colSpan="2">Q6</Phone>
              <Phone colSpan="2">Q7</Phone>
              <Phone>Q8</Phone>
              <Phone>Name</Phone>
              <Phone>Company Name</Phone>
              <Phone>Email</Phone>
              <Phone>Phone Number</Phone>
              {/* Add more column headers if needed */}
            </tr>
          </thead>
          <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <RowSno>{row.sNo}</RowSno>
          <RowName>{row.Q1}</RowName>
          <RowName>{row.Q2}</RowName>
          <RowName>{row.Q3}</RowName>
          <RowName>{row.Q2}</RowName>
          <RowName>{row.Q5}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
        </tr>
      ))}
    </tbody>
        </Table>
      </TableContainer>


      
      <Para1>SoftWare</Para1>
      <TableContainer>
      <Cont>
        <img src={Img1} alt="dummy"/>
        <img src={Img2} alt="dummy"/>
      </Cont>
        <Table>
          <thead>
            <tr>
              <SNo>S.No.</SNo>
              <Phone colSpan="2">Q1</Phone>
              <Phone>Q2</Phone>
              <Phone>Q3</Phone>
              <Phone colSpan="2">Q4</Phone>
              <Phone>Q5</Phone>
              <Phone colSpan="2">Q6</Phone>
              <Phone colSpan="2">Q7</Phone>
              <Phone>Q8</Phone>
              <Phone>Name</Phone>
              <Phone>Company Name</Phone>
              <Phone>Email</Phone>
              <Phone>Phone Number</Phone>
              {/* Add more column headers if needed */}
            </tr>
          </thead>
          <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <RowSno>{row.sNo}</RowSno>
          <RowName>{row.Q1}</RowName>
          <RowName>{row.Q2}</RowName>
          <RowName>{row.Q3}</RowName>
          <RowName>{row.Q2}</RowName>
          <RowName>{row.Q5}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
          <RowName>{row.Q8}</RowName>
        </tr>
      ))}
    </tbody>
        </Table>
      </TableContainer>
      
    </Container>
  );
};

export default ResponseData;

const Cont = styled.div`
display:flex;
flex-direction : row;
justify-content:end;
align-items:end;
gap:30px;
margin-bottom:20px;
margin-right:10%;
`

const Para1 =  styled.p`
color:white;
text-align:center;
margin-top:20px;
`