import styled from "styled-components";
export const ArticlesContainer=styled.div`
display:flex;
flex-wrap:wrap;
padding:20px;
margin-bottom:40px;
@media screen and (max-width: 576px) {
  padding:0px;
  margin-bottom:5px; 
}
`;
export const SeeMoreCon=styled.div`
display:flex;
flex-direction:row;
padding:30px;
width:100vw;
@media screen and (max-width: 576px) {
  font-size:10px; 
  padding:10px;
  margin-top:15px;
}
`;
export const Click=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-self:center;
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
  @media screen and (max-width: 576px) {
    font-size:7px; 
    padding:2px;
    margin-top:15px;
  }
`;
export const DownArrow=styled.button`
color:white;
font-size:40px;
align-self:center;
cursor:pointer;
margin-left:50px;
@media screen and (max-width: 576px) {
  font-size:5px;
  margin-left:1px;
  height:5px;
  width:5px;
}
`;
export const HlLine=styled.hr`
height:1px;
color:white;
width:43%;
margin-left:5px;
margin-top:20px;
`;
export const HrLine=styled.hr`
height:1px;
color:white;
width:43%;
margin-right:5px;
margin-top:20px;
`;