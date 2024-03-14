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
  LeftTextContainer,
  LeftHeading,
  BlueContainer,
  LeftTitle,
  ApplyButton,
  ListInnerContainer,
  ListDataContainer,



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


const Designersforhire = () => {
  const options = [
    { value: 'option1', label: 'Table of content' },
    { value: 'option2', label: 'UI/UX Desiginer' },
    { value: 'option3', label: 'Digital Marketing' },
    { value: 'option4', label: 'Graphic Designer' },
    { value: 'option5', label: 'Video Edting' },


  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const selectStyle = {

    backgroundColor: ' rgba(43, 69, 155, 1)',
    color: 'white',
    padding: '8px',
    borderRadius: '10px',
    width: '200px',

  };
  const optionStyle = {
    backgroundColor: 'rgba(129, 150, 219, 1)',
    color: 'black',
  };


  return (
    <>
    
      <DigitalContainer>
        <Header>
          Career Oppurunities &gt; <Span>Desiginer for hire</Span>
        </Header>
        <Service>Career Oppurunities</Service>
        <BlueContainer>
          <LeftTextContainer>
            <LeftHeading>
              Career Oppurunities
            </LeftHeading><br></br>
            <LeftTitle>"Your big opportunity may be right where you are now." </LeftTitle>
          </LeftTextContainer>
        </BlueContainer>
        <ServiceItemCon>
          <div>
            <ListHeading>Career Opportunities</ListHeading><br></br>
            <ServiceItemDetails>
              <ServiceItemDesc>
                Career opportunities refer to the various avenues and prospects for professional advancement and development available to individuals within their chosen field or industry. These opportunities encompass job openings, promotions, skill development programs, networking events, educational pursuits, and other avenues for personal and professional growth.
              </ServiceItemDesc>
              <DropDown>
                <div>
                  {/* <label htmlFor="dropdown">Select an option:</label> */}
                  <select style={selectStyle} id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                    {options.map((option) => (
                      <option style={optionStyle} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </DropDown>
              <div style={{ display: 'flex', width: '100%' }}>
                {[{ image: img1, name: 'UI Designer', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
                (<ListInnerContainer>
                  <ImageCon src={listing.image} alt="dm" />
                  <ListDataContainer>
                    <Careop>{listing.name}</Careop>
                    <Iph>Experience : {listing.experience}<br></br>
                      CTC : {listing.CTC}<br></br>
                      Onsite</Iph>
                  </ListDataContainer>
                  <ApplyButton>Apply</ApplyButton>
                </ListInnerContainer>))}
                {/* <p>button</p> */}
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                {[{ image: img2, name: 'UX Designer', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
                (<ListInnerContainer>
                  <ImageCon src={listing.image} alt="dm" />
                  <ListDataContainer>
                    <Careop>{listing.name}</Careop>
                    <Iph>Experience : {listing.experience}<br></br>
                      CTC : {listing.CTC}<br></br>
                      Onsite</Iph>
                  </ListDataContainer>
                  <ApplyButton>Apply</ApplyButton>
                </ListInnerContainer>))}
                {/* <p>button</p> */}
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                {[{ image: img3, name: 'Video Editing', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
                (<ListInnerContainer>
                  <ImageCon src={listing.image} alt="dm" />
                  <ListDataContainer>
                    <Careop>{listing.name}</Careop>
                    <Iph>Experience : {listing.experience}<br></br>
                      CTC : {listing.CTC}<br></br>
                      Onsite</Iph>
                  </ListDataContainer>
                  <ApplyButton>Apply</ApplyButton>
                </ListInnerContainer>))}
                {/* <p>button</p> */}
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                {[{ image: img4, name: 'Graphic Designer ', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
                (<ListInnerContainer>
                  <ImageCon src={listing.image} alt="dm" />
                  <ListDataContainer>
                    <Careop>{listing.name}</Careop>
                    <Iph>Experience : {listing.experience}<br></br>
                      CTC : {listing.CTC}<br></br>
                      Onsite</Iph>
                  </ListDataContainer>
                  <ApplyButton>Apply</ApplyButton>
                </ListInnerContainer>))}
                {/* <p>button</p> */}
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                {[{ image: img5, name: 'Digital Marketing', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
                (<ListInnerContainer>
                  <ImageCon src={listing.image} alt="dm" />
                  <ListDataContainer>
                    <Careop>{listing.name}</Careop>
                    <Iph>Experience : {listing.experience}<br></br>
                      CTC : {listing.CTC}<br></br>
                      Onsite</Iph>
                  </ListDataContainer>
                  <ApplyButton>Apply</ApplyButton>
                </ListInnerContainer>))}
                {/* <p>button</p> */}
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                {[{ image: img6, name: 'Video Editor', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
                (<ListInnerContainer>
                  <ImageCon src={listing.image} alt="dm" />
                  <ListDataContainer>
                    <Careop>{listing.name}</Careop>
                    <Iph>Experience : {listing.experience}<br></br>
                      CTC : {listing.CTC}<br></br>
                      Onsite</Iph>
                  </ListDataContainer>
                  <ApplyButton>Apply</ApplyButton>
                </ListInnerContainer>))}
                {/* <p>button</p> */}
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                {[{ image: img7, name: 'UI/UX Designer', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
                (<ListInnerContainer>
                  <ImageCon src={listing.image} alt="dm" />
                  <ListDataContainer>
                    <Careop>{listing.name}</Careop>
                    <Iph>Experience : {listing.experience}<br></br>
                      CTC : {listing.CTC}<br></br>
                      Onsite</Iph>
                  </ListDataContainer>
                  <ApplyButton>Apply</ApplyButton>
                </ListInnerContainer>))}
                {/* <p>button</p> */}
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                {[{ image: img8, name: 'Graphic Designer ', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
                (<ListInnerContainer>
                  <ImageCon src={listing.image} alt="dm" />
                  <ListDataContainer>
                    <Careop>{listing.name}</Careop>
                    <Iph>Experience : {listing.experience}<br></br>
                      CTC : {listing.CTC}<br></br>
                      Onsite</Iph>
                  </ListDataContainer>
                  <ApplyButton>Apply</ApplyButton>
                </ListInnerContainer>))}
                {/* <p>button</p> */}
              </div>
            </ServiceItemDetails>
          </div>
        </ServiceItemCon>
      </DigitalContainer>
      <FooterSection />
    </>
  );
};

export default Designersforhire;
