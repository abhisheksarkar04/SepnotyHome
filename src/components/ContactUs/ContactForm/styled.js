import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  border-radius: 30px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.25);
  width: 65%;
  margin: 20px 5% 10px 0px;
  @media screen and (max-width: 576px) {
    margin: 0px 0px 0px 0px;
    padding: 0px 6px 0px 6px;
    width: 100%;
  }
`;

export const ContactQueryContainer = styled.div`
  padding: 20px 15px 0px 15px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(250, 250, 250, 1);
  width: 72%;
  @media screen and (max-width: 576px) {
    width: 100%;
    border-radius: 10px;
    margin: 10px 0px 10px 0px;
    padding: 20px 0px 20px 15px;
  }
`;

export const ContactHeading = styled.h1`
  font-size: 16px;
  color: rgba(61, 61, 61, 1);

  margin: 10px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    padding-right: 0px;
  }
`;

export const ContactDescription = styled.p`
  font-size: 13px;
  color: #4e4e4e;
  margin: 10px;
  width: 80%;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ContactTextarea = styled.textarea`
  background-color: rgba(217, 217, 217, 1);
  border-radius: 12px;
  border: 1px solid #e5e6eb;
  padding: 10px;
  resize: none;
  outline: none;
  font-size: 12px;
  margin-bottom: 5px;
  color: black;
  &::placeholder {
    color: #8c8c8c;
    font-size: 13px;
  }
  @media screen and (max-width: 576px) {
    width: 80%;
    height: 90px;
  }
`;

export const ContactDragAndDrop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;

  .icon {
    margin-right: 5px;
    color: black;
  }
`;

export const DragHead = styled.p`
  color: #8c8c8c;
  font-size: 13px;
`;

export const ContactAnchorEle = styled.span`
  color: #0285ff;
`;

export const ContactInputContainer = styled.div`
  margin-bottom: 10px;
`;

export const ContactInputList = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin: 0px;
  list-style-type: none;
`;

export const SepnotyContact = styled.input`
  accent-color: #5368a3;
  margin-top: 4px;
  cursor: pointer;
`;

export const RequestSepnoty = styled.input`
  accent-color: #5368a3;
  margin-top: 4px;
  cursor: pointer;
`;

export const ContactButtonCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ContactButton = styled.button`
  background-color: #254989;
  border-width: 0px;
  border-radius: 50px;
  color: #ffffff;
  text-align: center;
  padding: 10px 60px 10px 60px;
  font-size: 14px;
`;

export const ContactUsHeading = styled.h1`
  margin-bottom: 30px;
  font-size: 20px;
  color: #121415;
`;

export const ContactContactssContainer = styled.div`
  background-image: linear-gradient(#244887, #69aca5, #b7bac0);
  padding: 30px 10px 0px 30px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 28%;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const ContactContactUsItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  color: #777777;
  @media screen and (max-width: 555px) {
  }
`;

/* export const ContactIcon {
  font-size: 20px;
  margin-right: 20px;
  color: #011f4b;
}
 */

export const ContactImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  margin-top: 30%;
`;

export const ContactImage = styled.img`
  height: 250px;
  width: 200px;
  align-self: flex-end;
  margin-right: 20px;
`;

export const ContactUsInput = styled.input`
  outline: none;
  border: 1px solid #e5e6eb;
  padding: 10px;
  border-radius: 15px;
  width: 248px;
  margin-right: 20px;

  background-color: rgba(217, 217, 217, 1);
  color: black;
  &::placeholder {
    color: #8c8c8c;
    font-size: 13px;
  }
  @media screen and (max-width: 576px) {
    width: 160px;
    margin-right: 10px;
  }
`;

export const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ErrorMsg = styled.p`
  font-size: 12px;
  color: red;
  padding-left: 10px;
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #8196db;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items-center;
  height: 15%;
`;

export const PopupMessage = styled.p`
  font-size: 16px;
  color: #333;
  color: #ffffff;

  margin-top: 20px;
`;

export const CloseButton = styled.button`
  color: white;
  border: none;
  padding: 8px 0px;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
  color: #ffffff;
`;

export const LabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #4e4e4e;
`;

export const LabelCon = styled.div`
  margin-left: 12px;
`;
export const QueryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
  margin: 0px;
  padding: 50px 0px;
  background-color: rgba(12, 17, 31, 1);
  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 10px;
  }
`;
export const Image = styled.img`
  width: 90%;
  @media screen and (max-width: 576px) {
    height: 200px;
    width: 60%;
  }
`;
