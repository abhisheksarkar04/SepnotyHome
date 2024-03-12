
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

const Developerforhire = () => {
    const options = [
        { value: 'option1', label: 'Table of content' },
        { value: 'option2', label: 'Java ' },
        { value: 'option3', label: '.Net' },
        { value: 'option4', label: 'Python' },
        { value: 'option5', label: 'PHP' },
        { value: 'option6', label: 'C++' },
        { value: 'option7', label: 'Node.js' },
        { value: 'option8', label: 'Java script' },
        { value: 'option9', label: 'React Native' },
        { value: 'option10', label: 'Cloud' },
        { value: 'option11', label: 'Artificial intelligence' },
        { value: 'option12', label: 'Machine learning' },



    ];
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleSelectChange = (event) => {
        setSelectedOption("event.target.value");
    };
    const selectStyle = {

        backgroundColor: ' rgba(43, 69, 155, 1)',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        width: '200px',
        

    };
    const optionStyle ={
        backgroundColor:'rgba(129, 150, 219, 1)',
        color:'black',
        borderRadius: '30px',
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
                        <LeftHeading>
                            Career Oppurunities
                        </LeftHeading><br></br>
                        <LeftTitle>"Your big opportunity may be right where you are now." </LeftTitle>
                        {/* <LeftButton>Apply</LeftButton> */}
                    </LeftTextContainer>
                    {/* <RightImg src={ImageRight} alt="not found"></RightImg> */}
                </BlueContainer>
                <ServiceItemCon>
                    <div>
                        <ListHeading>Career Opportunities</ListHeading><br></br>
                        <ServiceItemDetails>
                            <ServiceItemDesc>
                                Career opportunities refer to the various avenues and prospects for professional advancement and development available to individuals within their chosen field or industry. These opportunities encompass job openings, promotions, skill development programs, networking events, educational pursuits, and other avenues for personal and professional growth.
                            </ServiceItemDesc>
                            <DropDown>
                                <Dropdowncontent>
                                    {/* <label htmlFor="dropdown">Select an option:</label> */}
                                    <select style={selectStyle} id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                                        {options.map((option) => (
                                            <option style={optionStyle} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </Dropdowncontent>
                            </DropDown>

                            <div style={{ display: 'flex', width: '100%', }}>
                                {[{ image: img1, name: 'Java Script', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
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
                                {[{ image: img2, name: 'Node.Js', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
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
                                {[{ image: imga3, name: 'PHP', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
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
                                {[{ image: imga4, name: 'C++', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
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
                                {[{ image: imga5, name: 'React Native', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
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
                                {[{ image: imga6, name: 'Python', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
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
                                {[{ image: imga7, name: '.Net', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
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
                                {[{ image: imga8, name: 'Java', experience: '0-2 years', CTC: 'Up to 4 LPA' }].map(listing =>
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

export default Developerforhire;
