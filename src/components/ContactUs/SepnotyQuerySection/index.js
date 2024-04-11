import { QueryContainer } from "./styled";

import ContactForm from "../ContactForm";
import Meeting from "../Meeting";
const Contact = () => {
  const heading =
    "Need Assistance or Have a Query? Let Our Team Illuminate Your Path!";
  return (
    <QueryContainer>
      <Meeting />
      <ContactForm heading={heading} />
    </QueryContainer>
  );
};

export default Contact;
