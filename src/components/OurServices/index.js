import {
  ImgContainer,
  Image,
  Img,
  Container,
  ContentContainer,
  Heading,
  Description,
  CuateImage,
  CuateImage11,
  HeadImgCon,
  Header,
  Nodejs,
  Python,
  Php
} from "./styled";

import django from "./Images/django-logo.svg";
import node from "./Images/Node.js_logo_2015 2.png";
import laravel from "./Images/laravel-logo.svg";
import python from "./Images/Python-Logo 2.svg";
import Symfony from "./Images/Symfony-logo.svg";
import net from "./Images/net-logo.svg";
import php from "./Images/PhP.svg";
// import cuate from "./Images/cuate.svg";
// import pattern from "./Images/pattern.svg";
/* import cuate from "./Images/cuate.svg"; */

import idea from "./Images/idea.svg";
import cuate from "./Images/cuate11.svg";
const Idea = () => (
  <>
    <Container>
      <ImgContainer>
        <Nodejs src={node} alt="Node.js" />
        <Python src={python} alt="Python" />
        <Python src={django} alt="django" />
        <Python src={net} alt=".net" />
        <Python src={laravel} alt="laravel" />
        <Php src={php} alt="Php" />
        <Img src={Symfony} alt="Symfony" />
      </ImgContainer>
      <ContentContainer>
        <div>
          <HeadImgCon>
            <Header>From Idea-To-Development</Header>
            <CuateImage11 src={cuate} alt="Idea" />
          </HeadImgCon>
          <Heading>From Idea-To-Development</Heading>
          <Description>
            we are a development agency focused on delivering top-tier solution
            for web and mobile platforms using both using established and
            cutting-edge technologies.Our team of experts possesses specialized
            knowledge and experience in digital marketing,SEO, Software
            development, and Web design enabling us to consistently deliver high
            quality works to our clients.
          </Description>
        </div>
        <CuateImage src={idea} alt="idea" />
      </ContentContainer>
    </Container>
  </>
);

export default Idea;
