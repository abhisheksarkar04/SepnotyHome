import styled from "styled-components";

export const AdServices1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const AdSeviceLeftText = styled.div`
  display: flex;
  flex-direction: column;
  jusftify-content: center;
  align-self: center;
  padding: 30px;
`;
export const AdServiceLeftHeading = styled.h2`
  font-size: 30px;
  color: #b7b6bd;
  margin-top: 20px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const AdServiceLeftHeading1 = styled.h2`
  font-size: 25px;
  color: #b7b6bd;
  margin-top: 150px;
  display: none;
  @media screen and (max-width: 576px) {
    display: block;
    width: 300px;
    font-size: 20px;
    margin-left: -220px;
  }
`;
export const AdServiceLeftHeadingBlue = styled.span`
  color: #4c64b2;
  @media screen and (max-width: 576px) {
    width: 300px;
  }
`;
export const AdServiceLeftDescript = styled.p`
  line-height: 35px;
  margin-top: 20px;
  font-size: 20px;
  width: 60%;
  color: #b7b6bd;
  letter-spacing: 1px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    line-height: 1.5;
    width: 97%;
    margin-left: 10px;
  }
`;
export const AdServiceRightPart = styled.div`
  text-align: right;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const AdServiceRightPart1 = styled.div`
  text-align: right;
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
    margin-left: 0px;
  }
`;
export const AdServiceRightImg = styled.img`
  width: 600px;
  height: 650px;
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 235px;
    margin-left: 0px;
  }
`;
export const AdServDots = styled.img`
  position: absolute;
  top: 50;
  left: 0;
  width: 350px;
  height: 200px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const AdServRightDots = styled.img`
  position: absolute;
  top: 200;
  right: 0;
  z-index: 0;
  margin-top: 250px;
  height: 450px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
