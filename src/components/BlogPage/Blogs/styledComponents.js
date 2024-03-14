import styled from "styled-components";

export const BlogPage=styled.div`
color:white;
padding:60px;
background-color:rgba(12, 17, 31, 1);

`;
export const BlogTitle=styled.h2`
font-size:30px;
color:white;
margin-top:10px;
`;
export const BlogName=styled.h1`
color:white;
font-size:30px;
`;
export const FiltersContainer=styled.div`
display:flex;
flex-wrap:wrap;

`;
export const FilterBoxCon=styled.div`
padding:3px 5px 3px 3px;
text-align:center;
background-color:white;
color:black;
height:auto;
width:auto;
margin:5px;
border-radius:5px;
font-size:12px;
&:hover{
    background-color:rgba(43, 69, 155, 1);
    color:white;
}
`;