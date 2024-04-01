import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
  @media screen and (max-width: 600px) {
    padding-top: 20px;
}
`;

export const Header = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  padding: 30px 20px 30px 6%;
  @media screen and (max-width: 600px) {
    font-size: 14px;
}
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Resource = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  padding: 0px 30px 20px 6%;
  @media screen and (max-width: 600px) {
    font-size: 16px;
}
`;

export const ContentRecomContainer = styled.div`
  background-image: linear-gradient(#1e3c72, #2a5298);
  padding: 3% 0px 3% 6%;
  @media screen and (max-width: 600px) {
      background-color: ;
      padding: 1% 0px 3% 6%;
  }
`;

export const ConRecHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const ConRecDesc = styled.p`
  font-size: 25px;
  color: #ffffff;
  width: 70%;
  padding: 15px 30px 15px 0px;
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 14px;
    padding: 0px 10px 15px 0px;
  }
`;

export const Button = styled.button`
  background-image: linear-gradient(#ffffff, #fff741);
  padding: 5px 2px 5px 2px;
  border-radius: 20px;
  font-weight: 550;
  color: #234581;
  border: 0px;
  width: 120px;
  height: 30px;
  outline: none;
  font-size: 14px;
  margin-top: 20px;
`;

export const ListHeading = styled.h1`
  font-size: 23px;
  color: #2b459b;
  font-weight: bold;
  margin-left:  2.3%;
  @media screen and (max-width: 576px) {
    margin-left:  7.9%;
    font-size: 18px;
  }
`;

export const HeadingCon = styled.div`
  display: flex;
  justify-content: ;
  align-items: center;
  @media screen and (max-width: 576px) {
    margin-top:  20px;
    margin-bottom:  20px;
    font-size: 18px;
  }
`;

export const SearchHeading = styled.p`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 10px;
`;
export const SearchHolder = styled.div`
  dispaly: flex;
  flex-direction: row;
  border: 1px solid #8196db;
  background-color: transparent;
  padding: 5px;
  border-radius: 10px;
`;
export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 0px;
  width: 320px;
  color: #263238;

  &::placeholder {
    color: #263238;
    font-size: 14px;
    font-weight: 500;
    padding: 5px;
  }
`;

export const SearchIcon = styled.img`
  height: 15px;
  width: 15px;
`;
export const SearchSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 40px;
  align-items: center;
  align-self: flex-end;
  @media screen and (max-width: 576px) {
    margin-top: 20px;
  }
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItems = styled.div`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    width: 90%;
    
  }
`;

export const Rectangle1 = styled.img`
  position: absolute;
  right: 0;
  height: 70%;
  width: 38%;
  top: 15%;
  z-index: 0;
`;

export const Rectangle2 = styled.img`
  position: absolute;
  right: 18%;
  height: 80%;
  width: 60%;
  top: -5%;
  z-index: 0;
`;

export const Rectangle3 = styled.img`
  position: absolute;
  left: 0%;
  height: 40%;
  width: 17%;
  top: 39%;
  z-index: 0;
`;

export const Small = styled.img`
  position: absolute;

  height: 55px;
  width: 60px;
`;

export const ContentContainer = styled.div`
  margin: 5em 2em 3em 5em;
  @media screen and (max-width: 576px) {
    width: ;
    margin: 50px 0 0 30px;
  }
`;

export const Small1 = styled.img`
  position: absolute;
  height: 55px;
  width: 60px;
  z-index: 0;
`;
