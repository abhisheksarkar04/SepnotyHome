import styled from "styled-components";

export const Container = styled.div`
  background-color: #0c111f;
  padding: 10px;
  @media screen and (max-width: 576px) {
    padding: 15px;
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #dfe3f0;
  align-items: center;
  border-radius: 10px;
  margin: 30px 5% 0px 5%;
  // ${"" /* width: 80%; */}

  @media screen and (max-width: 576px) {
    margin: 0px -5px 0 -5px;

    margin-top: 20px;
  }
`;

export const Image = styled.img`
  height: 30px;
  width: 200px;
  padding: 0px 30px 0px 30px;
  border-right: 1px solid #abaaaa;
  @media screen and (max-width: 576px) {
    height: 15px;
    width: 14.5%;
    padding: 0px 10px 0px 10px;
    border-right: 1px solid #abaaaa;
  }
`;

export const Img = styled(Image)`
  border: 0px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5% 0 5% 5%;
  @media screen and (max-width: 576px) {
    margin: -20px 10px 10px 0px;
  }
`;

export const Heading = styled.h1`
  font-size: 30px;
  color: #4c64b2;
  font-weight: bold;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #b7b6bd;
  font-weight: bold;
  width: 620px;
  padding-right: 0px;
  padding-top: 60px;
  line-height: 1.5em;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 320px;
    padding-top: 0px;
    line-height: 2;
    margin-left: 0px;
    margin-top: -40px;
  }
`;

export const Pattern = styled.img`
  position: absolute;
  top: 200;
  right: 0;
  z-index: 0;
  height: 50%;
  width: 30%;
`;

export const CuateImage = styled.img`
  width: 30%;
  z-index: 1;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const CuateImage11 = styled.img`
  width: 36%;
  height: 250px;
  margin-left: 0px;
  margin-right: 0px;
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadImgCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0px 10px 0px 0px;
  width: 100%;

  @media screen and (min-width: 577px) {
    display: none;
  }
`;

export const Header = styled.h1`
  font-size: 15px;
  margin-top: 50px;
  color: #4c64b2;
  margin-right: 3%;
`;
