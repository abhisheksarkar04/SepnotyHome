import styled from "styled-components";

export const ChooseCardCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 45%;
  height: 270px; 
  color: black;
  box-shadow: 0px 15px 20px -10px rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  background-color: white;
  margin-right: 20px;
  margin-bottom: 35px;
  overflow: hidden; 
  @media screen and (max-width:576px){
    width:80%;
    justify-content:center;
    height:300px;
    padding:15px;
  }
`;


export const ChooseTitle=styled.h2`
font-weight:600;
margin-bottom:15px;
font-size:18px;
text-align:justify;
@media screen and (max-width:576px){
  font-size:16px;
}
`;
export const ChooseText=styled.p`
font-size:15px;
line-height:22px;
text-align:justify;
@media screen and (max-width:576px){
  font-size:14px;
}
`;