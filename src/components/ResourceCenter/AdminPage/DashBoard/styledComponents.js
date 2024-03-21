import styled from "styled-components";

export const Container = styled.div`
  background-color: #00001a;
  width: 100%;
  padding: 80px 30px 5% 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Resources = styled.p`
  font-family: roboto;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  font-weight: 500;
  color: white;
  font-weight: bold;
  padding-left: 40px;
  padding: 20px;
`;

export const ContainerOne = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #00s001a;
  border: 1px solid white;
  align-self: center;
  margin-left: 35px;
  border-radius: 20px;
`;

export const Containertwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImagesCont = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 48%;
  height: 70%;
`;

export const CreateCon = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #2b459b;
  align-items: center;
  height: 50%;
  width: auto;
  border-radius: 10px;
  margin-left: 5%;
  padding-left: 10px;
  margin-top: 8px;
  border: 0px;
`;
export const AddImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  padding: 0px;
`;

export const CreateTitle = styled.p`
  color: #ffffff;
  font-size: 90%;
  margin: 0px;
  padding: 0px;
`;
export const Contactimgcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 19px;
`;

export const Name = styled.p`
  font-family: ;
  font-size: 20px;
  color: white;
  font-weight: 550;
  padding-right: 10px;
`;
export const SpanHead = styled.span`
  font-weight: 100;
`;
export const Profile = styled.img`
  height: 60px;
  width: 60px;
  margin-top: 0px;
  margin-right: 15px;
`;

export const Containerthree = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  width: 100%;
`;

export const ColumnDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: ;
  margin-top: 40px;
  width: 25%;
  margin-right: 10px;
`;
export const ArticalCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 25px;
  padding: 4px;
`;
export const Icons = styled.img`
  height: 37px;
  width: 30px;
`;

export const IconName = styled.p`
  font-family: Sans-serif;
  font-size: 18px;
  color: white;
  font-weight: 500;
  text-align: left;
  padding-left: 13px;

  ${
    "" /*  &:hover {  color: #407bff;

cursor: pointer;
  } */
  }
`;

export const Containerfour = styled.div`
  display: flex;
  width: 75%;

  border: 1px solid #d9d9d9;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 18px;
`;

export const DateInput = styled.input`
  height: 37px;
  align-self: flex-end;
  margin-right: 20px;
  border: none;
  font-weight: 600;
  background-color: #2b459b;
  color: white;
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 22px;
    margin-left: -18px;
    cursor: pointer;
  }
`;

export const ActiveTab = styled(IconName)`
  color: #407bff;
`;
