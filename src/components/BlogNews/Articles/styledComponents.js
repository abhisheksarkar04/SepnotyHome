import styled from "styled-components";
export const ArticlesContainer=styled.div`
display:flex;
flex-wrap:wrap;
padding:20px;
margin-bottom:40px;
`;

export const SeeMoreCon=styled.div`
display:flex;
flex-direction:row;
padding:30px;
width:100vw;
`;
export const SeeMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  position: relative;
  color:white;
`;
export const DownArrow=styled.button`
color:white;
font-size:40px;
align-self:center;
cursor:pointer;
margin-left:50px;
`;
export const Click=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-self:center;
`;

export const HrLine=styled.hr`
height:1px;
color:white;
width:43%;
margin-right:10px;
margin-top:20px;
`;