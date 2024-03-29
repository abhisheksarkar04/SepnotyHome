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
import img3 from "../Images/image3.svg";
import img4 from "../Images/image4.svg";
import img5 from "../Images/image5.svg";
import img6 from "../Images/image6.svg";
import img7 from "../Images/image7.svg";
import img8 from "../Images/image8.svg";

import FooterSection from "../../Footer/FooterSection";
import { useState } from "react";
import { Link } from "react-router-dom";

const JobList = [
  {
    image: img1,
    name: "UI Designer ",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: img2,
    name: "UX Designer",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: img3,
    name: "Video Editing",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: img4,
    name: "Graphic Designer  ",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: img5,
    name: "Digital Marketing",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: img6,
    name: "Video Editor",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: img7,
    name: "UI/UX Designer.",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
  {
    image: img8,
    name: "Graphic Designer ",
    experience: "0-2 years",
    CTC: "Up to 4 LPA",
  },
];

const Designersforhire = () => {
  const options = [
    { value: 'option1', label: 'Table of content' }, <br></br>,
    { value: 'option2', label: 'UI/UX Desiginer' }, <br></br>,
    { value: 'option3', label: 'Digital Marketing' }, <br></br>,
    { value: 'option4', label: 'Graphic Designer' }, <br></br>,
    { value: 'option5', label: 'video edting' }, <br></br>,
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
          Career Oppurunities &gt; <Span>Designer for hire</Span>
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
                      <Link to="/CareerOppurtunities/ApplyForm">
                        <ApplyButton >Apply</ApplyButton><br></br>
                        <br></br>
                      </Link>
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

export default Designersforhire;
