import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-left: 50px;
`;
export const Img = styled.img`
  height: 100px;
  margin-right: 10%;
`;
export const Details = styled.div`
  display: flex;
  margin-right: 10%;
`;
export const Name = styled.h1`
  color: #2b459b;
  font-size: 18px;
`;
export const TextDts = styled.p`
  color: #fff;
  margin-top: 5px;
`;
export const ApplyButton = styled.button`
  background-color: #435aa7;
  font-sixe: 16px;
  padding: 5px 20px 5px 20px;
  border-radius: 10px;
  margin-left: 5%;
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;
`;

export const EditTool = styled.img`
  height: 26px;
  width: 22px;
  margin-left: 15px;
`;

export const EditCon = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Data = styled.div`
  margin-right: 50px;
`;
