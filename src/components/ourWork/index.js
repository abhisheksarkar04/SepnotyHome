import Content from "./Content";
import Card from "./Card";
import service1 from "./Media/service1.png";
import service2 from "./Media/service2.svg";
import service3 from "./Media/service3.svg";
import Service from "./Service";
import "./index.css";
import {
  OurWorkContainer,
  OurWorkHeading,
  OurWorkList,
  // AdServRightDots
} from "./styledComponents";
// import rightpattern from "../AdvancedServices/assets/rightpattern.png";

const serviceDetails = [
  {
    uniqueNo: 1,
    imageUrl: service1,
    description:
      "Our meticulous testing procedures guarantee that your web applications run smoothly, without any bugs or errors disrupting functionality.",
  },
  {
    uniqueNo: 2,
    imageUrl: service3,
    description:
      "With a focus on clean code and intuitive design, we ensure that every interaction with your web application is seamless, intuitive, and enjoyable for users",
  },
  {
    uniqueNo: 3,
    imageUrl: service2,
    description:
      "We optimize code efficiency and adhere to best practices to ensure that your web applications perform at their best, delivering lightning-fast load times and responsive functionality",
  },
];

function OurWork() {
  return (
    <OurWorkContainer>
      <OurWorkHeading>
        Crafting Flawless Code for Secure and Seamless Web Experiences
      </OurWorkHeading>
      <br />
      <OurWorkList>
        {serviceDetails.map((eachItem) => (
          <Service key={eachItem.uniqueNo} details={eachItem} />
        ))}
      </OurWorkList>

      <br />
      <br />

      <Content />
      <br />
      <Card />
    </OurWorkContainer>
  );
}

export default OurWork;
