import styled from "styled-components";

export const CardContainer = styled.div`
  width: 380px;
  margin: 40px 30px 50px 0px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  border-radius: 7px;

  @media screen and (max-width: 576px) {
    width: 40%;
    margin: 20px 0px 10px 0px;
  }
`;

export const Image = styled.img`
  width: 101%;
  padding-bottom: 10px;
`;
export const DetailsCon = styled.div`
  padding: 0px 5px 15px 15px;
  @media screen and (max-width: 576px) {
    text-align: left;
  }
`;
export const Title = styled.h1`
  font-size: 12px;
  color: #ea3232;
  margin-bottom: 3px;
`;
export const Heading = styled.h1`
  font-size: 14px;
  color: #2b459b;
  font-weight: 700;
  margin-bottom: 3px;
`;

export const Description = styled.p`
  font-size: 13px;
  color: #263238;
  line-height: 1.5;
`;

export const Arrow = styled.img`
  height: 12px;
  align-self: flex-end;
`;

export const ButtonCon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
`;
