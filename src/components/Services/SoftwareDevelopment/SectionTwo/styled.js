import styled from "styled-components";

export const SectionTwoCon=styled.div`
display:flex;
justify-content:center;
padding:60px 50px 60px 50px;
@media screen and (max-width:576px){
  padding:35px;
  
}
`;
export const SectionTwoComponent=styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:10px;
border:1px solid rgba(255, 255, 255, 1);
border-radius:10px;
width:23%;
padding-bottom: 40px;
@media screen and (max-width:576px){
  padding:10px;
  width:44%;
}
`;
export const ComponentHeading = styled.h1`
  color: #ff9f00; /* Bright orange color */
  font-size: 55px;
  line-height: 87px;
  letter-height: 80px;
  font-weight: 1000; /* Increased font weight */
  text-shadow: 
    -1px -1px 0 #ffffff,
    1px -1px 0 #ffffff,
    -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff; 
    @media screen and (max-width:576px){
      font-size:35px;
    }
`;

export const ComponentTitle=styled.p`
color: #BEBEBE;
font-size:22px;
 margin-top: 0px;
 @media screen and (max-width:576px){
  font-size:14px;
}
`;