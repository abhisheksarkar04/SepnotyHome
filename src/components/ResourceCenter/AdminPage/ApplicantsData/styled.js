import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ffffff;
  border-radius: 18px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const TableContainer = styled.div`
  border-radius: 10px;
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  color: #ffffff;
  margin: 20px;
  font-size: 12px;
  
  border-radius: 0px;
  border: 1px solid #407BFF;
`;

export const Columns = styled.th`
  border: 1px solid #407BFF;
  font-weight: 500;
  color: #407BFF;
`;

export const Rows = styled.td`
  border: 1px solid #407BFF;
  horizontal-align: middle; /* Vertically center the text */
`;

export const SNo = styled.th`
  border: 1px solid #407BFF;
  font-weight: 500;
  text-align: center;
  color: #407BFF;
`;

export const Name = styled.th`
  border: 1px solid #407BFF;
  font-weight: 500;
  text-align: center;
  color: #407BFF;
  width: 10%;
  padding: 5px;
`;

export const Company = styled.th`
  border: 1px solid #407BFF;
  font-weight: 500;
  color: #407BFF;
  width: 10%;
  text-align: center;
`;

export const Email = styled.th`
  border: 1px solid #407BFF;
  font-weight: 500;
  color: #407BFF;
  width: 10%;
  text-align: center;
`;

export const Phone = styled.th`
  border: 1px solid #407BFF;
  font-weight: 500;
  color: #407BFF;
  width: 10%;

  text-align: center;
  word-wrap: break-word;
`;

export const RowSno = styled.td`
  border: 1px solid #407BFF;
  word-wrap: break-word;
  text-align: center;
  width: 5%;
  height: 50px;
`;

export const RowName = styled.td`
  border: 1px solid #407BFF;
  text-align: center;
  width: 10%;

`;

export const RowCompany = styled.td`
  border: 1px solid #407BFF;
  text-align: center;
  width: 10%;
`;

export const RowEmail = styled.td`
  border: 1px solid #407BFF;
  text-align: center;
 
  width: 13%;
  max-width: 145px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 3px;
    width: 3px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Color of the track */
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9; /* Color of the scrollbar thumb */
    border-radius: 4px;
    /* Radius of the scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb on hover */
  }
`;
export const RowPhone = styled.td`
  border: 1px solid #407BFF;
  text-align: center;
  width: 10%;
`;
export const RowMessage = styled.td`
  border: 1px solid #407BFF;
  text-align: center;
  width: 13%;
`;

export const Button = styled.button`
  background-color: #ffffff;
  color: #0C111F;
  height: 15px;
  width: 15px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  font-weight: bold;
  padding-bottom: 4px;
  margin-right: 20px;
  
`;

export const ButtonCon = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
justify-content: center;
`;

export const RowFileUpload=styled.td`
border: 1px solid #407BFF;
  padding: 5px 0px 5px 30px;
  width: 10%;
`