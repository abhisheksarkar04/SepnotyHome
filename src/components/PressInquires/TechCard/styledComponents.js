import styled from "styled-components";

export const TechCardContainer = styled.div`
  margin-right: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 100px;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  

  &::before {
    content: '\u2192'; /* Unicode for right arrow */
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 17px;
    color: white;
   
  }
  @media screen and (max-width:576px){
    width:27vw;
    margin-right:10px;
    &::before{
      right: 5px;
    }
  }
`;

export const TechImg = styled.img`
  width: 35px;
  height: 35px;
`;

export const TechAbout = styled.p`
  color: white;
  font-size: 14px;
  margin-top: 18px;
  align-self:center;
  @media screen and (max-width:576px){
    font-size:10px;
  }
`;