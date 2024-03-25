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
        <Table>
          <thead>
            <tr>
              <SNo>S.No.</SNo>
              <Company>Q1</Company>
              <Company>Q2</Company>
              <Email>Q3</Email>
              <Phone>Q4</Phone>
              <SNo>Q5</SNo>
              <Phone>Q6</Phone>
              <Phone>Q7</Phone>
              <Phone>Q8</Phone>
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
                <RowName>{row.Q4}</RowName>
                <RowName>{row.Q5}</RowName>
                <RowName>{row.Q6}</RowName>
                <RowName>{row.Q7}</RowName>
                <RowName>{row.Q8}</RowName>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <Cont>
        <img src={Img1} alt="dummy"/>
        <img src={Img2} alt="dummy"/>
      </Cont>

      <Para1>Application</Para1>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <SNo>S.No.</SNo>
              <Company>Q1</Company>
              <Company>Q2</Company>
              <Email>Q3</Email>
              <Phone>Q4</Phone>
              <SNo>Q5</SNo>
              <Phone>Q6</Phone>
              <Phone>Q7</Phone>
              <Phone>Q8</Phone>
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
                <RowName>{row.Q4}</RowName>
                <RowName>{row.Q5}</RowName>
                <RowName>{row.Q6}</RowName>
                <RowName>{row.Q7}</RowName>
                <RowName>{row.Q8}</RowName>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <Cont>
        <img src={Img1} alt="dummy"/>
        <img src={Img2} alt="dummy"/>
      </Cont>


      
      <Para1>Software</Para1>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <SNo>S.No.</SNo>
              <Company>Q1</Company>
              <Company>Q2</Company>
              <Email>Q3</Email>
              <Phone>Q4</Phone>
              <SNo>Q5</SNo>
              <Phone>Q6</Phone>
              <Phone>Q7</Phone>
              <Phone>Q8</Phone>
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
                <RowName>{row.Q4}</RowName>
                <RowName>{row.Q5}</RowName>
                <RowName>{row.Q6}</RowName>
                <RowName>{row.Q7}</RowName>
                <RowName>{row.Q8}</RowName>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <Cont>
        <img src={Img1} alt="dummy"/>
        <img src={Img2} alt="dummy"/>
      </Cont>
    </Container>
  );
};

export default ResponseData;

const Cont = styled.div`
display:flex;
flex-direction : row;
justify-content:center;
align-items:center;
gap:30px;
margin-bottom:20px;
`

const Para1 =  styled.p`
color:white;
text-align:center;
margin-top:20px;
`