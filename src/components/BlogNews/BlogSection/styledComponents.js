import styled from "styled-components";

export const BlogPage=styled.div`
color:white;
padding:70px 40px 40px 40px;
background-color:rgba(12, 17, 31, 1);
padding-top:60px;
`;
export const BlogTitle=styled.h2`
font-size:17px;
color:white;
margin-left:40px;
margin-top:10px;
`;
export const BlogName=styled.h1`
color:white;
font-size:30px;
margin-left:40px;
`;
export const FiltersContainer=styled.div`
display:flex;
flex-wrap:wrap;
margin-left:40px;
margin-right:40px;
`;
export const FilterBoxCon=styled.div`
padding:5px 10px 5px 10px;
text-align:center;
background-color:white;
color:black;
width:auto;
height:auto;
margin:5px;
border-radius:7px;
font-size:12px;
&:hover{
    background-color:rgba(43, 69, 155, 1);
    color:white;
}
`;