import React, { useState } from "react";
import {
  CardContainer,
  CardHeader,
  CardNumber,
  CardTitle,
  CardParagraph,
  Button,
  PopupContainer,
  Close,
  CloseImg,
  PopupContent,
  PopupImage,
  Header,
  PopupTitle,
  PopupHeading,
  PopupDesc,
} from "./styled";

import close from "./images/close.svg";
import program from "./images/Programming-image.svg";
const CardItem = ({ cardsList }) => {
  const { title, description, id, popupDesc,head } = cardsList;
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <CardContainer>
        <CardHeader>
          <CardNumber>0{id}</CardNumber>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardParagraph>{description}</CardParagraph>
        <Button onClick={togglePopup}>Learn More</Button>
      </CardContainer>
      {isPopupOpen && (
        <PopupContainer>
          <Close onClick={togglePopup}>
            <CloseImg src={close} alt="close" />
          </Close>
          <PopupContent>
            <PopupImage src={program} alt="programming" />
            <Header>
              <PopupTitle>{title}</PopupTitle>
              <PopupHeading>
               {head}
              </PopupHeading>
            </Header>
          </PopupContent>
          <PopupDesc>
           {popupDesc}
          </PopupDesc>
        </PopupContainer>
      )}
    </>
  );
};

export default CardItem;
