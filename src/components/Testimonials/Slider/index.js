import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Buttons from "../Buttons/index";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function CommentsSection() {
  const [activeindex, setActiveindex] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); // Call once to set initial value

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveindex(swiper.activeIndex);
  };

  const comments = [
    {
      stars: "⭐⭐⭐⭐⭐",
      para1: "Modern look & trending design",
      para2:
        "Outstanding service! Sepnoty Technologies truly exceeded my expectations.Their attention to detail and commitment to delivering top-notch solutions is commendable.Highly recommend!",
      name: "Rajesh Sharma",
      role: "Marketing Manager",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para1: "Design Quality & performance",
      para2:
        "Sepnoty Innovate R&D provided invaluable insights that helped us innovate and stay ahead in our industry. Their expertise and dedication to pushing boundaries are truly impressive.",
      name: "Priya Patel",
      role: "Research Scientist",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para1: "Layout and organized layers",
      para2:
        "Sepnoty Nexus Hub connected us with the right partners and resources to accelerate our growth. Their collaborative approach and network are invaluable assets for any business.",
      name: "Ankit Gupta",
      role: " Business Development Executive",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para1: "Modern look & trending design",
      para2:
        "Sepnoty Strategic Solutions & Consultancy offered strategic guidance that transformed ourbusiness. Their tailored strategies and actionable advice have been instrumental in our success",
      name: "Neha Singh",
      role: " CEO",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para1: "Modern look & trending design",
      para2:
        "Sepnoty Collaborative Innovation Center provided a space for collaboration and creativity that led to groundbreaking solutions. It's a hub of innovation and inspiration.",
      name: "Vivek Kumar",
      role: "Product Manager",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para1: "Modern look & trending design",
      para2:
        "Sepnoty Software Development Services delivered high-quality solutions that perfectly metour needs. Their expertise and professionalism are unmatched.",
      name: "Pooja Patel",
      role: "Software Engineer",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para1: "Modern look & trending design",
      para2:
        "Sepnoty Web Application Solutions created a seamless and user-friendly website for our business. Their attention to detail and dedication to customer satisfaction are commendable.",
      name: "Deepak Sharma",
      role: "UX Designer",
      image:
        "https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg",
    },
  ];

  return (
    <>
      <StyledSwiper
        onSlideChange={handleSlideChange}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {comments.map((comment, index) => (
          <SwiperSlide key={index}>
            <MainContainer>
              <CardContainer active={activeindex === index} activeindex={index}>
                <Stars>{comment.stars}</Stars>
                <Para1 active={activeindex === index}>{comment.para1}</Para1>
                <Para2>{comment.para2}</Para2>
                <ProfileCon>
                  <Image src={comment.image} />
                  <Details>
                    <Name>{comment.name}</Name>
                    <Role>{comment.role}</Role>
                  </Details>
                </ProfileCon>
              </CardContainer>
            </MainContainer>
          </SwiperSlide>
        ))}
        <Buttons />
      </StyledSwiper>
    </>
  );
}

const StyledSwiper = Styled(Swiper)`
    @media screen and (max-width: 576px) {
        .swiper-slide {
            width: 100%; // Set width for mobile view
        }
    }
`;

const Main = Styled.div`
position:on;
background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
`;

// const Main = Styled.div`
// position:on;
// background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
// `

// const Main = Styled.div`
// position:on;
// background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
// `

const MainContainer = Styled.div`
display: flex;
flex-direction:column;
padding: 10px;
height:350px;
margin-top:30px;
width:450px;

@media screen and (max-width: 576px) {
  width:170px; /* Adjust width for mobile view */
  height: 250px;
  margin-right:20px;
  margin-left:-20px;
}

`;

/* @media screen and (max-width:576px){
  margin-top: 10px;
    width: 350px;
    height: 250px;
    margin-right:20px;
  }
`;
 */

const CardContainer = Styled.div`
background: #121415;
border-radius:15px;
padding: 20px;
border:0px;
height: 400px;
width:400px;
box-shadow: 0px 4px 4px 0px #00000040;
margin-bottom:10px;
@media screen and (max-width:576px){
    height: 230px;
    width: 180px;
    margin-right:20px;

  }
`;
const Stars = Styled.a`
font-size:10px;
margin-bottom:5px;
`;
const Para1 = Styled.p`
color:${(props) => (props.active ? "#2B459B" : "#343D48")};
font-size: 18px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0px;
text-align: left;
margin-top:10px;
@media screen and (max-width:576px){
    font-size: 12px;
    width:100%;
    margin-top:0px;
    line-height:20px;
  }
`;
const Para2 = Styled.p`
color:${(props) => (props.active ? "#2B459B" : "white")};
font-size: 18px;
font-weight: 400;
line-height: 38px;
letter-spacing: 0px;
text-align: left;
margin-top:10px;
@media screen and (max-width:576px){
    font-size: 10px;
    line-height: 18px;
    width:100%;
    margin-top:3px;
  }
`;
const ProfileCon = Styled.div`
display: flex;
flex-direction:row;
gap:20px;
margin-top:20px;

@media screen and (max-width:576px){
    gap:10px;
    margin-top:10px;
}


`;

const Image = Styled.img`
@media screen and (max-width:576px){
    height: 20px;
    width:20px;
  }

`;
const Details = Styled.div`
display: flex;
flex-direction:column;

`;
const Name = Styled.a`
color:#2B459B;
font-size:15px;

@media screen and (max-width:576px){
    font-size:10px;
  }
`;
const Role = Styled.a`
color:#2B459B;
font-size:12px;
@media screen and (max-width:576px){
    font-size:10px;


  }`;
