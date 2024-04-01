import styled from "styled-components";

export const ServiceCardCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 10px 25px 10px;
  color: black;
  border-radius: 7px;
  background-color: white;
  width: 30%;
  margin-bottom: 23px;
  position: relative;
  @media screen and (max-width:576px){
    width:70%;
  }
`;
export const ServiceImgName = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ServiceImg = styled.img`
  width: 70px;
  height: 70px;
`;
export const ServiceName = styled.h3`
  font-weight: 500;
  margin-left: 5%;
  font-weight: 800;
  margin-top: 20px;
`;
export const ServiceDescription = styled.p`
  text-align: justify;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 17px;
`;
export const Forward = styled.div`
  font-size: 30px; /* Increased font size for larger arrow */
  color: black;

  position: absolute;
  bottom: 10px;
  right: 10px;
`;
