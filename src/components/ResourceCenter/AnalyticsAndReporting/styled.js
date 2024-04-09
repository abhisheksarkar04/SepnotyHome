import styled from "styled-components";
// import Ellipse1 from "./Ellipse 853.png";
// import Ellipse2 from "./Ellipse 855.png";




export const Header = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  padding: 90px 20px 30px 0%;
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;


export const CirclesContainer = styled.div`
  background-color: #C1CAE7;
  height: 350px;
  width: 350px;
  margin-left: 30px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  padding: 0px;
  border-radius:10px;
`;
export const CircleOne = styled.div`
  
    background: linear-gradient(#8C1616, #8C161600);
    top: 35;
    left: 85;
    
    padding: 50px;
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    margin: -100px 40px 40px 0px;
    border-radius: 500px;
    align-self: flex-end;

`;
// background-image: url(${Ellipse1});
// background-size: cover;
export const CircleTwo = styled.div`
  background: linear-gradient(#8C1616, #8C161600);
  padding: 50px;
  color: #fff;
    font-size: 25px;
    font-weight: 600;
  align-self: flex-start;
  position: absolute;
  margin: 150px 20px 10px 50px;
  border-radius: 500px;
  color: #ffffff;
`;
export const CircleThree = styled.div`
  font-weight: 300;
  color: #ffffff;
  background: linear-gradient(#224F83, #224F8300);
 padding: 70px;
 top: ;
 left: ;
  position: absolute;
  border-radius: 400px;
  align-self: center;
  color: #fff;
    font-size: 25px;
    font-weight: 600;
`;

export const GraphsContainer = styled.div`
`;

export const CardSection = styled.div`
`;


export const PercentageContainer = styled.div`
      background-color: #C1CAE7;
      padding: 30px 0px 0px 30px;
      color: black;
      margin-right: 0px;
      border-radius: 10px;
      height: 350px;
      width: 350px;
      
`;
export const AnalyticsPage=styled.div`
background-color: #0C111F;
width: 100.6%;
height: 130%;
margin-top: -30px;
margin-left: -10px;
margin-right: 0px;
padding: 0 0px 0 0;
@media screen and (max-width: 600px) {
  margin-left: 0px;
  width: 100%;
}

`;
export const ServiceSpan=styled.span`
font-weight:normal;
`;
export const GdPageTitle=styled.h2`
font-size: 18px;
color:white;
font-weight: 600;
padding: 125px 0px 10px 6%;
@media screen and (max-width: 600px) {
  font-size: 3vw;
  padding: 105px 0px 10px 6%;
}
`;
export const GdHeading=styled.h1`
font-size: 30px;
font-weight:700;
margin: 0px 0px 15px 0px;
color:white;
padding: 20px 0px 10px 6%;
@media screen and (max-width: 600px) {
  font-size: 4vw;
`;

export const AnalyticsSection = styled.div`
      width: 100%;
      height: 107%;
      padding: 20px 0px 0px 6%;
      margin 0px 0px 10px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media screen and (max-width: 576px) {
        flex-direction: column;
        padding: 20px 0px 0px 2%;
      }

`;


export const ProMainDiv = styled.div`
      width: 50%;
      padding: 30px 0px 0px 40px;
      height: 50%;
      @media screen and (max-width: 576px) {
        width: 98%;
        padding: 30px 30px 0px 40px;
       
        
      }


`;



export const MobSection1=styled.div`
    background-color:rgba(12, 17, 31, 1);
    width: 80%;
    padding: 0 0 0 30px;
    margin-left: 60px;
    margin-bottom: 40px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction:row;
    @media screen and (max-width: 576px) {
      width: 80%;
      margin: 30px 0 50px 10px;
      justify-content: center;
      align-items: center;
    }
`;







export const ProTop = styled.div`
    background-color: #263238;
    background-size: cover;
    height: 50%;
   
    @media screen and (max-width: 576px) {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

`;
export const ProBottom = styled.div`
    background-color: #D9D9D980;
    height: 35%;
    padding: 0 0 30px 0;
    @media screen and (max-width: 576px) {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      height: 30vh;
    }

`;
        
export const ProTopHead = styled.h1`
    color: #fff;
    font-size: 100%;
    margin: 0px 0px 0px 20px;
    padding: 5px 0 0 10px;
    @media screen and (max-width: 576px) {
      font-size: 80%;
    }

`;
export const ProTopImg = styled.img`
    background-color: #263238;
    height: 81%;
    margin: 0px -30px -4px 90px;
    width: 60%;
    @media screen and (max-width: 576px) {
      margin: 0px -30px -4px 20%;
    }


`;

export const GraphImg = styled.img`
    height: 150px;
    margin: 50px 0px 0px 0px;
    width: 100%;
    @media screen and (max-width: 576px) {
      margin: 30px 0px 0px 0px;
      height: 120px;
    }



`;

export const ProBtn = styled.button`
border-radius: 30px;
background: linear-gradient(
  90deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(252, 252, 252, 0) 0%,
  rgba(252, 252, 252, 1) 0%,
  rgba(246, 251, 34, 1) 100%
);
position: absolute;
height: 35px;
font-size: 12px;
font-weight: 550;
width: 9%;
margin: 50px 0px 0px 20%;
padding-left: 0px;
padding-right: 20px;
border: none;
cursor: pointer;
@media screen and (max-width: 576px) {
  height: 30px;
  width: 22%;
  align-self: ;
  font-size: 2.3vw;
  margin: 50px 0px 0px 50%;
}
`;


export const BtnLearn = styled.button`
  background-color: #254989;
  justify-content: center;
  margin: 20px 0 0 180px;
  border-radius: 50px;
  height: 35px;
  width: 120px;
  color: #fff;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    align-self: center;
    height: 4vh;
    width: 20vw;
    font-size: 2.5vw;
    margin: 20px 0 0 40%;
  }

`;



