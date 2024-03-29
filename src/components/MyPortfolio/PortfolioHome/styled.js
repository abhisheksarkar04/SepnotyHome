import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10%;
  background-color: #0c111f;
  width: 100vw;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7%;
`;

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 35px;
  margin-bottom: 15px;
  @media screen and (max-width: 576px) {
    font-size: 20px;
    padding: 30px 0px 10px 0px;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  border: 1px solid #8196db;
  background-color: #c1cae7;
  padding: 5px;
  border-radius: 7px;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 0px;
  width: 410px;

  &::placeholder {
    color: #263238;
    font-size: 12px;
    font-weight: 500;
    padding: 5px;
  }
  @media screen and (max-width: 576px) {
    width: 200px;
    &::placeholder {
      color: #9ea6aa;
      font-weight: 500;
    }
  }
`;

export const SearchIcon = styled.img`
  height: 15px;
  width: 15px;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;

export const Items = styled.p`
  font-size: 12px;
  color: #ffffff;
  margin-right: 20px;
  padding-bottom: 5px;
  border-bottom: ${({ active }) => (active ? "1px solid #407BFF" : "")};
  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const Break = styled.hr`
  color: #ffffff;
  height: 1px;
`;

export const FilterBoxCon = styled.div`
  padding: 5px 10px 5px 10px;
  text-align: center;
  background-color: #d9d9d9;
  color: black;
  width: auto;
  height: auto;
  margin: 7px;
  border-radius: 7px;
  font-size: 12px;
  &:hover {
    background-color: rgba(43, 69, 155, 1);
    color: white;
  }
  @media screen and (max-width: 576px) {
    font-size: 12.8px;
    margin: 5px 0px 5px 4px;
    padding: 3px 4px;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Break1 = styled.hr`
  color: #ffffff;
  width: 50%;
  text-align: left;
`;

export const SeeMoreCon = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
`;
export const SeeMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  position: relative;
  color: #ffffff;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const HrLine = styled.hr`
  height: 1px;
  color: white;
  width: 40%;

  margin-top: 20px;
`;

export const Down = styled.img`
  height: 15px;
  width: 15px;
  @media screen and (max-width: 576px) {
    height: 12px;
    width: 12px;
  }
`;

export const DownCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Browse = styled.p`
  font-size: 16px;
  color: #ffffff;
  padding-bottom: 5%;
  margin-left: 1%;
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`;

export const CaseStudyCon = styled.div`
  margin: 30px 5% 6% 7%;
  @media screen and (max-width: 576px) {
    margin: 10px 5px 30px 5px;
  }
`;

export const SeeMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 13px 5px 5px 5px;
  cursor: pointer;
  position: relative;
  color: #ffffff;
  font-size: 13px;
  @media screen and (min-width: 577px) {
    display: none;
  }
`;
