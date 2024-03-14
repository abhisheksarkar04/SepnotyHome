import styled from "styled-components";

export const Container=styled.div`
    background-color:#0C111F;
    width: 101.2%;
    height: 100vh;
    margin: -10px 0px -10px -10px;
    padding: 80px 30px 20px 30px;
    display: flex;
    flex-direction: column;
     align-items: ;

`;

export const Title=styled.p` 
font-family: "roboto";
font-size:15px;
font-weight: 600;
color:white;
`;

export const InputContainer=styled.div`
width: 65%;
align-self: center;
height: 80%;
border-radius: 30px;

border: 1px solid white;
background-color:#1D222F;
margin: 30px 0px 30px 0;
display:flex;
flex-direction:row;
justify-content: center;
`;



export const SepnotyCont=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin: 0 0 0 0px;
`;

export const SepnotyImg=styled.img`
height: 50px;
width: 260px;
`;

export const Welcome=styled.h1`
font-family:Sans-serif;
font-size:28px;
color:#FFFFFF80;
padding-top:20px;
`;

export const Para=styled.p`
font-family:Sans-serif;
font-size:13px;
color: #FFFFFF;
margin-top:10px;
`;

export const Image=styled.img`
height:200px;
width:260px;
margin-top: 10px;
`;

export const SignUpCont=styled.div`
background-color:;
display:flex;
flex-direction:column;
align-self: center;
margin: -100px 0 0 80px;
`;

export const Head=styled.h2`
font-familt:Sans-serif;
font-size:18px;
color: #BBBBBB;
`;

export const Form=styled.form`
display-flex;
flex-direction:column;
`;

export const Input=styled.input`
width: 80%;
height:35px;
text-align:start;
color: Black;
border-radius: 3px;
font-size: 12px;
padding: 0 0 0 10px;
margin-bottom: 15px;
::placeholder {
    color: #BCBCBC; 
  }
`;

export const CheckBox =styled.div`
display:flex;
flex-direction:row;
align-items: center;
`;

export const Check=styled.input`
    
`;

export const Label =styled.label`
font-family:roboto;
font-size: 8px;
color:white;
padding: 0px 0 0  5px;
`;

export const Button=styled.button`
background-color: #435AA7;
border: 1px solid #000000AB;
color:white;
width: 80%;
border-radius: 3px;
height:35px;
font-size:13px;
margin-top:20px;
cursor: pointer;
`;