export const VectorImg = styled.img`
    height: ;
   
    margin: 3px 3px -3px 10px;
    width: 17%;
    @media screen and (max-width: 576px) {
      width: 3vw;
      margin: 3px 0px -3px 6px;
    }


`;




export const HeadingSection = styled.div`
    margin: 0px 0px 0px 6%;
    display: flex;
    @media screen and (max-width: 576px) {
      flex-direction: column;
      margin: 0px 0px 0px 4%;
    }

`;




export const SmallPattern = styled.div`
  background-color: rgba(129, 150, 219, 0.25);
  height: 55px;
  width: 60px;
  position: absolute;
  border-radius: 3px;
  margin-left: 20px;
   @media screen and (max-width: 576px) {
    margin-left: 5%;
    height: 6vh;
    width: 11vw;
  }
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  width: 202px;
  @media screen and (max-width: 576px) {
    width:100%;
  }
`;
export const ListHeading = styled.h1`
  font-size: 25px;
  color: #2B459B;
  font-weight: bold;
  margin-left: auto;
  @media screen and (max-width: 576px) {
    font-size: 5vw;
    width: 90%;
  }
`;

export const HeadingSearch = styled.h1`
    margin: 0px 0px 10px -30px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    @media screen and (max-width: 576px) {
      margin: 20px 0px 20px 50px;
      font-weight: bold;
      font-size: 3vw;

    }
    

`;

export const ElementsSection = styled.div`
    margin: 0px 0px 0px -120px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 576px) {
      margin: 0px 0px 0px 30px;
      justify-content: ;
    }


`;

export const SearchSection = styled.div`
    margin: 0px 0px 0px 850px;
    @media screen and (max-width: 576px) {
      margin: 0px 0px 0px -20px;
      width: 98%;
    }


`;
export const SearchSectionBtn = styled.button`
    background-color: transparent;
    border: 1px solid;
    width: 150px;
    height: 36px;
    font-size: 14px;
    margin: 0px 0px 0px 10px;
    color: #fff;
    border-radius: 3px;
    @media screen and (max-width: 576px) {
      width: 25vw;
      font-size: 2vw;
      margin: 0px 0 0 0;
    }
`;





export const GraphImageItem = styled.img`
    margin: 0px 20px 20px 0px;
   width: 350px;
   height: 380px;
   @media screen and (max-width: 576px) {
    width: 100%;
    height: 90%;
    margin: 20px 0 0 12%;
  }


`;

export const DateInput=styled.input`
height: 37px;
align-self: flex-end;
margin-right: 10px;
margin-left: 10px;
width: 130px;
border: 1px solid;
text-align: center;
border-radius: 3px;
background-color: transparent; /* Set background color to transparent */
color: white;
&::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 20px;
    margin-left: 0px;
    cursor: pointer;
}


@media screen and (max-width: 576px) {
  width: 20vw;
  font-size: 2vw;
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 3vw;
    margin-left: 0px;
    cursor: pointer;
}
}

`;



export const ProExtendMain = styled.div`
    margin: 0px 0px 0px 80px;
   width: 72%;
   display: flex;
   flex-direction: column;
   @media screen and (max-width: 600px) {
    width: 80%;
    margin: 0px 0px 50px 20px;
  }



`;
export const ProExtendTop = styled.div`
    margin: 30px 0px 0px 0;
   width: 75%;
   background-color: #7F8588;
   padding: 20px;
   border-radius: 5px;
   @media screen and (max-width: 600px) {
      margin: 30px 0px 0px 20px;
      width: 99%;
  }


`;
export const ProExtendBottom = styled.div`
    margin: 30px 0px 0px 13%; 
   width: 40%;
   background-color: #263238;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 20px;
   @media screen and (max-width: 600px) {
    width: 80%;
    margin: 30px 0px 0px 20px; 
  }


`;
export const TopHead = styled.h3`
    margin: 0px 20px 20px 0px;
   color: #2B459B;
    font-size: 20px;

`;
export const TopPara = styled.p`
    margin: 30px 20px 20px 0px;
    color: #263238;
    font-weight: 600;
    line-height: 30px;
    font-size: 18px;

`;



export const PurChaseImg = styled.img`
   color: #2B459B;
   width: 50px;
   height: 50px

`;
export const PurChaseHead = styled.h1`
    margin: 20px 0px 20px 0px;
   color: #fff;
    font-size: 23px;

`;
export const PurChasePara = styled.p`
   color: #fff;
    font-size: 12px;
    width: 100%;
    font-weight: 100;
    line-height: 20px;
    margin: 0px 0 25px 20px; 

`;
export const PurChaseItems = styled.div`
    display: flex;
   align-self: flex-start;
   
   margin-left: 22px;

`;
export const PurchaseTickImg = styled.img`
    margin: 0px 20px 20px 0px;
    height: 18px;

`;

export const PurChaseItemsPara = styled.p`
   color: #fff;
    font-size: 17px;

    font-weight: 600;
`;
export const PurChaseButton = styled.button`
border-radius: 30px;
background: linear-gradient(
  90deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(252, 252, 252, 0) 0%,
  rgba(252, 252, 252, 1) 0%,
  rgba(246, 251, 34, 1) 100%
);
height: 40px;
width: 140px;
cursor: pointer;
margin: 20px 0 20px 0;
font-weight: 600;

`;
export const RemoveBtn = styled.button`
    margin: 0px 0px 0px 0px;
   color: #fff;
   cursor: pointer;
    font-size:12px;
    text-align:center;
    align-self: center;

`;