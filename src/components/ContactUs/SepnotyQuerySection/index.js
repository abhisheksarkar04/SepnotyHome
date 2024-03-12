import {
  BottomCon,
  BottomHeading,
  BottomDesc,
  Button,
  Image,
  QueryContainer,
} from "./styled";

import ContactForm from "../ContactForm";

const Contact = () => {
  const heading = "Have a question to our team or need help with your project?";
  return (
    <QueryContainer>
      <ContactForm heading={heading} />
    </QueryContainer>
  );
};

export default Contact;
