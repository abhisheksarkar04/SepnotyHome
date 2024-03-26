import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ffffff;
  border-radius: 18px;
  width: b 80%;
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
  border-radius: 10px;
  border: 1px solid #8196db;
`;

export const Columns = styled.th`
  border: 1px solid #8196db;
  font-weight: 500;
  color: rgb(129, 150, 219);
`;

export const Rows = styled.td`
  border: 1px solid #8196db;
  padding: 5px 0px;
  horizontal-align: middle; /* Vertically center the text */
`;

export const SNo = styled.th`
  border: 1px solid #8196db;
  font-weight: 500;
  color: rgb(129, 150, 219);
`;

export const Name = styled.th`
  border: 1px solid #8196db;
  font-weight: 500;
  color: rgb(129, 150, 219);

  padding: 5px;
`;

export const Company = styled.th`
  border: 1px solid #8196db;
  font-weight: 500;
  color: rgb(129, 150, 219);
`;

export const Email = styled.th`
  border: 1px solid #8196db;
  font-weight: 500;
  color: rgb(129, 150, 219);
`;

export const Phone = styled.th`
  border: 1px solid #8196db;
  font-weight: 500;
  color: rgb(129, 150, 219);

  text-align: center;
  word-wrap: break-word;
`;

export const RowSno = styled.td`
  border: 1px solid #8196db;
  padding: 5px 0px 5px 20px;
  word-wrap: break-word;
  width: 4%;
  height: 50px;
`;

export const RowName = styled.td`
  border: 1px solid #8196db;
  padding: 5px 0px 5px 20px;
  width: 10%;
`;

export const RowCompany = styled.td`
  border: 1px solid #8196db;
  padding: 0px 0px 0px 10px;
  width: 17%;
`;

export const RowEmail = styled.td`
  border: 1px solid #8196db;
  padding: 5px 0px 5px 0px;
 
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
  border: 1px solid #8196db;
  padding: 5px 0px 5px 30px;
  width: 10%;
`;
export const RowMessage = styled.td`
  border: 1px solid #8196db;
  padding: 5px 0px 5px 10px;
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
border: 1px solid #8196db;
  padding: 5px 0px 5px 30px;
  width: 10%;
`