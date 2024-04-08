import styled from "styled-components";

export const MainConatiner = styled.div`
   width: 100%;
`;

export const SmallPattern = styled.div`
  background-color: rgba(129, 150, 219, 0.25);
  height: 55px;
  width: 60px;
  border-radius: 3px;
  @media screen and (max-width: 576px) {
   
    height: 45px;
  width: 45px;
  
  }
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 90px;
  margin-left: 8%;
`;
export const ListHeading = styled.h1`
  font-size: 25px;
  color: #2B459B;
  font-weight: bold;
  margin-left: -32px;
  @media screen and (max-width: 576px) {
    margin-left: -18px;
    font-size: 16px;
  
  }
`;



export const Container = styled.div`
  display:flex;
  padding:20px;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  margin-left: 14%;
  @media screen and (max-width: 576px) {
    margin-left: 4%;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-around;

  }

   
  `;
export const Img = styled.img`
   height: 100px;
   margin-right: 0%;
   
  `;
export const Details = styled.div`
@media screen and (max-width: 576px) {
  margin-right: 0px;
  width: 50%;


}
   
  `;
export const Name = styled.h1`
  color: #2B459B;
  font-size: 18px;
   
  `;
export const TextDts = styled.p`
    color: #fff;
    margin-top: 5px;
   
  `;
export const ApplyButton = styled.button`
    background-color: #435AA7;
    height: 40px;
    width: 100px;
    color: #fff;
    font-weight: 600;
    border-radius: 58px;
    margin-left: 10%;
    cursor: pointer;
    @media screen and (max-width: 576px) {
      margin-top: 40px;
      margin-left: 16%;
    
    
    }

   
  `;
//   export const Container = styled.h1`
   
//   `;
//   export const Container = styled.h1`
   
//   `;
//   export const Container = styled.h1`
   
//   `;
