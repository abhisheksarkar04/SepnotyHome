import {

  Header,
  Service,
  Span,
  DigitalContainer,
  ListHeading,
  ServiceItemDesc,
  ImageCon,
  ServiceItemDetails,
  ServiceItemCon,
  Careop,
  Iph,
  DropDown,
  Dropdowncontent,
  LeftTextContainer,
  LeftHeading,
  BlueContainer,
  LeftTitle,
  ApplyButton,
  ListDataContainer,
  ListInnerContainer,
  TableItemsList,

  // ContactItem,
  // Container,

} from "./styled";

import img1 from "../Images/image1.svg";
import img2 from "../Images/image2.svg";
import imga3 from "../Images/imga3.svg";
import imga4 from "../Images/imga4.svg";
import imga5 from "../Images/imga5.svg";
import imga6 from "../Images/imga6.svg";
import imga7 from "../Images/imga7.svg";
import imga8 from "../Images/imga8.svg";

import FooterSection from "../../Footer/FooterSection";
import { useState } from "react";


const JobList = [
  {
    image: img1,
    name: "Software Tester ",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: img2,
    name: "Software Developer",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: imga3,
    name: "Cloud Engineer.",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: imga4,
    name: "Digital Marketing Specialist ",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: imga5,
    name: "SEO(Search Engine Optimizer)",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: imga6,
    name: "Video Editor",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: imga7,
    name: "UI/UX Designer.",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: imga8,
    name: "Graphic Designer ",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
];

const Developerforhire = () => {
  const options = [
    { value: "option1", label: "Table of content" },
    <br></br>,
    { value: "option2", label: "Java " },
    <br></br>,
    { value: "option3", label: ".Net" },
    <br></br>,
    { value: "option4", label: "Python" },
    <br></br>,
    { value: "option5", label: "PHP" },
    <br></br>,
    { value: "option6", label: "C++" },
    <br></br>,
    { value: "option7", label: "Node.js" },
    <br></br>,
    { value: "option8", label: "Java script" },
    <br></br>,
    { value: "option9", label: "React Native" },
    <br></br>,
    { value: "option10", label: "Cloud" },
    <br></br>,
    { value: "option11", label: "Artificial intelligence" },
    <br></br>,
    { value: "option12", label: "Machine learning" },
    <br></br>,
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption("event.target.value");
  };
  const selectStyle = {
    backgroundColor: " rgba(43, 69, 155, 1)",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
  };
  const optionStyle = {
    backgroundColor: "rgba(129, 150, 219, 1)",
    color: "black",
    borderRadius: "30px",
    height: "100px",
    width: "10px",
  };

  return (
    <>
      <DigitalContainer>
        <Header>
          Career Oppurunities &gt; <Span>Developer for hire</Span>
        </Header>
        <Service>Career Oppurunities</Service>
        <BlueContainer>
          <LeftTextContainer>
            <LeftHeading>Career Oppurunities</LeftHeading>
            <br></br>
            <LeftTitle>
              "Your big opportunity may be right where you are now." 
            </LeftTitle>
            {/* <LeftButton>Apply</LeftButton> */}
          </LeftTextContainer>
          {/* <RightImg src={ImageRight} alt="not found"></RightImg> */}
        </BlueContainer>
        <ServiceItemCon>
          <div>
            <ListHeading>Career Opportunities</ListHeading>
            <br></br>
            <ServiceItemDetails>
              <ServiceItemDesc>
                Career opportunities refer to the various avenues and prospects
                for professional advancement and development available to
                individuals within their chosen field or industry. These
                opportunities encompass job openings, promotions, skill
                development programs, networking events, educational pursuits,
                and other avenues for personal and professional growth.
              </ServiceItemDesc>

              <TableItemsList>
                <DropDown>
                  <Dropdowncontent>
                    {/* <label htmlFor="dropdown">Select an option:</label> */}
                    <select
                      style={selectStyle}
                      id="dropdown"
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      {options.map((option) => (
                        <option style={optionStyle} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </Dropdowncontent>
                </DropDown>
                <ul>
                  {JobList.map((listing) => (
                    <ListInnerContainer>
                      <ImageCon src={listing.image} alt="dm" />
                      <ListDataContainer>
                        <Careop>{listing.name}</Careop>
                        <Iph>
                          Experience : {listing.experience}
                          <br></br>
                          CTC : {listing.CTC}
                          <br></br>
                          Onsite
                        </Iph>
                      </ListDataContainer>

                      <ApplyButton>Apply</ApplyButton>
                      <br></br>
                      <br></br>
                    </ListInnerContainer>
                  ))}
                </ul>
                {/* <p>button</p> */}
              </TableItemsList>
            </ServiceItemDetails>
          </div>
        </ServiceItemCon>
      </DigitalContainer>
      <FooterSection />
    </>
  );

};

export default Developerforhire;
