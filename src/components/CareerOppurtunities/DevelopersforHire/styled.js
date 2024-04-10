import styled from "styled-components";

export const DigitalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
  padding-bottom: 100px;

  @media screen and (max-width: 576px) {
    padding-bottom: 10px;
  }
`;

export const ListDataContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 20px;
  width: 20%;
  margin-left: 5%;
  font-size: 18px;

  @media screen and (max-width: 576px) {
    font-size: 10px;
    width: 160px;
    margin: 5px;
    padding-top: 20px;
  }
`;
export const ListInnerContainer = styled.div`
  display: flex;

  text-align: center;

  @media screen and (max-width: 576px) {
    font-size: 14px;
    margin-left: 3%;
    padding-top: 50px;
    padding-inline: -30px;
    margin-bottom: -60px;
  }
`;
export const BlueContainer = styled.div`
  display: flex;
  background-color: rgba(43, 69, 155, 1);
  flex-direction: row;
  padding: 30px;
  justify-content: space-between;
  color: white;
  height: 250px;

  @media screen and (max-width: 576px) {
    height: 138px;
    padding-top: 10px;
    padding: 10px 0px 0px 0px;
  }
`;
export const LeftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 20px;
  width: 60%;

  @media screen and (max-width: 576px) {
    margin: 0px;
    margin-right: 0px;

    width: 100%;
  }
`;
export const LeftHeading = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 20px;
  margin-left: 5%;

  @media screen and (max-width: 576px) {
    font-size: 20px;
    margin: 0px;
    margin-left: 3%;
  }
`;

export const LeftTitle = styled.p`
  font-size: 25px;
  color: white;
  margin-top: 20px;
  margin-left: 5%;

  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 300px;
    margin-left: 3%;
    margin-top: 1px;
  }
`;
export const LeftDescription = styled.p`
  font-size: 14px;
  color: white;
  line-height: 20px;
  margin-bottom: 20px;
`;
export const LeftButton = styled.button`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(252, 252, 252, 0) 0%,
    rgba(252, 252, 252, 1) 0%,
    rgba(246, 251, 34, 1) 100%
  );
  border: none;
  color: rgba(35, 69, 129, 1);
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
  width: 150px;
  font-size: 15px;
  font-weight: 600;
  margin-left: 6%;
`;
export const Header = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  padding-left: 70px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
    width: 100%;
    margin: 0px;
    padding-left: 15px;
  }
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Service = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  padding: 10px 30px 20px 5%;

  @media screen and (max-width: 576px) {
    font-size: 14px;
    padding-left: 15px;
  }
`;
export const ContentRecomContainer = styled.div`
  background-image: linear-gradient(#1e3c72, #2a5298);
  padding: 10px 0px 4% 5%;
`;

export const ConRecHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
  padding-top: 20px;
`;

export const ConRecDesc = styled.p`
  font-size: 20px;
  color: #ffffff;
  width: 50%;
  padding: 20px 30px 30px 0px;
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #ffffff, #fff741);
  padding: 5px 25px 5px 25px;
  border-radius: 20px;
  color: #234581;
  border: 0px;
  outline: none;
  font-size: 13px;
  margin-top: 20px;
`;
export const select = styled.select`
  padding: 5px 25px 5px 25px;
  border-radius: 20px;
  background-color: rgba(43, 69, 155, 1);
  border: 0px;
  outline: none;
  font-size: 13px;
  margin-top: 20px;
`;
export const TableofContent = styled.button`
  margin-left: 80%;
  border-radius: 20px;
  color: rgba(43, 69, 155, 1);
  background-color: rgba(43, 69, 155, 1);
  border: 0px;
`;
export const Dropdownbtn = styled.button`
  display: flex;
`;
export const DropDown = styled.div`
  margin-left: 65%;
  position: absolute;

  @media screen and (max-width: 576px) {
    margin-left: 3%;
  }
`;
export const Dropdowncontent = styled.div``;

export const ListHeading = styled.h1`
  font-size: 25px;
  color: #2b459b;
  font-weight: bold;
  margin-left: 4.7em;
  margin-top: 1em;

  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin-top: 30px;
    margin-left: 3%;
  }
`;

export const Small = styled.img`
  position: absolute;
  left: 5%;
  height: 8%;
  width: 4%;
  top: 77%;
  z-index: 0;
`;
export const ServiceItemCon = styled.div`
  margin-top: 5.5%;
  margin: 10px;

  @media screen and (max-width: 576px) {
    margin-top: 0px;
    margin-bottom: 10%;
  }
`;

export const TableItemsList = styled.div`
  @media screen and (max-width: 576px) {
    margin-right: 10px;
  }
`;
export const ServiceItemDesc = styled.p`
margin-bottom: 20px;
font-size: 23px;
color: #ffffff;
magin:0px;
width:80%;
text-align: justify;
padding -left:6%;

@media screen and (max-width: 576px) {
    

 margin-left: 3%;
  text-align: left;
  width:90%;
  font-size:14px;
 
  }


`;
export const Careop = styled.p`
  padding-inline :50px
  padding: 15px 5px 5px 10px;
  font-size: 15px;
  font -color: blue;
  color: rgba(43, 69, 155, 1);
  padding-bottom:10px;
  font-size: 18px;

  @media screen and (max-width: 576px) {
    font-size: 16px;
    width:160px;
   
  
    }

`;
export const Iph = styled.p`
  position: absolute
 
  font-size: 15px;
  color: #ffffff;

  @media screen and (max-width: 576px) {
    font-size: 12px;
    width:160px;
    
  
    }
`;

export const CareerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 150px 20px 30px;
`;
export const ImageCon = styled.img`
  width: 20%;

  display: flex;
  flex-direction: column;
  padding: 15px 5px 5px 10px;

  @media screen and (max-width: 576px) {
    width: 45%;
    padding: 0px;
    margin-right: 10px;
  }
`;
export const ServiceItemImg = styled.img`
  width: 100%;
  margin: 0px;
`;

export const ServiceItemDetails = styled.div`
  margin-left: 8.3%;
  @media screen and (max-width: 576px) {
    margin-bottom: 30px;
    margin-left: 0px;
  }
`;
export const CareeInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 150px 20px 30px;
`;

export const DropdownContent = styled.button`
  display: block;
  margin-top: 10px;
  min-width: 160px;
  color: white;

  @media screen and (max-width: 576px) {
  }
`;
export const ApplyButton = styled.button`
  padding: 8px 30px 8px 30px;
  border-radius: 20px;
  color: white;
  background-color: rgba(67, 90, 167, 1);
  border: 0px;
  outline: none;
  font-size: 15px;
  margin-top: 68px;

  margin-left: 70px;

  @media screen and (max-width: 576px) {
    margin: 0px;
    margin-top: 115px;
    margin-left: -260px;

    text-align: center;
    padding: 3px 25px 3px 20px;
    font-size: 13px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  magin: 0px;
  padding: 0px;
`;
