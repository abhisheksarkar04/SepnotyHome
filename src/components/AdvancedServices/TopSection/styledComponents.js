import styled from "styled-components";

export const AdServices1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  @media screen and (max-width:576px) {
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
  @media screen and (max-width:576px) {
    display: none;
  }
`;
export const AdServiceLeftHeading1 = styled.h2`
  font-size: 25px;
  color: #b7b6bd;
  margin-top: 150px;
  display: none;
  @media screen and (max-width:576px) {
    display: inline;
    width: 300px;
  }
`;
export const AdServiceLeftHeadingBlue = styled.span`
  color: #4c64b2;
  font-size: 30px;
  @media screen and (max-width:576px) {
    font-size: 25px;
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
  @media screen and (max-width:576px) {
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    margin-left: -30px;
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
    font-size:25px;
  }
`;
export const AdServiceRightImg = styled.img`
  width: 600px;
  height: 650px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 576px) {
    width: 200px;
    height: 200px;
    margin-left: -100px;
  }
`;
export const AdServDots = styled.img`
  position: absolute;
  top: 50;
  left: 0;
  width: 350px;
  height: 200px;
  @media screen and (max-width:576px) {
    top: 1000px;
    width: 330px;
    height: 220px;
  }
`;
export const AdServRightDots = styled.img`
  position: absolute;
  top: 200;
  right: 0;
  z-index: 0;
  margin-top: 250px;
  height: 450px;
  @media screen and (max-width:576px) {
    display: none;
  }
`;
