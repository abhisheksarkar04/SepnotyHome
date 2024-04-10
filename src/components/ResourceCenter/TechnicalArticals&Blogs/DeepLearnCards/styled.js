import styled from "styled-components";

export const CardContainer = styled.div`
  width: 180px;
  height: 18vh;
  margin: 0px 30px 50px 0px;
  background-color: #d9d9d9;
  padding: 0 0 0 10px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  z-index: 0;
  @media screen and (max-width: 576px) {
    margin: 0px 0px 0px -20px;
    width: 40vw;
  }
`;
export const CardContainer1 = styled.div`
  width: 160px;
  height: 12vh;
  margin: 0px 90px 50px 0px;
  background-color: #d9d9d9;
  padding: 0 0 0 10px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  z-index: 0;
  @media screen and (max-width: 576px) {
    margin: 0px 0px 0px -6%;
    width: 35vw;
  }
`;
export const CardContainer2 = styled.div`
  width: 200px;
  height: 14vh;
  margin: 0px 60px 50px 0px;
  background-color: #d9d9d9;
  padding: 0 0 0 10px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  z-index: 0;
  @media screen and (max-width: 576px) {
    margin: 0px 20px 0px -10%;
    width: 40vw;
    height: 16vh;
    
  }
`;

export const Image = styled.img`
  width: 200px;
  text-align: center;
  height: 300px;
  z-index: 1;
  margin-bottom: -10px;
  @media screen and (max-width: 576px) {
      width: 40vw;
      margin: 0px 0px -10px -10%;
  }
`;
export const Image33 = styled.img`
  width: 200px;
  text-align: center;
  height: 340px;
  z-index: 1;
  margin-bottom: -10px;
  @media screen and (max-width: 576px) {
    margin-left: -10%;
    width: 40vw;
    height: 325px;
}
`;
export const DetailsCon = styled.div`
  padding: 3px 0px 0px 0px;
`;
export const Title = styled.h1`
  font-size: 12px;
  color: #2B459B;
  margin: 10px 0 0 0 ;
  @media screen and (max-width: 576px) {
    font-size: 3vw;
  
  }
`;


export const Arrow = styled.img`
  height: 12px;
  align-self: flex-end;
`;

export const ButtonCon = styled.button`
  height:30px;
  align-self:center;
  border-radius:30px;
  font-size:10px;
  width:100px;
  margin-top: 20px;
  background-color:#254989;
  color:#fff;
  @media screen and (max-width: 576px) {
    font-size: 3vw;
    width: 60%;
  
  }
  
`;


export const ImageA = styled.img`
  width: 180px;
  vertical-align: middle;
  text-align: center;
  height: 230px;
  z-index: 1;
  margin-bottom: -10px;
  @media screen and (max-width: 576px) {
    margin: 0px 0px -10px -20px;
    width: 40vw;
  }
`;
export const ImageB = styled.img`
  width: 160px;
  text-align: center;
  height: 160px;
  z-index: 1;
  margin-top: 40px;
  margin-bottom: -10px;
  @media screen and (max-width: 576px) {
    margin-top: 0px;
    width: 35vw;
    margin-left: -6%;
}
`;