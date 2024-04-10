import Styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const Main = Styled.div`
position:on;
background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
`;
const StyledSwiper = Styled(Swiper)`
    @media screen and (max-width: 576px) {
        .swiper-slide {
            width: calc(100% / 2); // Set width for mobile view
        }
    }
`;

export const MainContainer = Styled.div`
display: flex;
flex-direction:column;
padding: 10px;
height:350px;
margin-top:30px;
width:450px;
@media screen and (max-width:576px){
    width:280px;
    height:200px;
    margin-left:-10px;
  }
`;
export const CardContainer = Styled.div`
background: #121415;
border-radius:15px;
padding: 20px;
border:0px;
height: 400px;
width:400px;
box-shadow: 0px 4px 4px 0px #00000040;
margin-bottom:10px;
@media screen and (max-width:576px){
    height: 250px;
    width: 4000px;
  }
`;
export const Stars = Styled.a`
font-size:10px;
margin-bottom:5px;
`;
export const Para1 = Styled.p`
color:#B7B6BD;

font-size: 18px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0px;
text-align: left;
margin-top:10px;





@media screen and (max-width:576px){
    font-size: 8px;
  }
`;
export const Para2 = Styled.p`
color:#B7B6BD;

font-size: 18px;
font-weight: 400;
line-height: 38px;
letter-spacing: 0px;
text-align: left;
margin-top:10px;



@media screen and (max-width:576px){
    font-size: 8px;
    line-height: 18px;
  }
`;
export const ProfileCon = Styled.div`
display: flex;
flex-direction:row;
gap:20px;
margin-top:20px;
`;
export const Image = Styled.img`
@media screen and (max-width:576px){
    height: 20px;
    width:20px;
  }

`;
export const Details = Styled.div`
display: flex;
flex-direction:column;

`;
export const Name = Styled.a`
color:#2B459B;
font-size:15px;





@media screen and (max-width:576px){

    font-size:10px;
  }
`;
export const Role = Styled.a`
color:#2B459B;
font-size:12px;




@media screen and (max-width:576px){

    font-size:8px;
  }
`;
