import Styled from "styled-components";
import Button from "./Button"
import Image from "./images/Stars.svg"

import image2 from "./images/charan.svg";

import Stars from "./images/Stars2.svg"
import image3 from "./images/Standing.svg";
// import Stars from "./images/Stars2.svg"
// import image2 from "./images/Standing.svg";
// import Stars from "./images/Stars2.svg"
// import image2 from "./images/Standing.svg";


import FooterSection from "../components/Footer/FooterSection";


const CostHome = () => {
    return (
        <Main2>
        <Main>
            <HomeContainer>
            <StarsImage src={Image}/>
                <SideContainer>
                <Heading>
                 Website development
                </Heading>
                <Heading1>
                    Cost
                </Heading1>
                </SideContainer>
                <DevelopContainer>
                <Heading1>
                    Calculator
                </Heading1>
                <Para1>
                    To expedite the estimation of your website development cost, kindly provide some basic information about your business requirements by answering a few straightforward questions. This will assist our experts in offering a more accurate assessment.
                    </Para1>
                <Heading3>
                What type of development do you need?
                </Heading3>
                </DevelopContainer>
            </HomeContainer>
           
            <Image3 src={image3}/>
            <RightContainer>
            <Image2 src={image2}/>
            </RightContainer> 
        </Main>
        <D>
          <Button />
        </D>
        <FooterSection/>
        </Main2>
    )
}
export default CostHome;

const media = {
    mobile: '@media(max-width: 576px)'
  };

  const Right2 = Styled.div`
  width:70%;
  margin-top: 220px;
  margin-left:-110px;
  @media screen (min-width : 577px){
display:none;
  }
  `

const Image3 = Styled.img`
width:45%;
margin-left:-110px;
@media screen and (min-width : 577px){
display:none;
}
`
const D = Styled.div`
margin-left:110px;
margin-top:20px;
${media.mobile} {
    margin-left:10px;
  }
`

const Main2 = Styled.div`
display:flex;
flex-direction:column;
background:#0C111F;
background-size: cover;
@media screen and (max-width: 576px) {
}
`

const Main = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
background-color:#0C111F;
font-family:'Roboto';
${media.mobile}{
}

`
const HomeContainer = Styled.div`
display: flex;
flex-direction: column;
margin-top:20px;
${media.mobile}{
width:100%;
}
`
const StarsImage = Styled.img`
margin-top:50px;
width: 60%;
@media screen and (max-width: 576px) {
  width:170.66px;
  height:206px;
}
    
`
const DevelopContainer = Styled.div`
margin-top:0px;
display:flex;
flex-direction:column;
margin-left:140px;
margin-button:-20px;
${media.mobile} {
    margin-top:1px;
    margin-left:40px;
  }
`
const Heading = Styled.h1`
color: #B7B6BD;
font-size: 40px;
margin-top:10px;
${media.mobile} {
    font-size:15px;  
  }
`
const Heading1 = Styled.h1`
color:#4C64B2;
margin-top:10px;
font-size: 40px;
${media.mobile} {
    font-size:15px;
    margin-left:-20px;
  }
`
const Para1 = Styled.p`
font-size: 24px;
font-weight:500;
color:#B7B6BD;
margin-top:20px;
${media.mobile} {
    font-size:14px;
    margin-top:3px;
    width:80%;
    margin-left:-20px;
  }
`
const Heading3 = Styled.h1`
color:white;
font-size:32px;
margin-top:10px;
${media.mobile} {
   font-size:14px;
   margin-left:-20px;
   width:100%;
  }
`
const RightContainer = Styled.div`
text-align:right;
display:flex;
width:40%;
margin-top: 220px;
flex-direction:column;
${media.mobile}{
  width:100%;
  display:none;
}
`
const Image2 = Styled.img`
top:20%;
position:relative;
z-index:1;
${media.mobile} {
    width:300px;
    height:350px;
    display:none;
  }
`

const SideContainer =   Styled.div`
display:flex;
flex-direction:row;
margin-top:10px;
gap:20px;
margin-left:140px;
${media.mobile} {
    margin-left:20px;
    margin-top:-20px;
}

`