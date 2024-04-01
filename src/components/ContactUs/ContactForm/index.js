import { useState, useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

import ContactSection from "../ContactSection";
import "./style.css";
import call from "../Images/call.svg";
import whatsapp from "../Images/whatsapp.svg";
import livechat from "../Images/livechat.svg";
import email from "../Images/email.svg";
import GIT from "../Images/get-in-touch.svg";

import {
  ContactContainer,
  ContactQueryContainer,
  ContactHeading,
  ContactDescription,
  ContactTextarea,
  ContactDragAndDrop,
  ContactAnchorEle,
  ContactInputContainer,
  ContactInputList,
  SepnotyContact,
  RequestSepnoty,
  ContactButton,
  ContactUsHeading,
  ContactContactssContainer,
  ContactContactUsItems,
  ContactImageContainer,
  ContactImage,
  ContactUsInput,
  ContactButtonCon,
  DragHead,
  InputCon,
  ErrorMsg,
  LabelDiv,
  Label,
  LabelCon,
} from "./styled";

const contactListItem = [
  {
    id: 1,
    contactIcon: call,
    contactType: "Call us",
  },
  {
    id: 2,
    contactIcon: livechat,
    contactType: "Live Chat",
  },
  {
    id: 3,
    contactIcon: whatsapp,
    contactType: "WhatsApp",
  },
  {
    id: 4,
    contactIcon: email,
    contactType: "Email us",
  },
];

const ContactForm = (props) => {
  const [upload, setUpload] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState({
    contact: false,
    requestInfo: false,
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyError, setCompanyError] = useState("");

  const { heading } = props;
  // const [sepnotyContactChecked, setSepnotyContactChecked] = useState(false); // not used after intergration
  // const [requestSepnotyChecked, setRequestSepnotyChecked] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);
  const fileInputRef = useRef(null);

  const browseHandler = () => {
    fileInputRef.current.click();
  };
  const fileHandler = (e) => {
    const allowedTypes = ["application/pdf"];
    if (e.target.files[0]?.type.includes(allowedTypes)) {
      const selectedFile = e.target.files[0];
      setUpload(selectedFile);
      alert("File uploaded successfully");
    } else {
      alert("Please upload only a PDF file.");
    }
  };

  /*  const closeUploadSuccessPopup = () => {
    setShowUploadSuccess(false);
  }; */

  const changeHandler = (type, e) => {
    if (type === "agreement" && e.target.id === "contact") {
      setAgreement({ ...agreement, contact: !agreement.contact });
    } else if (type === "agreement" && e.target.id === "requestInfo") {
      setAgreement({ ...agreement, requestInfo: !agreement.requestInfo });
    } else {
      switch (type) {
        case "message":
          setMessage(e.target.value);
          break;
        case "email":
          setEmail(e.target.value);
          if (!e.target.value.trim()) {
            setEmailError("*Please enter your email");
          } else {
            setEmailError("");
          }
          break;
        case "username":
          setUsername(e.target.value);

          if (!e.target.value.trim()) {
            setNameError("*Please enter your full name");
          } else {
            setNameError("");
          }
          break;
        case "companyName":
          setCompanyName(e.target.value);
          if (!e.target.value.trim()) {
            setCompanyError("*Please enter your company name");
          } else {
            setCompanyError("");
          }
          break;
        case "phoneNumber":
          setPhoneNumber(e.target.value);
          if (!e.target.value.trim()) {
            setPhoneError("*Please enter your phone number");
          } else {
            setPhoneError("");
          }
          break;
        default:
          console.log("Invalid change Handler");
      }
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();

    let errors = {};

    if (!username.trim()) {
      errors.username = "*Please enter your full name";
    }
    if (!email.trim()) {
      errors.email = "*Please enter your email";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "*Please enter a valid email address";
    }
    if (!companyName.trim()) {
      errors.companyName = "*Please enter your company name";
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "*Please enter your phone number";
    }

    if (Object.keys(errors).length > 0) {
      // Display all error messages
      setNameError(errors.username || "");
      setEmailError(errors.email || "");
      setCompanyError(errors.companyName || "");
      setPhoneError(errors.phoneNumber || "");

      return;
    }

    const data = new FormData();
    data.set("message", message);
    data.set("username", username);
    data.set("email", email);
    data.set("companyName", companyName);
    data.set("phoneNumber", phoneNumber);
    data.set("agreement", JSON.stringify(agreement));
    data.set("files", upload);

    const response = await fetch(
      "http://localhost:8800/api/contact/contactus",
      {
        method: "POST",
        body: data,
        headers: {
          "Access-Control-Allow-Headers": "*",
        },
      }
    );

    // Common function for reseting the form fields after performing action
    const resetForm = () => {
      setMessage("");
      setUsername("");
      setCompanyName("");
      setEmail("");
      setPhoneNumber(0);
      setAgreement({ contact: false, requestInfo: false });
    };

    console.log(response);
    if (response.status === 400) {
      resetForm();
      alert("Please fill all details");
    } else if (response.ok) {
      resetForm();
      alert("Details have been sent");
    } else {
      resetForm();
      alert(
        "There is an error in sending data. Please try again after sometime"
      );
    }
  };

  return (
    <ContactContainer>
      <ContactQueryContainer>
        <form onSubmit={formHandler}>
          <div>
            <ContactHeading>{heading}</ContactHeading>
            <ContactDescription>
              Our team is ready to provide client references, estimate your
              project, or answer any other question related to your IT
              intiative.
            </ContactDescription>
            <ContactTextarea
              rows="9"
              cols="75"
              placeholder="How can we help you?"
              id="message"
              value={message}
              onChange={(e) => changeHandler("message", e)}
            ></ContactTextarea>
          </div>
          <ContactDragAndDrop>
            <FiUploadCloud className="icon" onClick={browseHandler} />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => fileHandler(e)}
            />
            <DragHead>
              Drag and drop or{" "}
              <ContactAnchorEle onClick={browseHandler}>
                browse
              </ContactAnchorEle>{" "}
              to upload your file(s)?
            </DragHead>
          </ContactDragAndDrop>
          <ContactInputContainer>
            <ContactInputList id="userForm">
              <InputCon>
                <ContactUsInput
                  placeholder="Full Name*"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => changeHandler("username", e)}
                />
                {nameError && <ErrorMsg>{nameError}</ErrorMsg>}
              </InputCon>
              <InputCon>
                <ContactUsInput
                  placeholder="Work email* "
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => changeHandler("email", e)}
                />
                {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
              </InputCon>
              <InputCon>
                <ContactUsInput
                  placeholder="Company*"
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => changeHandler("companyName", e)}
                />
                {companyError && <ErrorMsg>{companyError}</ErrorMsg>}
              </InputCon>
              <InputCon>
                <ContactUsInput
                  placeholder="Phone*                      "
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => changeHandler("phoneNumber", e)}
                />
                {phoneError && <ErrorMsg>{phoneError}</ErrorMsg>}
              </InputCon>
              <LabelDiv>
                <SepnotyContact
                  type="checkbox"
                  id="contact"
                  name="contact"
                  checked={agreement.contact}
                  onChange={(e) => changeHandler("agreement", e)}
                />
                <LabelCon>
                  <Label htmlFor="sepnotyContact">
                    I agree to have Sepnoty contact me via email, phone,
                    messengers
                  </Label>
                </LabelCon>
              </LabelDiv>
              <LabelDiv>
                <RequestSepnoty
                  type="Checkbox"
                  id="requestInfo"
                  name="requestInfo"
                  checked={agreement.requestInfo}
                  onChange={(e) => changeHandler("agreement", e)}
                />
                <LabelCon>
                  <Label htmlFor="requestSepnoty">
                    I agree to have Sepnoty provide my request Information to
                    Sepnoty affiliated development center
                  </Label>
                </LabelCon>
              </LabelDiv>
            </ContactInputList>
            <ContactButtonCon>
              <ContactButton
                type="submit"
                className={
                  !Object.values(agreement).every((elem) => elem === true)
                    ? "disable"
                    : null
                }
                disabled={
                  !Object.values(agreement).every((elem) => elem === true)
                }
              >
                Send
              </ContactButton>
            </ContactButtonCon>
          </ContactInputContainer>
        </form>
      </ContactQueryContainer>
      <ContactContactssContainer>
        <ContactUsHeading>Get in touch instantly</ContactUsHeading>
        <ContactContactUsItems>
          {contactListItem.map((eachItem) => (
            <ContactSection key={eachItem.id} contactDetails={eachItem} />
          ))}
        </ContactContactUsItems>
        <ContactImageContainer>
          <ContactImage src={GIT} alt="contactUs" />
        </ContactImageContainer>
      </ContactContactssContainer>
      {/* {showUploadSuccess && (
        <Popup>
          <CloseButton onClick={closeUploadSuccessPopup}>&#x2716;</CloseButton>
          <PopupMessage>File uploaded successfully!</PopupMessage>
        </Popup>
      )} */}
    </ContactContainer>
  );
};

export default ContactForm;
