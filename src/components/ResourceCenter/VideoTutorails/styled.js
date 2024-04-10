import styled from "styled-components";

export const TechnicalArticalsMain = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
margin-top:100px;
margin-bottom:100px;
justify-content:center;
@media screen and (max-width: 576px) {
   flex-wrap: wrap;

   margin-top:40px;
}
`;

export const DeepLearnFrame = styled.div`
display: flex;
flex-direction: column;
margin-left:0%;
width: 40%;
@media screen and (max-width: 576px) {
  
  width: 90%;
}

`;

export const ImageContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #645E5E;
background-size: cover;
border-radius: 8px;


`;
export const ImageContainer2 = styled.div`
display: flex;
flex-direction: column;
background-color: #645E5E;
background-size: fit;
border-radius: 8px;
height: 52%;
width: 93%;
@media screen and (max-width: 576px) {
  height: 69%;
}

`;
export const DeepLearnImage = styled.img`
  height: 48vh;
  @media screen and (max-width: 576px) {
    height: 38vh;
  
  
  }
  
`;
export const DeepLearnImage2 = styled.img`
  height: 53vh;
  
`;
export const DeepHeading = styled.h2`
  font-size:25px;
  text-align:center;
  padding:20px;
  color: #fff;
  @media screen and (max-width: 576px) {
    font-size:4vw;
  
  
  }
`;

export const RedText = styled.p`
  color: #D01E1E;
  font-size: 10px;
  font-weight: 600;
  line-height: px;
  margin-top: 8px;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
`;

export const Header = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  padding: 30px 20px 30px 6%;
  @media screen and (max-width: 576px) {
    font-size: 3vw;
  
    padding: 10px 20px 10px 6%;
  }
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Resource = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  padding: 0px 30px 20px 6%;
  @media screen and (max-width: 576px) {
    font-size: 4vw;
  
  }
`;

export const ContentRecomContainer = styled.div`
  background-image: linear-gradient(#1e3c72, #2a5298);
  padding: 3% 0px 3% 6%;
`;

export const ConRecHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 4vw;
    margin-bottom: 10px;
  
  }
`;

export const ConRecDesc = styled.p`
  font-size: 25px;
  color: #ffffff;
  width: 80%;
  padding: 20px 30px 30px 0px;
  @media screen and (max-width: 576px) {
    width: 90%;
    padding: 10px 30px 30px 0px;
    font-size: 3vw;
  
  }
`;

export const Button = styled.button`
  background-image: linear-gradient(#ffffff, #fff741);
  padding: 5px 25px 5px 25px;
  border-radius: 8px;
  color: #234581;
  border: 0px;
  align-self:center;
  height:40px;
  width:220px;
  outline: none;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  @media screen and (max-width: 576px) {
    height:6vh;
    width:45vw;
    font-size: 4.1vw;
  
  }
`;

export const ListHeading = styled.h1`
  font-size: 25px;
  color: #2b459b;
  font-weight: bold;
  margin-left: 2.6%;
  @media screen and (max-width: 576px) {
    width: 90%;
    font-size: 16px;
    margin-left: 6%;
  
  }
`;

export const SearchHeading = styled.p`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;
export const SearchHolder = styled.div`
  dispaly: flex;
  flex-direction: row;
  border: 1px solid #8196db;
  background-color: transparent;
  padding: 5px;
  border-radius: 10px;
`;
export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 0px;
  width: 410px;
  color: #263238;

  &::placeholder {
    color: #263238;
    font-size: 14px;
    font-weight: 500;
    padding: 5px;
  }
`;

export const SearchIcon = styled.img`
  height: 15px;
  width: 15px;
`;
export const SearchSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  align-self: flex-end;
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItems = styled.ul`
  list-style-type: none;
  padding: 0px 0 0 25px;
  width:60%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 576px) {
    justify-content: space-between;
    width: 98%;
    margin-left: 0%;
    padding: 0px 0 0 0px;
  }
`;




export const ListOne = styled.li`
    margin-right: 1%;
    @media screen and (max-width: 576px) {
      justify-content: space-between;
      width: 50%;
      margin-right: 0%;
      padding: 30px 0 0 0px;
    }
 
`;



export const Rectangle1 = styled.img`
  position: absolute;
  right: 0;
  height: 70%;
  width: 38%;
  top: 15%;
  z-index: 0;
`;

export const Rectangle2 = styled.img`
  position: absolute;
  right: 18%;
  height: 80%;
  width: 60%;
  top: -5%;
  z-index: 0;
`;

export const Rectangle3 = styled.img`
  position: absolute;
  left: 0%;
  height: 40%;
  width: 17%;
  top: 39%;
  z-index: 0;
`;

export const Small = styled.img`
  position: absolute;
  height: 55px;
  width: 60px;
  z-index: 0;
  @media screen and (max-width: 576px) {
    height: 60px;
    width: 45px;
  
  }
`;

export const ContentContainer = styled.div`
  margin: 5em 2em 3em 5em;
  @media screen and (max-width: 576px) {
    margin: 2em 0 50px 2em;
  
  }
`;

export const Small1 = styled.img`
  position: absolute;
  height: 55px;
  width: 60px;
  @media screen and (max-width: 576px) {
    height: 60px;
    width: 40px;
  
  }
 
`;


export const HeadingCon = styled.div`
  display: flex;
  justify-content: ;
  align-items: center;
`;