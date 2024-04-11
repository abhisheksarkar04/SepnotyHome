import uiux from "../assets/uiux.png";
import web from "../assets/web.png";
import cloud from "../assets/cloud.png";
import app from "../assets/app.png";
import ServiceCard from "./ServiceCard";
import { ServiceCards } from "./styledComponents";

const serviceLists = [
  {
    uniqueNo: 1,
    imageUrl: uiux,
    imageTitle: "InnoSoft Solutions",
    description: "Tailored software innovations for your success.",
    popupText:
      "Our customized software development services are meticulously tailored to meet the distinct requirements of your business. With a keen focus on scalability and flexibility, we craft solutions that seamlessly grow alongside your organization, adapting to its evolving needs. Employing cutting-edge technologies and industry best practices, we guarantee optimal performance and efficiency in every aspect of your software. Our collaborative approach means involving you throughout the development journey, ensuring alignment with your vision and goals at every stage. Beyond deployment, we provide continuous support and updates to keep your software solution current and adaptable to the ever-changing demands of the market, thus empowering your business to thrive in today's dynamic landscape.",
  },
  {
    uniqueNo: 2,
    imageUrl: web,
    imageTitle: "Dynamic Web Dev",
    description:
      "Creating web design that drives growth and bolster user interaction",
    popupText:
      "Our team specializes in crafting innovative website designs that not only capture the essence of your brand but also resonate deeply with your target audience. With a keen focus on user experience and functionality, we ensure intuitive navigation and seamless interaction throughout the site. By integrating cutting-edge web technologies, we enhance performance, security, and accessibility, providing your users with a dynamic and engaging online experience. Our responsive design approach guarantees optimal viewing across all devices and platforms, ensuring your message reaches your audience wherever they may be. Additionally, we offer comprehensive web development services, including e-commerce solutions, content management systems, and more, to support your business objectives and elevate your online presence to new heights.",
  },
  {
    uniqueNo: 3,
    imageUrl: cloud,
    imageTitle: "Strategic Partnerships",
    description: "Collaborate for growth, redefine success.",
    popupText:
      "We specialize in fostering strategic alliances and partnerships to harness complementary strengths and resources for mutual benefit. Through collaborative efforts, we jointly develop tailored strategies aimed at achieving shared business objectives and fostering sustainable growth. Our approach facilitates knowledge exchange and innovation through collaborative initiatives and projects, creating a dynamic environment for idea generation and implementation. By providing access to a network of industry experts and thought leaders, we offer valuable insights and guidance to support our partners' success. We prioritize continuous evaluation and optimization of partnership initiatives, ensuring maximum value and impact for all parties involved.",
  },
  {
    uniqueNo: 4,
    imageUrl: app,
    imageTitle: "Transformative Digital Solutions",
    description: "Innovation reshaping industries.",
    popupText:
      "We excel in harnessing the transformative potential of digital technologies like artificial intelligence, blockchain, and the Internet of Things. Our focus lies in developing innovative solutions that not only disrupt traditional business models but also redefine industry standards, setting new benchmarks for excellence. We seamlessly integrate digital solutions across various business functions, from operations and supply chain management to customer engagement and marketing, optimizing efficiency and effectiveness. Emphasizing scalability and agility, we ensure our solutions can adapt swiftly to changing market dynamics and emerging opportunities, empowering our partners to stay ahead of the curve. Furthermore, we are committed to creating a positive social and environmental impact through responsible digital innovation and sustainable practices, aligning our efforts with the broader goals of societal progress and environmental stewardship.",
  },
];

const Bottom = () => {
  return (
    <ServiceCards>
      {serviceLists.map((eachItem) => (
        <ServiceCard key={eachItem.uniqueNo} details={eachItem} />
      ))}
    </ServiceCards>
  );
};

export default Bottom;
