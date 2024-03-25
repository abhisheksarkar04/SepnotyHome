import styled from "styled-components";


export const ArticalCon=styled.div`
display:flex;

margin-left:20px;
height:35px;
width:140px;
height:40px;
padding:4px;

`

export const Div=styled.div`
display:flex;
flex-direction:row;
padding:5px;
flex-flow: wrap;


`
export const Icons=styled.img`
height: 37px;
width: 30px;
padding-top:13px;
`

export const IconName=styled.p`
font-family:Sans-serif;
font-size:15px;
margin-top:15px;
color:white;
font-weight: 500;
text-align: left;
padding-left:13px;
&:hover {
    color: #407BFF;
    font-weight: 550;
    cursor: pointer; 
  }

`
export const ListInnerContainer = styled.div`
display:flex;
width:100%;
text-align:center;
`;

export const Containerfour=styled.div`
width: 75%;
margin-left: 20px;
height: 850px;
border:1px solid #D9D9D9;
flex-direction:column;
justify-content: space-evenly;
border-radius:18px;
margin-bottom: 50px;
display: ruby;
`;

export const DateInput=styled.input`
height: 37px;
align-self: flex-end;
margin-right: 20px;
border: none;
background-color: transparent; /* Set background color to transparent */
color: white;
&::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 20px;
    margin-left: -18px;
    cursor: pointer;
}
`;
export const ArticleConatiner=styled.div`
display:flex;
flex-direction:column;
background-color:rgba(217, 217, 217, 1);
border-radius:7px;
width:40%;
height:380px;
margin:20px;

margin-left:40px;
margin-bottom:20px;

`;
export const ArticleImg=styled.img`
 
`;
export const ArticleTextConatiner=styled.div`
display:flex;
flex-direction:column;
height:200px;
padding:7px;
background-color:rgba(217, 217, 217, 1);
border-radius:7px;
`;
export const ArticleDescription=styled.p`
color:black;
font-size:12px;
line-height:15px;
margin-bottom:10px;
`;
export const ArticleTime=styled.h3`
color:rgba(43, 69, 155, 1);
margin-left:73%;
font-size:12px;
margin-bottom:10px;
`;

export const Arrow =styled.h2`
color:rgba(43, 69, 155, 1);
margin-left:93%;
font-weight:900;
`;
export const ArticleTitle=styled.h3`
color:rgba(234, 50, 50, 1);
font-size:12px;
margin-bottom:10px;
`;
export const ArticleName=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:15px;
margin-10px;
margin-bottom:10px;
`;